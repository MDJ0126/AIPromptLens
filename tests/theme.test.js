'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
test('Theme restores saved preference and toggles both ways',()=>{
 const store=new Map([['game-prompt-theme','dark']]),events=new Map(),attrs={};
 const button={setAttribute:(k,v)=>attrs[k]=v,addEventListener:(k,v)=>events.set('button:'+k,v)};
 const doc={documentElement:{dataset:{}},getElementById:()=>button,querySelector:()=>({setAttribute(){}}),addEventListener:(k,v)=>events.set(k,v)};
 vm.runInNewContext(fs.readFileSync('site/theme.js','utf8'),{document:doc,localStorage:{getItem:k=>store.get(k),setItem:(k,v)=>store.set(k,v)}});
 assert.equal(doc.documentElement.dataset.theme,'dark');assert.equal(doc.documentElement.dataset.themeReady,undefined);
 events.get('DOMContentLoaded')();assert.equal(doc.documentElement.dataset.themeReady,'true');assert.equal(attrs['aria-pressed'],'true');
 events.get('button:click')();assert.equal(doc.documentElement.dataset.theme,'light');assert.equal(store.get('game-prompt-theme'),'light');
 events.get('button:click')();assert.equal(doc.documentElement.dataset.theme,'dark');assert.equal(store.get('game-prompt-theme'),'dark');
});
test('Unavailable storage keeps the theme control usable',()=>{
 let onReady,onClick;
 const doc={documentElement:{dataset:{}},getElementById:()=>({setAttribute(){},addEventListener:(k,f)=>onClick=f}),querySelector:()=>null,addEventListener:(k,f)=>onReady=f};
 vm.runInNewContext(fs.readFileSync('site/theme.js','utf8'),{document:doc,localStorage:{getItem(){throw Error();},setItem(){throw Error();}}});
 assert.equal(doc.documentElement.dataset.theme,'light');onReady();onClick();assert.equal(doc.documentElement.dataset.theme,'dark');
});
