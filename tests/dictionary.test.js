'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const {matchSearchTerms}=require('../site/search-ui.js');const ctx=vm.createContext({});vm.runInContext(fs.readFileSync('site/catalog.js','utf8')+'\nglobalThis.data={terms,categories};',ctx);const {terms,categories}=ctx.data;
test('Dictionary aliases resolve to canonical entries without duplicate posts',()=>{for(const [q,slug] of [['AR','augmented-reality'],['VR','virtual-reality'],['LOD','level-of-detail'],['IAP','in-app-purchase'],['Unity IAP','in-app-purchase'],['Rigidbody','rigid-body']])assert.equal(matchSearchTerms(terms,q)[0].slug,slug);assert.equal(new Set(terms.map(t=>t.slug)).size,terms.length);assert.equal(new Set(terms.map(t=>t.name)).size,terms.length);});
test('Dictionary entries retain explicit source version, scope, and execution limitations',()=>{const entries=terms.filter(t=>t.visualType==='dictionary');assert.equal(entries.length,207);for(const t of entries){assert.ok(t.reviewVersion);assert.ok(t.reviewScope.includes('기본 정의'));assert.ok(t.reviewLimit.includes('미검증'));assert.ok(t.reviewSources.every(s=>/^https:\/\//.test(s.url)&&s.version));assert.ok(categories.some(c=>c.id===t.category));}assert.ok(terms.find(t=>t.slug==='legacy-mcs-compiler').reviewVersion.includes('2018.4'));assert.ok(terms.find(t=>t.slug==='legacy-joystick-number').reviewVersion.includes('2018.4'));assert.ok(terms.find(t=>t.slug==='broad-phase').reviewVersion.includes('PhysX'));});


test('Every post has a distinct generated SVG asset and hero is removed',()=>{
 const ctx=vm.createContext({});vm.runInContext(['catalog','demos','concepts','covers'].map(name=>fs.readFileSync('site/'+name+'.js','utf8')).join('\n')+'\nglobalThis.covers={terms,composeArticleCover};',ctx);
 const images=ctx.covers.terms.map(term=>{const svg=fs.readFileSync('site/covers/'+term.slug+'.svg','utf8');assert.equal(svg,ctx.covers.composeArticleCover(term));assert.ok(svg.includes('<title>'));assert.ok(svg.includes('xmlns="http://www.w3.org/2000/svg"'));assert.ok(!svg.includes('undefined'));assert.ok(!svg.includes('NaN'));return svg;});assert.equal(new Set(images).size,340);
 const html=fs.readFileSync('site/index.html','utf8');assert.ok(!html.includes('class="hero"'));assert.ok(html.includes('href="studio.css"'));assert.ok(html.includes('src="covers.js"'));
});
