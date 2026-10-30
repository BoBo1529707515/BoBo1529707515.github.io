import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createContext, runInContext } from 'node:vm';
import { analyticsHeadCode } from '../lib/site-analytics.mjs';
const source=readFileSync(new URL('../lib/site-analytics.mjs',import.meta.url),'utf8').replace(/^export /gm,'');
function fixture(options={}) {
 const listeners=new Map(), intervals=new Map(), events=[], storage=new Map(options.excluded?[['plausible_ignore','true']]:[]);
 let now=0,focused=true,sequence=0;
 const methods={addEventListener(n,f){if(!listeners.has(n))listeners.set(n,new Set());listeners.get(n).add(f)},removeEventListener(n,f){listeners.get(n)?.delete(f)}};
 const location={hostname:options.hostname||'bobo1529707515.github.io',search:options.search||'?email=secret'};location.href=`https://${location.hostname}/${location.search}`;
 const document={...methods,visibilityState:'visible',hasFocus:()=>focused,getElementById:id=>id==='portfolio-umami'?methods:null,querySelector:()=>null,querySelectorAll:()=>[]};
 const window={...methods,location,setInterval:f=>{intervals.set(++sequence,f);return sequence},clearInterval:id=>intervals.delete(id)};
 const context=createContext({window,document,location,navigator:{doNotTrack:options.dnt,globalPrivacyControl:options.gpc},localStorage:{getItem:k=>{if(options.storageThrows)throw Error();return storage.get(k)},setItem:(k,v)=>{if(options.storageThrows)throw Error();storage.set(k,v)}},performance:{now:()=>now},URL,URLSearchParams,Element:class{}});
 runInContext(options.headCode||analyticsHeadCode(),context);runInContext(source,context);
 const api=runInContext('({initializeAnalytics,startProjectVisit,recordEvent})',context);
 const emit=n=>{for(const f of [...(listeners.get(n)||[])])f()};
 const providerLoad=()=>{window.umami={track(name,data){const p=window.portfolioBeforeSend('event',{name,data,referrer:'https://mail.example/private?token=x',id:'private-id',title:'private'});if(p)events.push(p);return Promise.resolve()}};window.umami.track();emit('load')};
 return {...api,window,events,storage,providerLoad,emit,load(){api.initializeAnalytics();providerLoad()},advance(s){for(let i=0;i<s;i++){now+=1000;for(const f of [...intervals.values()])f()}},visible(v){document.visibilityState=v?'visible':'hidden';emit('visibilitychange')},focus(v){focused=v;emit(v?'focus':'blur')},activity(){emit('pointerdown')}};
}
test('Umami payload strips identities and private URLs; unknown types and events are blocked',()=>{
 const f=fixture();f.load();f.recordEvent('Project open',{target:'mori',seconds:12.8,email:'private'});const p=f.events.at(-1);
 assert.equal(p.website,'010718ab-ecb8-4f32-8ef0-61779516a97f');assert.equal(p.url,'/');assert.equal(p.referrer,'https://mail.example');assert.equal(p.id,undefined);assert.equal(p.data.email,undefined);assert.equal(p.data.seconds,12);
 assert.equal(f.window.portfolioBeforeSend('identify',{}),false);assert.equal(f.window.portfolioBeforeSend('event',{name:'unknown'}),false);
});
test('localhost, legacy opt-out, DNT, GPC, blocked storage and analytics=off send nothing',()=>{
 for(const options of [{hostname:'localhost'},{excluded:true},{dnt:'1'},{gpc:true},{storageThrows:true},{search:'?analytics=off'}]){const f=fixture(options);f.load();f.recordEvent('Project open',{target:'mori'});assert.equal(f.events.length,0)}
});
test('pageview does not depend on hydration or focus and is not duplicated',()=>{
 for(const before of [true,false]){const f=fixture();f.focus(false);if(!before)f.initializeAnalytics();f.providerLoad();f.initializeAnalytics();f.initializeAnalytics();f.recordEvent('Project open',{target:'mori'});assert.equal(f.events.filter(e=>!e.name).length,1);assert.equal(f.events.filter(e=>e.name==='Project open').length,1)}
});
test('detail timing excludes background and unfocused time; opt-out stops sends',()=>{
 const f=fixture();f.load();const stop=f.startProjectVisit('mori');f.advance(14);f.visible(false);f.advance(40);f.visible(true);f.activity();f.advance(10);f.focus(false);f.advance(20);f.focus(true);f.activity();f.advance(6);stop();stop();
 const durations=f.events.filter(e=>e.name==='Project duration');assert.equal(durations.length,1);assert.equal(durations[0].data.seconds,30);assert.deepEqual(f.events.filter(e=>e.name==='Project engaged').map(e=>e.data.seconds),[15,30]);
 f.storage.set('plausible_ignore','true');const count=f.events.length;f.recordEvent('Link click',{target:'CV'});assert.equal(f.events.length,count);
});
test('idle cap and pagehide timer cleanup remain intact',()=>{const f=fixture();f.load();const stop=f.startProjectVisit('reground');f.advance(120);f.activity();f.advance(5);f.emit('pagehide');stop();const d=f.events.filter(e=>e.name==='Project duration');assert.equal(d.length,1);assert.equal(d[0].data.seconds,65)});
if(process.env.ANALYTICS_EXPORTED_HTML)test('export contains only Umami and an executable privacy hook',()=>{
 const html=readFileSync(process.env.ANALYTICS_EXPORTED_HTML,'utf8');const head=html.match(/<head[^>]*>([\s\S]*?)<\/head>/)[1];
 assert.equal((head.match(/src="https:\/\/cloud.umami.is\/script.js"/g)||[]).length,1);assert.ok(!head.includes('plausible.io/js/'));assert.ok(head.includes('data-before-send="portfolioBeforeSend"'));assert.ok(head.includes('data-website-id="010718ab-ecb8-4f32-8ef0-61779516a97f"'));
 const headCode=head.match(/<script[^>]*id="portfolio-analytics-config"[^>]*>([\s\S]*?)<\/script>/)[1];const f=fixture({headCode});f.load();assert.equal(f.events.length,1);const excluded=fixture({headCode,excluded:true});excluded.load();assert.equal(excluded.events.length,0);
});
