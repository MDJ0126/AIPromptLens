'use strict';
const renderCodeIllustration=illustration;
illustration=function(term){
 if(term.kind!=='concept')return renderCodeIllustration(term);
 if(term.visualType==='dictionary'){
  const esc=value=>String(value).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
  const label=categories.find(c=>c.id===term.category).name;
  const name=term.name.length>18?term.name.slice(0,18)+'…':term.name;
  const english=term.en.length>38?term.en.slice(0,38)+'…':term.en;
  return '<svg class="dictionary-cover" viewBox="0 0 320 184" role="img" aria-label="'+esc(term.name)+' 용어 카드"><title>'+esc(term.name)+' 용어 카드</title><rect width="320" height="184" fill="#eef4ff"/><rect x="24" y="54" width="32" height="4" rx="2" fill="#ecc74e"/><text x="24" y="38" fill="#607fae" font-size="10">'+esc(label)+'</text><text x="24" y="94" fill="#3560a3" font-size="17">'+esc(name)+'</text><text x="24" y="118" fill="#516a94" font-size="10">'+esc(english)+'</text><rect y="159" width="320" height="25" fill="#fff"/><text x="24" y="176" fill="#607fae" font-size="9">용어 정의 · 동작 시연 아님</text></svg>';
 }
 let content='',labels=[];
 if(term.diagramSteps){
 labels=term.diagramSteps;
 content='<text x="160" y="57" text-anchor="middle" fill="#516a94" font-size="10">처리 단계 안내</text><path d="M60 101H260" stroke="#a3bee5" stroke-width="2"/>'+labels.map((label,i)=>'<circle cx="'+(60+i*100)+'" cy="101" r="20" fill="#dce8ff"/><text x="'+(60+i*100)+'" y="105" text-anchor="middle" fill="#3560a3" font-size="12">'+(i+1)+'</text>').join('')+'<g class="demo glossary-cycle"><circle cx="60" cy="101" r="25" fill="none" stroke="#ecc74e" stroke-width="3"/></g>';
 }else if(term.slug==='baked-lighting'){
 labels=['미리 계산한 결과 저장','조명을 바꿔도 저장값 유지','실시간 계산은 변화 반영'];
 content='<text x="68" y="62" text-anchor="middle" fill="#516a94" font-size="10">BAKED</text><text x="240" y="62" text-anchor="middle" fill="#516a94" font-size="10">REALTIME</text><path d="M160 50V145" stroke="#c4d5ee"/><rect x="25" y="106" width="105" height="34" rx="4" fill="#f5dc8e"/><rect x="186" y="106" width="105" height="34" rx="4" fill="#dce7f7"/><rect class="demo live-light" x="186" y="106" width="105" height="34" rx="4" fill="#f5dc8e"/><g class="demo concept-light"><circle cx="69" cy="85" r="9" fill="#e9bd38"/><circle cx="238" cy="85" r="9" fill="#e9bd38"/></g>';
 }else if(term.slug==='screen-space'){
 labels=['물체가 화면 안에 있음','카메라가 이동','화면 밖 정보가 부족'];
 content='<rect x="43" y="55" width="192" height="92" rx="6" fill="#fff" stroke="#a3bee5"/><text x="53" y="69" fill="#607fae" font-size="9">SCREEN</text><path d="M44 109H235" stroke="#bfd1ed"/><g transform="translate(112 86)"><rect class="demo offscreen-object" width="29" height="20" rx="3" fill="#4c82d0"/></g><g class="demo lost-reflection"><rect x="112" y="119" width="29" height="19" rx="3" fill="#87a9df"/></g><text x="254" y="109" font-size="9" fill="#90722a">外</text>';
 }else if(['pathfinding-choice','dot-product','coordinate-spaces'].includes(term.slug)){
 const diagrams={
 'pathfinding-choice':['개별 경로 탐색','공통 목표의 방향장','여러 유닛이 결과 공유'],
 'dot-product':['같은 방향: 1','직각 방향: 0','반대 방향: -1'],
 'coordinate-spaces':['부모 기준 로컬 위치','부모가 월드에서 이동','로컬 유지 · 월드 위치 변경']};
 labels=diagrams[term.slug];
 if(term.slug==='pathfinding-choice')content='<path d="M40 120H100V80H270" stroke="#4c82d0" stroke-width="3" fill="none"/><g class="demo research-path"><circle cx="40" cy="120" r="8" fill="#ecc74e"/></g><text x="150" y="135" fill="#516a94" font-size="11">A* / FLOW FIELD</text>';
 else if(term.slug==='dot-product')content='<circle cx="160" cy="100" r="45" fill="none" stroke="#a3bee5"/><path d="M160 100H220" stroke="#4c82d0" stroke-width="3"/><g class="demo research-direction"><path d="M160 100H200l-7-5m7 5-7 5" stroke="#ecc74e" stroke-width="4" fill="none"/></g>';
 else content='<path d="M30 140H290M40 145V60" stroke="#a3bee5"/><g class="demo research-parent"><rect x="65" y="110" width="90" height="25" rx="5" fill="#4c82d0"/><path d="M110 110V80" stroke="#ecc74e" stroke-dasharray="4 3"/><circle cx="110" cy="73" r="9" fill="#ecc74e"/></g>';
 }else if(['object-pool','state-machine','fixed-timestep'].includes(term.slug)){
 const data={
 'object-pool':['대기 객체를 대여','사용 후 정리','풀에 반환하여 재사용'],
 'state-machine':['대기 상태','대상 발견 → 추적','범위 진입 → 공격'],
 'fixed-timestep':['고정 간격으로 계산','이전·현재 상태 저장','표시는 사이를 보간']};
 labels=data[term.slug];
 if(term.slug==='object-pool')content='<rect x="35" y="65" width="80" height="78" rx="8" fill="none" stroke="#4c82d0"/><text x="53" y="85" fill="#516a94" font-size="11">POOL</text><circle cx="57" cy="118" r="7" fill="#4c82d0"/><circle cx="80" cy="118" r="7" fill="#4c82d0"/><path d="M115 108H265" stroke="#a3bee5" stroke-dasharray="5 4"/><g class="demo pool-cycle"><circle cx="103" cy="108" r="9" fill="#ecc74e"/></g><text x="232" y="138" fill="#516a94" font-size="11">USE</text>';
 else if(term.slug==='state-machine')content='<path d="M65 105H255" stroke="#a3bee5" stroke-width="3"/><circle cx="65" cy="105" r="24" fill="#4c82d0"/><circle cx="160" cy="105" r="24" fill="#4c82d0"/><circle cx="255" cy="105" r="24" fill="#4c82d0"/><g class="demo state-cycle"><circle cx="65" cy="105" r="29" fill="none" stroke="#ecc74e" stroke-width="4"/></g><text x="65" y="109" text-anchor="middle" fill="#fff" font-size="10">대기</text><text x="160" y="109" text-anchor="middle" fill="#fff" font-size="10">추적</text><text x="255" y="109" text-anchor="middle" fill="#fff" font-size="10">공격</text>';
 else content='<text x="24" y="78" fill="#516a94" font-size="10">STEP</text><text x="24" y="125" fill="#516a94" font-size="10">VIEW</text><path d="M80 75H285M80 120H285" stroke="#a3bee5"/><g class="demo fixed-step"><circle cx="80" cy="75" r="8" fill="#4c82d0"/></g><g class="demo smooth-view"><circle cx="80" cy="120" r="8" fill="#ecc74e"/></g>';
 }else{
 labels=['음원과 듣는 위치','장애물이 직선 경로를 가림','열린 경로와 비교'];
 content='<circle cx="65" cy="108" r="11" fill="#ecc74e"/><circle cx="251" cy="108" r="11" fill="#4e83d1"/><text x="53" y="140" font-size="10" fill="#7e6724">음원</text><text x="235" y="140" font-size="10" fill="#496faa">리스너</text><path d="M76 108H241" stroke="#82a5d6" stroke-dasharray="5 4"/><g class="demo occluding-wall"><rect x="147" y="71" width="14" height="70" rx="3" fill="#879fc5"/><path d="M148 101l13 14m-13 0 13-14" stroke="#d66c53" stroke-width="3"/></g>';
 }
 if(term.slug==='screen-space')content=content.replace('>外<','>밖<');
 return '<svg class="game-demo" viewBox="0 0 320 184" role="img" aria-label="'+term.name+' 비교 도식"><title>'+term.name+' 개념 도식</title><rect width="320" height="184" fill="#eef4ff"/>'+content+'<rect y="159" width="320" height="25" fill="#fff"/>'+labels.map((label,i)=>'<text x="160" y="176" text-anchor="middle" class="demo phase-label phase-'+i+' phases-3" fill="#4d6894" font-size="9">'+(i+1)+' / 3 · '+label+'</text>').join('')+'</svg>';
};
