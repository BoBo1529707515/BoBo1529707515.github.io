import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createContext, runInContext } from 'node:vm';
import { sanitizedPayload, durationBucket } from '../lib/site-analytics.mjs';

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
function fixture({ hostname = 'bobo1529707515.github.io', dnt = '0', gpc = false, excluded = false, storageThrows = false } = {}) {
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
  const location = { hostname, href: `https://${hostname}/?private=secret` };
  const window = { ...eventMethods, location, setInterval: fn => { intervals.set(++sequence, fn); return sequence; }, clearInterval: id => intervals.delete(id) };
  const context = createContext({ window, document, location, navigator: { doNotTrack: dnt, globalPrivacyControl: gpc }, localStorage: { getItem: k => { if (storageThrows) throw Error('blocked'); return storage.get(k); } }, performance: { now: () => now }, URL, Element: class {} });
  runInContext(source, context);
  const api = runInContext('({ initializeAnalytics, startProjectVisit, recordEvent, trackingAllowed })', context);
  const emit = name => { for (const fn of [...(listeners.get(name) || [])]) fn(); };
  return { ...api, scripts, events, storage, document, window,
    load() { api.initializeAnalytics(); if (scripts[0]) { window.plausible = (n, options) => events.push({ n, ...options }); scripts[0].onload(); } },
    advance(seconds) { for (let i = 0; i < seconds; i++) { now += 1000; for (const fn of [...intervals.values()]) fn(); } },
    focus(value) { focused = value; emit(value ? 'focus' : 'blur'); },
    visible(value) { document.visibilityState = value ? 'visible' : 'hidden'; emit('visibilitychange'); },
    activity() { emit('pointerdown'); }, emit,
  };
}

test('local previews, opt-out, privacy signals and unavailable storage load no tracker', () => {
  for (const options of [{ hostname: 'localhost' }, { excluded: true }, { dnt: '1' }, { gpc: true }, { storageThrows: true }]) {
    const f = fixture(options); f.initializeAnalytics(); assert.equal(f.scripts.length, 0);
  }
});
test('one script and one pageview; automatic form and link capture are disabled', () => {
  const f = fixture(); f.initializeAnalytics(); f.initializeAnalytics(); assert.equal(f.scripts.length, 1);
  assert.equal(f.window.plausible.o.formSubmissions, false);
  assert.equal(f.window.plausible.o.outboundLinks, false);
  assert.equal(f.window.plausible.o.autoCapturePageviews, false);
  assert.equal(f.window.plausible.o.transformRequest({ n: 'pageview', r: '' }).u, 'https://bobo1529707515.github.io/');
  f.window.plausible = (n, options) => f.events.push({ n, ...options }); f.scripts[0].onload(); f.emit('focus'); f.emit('visibilitychange');
  assert.equal(f.events.filter(e => e.n === 'pageview').length, 1);
});
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
