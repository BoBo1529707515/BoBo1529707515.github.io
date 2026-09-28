import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createContext, runInContext } from 'node:vm';
import { sanitizedPayload, durationBucket, analyticsHeadCode } from '../lib/site-analytics.mjs';

test('only fixed event data, generic source labels, and referrer origin leave the site', () => {
  const result = sanitizedPayload({ n: 'Project open', d: 'wrong', u: 'https://private/', r: 'https://mail.example.org/inbox/person?email=private', p: { target: 'mori', seconds: 12.8, email: 'private', language: 'zh' } }, 'https://bobo1529707515.github.io/?email=private&utm_source=email#private');
  assert.equal(result.u, 'https://bobo1529707515.github.io/?utm_source=email');
  assert.equal(result.r, 'https://mail.example.org');
  assert.deepEqual(result.p, { target: 'mori', language: 'zh', seconds: 12 });
  assert.equal(sanitizedPayload({ n: 'unknown' }, 'bad'), null);
  assert.equal(sanitizedPayload({ n: 'pageview' }, 'https://x/?utm_source=professor-name').u, 'https://bobo1529707515.github.io/');
  assert.deepEqual([0, 15, 30, 60, 120, 300].map(durationBucket), ['under 15s', '15–29s', '30–59s', '1–2min', '2–5min', '5min+']);
});

const source = readFileSync(new URL('../lib/site-analytics.mjs', import.meta.url), 'utf8').replace(/^export /gm, '');
function fixture({ hostname = 'bobo1529707515.github.io', dnt = '0', gpc = false, excluded = false, storageThrows = false, search = '?private=secret', headCode = analyticsHeadCode() } = {}) {
  const listeners = new Map(); const intervals = new Map(); const scripts = []; const events = [];
  let now = 0; let focused = true; let sequence = 0;
  const storage = new Map(excluded ? [['plausible_ignore', 'true']] : []);
  const eventMethods = {
    addEventListener(name, fn) { if (!listeners.has(name)) listeners.set(name, new Set()); listeners.get(name).add(fn); },
    removeEventListener(name, fn) { listeners.get(name)?.delete(fn); },
  };
  const document = { ...eventMethods, visibilityState: 'visible', hasFocus: () => focused,
    getElementById: id => scripts.find(s => s.id === id), createElement: () => ({}),
    head: { appendChild: s => scripts.push(s) }, querySelector: () => null, querySelectorAll: () => [],
  };
  const location = { hostname, search, href: `https://${hostname}/${search}` };
  const window = { ...eventMethods, location, setInterval: fn => { intervals.set(++sequence, fn); return sequence; }, clearInterval: id => intervals.delete(id) };
  const context = createContext({ window, document, location, navigator: { doNotTrack: dnt, globalPrivacyControl: gpc }, localStorage: { getItem: k => { if (storageThrows) throw Error('blocked'); return storage.get(k); }, setItem: (k, v) => { if (storageThrows) throw Error('blocked'); storage.set(k, v); } }, performance: { now: () => now }, URL, URLSearchParams, Element: class {} });
  scripts.push({ id: 'portfolio-plausible', ...eventMethods });
  runInContext(headCode, context);
  runInContext(source, context);
  const api = runInContext('({ initializeAnalytics, startProjectVisit, recordEvent, trackingAllowed })', context);
  const emit = name => { for (const fn of [...(listeners.get(name) || [])]) fn(); };
  const providerLoad = () => {
    if (!window.plausible?.o) return;
    const options = window.plausible.o;
    window.plausible = (n, options) => events.push({ n, ...options });
    window.plausible.l = true;
    if (options.autoCapturePageviews) window.plausible('pageview');
    emit('load');
  };
  return { ...api, scripts, events, storage, document, window, context, providerLoad,
    load() { api.initializeAnalytics(); providerLoad(); },
    advance(seconds) { for (let i = 0; i < seconds; i++) { now += 1000; for (const fn of [...intervals.values()]) fn(); } },
    focus(value) { focused = value; emit(value ? 'focus' : 'blur'); },
    visible(value) { document.visibilityState = value ? 'visible' : 'hidden'; emit('visibilitychange'); },
    activity() { emit('pointerdown'); }, emit,
  };
}

test('local previews, opt-out, privacy signals and unavailable storage never initialize tracking', () => {
  for (const options of [{ hostname: 'localhost' }, { excluded: true }, { dnt: '1' }, { gpc: true }, { storageThrows: true }, { search: '?analytics=off' }]) {
    const f = fixture(options); f.load(); assert.equal(f.window.plausible, undefined); assert.equal(f.events.length, 0);
  }
});
test('one script and one pageview; automatic form and link capture are disabled', () => {
  const f = fixture(); f.initializeAnalytics(); f.initializeAnalytics(); assert.equal(f.scripts.length, 1);
  assert.equal(f.window.plausible.o.formSubmissions, false);
  assert.equal(f.window.plausible.o.outboundLinks, false);
  assert.equal(f.window.plausible.o.autoCapturePageviews, true);
  assert.equal(f.window.plausible.o.transformRequest({ n: 'pageview', r: '' }).u, 'https://bobo1529707515.github.io/');
  f.providerLoad(); f.emit('focus'); f.emit('visibilitychange');
  assert.equal(f.events.filter(e => e.n === 'pageview').length, 1);
});
test('head initialization does not depend on React or focus; hydration never duplicates pageviews', () => {
  const f = fixture(); f.focus(false); f.providerLoad();
  assert.equal(f.events.filter(e => e.n === 'pageview').length, 1);
  f.initializeAnalytics(); f.initializeAnalytics();
  f.recordEvent('Project open', { target: 'mori' });
  assert.equal(f.events.filter(e => e.n === 'pageview').length, 1);
  assert.equal(f.events.filter(e => e.n === 'Project open').length, 1);
});

test('official installation probe passes the privacy filter; unknown events and opted-out probes do not', () => {
  const f = fixture();
  const transform = f.window.plausible.o.transformRequest;
  const result = transform({ n: 'verification-agent-test', d: 'wrong', u: 'https://private/', r: '', v: 36, p: { email: 'private' } });
  assert.ok(result, 'Plausible verification must not be dropped by the custom event allowlist');
  assert.equal(result.n, 'verification-agent-test');
  assert.equal(result.d, 'bobo1529707515.github.io');
  assert.equal(result.u, 'https://bobo1529707515.github.io/');
  assert.equal(result.p, undefined);
  assert.equal(transform({ n: 'other-unknown-event' }), null);
  f.storage.set('plausible_ignore', 'true');
  assert.equal(transform({ n: 'verification-agent-test' }), null);
});

if (process.env.ANALYTICS_EXPORTED_HTML) {
  test('production-minified HTML contains executable head configuration and exactly one provider', () => {
    const html = readFileSync(process.env.ANALYTICS_EXPORTED_HTML, 'utf8');
    const head = html.match(/<head[^>]*>([\s\S]*?)<\/head>/)?.[1];
    assert.ok(head);
    assert.equal((head.match(/src="https:\/\/plausible.io\/js\/pa-DGHz7Ah089TJDGr67iLK-\.js"/g) || []).length, 1);
    const headCode = head.match(/<script[^>]*id="portfolio-analytics-config"[^>]*>([\s\S]*?)<\/script>/)?.[1];
    assert.ok(headCode);
    const f = fixture({ headCode });
    assert.equal(f.window.plausible.o.transformRequest({ n: 'pageview', r: '' }).u, 'https://bobo1529707515.github.io/');
    assert.equal(f.window.plausible.o.transformRequest({ n: 'verification-agent-test', r: '' })?.n, 'verification-agent-test');
    f.focus(false); f.providerLoad(); f.initializeAnalytics();
    assert.equal(f.events.filter(e => e.n === 'pageview').length, 1);
    const excluded = fixture({ headCode, search: '?analytics=off' }); excluded.load();
    assert.equal(excluded.events.length, 0);
  });
}

if (process.env.ANALYTICS_PROVIDER_JS) {
  test('actual Plausible provider initializes from the head and sends sanitized events to a mocked transport', async () => {
    const provider = readFileSync(process.env.ANALYTICS_PROVIDER_JS, 'utf8');
    for (const excluded of [false, true]) {
      const f = fixture({ excluded }); const requests = [];
      f.focus(false);
      const fetch = (_url, options) => { requests.push(JSON.parse(options.body)); return Promise.resolve({ status: 202 }); };
      Object.assign(f.context, { fetch, ResizeObserver: class { observe() {} } });
      Object.assign(f.window, { fetch, navigator: f.context.navigator, localStorage: f.context.localStorage, history: {}, innerHeight: 800, scrollY: 0 });
      Object.assign(f.document, { body: { scrollHeight: 2000 }, documentElement: { scrollHeight: 2000 }, referrer: 'https://mail.example.org/inbox/private' });
      runInContext("Object.defineProperty(globalThis, 'plausible', { get: () => window.plausible, set: value => { window.plausible = value; } });", f.context);
      runInContext(provider, f.context);
      f.initializeAnalytics(); f.emit('load');
      f.recordEvent('Project open', { target: 'mori', email: 'private' });
      if (excluded) { assert.equal(requests.length, 0); continue; }
      assert.equal(requests.filter(p => p.n === 'pageview').length, 1);
      assert.equal(requests[0].u, 'https://bobo1529707515.github.io/');
      assert.equal(requests[0].d, 'bobo1529707515.github.io');
      assert.equal(requests[0].r, 'https://mail.example.org');
      assert.equal(requests[1].p.target, 'mori');
      assert.equal(requests[1].p.email, undefined);
      const callback = await new Promise(resolve => f.window.plausible('verification-agent-test', { callback: resolve }));
      assert.equal(callback?.status, 202, 'official verifier callback must receive the transport response');
      assert.equal(requests.at(-1).n, 'verification-agent-test');
      assert.equal(requests.at(-1).d, 'bobo1529707515.github.io');
    }
  });
}
test('detail timing excludes hidden and unfocused time, stops once, and respects opt-out', () => {
  const f = fixture(); f.load(); const stop = f.startProjectVisit('mori');
  f.advance(14); f.visible(false); f.advance(40); f.visible(true); f.activity(); f.advance(10);
  f.focus(false); f.advance(20); f.focus(true); f.activity(); f.advance(6); stop(); stop();
  const durations = f.events.filter(e => e.n === 'Project duration');
  assert.equal(durations.length, 1); assert.equal(durations[0].props.seconds, 30);
  assert.deepEqual(f.events.filter(e => e.n === 'Project engaged').map(e => e.props.seconds), [15, 30]);
  f.storage.set('plausible_ignore', 'true'); const count = f.events.length; f.recordEvent('Link click', { target: 'CV' }); assert.equal(f.events.length, count);
});
test('idle time is capped at 60 seconds and resumes on activity; pagehide closes the timer', () => {
  const f = fixture(); f.load(); const stop = f.startProjectVisit('reground'); f.advance(120); f.activity(); f.advance(5); f.emit('pagehide'); stop();
  const durations = f.events.filter(e => e.n === 'Project duration'); assert.equal(durations.length, 1); assert.equal(durations[0].props.seconds, 65);
});
