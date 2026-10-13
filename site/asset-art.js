'use strict';
// Each scene has a separate composition tied to the term's meaning.
function assetArticleScene(term,blue,gold){
 const stroke=blue, text=(x,y,label,color=blue,size=10)=>'<text x="'+x+'" y="'+y+'" fill="'+color+'" font-family="monospace" font-size="'+size+'">'+coverEscape(label)+'</text>';
 const rect=(x,y,w,h,color=blue)=>'<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" rx="5" fill="'+color+'" fill-opacity=".14" stroke="'+color+'"/>';
 const path=(d,color=blue,w=2)=>'<path d="'+d+'" fill="none" stroke="'+color+'" stroke-width="'+w+'" stroke-linecap="round" stroke-linejoin="round"/>';
 const circle=(x,y,r,color=blue)=>'<circle cx="'+x+'" cy="'+y+'" r="'+r+'" fill="'+color+'" fill-opacity=".18" stroke="'+color+'"/>';
 const arrow=(x,y,x2,y2)=>path('M'+x+' '+y+'H'+x2+'V'+y2+'m-7 -7 7 7 7-7',gold);
 const folder=(x,y,w=110,h=78)=>'<path d="M'+x+' '+(y+13)+'V'+y+'h'+w*.36+'l12 13H'+(x+w)+'v'+h+'H'+x+'Z" fill="'+blue+'" fill-opacity=".16" stroke="'+blue+'" stroke-width="2"/>';
 const file=(x,y,w=60,h=86,label='')=>'<path d="M'+x+' '+y+'h'+(w-15)+'l15 15v'+(h-15)+'H'+x+'Z" fill="'+blue+'" fill-opacity=".1" stroke="'+blue+'"/>'+path('M'+(x+w-15)+' '+y+'v15h15')+text(x+8,y+h-14,label,gold,9);
 const node=(x,y,label,color=blue)=>rect(x,y,82,36,color)+text(x+10,y+23,label,color,10);
 const sprite=(x,y,scale=6)=>{const rows=['00011000','00111100','01111110','01111110','00111100','00011000','00100100','01100110'];return rows.map((row,j)=>[...row].map((c,i)=>c==='1'?'<rect x="'+(x+i*scale)+'" y="'+(y+j*scale)+'" width="'+scale+'" height="'+scale+'" fill="'+(j<2?gold:blue)+'"/>':'').join('')).join('');};
 const robot=(x,y)=>rect(x-22,y,44,34)+rect(x-30,y+44,60,56)+circle(x-9,y+14,3,gold)+circle(x+9,y+14,3,gold)+path('M'+(x-38)+' '+(y+50)+'l-20 35M'+(x+38)+' '+(y+50)+'l20 35M'+(x-15)+' '+(y+105)+'v28M'+(x+15)+' '+(y+105)+'v28',gold,5);
 const mesh=()=>{let a='';const p=[[130,82],[197,57],[287,96],[309,162],[224,200],[122,175],[189,131],[252,135]];const edges=[[0,1],[1,2],[2,3],[3,4],[4,5],[5,0],[0,6],[1,6],[2,7],[3,7],[4,7],[5,6],[6,7],[6,4],[7,1]];edges.forEach(([a1,b])=>a+=path('M'+p[a1].join(' ')+'L'+p[b].join(' '),blue,1));p.forEach(([x,y])=>a+=circle(x,y,3,gold));return a;};
 switch(term.slug){
 case 'object-2d':return path('M63 193H352M76 205V58',blue,1)+rect(94,154,67,37)+rect(232,177,74,14)+sprite(189,94,8)+text(87,68,'Y',gold)+text(344,211,'X',gold)+text(112,215,'FLAT / XY',blue);
 case 'object-3d':return path('M208 151L102 193M208 151L332 192M208 151V56',gold)+text(90,201,'X',gold)+text(336,200,'Z',gold)+text(217,58,'Y',gold)+path('M152 101l57-28 64 29v62l-64 30-57-30Z')+path('M152 101l57 29 64-28M209 130v64')+circle(208,151,4,gold);
 case 'asset-package':return folder(72,68,158,103)+file(90,99,38,58,'IMG')+file(139,100,38,58,'SND')+file(186,100,28,58,'3D')+path('M246 124H285m-8-8 8 8-8 8',gold)+file(301,80,55,106,'.PKG')+path('M326 94v50m-3-42h6m-6 9h6m-6 9h6m-6 9h6',gold,3);
 case 'asset':return rect(79,71,107,64)+path('M87 122l29-30 21 19 17-12 23 24')+circle(164,87,6,gold)+rect(218,71,106,64)+path('M239 85v32m0-1c-17-8-20 17-3 12m3-44 44-10v36m0-1c-17-8-20 17-3 12',gold)+rect(79,148,107,56)+path('M119 161l24 8v21l-24 8-24-8v-21Z')+rect(218,148,106,56)+circle(270,176,15,gold)+path('M270 154v8m0 28v8m-22-22h8m28 0h8',gold);
 case 'direct-dependency':return node(60,116,'PROJECT',gold)+path('M149 134H264m-9-8 9 8-9 8',gold,3)+node(271,116,'PACKAGE')+text(171,103,'REQUEST',blue,11)+text(172,168,'A → B',gold,14);
 case 'indirect-dependency':return node(48,79,'PROJECT',gold)+node(170,118,'PKG A')+node(294,158,'PKG B')+path('M130 97h39v39m-8-8 8 8 8-8',gold)+path('M252 136h39v40m-8-8 8 8 8-8')+text(116,205,'A → B → C',gold,13);
 case 'embedded-package':return folder(74,60,274,145)+text(91,89,'PROJECT / Packages',gold,12)+folder(109,109,201,65)+text(126,151,'{ source code }',gold,17)+path('M97 100v86h220',blue,1);
 case 'fbx-format':return file(75,72,80,128,'FBX')+path('M165 127H210m-8-7 8 7-8 7',gold)+robot(282,64)+text(200,222,'MESH + RIG + MOTION',gold,10);
 case 'feature-set':return '<ellipse cx="209" cy="138" rx="153" ry="80" stroke="'+gold+'" stroke-dasharray="5 5" fill="none"/>'+node(93,101,'RENDER')+node(225,101,'CAMERA')+node(158,156,'POST FX')+text(155,56,'FEATURE SET',gold,13);
 case 'git-dependency':return circle(95,99,13,gold)+circle(183,99,13,gold)+circle(273,99,13,gold)+path('M108 99h62m26 0h64M183 112v39h67')+circle(265,151,13)+path('M280 151H327V184',gold)+file(304,184,49,34,'PKG')+text(77,64,'GIT REPOSITORY',gold,12);
 case 'local-package':return rect(62,84,106,97)+path('M78 151h74M82 166h24',gold)+circle(143,165,4,gold)+path('M184 132h45m-9-8 9 8-9 8',gold)+folder(253,81,105,93)+text(72,210,'file:../shared/package',gold,12);
 case 'package-manifests':return file(83,67,114,144,'package.json')+text(104,111,'{',gold,24)+text(119,124,'name: ...',blue)+text(119,143,'version: ...',blue)+text(104,167,'}',gold,24)+file(246,83,96,126,'manifest.json')+path('M206 126h30',gold);
 case 'mesh':return mesh()+text(120,223,'VERTICES / EDGES / FACES',gold,10);
 case 'model-file':return file(62,60,87,151,'MODEL')+path('M156 138h51m-8-7 8 7-8 7',gold)+mesh().replaceAll('M','M')+'<rect x="242" y="62" width="74" height="22" fill="#101f39"/>'+text(248,77,'IMPORT',gold,11);
 case 'model':return robot(211,60)+'<ellipse cx="211" cy="208" rx="77" ry="14" stroke="'+blue+'" fill="none"/>';
 case 'mutable-package':return folder(77,84,160,105)+text(91,143,'SOURCE',blue,13)+path('M256 178l56-92 15 10-56 92-23 17Z',gold,3)+path('M303 101l15 10M255 179l16 9',gold)+text(269,220,'EDIT',gold,12);
 case 'package-manifest':return file(127,56,171,159,'package.json')+text(143,101,'{',gold,24)+text(160,119,'"name": "...",',blue,12)+text(160,140,'"version": "1.0",',blue,12)+text(160,160,'"dependencies": {}',blue,10)+text(143,184,'}',gold,24);
 case 'project-manifest':return folder(62,60,124,77)+text(75,102,'PROJECT',gold,12)+path('M124 147v36h115',gold)+file(246,64,112,143,'manifest.json')+text(258,101,'dependencies',gold,11)+path('M259 116h63m-63 18h81m-81 18h55');
 case 'unity-project':return folder(144,61,130,72)+text(161,107,'PROJECT',gold,12)+path('M209 143v20M91 163h236M91 163v15M209 163v15M327 163v15')+node(50,178,'Assets')+node(168,178,'Packages',gold)+node(286,178,'Settings');
 case 'quad-primitive':return '<path d="M102 90H311V190H102Z" fill="'+blue+'" fill-opacity=".1" stroke="'+blue+'"/>'+path('M102 90L311 190',gold,1)+[[102,90],[311,90],[311,190],[102,190]].map(([x,y],i)=>circle(x,y,6,gold)+text(x-13,y-13,'V'+i,gold)).join('')+text(149,216,'4 VERTICES / 2 TRIANGLES',blue,9);
 case 'sprite':return rect(77,61,264,151)+path('M90 99H326M128 71V200M250 71V200M90 167H326',blue,1)+sprite(163,84,12)+path('M160 85h98v97h-98Z',gold)+text(94,229,'SPRITE RECT / PIVOT',gold,11)+circle(208,182,5,gold);
 case 'texture-importer':return rect(53,84,80,76)+path('M59 151l23-26 17 14 25-38')+circle(77,104,6,gold)+path('M141 125h47m-8-8 8 8-8 8',gold)+rect(197,67,100,123)+text(209,91,'IMPORT',gold,12)+path('M211 112h71m-71 23h71m-71 23h71')+circle(237,112,5,gold)+circle(271,135,5,gold)+circle(230,158,5,gold)+path('M302 125h20',gold)+rect(329,88,40,72);
 case 'texture-platform-overrides':return rect(55,98,68,67)+path('M65 154l18-22 13 10 19-25')+path('M136 132h45V80h30M181 132h30M181 132v52h30',gold)+rect(225,57,123,42)+text(235,83,'PC · BC7',blue,13)+rect(225,111,123,42,gold)+text(235,137,'MOBILE · ASTC',gold,11)+rect(225,165,123,42)+text(235,192,'WEB · ETC',blue,12);
 case 'upm-package':return rect(66,55,291,159)+rect(77,66,97,138)+text(87,91,'PACKAGES',gold,10)+path('M87 111h75m-75 23h75m-75 23h75')+rect(188,78,154,47)+text(199,105,'com.unity.*',blue,12)+text(195,151,'VERSION 1.0.0',blue,11)+rect(228,165,108,30,gold)+text(242,185,'INSTALL',gold,12);
 default:return null;
 }
}
