'use strict';
const originalIllustration=illustration;
const demoLabels={
shoulder:['어깨 너머 시점','대상 이동 → 조준'],topdown:['위에서 보기','플레이어 이동'],iso:['평행 투영','크기 유지하며 이동'],lock:['대상 고정','카메라 회전'],
hit:['공격 접근','적중 · 잠깐 정지','다시 움직임'],telegraph:['공격 범위 예고','준비 시간','공격 실행'],iframe:['회피 시작','무적 구간 · 피해 통과','무적 종료'],knock:['타격 전','충돌','대상이 밀려남'],
dash:['입력 대기','빠른 이동','멈춤'],coyote:['발판에서 이탈','공중에서 입력','점프 허용'],jump:['착지 전 입력 저장','착지','저장한 점프 실행'],swing:['고정된 연결점','줄 길이 유지','곡선 이동'],
slots:['각자 빈 자리 예약','겹치지 않게 접근','슬롯에 정착'],formation:['대형 배정','간격 유지 이동','목적지 도착'],path:['장애물 확인','우회 경로','목표 도착'],vision:['시야 밖','시야 안 · 감지','시야 밖'],
guidance:['밝은 출입구','목표 방향 강조'],landmark:['주변을 탐색','랜드마크는 같은 위치'],arena:['중앙 전투 공간','엄폐물 우회'],loop:['탐험 경로','출발점에 재연결'],rim:['조명 전','가장자리 강조'],trail:['무기 이동','뒤에 남는 궤적'],fog:['안개 전','먼 풍경 대비 감소'],shock:['충돌 지점','바깥으로 확산','효과 소멸']
};
illustration=function(term){
 const c=['#4e83d1','#5497cb','#cfa444','#7676bd'][Math.floor(term.id/4)%4];
 const unit=(x,y,color=c)=>'<g transform="translate('+x+' '+y+')"><ellipse cy="21" rx="11" ry="4" fill="#29446f" opacity=".12"/><circle cy="-12" r="6" fill="'+color+'"/><rect x="-7" y="-4" width="14" height="19" rx="4" fill="'+color+'"/><path d="M-4 13v11M4 13v11" stroke="'+color+'" stroke-width="4"/></g>';
 const floor='<path d="M25 140H295" stroke="#b8cce8" stroke-width="2"/>';
 const obj=(x,y,w=28,h=35)=>'<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" rx="3" fill="#d6e4f8" stroke="#95afd3"/>';
 const mover=(cls,content)=>'<g class="demo '+cls+'">'+content+'</g>';
 let body='';
 switch(term.visual){
 case 'shoulder':body='<path d="M119 100L286 46V141Z" fill="'+c+'" opacity=".08"/>'+unit(109,112)+mover('target-side',unit(217,95,'#c38955')+'<circle cx="217" cy="94" r="26" fill="none" stroke="'+c+'" stroke-dasharray="5 4"/><path d="M207 94h20m-10-10v20" stroke="'+c+'"/>');break;
 case 'topdown':body=obj(44,49,40,32)+obj(227,113,35,24)+mover('map-walk','<path d="M118 98l62-36-9 74Z" fill="'+c+'" opacity=".14"/><circle cx="118" cy="98" r="11" fill="'+c+'"/>');break;
 case 'iso':body='<g transform="translate(160 84) scale(1 .5) rotate(45)">'+obj(-70,-70,140,140)+obj(-42,-40,32,32)+'</g>'+mover('iso-walk',unit(126,88));break;
 case 'lock':body=unit(160,82,'#c38955')+'<circle cx="160" cy="82" r="32" fill="none" stroke="'+c+'" stroke-dasharray="4 4"/><g transform="translate(160 88) scale(1 .55)"><circle r="81" fill="none" stroke="#adc5e5"/><g class="demo camera-orbit"><path d="M81 0H0" stroke="'+c+'" stroke-dasharray="4 4"/><rect x="71" y="-8" width="20" height="16" rx="3" fill="'+c+'"/></g></g>';break;
 case 'hit':body=floor+mover('hit-attacker',unit(83,115)+'<path d="M91 106h32" stroke="'+c+'" stroke-width="5"/>')+mover('hit-target',unit(188,115,'#c38955'))+mover('hit-flash','<path d="M155 78l-11 20 18-4-10 29 29-31-18 6 6-20" fill="#d8a147"/><text x="130" y="59" fill="#9f6828" font-size="10">HIT STOP</text>');break;
 case 'telegraph':body=floor+unit(233,111,'#c38955')+unit(102,111)+mover('attack-warning','<path d="M225 131L56 92V144Z" fill="#eeb083" opacity=".4"/><path d="M225 131L56 92V144Z" fill="none" stroke="#c37944"/>')+mover('attack-strike','<path d="M230 107H65" stroke="#b46a37" stroke-width="9"/>');break;
 case 'iframe':body=floor+mover('dodge-unit',unit(96,114))+mover('invincible','<rect x="134" y="77" width="65" height="62" rx="26" fill="'+c+'" opacity=".18"/><text x="139" y="68" fill="'+c+'" font-size="10">INVINCIBLE</text>')+mover('projectile','<circle cx="274" cy="109" r="5" fill="#cf7d58"/>');break;
 case 'knock':body=floor+mover('hit-attacker',unit(79,115))+mover('knock-target',unit(156,115,'#c38955'))+mover('hit-flash','<path d="M137 100h20" stroke="#cfa444" stroke-width="7"/>');break;
 case 'dash':body=floor+mover('dash-trail','<path d="M76 96H193M70 106H194M76 116H192" stroke="'+c+'" opacity=".35" stroke-width="3"/>')+mover('dash-run',unit(92,114));break;
 case 'coyote':body=obj(24,140,120,32)+'<path d="M144 140h115" stroke="#9cb7a5" stroke-dasharray="4 4"/>'+mover('coyote-run',unit(113,115))+mover('input-flash','<rect x="186" y="58" width="73" height="23" rx="4" fill="#d4ebdf"/><text x="194" y="73" fill="'+c+'" font-size="9">JUMP INPUT ↑</text>');break;
 case 'jump':body=floor+mover('buffer-jump',unit(157,63))+mover('buffer-input','<rect x="213" y="78" width="79" height="29" rx="5" fill="#d6e9f0"/><text x="222" y="97" fill="'+c+'" font-size="9">INPUT SAVED</text>');break;
 case 'swing':body='<circle cx="160" cy="43" r="5" fill="'+c+'"/><path d="M100 130Q160 169 220 130" fill="none" stroke="#aabedc" stroke-dasharray="4 5"/><g transform="translate(160 43)"><g class="demo rope-swing"><path d="M0 0V76" stroke="'+c+'" stroke-width="2"/>'+unit(0,89)+'</g></g>';break;
 case 'slots':body=unit(160,92);for(let i=0;i<6;i++){const a=i*Math.PI/3,x=160+Math.cos(a)*69,y=100+Math.sin(a)*34;body+='<circle cx="'+x+'" cy="'+y+'" r="9" fill="none" stroke="'+c+'" stroke-dasharray="3 3"/><g transform="translate('+x+' '+y+') rotate('+i*60+')"><g class="demo slot-arrive" style="--delay:'+(-i*.13)+'s"><circle cx="0" cy="0" r="6" fill="#c38955"/></g></g>';}break;
 case 'formation':for(let i=0;i<12;i++)body+=mover('formation-move','<circle cx="'+(53+i%4*32)+'" cy="'+(74+Math.floor(i/4)*23)+'" r="6" fill="'+c+'"/>');break;
 case 'path':body=obj(133,72,38,62)+'<path d="M65 121V61H221V119" fill="none" stroke="'+c+'" stroke-dasharray="5 5"/>'+mover('path-follow','<circle cx="65" cy="121" r="8" fill="'+c+'"/>')+'<circle cx="221" cy="119" r="12" fill="none" stroke="#c38955"/>';break;
 case 'vision':body='<path d="M76 103L250 48Q279 101 250 155Z" fill="'+c+'" opacity=".12"/><circle cx="76" cy="103" r="9" fill="'+c+'"/>'+mover('vision-cross',unit(198,51,'#c38955'))+mover('detected','<text x="91" y="93" font-size="10" fill="'+c+'">DETECTED !</text>');break;
 case 'guidance':body='<path d="M30 154L133 85H191L293 154Z" fill="#dbe6f8"/><rect x="138" y="55" width="47" height="61" fill="#b4caeb"/>'+mover('door-glow','<rect x="138" y="55" width="47" height="61" fill="#f5ce72"/><path d="M139 116L97 153H228L184 116Z" fill="#f5ce72" opacity=".25"/>')+mover('walk-door',unit(94,124));break;
 case 'landmark':body='<path d="M12 146L78 83L122 136L218 78L305 147" fill="#d7e3f5"/><path d="M161 114V56l14-22 14 22v58Z" fill="#88a7d7"/><path d="M166 60h18" stroke="#e8bb61" stroke-width="5"/>'+mover('map-walk',unit(106,132));break;
 case 'arena':body='<ellipse cx="160" cy="103" rx="114" ry="51" fill="#e4ecfa" stroke="#a3bcde"/>'+obj(111,89,30,38)+obj(210,89,27,31)+mover('arena-walk','<circle cx="80" cy="126" r="8" fill="'+c+'"/>')+'<path d="M80 126L91 70L164 70L176 126" fill="none" stroke="'+c+'" stroke-dasharray="4 5"/>';break;
 case 'loop':body='<path d="M73 119V67H245V130H73V119" fill="none" stroke="#bdcfbf" stroke-width="13"/><path d="M156 67V130" stroke="#d7ab6d" stroke-width="6" stroke-dasharray="5 4"/>'+mover('loop-walk','<circle cx="73" cy="119" r="7" fill="'+c+'"/>');break;
 case 'rim':body='<rect x="38" y="46" width="244" height="104" rx="10" fill="#d7e2d7"/>'+unit(157,103,'#647c6c')+mover('rim-show','<path d="M164 91v20h-3v16M159 85a6 6 0 0 0 3-10" fill="none" stroke="#fff4b4" stroke-width="4"/>');break;
 case 'trail':body=unit(153,120)+mover('blade-swing','<path d="M153 104L211 63" stroke="'+c+'" stroke-width="4"/>')+mover('trail-show','<path d="M79 93Q164 31 230 104" fill="none" stroke="'+c+'" stroke-width="12" opacity=".18"/><path d="M79 93Q164 31 230 104" fill="none" stroke="'+c+'" stroke-width="3" opacity=".5"/>');break;
 case 'fog':body='<path d="M0 128L73 58L132 127L232 54L320 128V154H0" fill="#8fac99"/><path d="M0 146L93 81L178 143L266 99L320 143V170H0" fill="#608769"/>'+mover('fog-show','<path d="M0 128L73 58L132 127L232 54L320 128V146H0" fill="#e8f0e7"/><rect y="99" width="320" height="28" fill="#e8f0e7" opacity=".6"/>')+'<path d="M0 175L62 130L178 175L265 139L320 175" fill="#416952"/>';break;
 case 'shock':body=unit(160,105)+'<g transform="translate(160 132)"><ellipse class="demo shock-ring" rx="16" ry="6" fill="none" stroke="'+c+'" stroke-width="2"/><ellipse class="demo shock-ring" style="animation-delay:-.25s" rx="16" ry="6" fill="none" stroke="'+c+'" stroke-width="1"/></g>';break;
 default:return originalIllustration(term);
 }
 const labels=demoLabels[term.visual];
 return '<svg class="game-demo" viewBox="0 0 320 184" role="img" aria-label="'+term.name+' · '+labels.join(' → ')+'"><title>'+term.name+' 개념 도식</title><rect width="320" height="184" fill="#eef4ff"/><path d="M0 48H320M0 76H320M0 104H320M0 132H320M32 40V160M64 40V160M96 40V160M128 40V160M160 40V160M192 40V160M224 40V160M256 40V160M288 40V160" stroke="#dce7f7" stroke-width=".7"/>'+body+'<rect y="159" width="320" height="25" fill="#fff" opacity=".86"/>'+labels.map((label,i)=>'<text x="160" y="176" text-anchor="middle" class="demo phase-label phase-'+i+' phases-'+labels.length+'" fill="#4d6894" font-size="9">'+(i+1)+' / '+labels.length+' · '+label+'</text>').join('')+'</svg>';
};

