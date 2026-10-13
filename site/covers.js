'use strict';
// Original vector artwork. Shared visual families are conceptual metaphors, not engine screenshots.
function coverEscape(value){return String(value).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));}
function coverSeed(text){let seed=2166136261;for(const char of text)seed=Math.imul(seed^char.charCodeAt(0),16777619);return seed>>>0;}
function composeArticleCover(term){
 const staticCover=term.visualType==='dictionary'||Boolean(term.kind==='concept'&&term.diagramSteps);
 const seed=coverSeed(term.slug), id='cover-'+term.slug, hue=43+seed%10, blue='hsl('+hue+' 86% 65%)', gold='#ffda66';
 const palette={assets:'PACKAGE',tools:'WORKSPACE',platform:'BUILD',ui:'INTERFACE',rendering:'RENDER',animation:'MOTION',physics:'SIMULATION',network:'SYNC',optimization:'PROFILE',procedural:'GENERATION',audio:'SIGNAL',architecture:'SYSTEM',camera:'VIEW',combat:'IMPACT',movement:'CONTROL',ai:'AGENT',level:'SPACE'};
 const label=palette[term.category]||'GAME SYSTEM', q=(term.slug+' '+term.en).toLowerCase();
 const line=(x,y,a,b,color=blue)=>'<path d="M'+x+' '+y+'L'+a+' '+b+'" stroke="'+color+'" stroke-width="1.5" fill="none"/>';
 const dot=(x,y,r=5,color=blue)=>'<circle cx="'+x+'" cy="'+y+'" r="'+r+'" fill="'+color+'"/>';
 const box=(x,y,w,h,color=blue)=>'<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" rx="6" fill="'+color+'" fill-opacity=".13" stroke="'+color+'" stroke-opacity=".7"/>';
 const cube=(x,y,size=28)=>'<g transform="translate('+x+' '+y+')"><path d="M0 -'+size+'L'+size*1.5+' -'+size/2+'V'+size+'L0 '+size*1.5+'L-'+size*1.5+' '+size+'V-'+size/2+'Z" fill="'+blue+'" fill-opacity=".14" stroke="'+blue+'"/><path d="M0 '+size/2+'V'+size*1.5+'M0 '+size/2+'L'+size*1.5+' -'+size/2+'M0 '+size/2+'L-'+size*1.5+' -'+size/2+'M-'+size*1.5+' -'+size/2+'L0 -'+size+'L'+size*1.5+' -'+size/2+'" stroke="'+blue+'" fill="none"/></g>';
 let art='';const specificTechnical=typeof technicalArticleScene==='function'?technicalArticleScene(term):null;const specificAnimation=typeof animationArticleScene==='function'?animationArticleScene(term):null;const specificAsset=typeof assetArticleScene==='function'?assetArticleScene(term,blue,gold):null;
 if(specificTechnical){art=specificTechnical;}else if(specificAnimation){art=specificAnimation;}else if(specificAsset){art=specificAsset;}else if(!staticCover){
  return illustration(term).replace(/#[0-9a-f]{6}/gi,color=>({"#eef4ff":"#fff9e6","#4e83d1":"#313131","#4c82d0":"#313131","#5497cb":"#ba951e","#29446f":"#38352b","#3560a3":"#665321","#496faa":"#6b624a","#4d6894":"#6b624a","#516a94":"#6b624a","#607fae":"#8c805b","#82a5d6":"#d4b85e","#879fc5":"#a79b77","#87a9df":"#d4b85e","#a3bee5":"#ddd0a2","#bfd1ed":"#e8ddbb","#c4d5ee":"#e8ddbb","#dce7f7":"#f1e9d0","#dce8ff":"#f1e9d0","#88a7d7":"#c7af65","#95afd3":"#c7b78b","#a3bcde":"#dacba4","#aabedc":"#dacba4","#adc5e5":"#dacba4","#b4caeb":"#e1d4ac","#b8cce8":"#e1d4ac","#d6e4f8":"#f0e6c6","#d6e9f0":"#eee7d2","#d7e3f5":"#eee7d2","#dbe6f8":"#eee7d2","#e4ecfa":"#f6eed8"})[color.toLowerCase()]||color).replace('<svg ','<svg xmlns="http://www.w3.org/2000/svg" ');
 }else if(/audio|sound|mixer|reverb|doppler/.test(q)||term.category==='audio'){
  for(let i=0;i<37;i++){const height=12+Math.abs(Math.sin((i+seed%13)*.43))*64+(seed>>(i%20)&7);art+=line(65+i*8,132-height/2,65+i*8,132+height/2,i%7===0?gold:blue);}art+=line(52,192,365,192)+dot(96+seed%220,192,4,gold);
 }else if(/graph|state|event|rpc|network|sync|connection|architecture|pipeline/.test(q)||['network','architecture','ai'].includes(term.category)){
  const nodes=Array.from({length:5+seed%3},(_,i)=>({x:80+(i%3)*116+(seed>>(i+2)&15),y:86+Math.floor(i/3)*61}));
  nodes.forEach((node,i)=>{if(i){const parent=nodes[(seed+i)%i];art+=line(parent.x+14,parent.y,node.x-14,node.y);}art+=box(node.x-23,node.y-15,46,30,i===0?gold:blue)+dot(node.x,node.y,4,i===0?gold:blue);});
 }else if(/physics|collider|rigid|joint|force|collision|velocity|gravity/.test(q)||term.category==='physics'){
  art=cube(195,123,34)+line(195,140,317,96,gold)+dot(317,96,5,gold)+'<ellipse cx="195" cy="183" rx="107" ry="23" fill="none" stroke="'+blue+'" stroke-dasharray="4 7"/>';
  for(let i=0;i<3;i++)art+=line(91+i*12,86,115+i*12,110);art+='<circle cx="195" cy="125" r="'+(67+seed%15)+'" fill="none" stroke="'+blue+'" stroke-opacity=".3"/>';
  }else if(/normal-map/.test(q)){
  art=cube(200,133,42);for(let i=0;i<6;i++){const x=157+(i%3)*33,y=105+Math.floor(i/3)*36;art+=line(x,y,x-8,y-27,i%2?gold:blue)+dot(x,y,3);}art+='<circle cx="318" cy="85" r="19" fill="#a094f6"/><path d="M318 66V104M299 85H337" stroke="'+gold+'"/>';
 }else if(/depth-buffer|shadow-map|uv-mapping|texture/.test(q)){
  for(let i=0;i<3;i++)art+='<path d="M'+(88+i*31)+' '+(109+i*21)+'l125 -46 100 48 -125 46Z" fill="'+(i===seed%3?gold:blue)+'" fill-opacity=".15" stroke="'+(i===seed%3?gold:blue)+'"/>';
  art+=line(316,66,316,190,gold)+dot(316,66,5,gold);
 }else if(/shader|light|material|render|texture|reflection|shadow|ambient|color|tone|exposure/.test(q)||term.category==='rendering'){
  art='<circle cx="210" cy="126" r="57" fill="url(#'+id+'-orb)" stroke="'+blue+'"/><ellipse cx="210" cy="192" rx="68" ry="9" fill="#000" fill-opacity=".3"/>'+line(94,71,172,97,gold)+dot(94,71,9,gold);
  if(/rough/.test(q)){for(let i=0;i<8;i++)art+=line(183+i*8,88,150+i*18,50+(i%3)*10,gold);}
  if(/metal/.test(q))art+='<ellipse cx="210" cy="126" rx="60" ry="16" transform="rotate(-35 210 126)" fill="none" stroke="'+gold+'" stroke-width="3"/>';
  if(/ambient|occlusion/.test(q))art+=cube(120,158,24)+cube(294,151,22);
  for(let i=0;i<4;i++)art+=box(307,79+i*26,24,17,i%2?gold:blue);
 }else if(/animation|bone|skin|blend|pose|keyframe|motion/.test(q)||term.category==='animation'){
  for(let j=0;j<3;j++){const x=100+j*110,y=97+(seed>>(j+2)&15);const color=j===1?gold:blue;art+=dot(x,y-27,9,color)+line(x,y-16,x,y+29,color)+line(x,y+29,x-20-j*3,y+65,color)+line(x,y+29,x+23,y+58,color)+line(x,y,x-24,y+18-j*12,color)+line(x,y,x+29,y-5+j*9,color);}
  art+=line(64,202,352,202);for(let i=0;i<7;i++)art+=dot(64+i*48,202,3,i===seed%7?gold:blue);
 }else if(/optimization|profiler|memory|batch|pool|gc|frame|performance/.test(q)||term.category==='optimization'){
  for(let i=0;i<10;i++){const height=25+(seed>>(i*2%24)&63);art+=box(66+i*29,190-height,18,height,i===seed%10?gold:blue);}art+=line(55,195,365,195)+line(55,75,55,195);
  art+='<path d="M65 151Q120 '+(72+seed%50)+' 180 121T345 86" stroke="'+gold+'" stroke-width="2" fill="none"/>';
 }else if(/terrain|mesh|vertex|procedural|noise|uv|height|navigation|grid/.test(q)||['procedural','level'].includes(term.category)){
  const points=Array.from({length:24},(_,i)=>({x:67+(i%6)*54,y:78+Math.floor(i/6)*34+(seed>>(i%23)&15)}));
  points.forEach((p,i)=>{if(i%6<5)art+=line(p.x,p.y,points[i+1].x,points[i+1].y);if(i<18){art+=line(p.x,p.y,points[i+6].x,points[i+6].y);if(i%6<5)art+=line(p.x,p.y,points[i+7].x,points[i+7].y);}art+=dot(p.x,p.y,2,i===seed%24?gold:blue);});
 }else if(/ui|input|button|screen|canvas|touch|panel|interface/.test(q)||term.category==='ui'){
  art=box(72,64,276,136)+box(84,77,63,110)+box(158,77,175,47)+box(158,136,80,51,gold)+box(250,136,83,51);
  for(let i=0;i<4;i++)art+=line(95,93+i*21,132,93+i*21,i===seed%4?gold:blue);
 }else if(/platform|build|compile|package|asset|bundle|import|export|prefab/.test(q)||['assets','platform'].includes(term.category)){
  art=cube(210,120,40)+cube(101,165,17)+cube(319,85,17)+line(130,156,155,145,gold)+line(268,110,294,98,gold);
 }else if(/camera|perspective|projection|frustum/.test(q)||term.category==='camera'){
  art=box(73,96,52,45)+'<path d="M125 103L315 67V191L125 136Z" fill="'+blue+'" fill-opacity=".1" stroke="'+blue+'"/>'+cube(260,116,25)+line(98,118,317,118,gold);
 }else{
  art=box(73,65,275,137)+box(88,80,245,20,gold);
  for(let i=0;i<5;i++){const width=55+(seed>>(i*3)&63);art+=line(94+(i%3)*12,119+i*14,94+(i%3)*12+width,119+i*14,i===seed%5?gold:blue);}art+=cube(278,145,23);
 }
 return '<svg xmlns="http://www.w3.org/2000/svg" class="article-cover" viewBox="0 0 420 252" role="img" aria-label="'+coverEscape(term.name)+(term.visualType==='dictionary'?' 용어 카드':' 개념 도식')+'"><title>'+coverEscape(term.name)+' 개별 기술 일러스트</title><defs><radialGradient id="'+id+'-glow"><stop stop-color="'+blue+'" stop-opacity=".16"/><stop offset="1" stop-color="'+blue+'" stop-opacity="0"/></radialGradient><radialGradient id="'+id+'-orb" cx="30%" cy="24%"><stop stop-color="#fff7d6"/><stop offset=".42" stop-color="'+blue+'"/><stop offset="1" stop-color="#46390d"/></radialGradient></defs><rect width="420" height="252" fill="#171717"/><circle cx="245" cy="119" r="175" fill="url(#'+id+'-glow)"/>'+art+'</svg>';
}
function cardIllustration(term){return composeArticleCover(term);}
