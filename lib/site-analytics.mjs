export const ANALYTICS_HOST = 'bobo1529707515.github.io';
export const ANALYTICS_SCRIPT = 'https://plausible.io/js/pa-DGHz7Ah089TJDGr67iLK-.js';
export const TARGETS = new Set(['research', 'companions', 'robotic-mouse', 'social-need-dynamics', 'mori', 'reground', 'neuroengineering', 'publication', 'collaborations', 'experience', 'tools', 'future-plans', 'contact', 'experimental-setup', 'ads1299', 'ad5933', 'image', 'CV', 'Email', 'GitHub', 'LinkedIn', 'Study demo', 'Paper', 'External link']);
export const EVENTS = new Set(['pageview', 'Section view', 'Project open', 'Project engaged', 'Project duration', 'Link click', 'Image enlarge', 'Language change']);
const SOURCES = new Set(['email', 'linkedin', 'github', 'wechat', 'rednote', 'application']);
const BUCKETS = ['under 15s', '15–29s', '30–59s', '1–2min', '2–5min', '5min+'];
export function durationBucket(seconds) {
  return BUCKETS[seconds < 15 ? 0 : seconds < 30 ? 1 : seconds < 60 ? 2 : seconds < 120 ? 3 : seconds < 300 ? 4 : 5];
}
// Self-contained so its serialized form remains valid after production minification.
function createAnalyticsPolicy({ host, events, targets, sources, buckets }) {
const ANALYTICS_HOST = host;
const EVENTS = new Set(events);
const TARGETS = new Set(targets);
const SOURCES = new Set(sources);
const BUCKETS = buckets;
function sanitizedPayload(payload, href) {
  // Plausible's installation verifier calls this reserved event directly.
  // Keep it compatible without allowing arbitrary application event names.
  if (!EVENTS.has(payload.n) && payload.n !== 'verification-agent-test') return null;
  const page = new URL(`https://${ANALYTICS_HOST}/`);
  try {
    const source = new URL(href).searchParams.get('utm_source');
    if (SOURCES.has(source)) page.searchParams.set('utm_source', source);
  } catch { /* Discard malformed URLs. */ }
  let referrer = null;
  try { const url = new URL(payload.r); if (/^https?:$/.test(url.protocol)) referrer = url.origin; } catch { /* Direct visit. */ }
  const props = {};
  if (TARGETS.has(payload.p?.target)) props.target = payload.p.target;
  if (['en', 'zh'].includes(payload.p?.language)) props.language = payload.p.language;
  if (BUCKETS.includes(payload.p?.bucket)) props.bucket = payload.p.bucket;
  if (typeof payload.p?.seconds === 'number' && Number.isFinite(payload.p.seconds)) props.seconds = Math.max(0, Math.min(86400, Math.floor(payload.p.seconds)));
  return { n: payload.n, d: ANALYTICS_HOST, u: page.href, r: referrer, v: payload.v, ...(payload.i === false ? { i: false } : {}), ...(Object.keys(props).length ? { p: props } : {}) };
}

function trackingAllowed() {
  if (window.location.hostname !== ANALYTICS_HOST) return false;
  if (navigator.doNotTrack === '1' || navigator.globalPrivacyControl === true) return false;
  try { return localStorage.getItem('plausible_ignore') !== 'true'; } catch { return false; }
}
return { trackingAllowed, sanitizedPayload };
}
const POLICY_CONFIG = { host: ANALYTICS_HOST, events: [...EVENTS], targets: [...TARGETS], sources: [...SOURCES], buckets: BUCKETS };
const policy = createAnalyticsPolicy(POLICY_CONFIG);
export const sanitizedPayload = policy.sanitizedPayload;
export function trackingAllowed() {
  return typeof window !== 'undefined' && policy.trackingAllowed();
}

/** Runs in the initial HTML, before React or the asynchronous provider script. */
export function analyticsHeadCode() {
  return `(() => {
    const { trackingAllowed, sanitizedPayload } = (${createAnalyticsPolicy.toString()})(${JSON.stringify(POLICY_CONFIG)});
    try {
      if (new URLSearchParams(location.search).get('analytics') === 'off') localStorage.setItem('plausible_ignore', 'true');
    } catch { return; }
    if (!trackingAllowed()) return;
    window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments); };
    window.plausible.init = window.plausible.init || function(options) { window.plausible.o = options || {}; };
    window.plausible.init({
      autoCapturePageviews: true,
      outboundLinks: false, fileDownloads: false, formSubmissions: false,
      transformRequest: payload => trackingAllowed() ? sanitizedPayload(payload, location.href) : null
    });
  })();`;
}

let ready = false;
let initialized = false;
let lastActivity = 0;
export function recordEvent(name, props = {}, interactive = true) {
  if (!ready || !trackingAllowed() || !EVENTS.has(name)) return;
  try { window.plausible?.(name, { props, interactive }); } catch { /* Analytics must never interrupt the page. */ }
}

/** One timer per detail opening; counts focused, visible time with a 60s idle cap. */
export function startProjectVisit(target) {
  if (!TARGETS.has(target) || !trackingAllowed() || !ready) return () => {};
  recordEvent('Project open', { target });
  let last = performance.now();
  let foreground = document.visibilityState === 'visible' && document.hasFocus();
  let total = 0;
  let finished = false;
  const sent = new Set();
  const tick = () => {
    const now = performance.now();
    if (foreground) total += Math.max(0, Math.min(2000, now - last, lastActivity + 60000 - last));
    last = now;
    foreground = document.visibilityState === 'visible' && document.hasFocus();
    for (const seconds of [15, 30, 60, 120]) {
      if (total >= seconds * 1000 && !sent.has(seconds)) {
        sent.add(seconds);
        recordEvent('Project engaged', { target, seconds }, false);
      }
    }
  };
  const interval = window.setInterval(tick, 1000);
  const stop = () => {
    if (finished) return;
    finished = true;
    tick();
    window.clearInterval(interval);
    document.removeEventListener('visibilitychange', tick);
    window.removeEventListener('focus', tick);
    window.removeEventListener('blur', tick);
    window.removeEventListener('pagehide', stop);
    const seconds = Math.floor(total / 1000);
    if (seconds > 0) recordEvent('Project duration', { target, seconds, bucket: durationBucket(seconds) }, false);
  };
  document.addEventListener('visibilitychange', tick);
  window.addEventListener('focus', tick);
  window.addEventListener('blur', tick);
  window.addEventListener('pagehide', stop);
  return stop;
}

export function initializeAnalytics() {
  if (!trackingAllowed() || initialized) return;
  const script = document.getElementById('portfolio-plausible');
  if (!script) return;
  initialized = true;
  lastActivity = performance.now();
  const activity = () => { lastActivity = performance.now(); };
  for (const name of ['pointerdown', 'keydown', 'scroll', 'touchstart']) document.addEventListener(name, activity, { capture: true, passive: true });
  const loaded = () => {
    ready = Boolean(window.plausible?.l);
    if (ready) observeSections();
  };
  // The provider owns pageviews. React only attaches custom interactions,
  // regardless of which script completed first.
  if (window.plausible?.l) loaded();
  else script.addEventListener('load', loaded, { once: true });
  document.addEventListener('click', handleClick);
  document.addEventListener('auxclick', handleClick);
}

function handleClick(event) {
  if (event.type === 'auxclick' && event.button !== 1) return;
  const node = event.target instanceof Element ? event.target : null;
  const anchor = node?.closest('a[href]');
  if (!anchor) return;
  const href = anchor.getAttribute('href') || '';
  let target;
  if (href.startsWith('mailto:')) target = 'Email';
  else if (/Yibo_Yuan.*\.pdf/i.test(href)) target = 'CV';
  else if (/^https:\/\/github\.com\//.test(href)) target = 'GitHub';
  else if (/^https:\/\/www\.linkedin\.com\//.test(href)) target = 'LinkedIn';
  else if (href.startsWith('https://mori-family-memory.pages.dev/')) target = 'Study demo';
  else if (href.startsWith('https://doi.org/')) target = 'Paper';
  else if (/\.(png|jpe?g|webp)(?:$|\?)/i.test(href)) target = 'image';
  else if (/^https?:/.test(href) && !href.startsWith(`https://${ANALYTICS_HOST}`) && !href.startsWith('https://plausible.io/')) target = 'External link';
  if (target) recordEvent('Link click', { target });
}

function observeSections() {
  if (!('IntersectionObserver' in window)) return;
  const seen = new Set();
  const candidates = new Map();
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (entry.isIntersecting) candidates.set(entry.target.id, performance.now());
      else candidates.delete(entry.target.id);
    }
  }, { rootMargin: '-25% 0px -25% 0px', threshold: 0 });
  document.querySelectorAll('main section[id], .core-project-card[id]').forEach(node => { if (TARGETS.has(node.id)) observer.observe(node); });
  window.setInterval(() => {
    if (!trackingAllowed() || document.visibilityState !== 'visible' || !document.hasFocus() || document.querySelector('[role="dialog"]')) return;
    for (const [target, since] of candidates) {
      if (!seen.has(target) && performance.now() - since >= 1000) { seen.add(target); recordEvent('Section view', { target }, false); }
    }
  }, 1000);
}
