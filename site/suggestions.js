'use strict';
const suggestionRules=[
{"ids":[33,34,35,36],"words":["pbr","노멀 맵","재질","금속","material"],"reason":"표면 재질과 반사 특성을 정하는 후보입니다."},
{"ids":[48,49,50,52,53],"words":["애니메이션","animation","리타기팅","역운동학"],"reason":"동작 혼합과 자세 보정에 관련됩니다."},
{"ids":[56,57,58,60,61],"words":["충돌","물리","collision","physics"],"reason":"접촉 검사와 물리 움직임을 검토할 때 활용합니다."},
{"ids":[66,67,68,69],"words":["행동 트리","블랙보드","내비메시","behavior tree","navmesh"],"reason":"NPC 판단과 이동 구조의 후보입니다."},
{"ids":[72,73,74,75,76,77],"words":["멀티플레이","네트워크","온라인","multiplayer","network"],"reason":"권한, 상태 전송과 지연 처리에 관련됩니다."},
{"ids":[80,81,82,83,86],"words":["최적화","프레임","성능","optimization","performance"],"reason":"표시 비용과 병목 측정을 검토하는 후보입니다."},
{"ids":[90,91,92,93],"words":["절차적","랜덤 맵","procedural"],"reason":"반복 가능한 콘텐츠 생성에 관련됩니다."},
{"ids":[94,95,96,97],"words":["오디오","소리","audio","sound"],"reason":"음원의 거리와 공간 표현을 검토하는 후보입니다."},

{ids:[0,3],words:['3인칭','삼인칭','third-person','third person','숄더','락온'],reason:'캐릭터와 적을 함께 보는 카메라 후보입니다.'},
{ids:[1,2],words:['탑다운','위에서','쿼터뷰','아이소메트릭','top-down','isometric'],reason:'위에서 공간을 읽는 카메라 후보입니다.'},
{ids:[4,7,18],words:['전투','싸우','싸움','타격','칼','검술','검으로','검을','근접','액션','combat','melee','action'],reason:'전투 전달력과 공격 범위 표현에 활용할 수 있습니다.'},
{ids:[8],words:['회피','구르','대시','피하','dodge','dash'],reason:'빠른 회피와 이동 조작의 후보입니다. 대시가 반드시 무적을 포함하지는 않습니다.'},
{ids:[9,10],words:['점프','플랫포머','발판','플랫폼','jump','platformer'],reason:'점프와 착지 전 입력 처리에 관련됩니다.'},
{ids:[11],words:['거미줄','스윙','그래플','갈고리','grapple','swing'],reason:'연결 지점을 중심으로 이동하는 방식입니다.'},
{ids:[12,14],words:['적 무리','적들','여러 적','다수의 적','둘러싸','군중','horde','crowd'],reason:'여러 적의 접근 경로와 공격 위치를 분배하는 후보입니다.'},
{ids:[13,14,1],words:['전략','rts','유닛','부대','대형','strategy','formation'],reason:'다수 유닛의 대형과 이동에 관련됩니다.'},
{ids:[15,16],words:['잠입','스텔스','들키','시야','stealth'],reason:'적의 감지와 이동 방향 안내에 관련됩니다.'},
{ids:[16,17],words:['탐험','오픈월드','미로','던전','explor','open world','dungeon'],reason:'방향 파악과 연결되는 탐험 동선의 후보입니다.'},
{ids:[20,22],words:['밤','어두운','공포','안개','night','horror','fog'],reason:'실루엣 구분과 거리감 표현의 후보입니다.'},
{ids:[21],words:['마법','스킬','폭발','충격파','magic','explosion'],reason:'움직임과 충돌을 강조하는 효과입니다.'}
];
function suggestTechniques(text){
 const clauses=String(text).toLowerCase().split(/[.!?。\n,;]|하지만|대신/),found=new Map();
 for(const rule of suggestionRules){
 const matches=rule.words.filter(word=>clauses.some(clause=>clause.includes(word)&&!/(없|않|제외|빼고|말고|아닌|아니|without|\bno\b|\bnot\b)/.test(clause)));
 if(!matches.length)continue;
 for(const id of rule.ids){if(!found.has(id))found.set(id,{id,reasons:[],matches:[]});const item=found.get(id);item.reasons.push(rule.reason);item.matches.push(...matches);}
 }
 return [...found.values()].map(item=>({...item,matches:[...new Set(item.matches)]}));
}

