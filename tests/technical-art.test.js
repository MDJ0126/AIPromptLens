'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const ctx=vm.createContext({matchMedia:()=>({matches:false})});
vm.runInContext(['catalog','demos','concepts','asset-art','animation-art','technical-art','covers'].map(n=>fs.readFileSync('site/'+n+'.js','utf8')).join('\n')+'\nthis.art={terms,technicalArticleScene,cardIllustration};',ctx);
const targets=ctx.art.terms.filter(t=>['physics','network','optimization','procedural','audio'].includes(t.category));
test('All 47 affected cards have distinct geometry without titles, colors or metadata',()=>{
 assert.equal(targets.length,47);
 const shapes=targets.map(t=>{
  const scene=ctx.art.technicalArticleScene(t);assert.ok(scene,t.slug);
  return scene.replace(/<text\b[\s\S]*?<\/text>/g,'').replace(/data-scene="[^"]*"/g,'').replace(/(?:fill|stroke)="[^"]*"/g,'').replace(/<animate(?:Transform)?\b[^>]*\/>/g,'');
 });
 assert.equal(new Set(shapes).size,targets.length,'Geometry must differ, not just labels, colors or animation parameters');
});
test('Every affected card renders its scene inline with a nonconstant looping animation',()=>{
 for(const term of targets){
  const svg=ctx.art.cardIllustration(term);assert.ok(svg.startsWith('<svg'),term.slug);assert.ok(svg.includes('data-scene="'+term.slug+'"'));assert.ok(!svg.includes('<img'));
  const animations=[...svg.matchAll(/<animate(?:Transform)?\b[^>]*>/g)].map(m=>m[0]);assert.ok(animations.length,term.slug);
  assert.ok(animations.some(tag=>{const values=tag.match(/values="([^"]+)"/);return values&&new Set(values[1].split(';')).size>1&&tag.includes('repeatCount="indefinite"');}),term.slug);
  assert.ok(!/undefined|NaN/.test(svg));
 }
});
