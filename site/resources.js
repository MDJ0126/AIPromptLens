'use strict';
const researchSources=[
{name:'Red Blob Games',url:'https://www.redblobgames.com/',field:'알고리즘 · 시각적 원리',summary:'A*, 육각 격자, 노이즈 지형, 플로 필드를 인터랙티브 도식으로 설명합니다.',use:'표현 사전의 비교 도식과 원리 게시물에 참고하기 좋습니다.',note:'엔진 공통 개념과 엔진별 적용 코드를 구분해서 활용하세요.'},
{name:'Catlike Coding',url:'https://catlikecoding.com/unity/tutorials/',field:'Unity · 이동 · 셰이더',summary:'캐릭터 이동, 절차적 메시, 노이즈, 렌더링과 커스텀 SRP의 단계별 튜토리얼입니다.',use:'짧은 Unity 예제와 구조 설명을 확장할 때 참고하기 좋습니다.',note:'오래된 튜토리얼도 포함되어 있어 Unity와 렌더 파이프라인 버전을 확인해야 합니다.'},
{name:'Game AI Pro',url:'https://www.gameaipro.com/',field:'AI · 군중 · 전투 설계',summary:'실제 게임 개발자의 행동 선택, 내비게이션, 군중 이동과 전투 AI 자료입니다.',use:'공격 슬롯·포메이션·행동 트리·유틸리티 AI의 원저자 자료를 찾아볼 수 있습니다.',note:'공식 사이트에서 읽거나 내려받을 수 있지만 원문 PDF를 다른 사이트에 재배포하는 것은 허용되지 않습니다.'},
{name:'3D Math Primer',url:'https://gamemath.com/book/',field:'수학 · 공간 · 카메라',summary:'좌표계, 벡터, 행렬, 회전과 기하학을 다루는 온라인 책입니다.',use:'시점·방향·내적 등 용어의 의미를 설명할 때 참고하기 좋습니다.',note:'오래된 엔진 코드보다 수학 원리에 초점을 맞추세요.'},
{name:'GPU Gems 3',url:'https://developer.nvidia.com/gpugems/gpugems3/preface',field:'그래픽 · 렌더링',summary:'NVIDIA가 온라인으로 공개한 실시간 그래픽 기술 서적입니다.',use:'셰이더와 렌더링 방식의 원리와 비용을 비교할 때 참고하기 좋습니다.',note:'현재 엔진에서의 지원 여부와 API는 별도로 확인해야 합니다.'},
{name:'GDC Vault · Free',url:'https://gdcvault.com/free',field:'개발 사례 · 설계',summary:'무료로 공개된 게임 개발 컨퍼런스 자료의 목록입니다.',use:'기술이 실제 게임에서 어떤 문제를 해결했는지 찾아볼 수 있습니다.',note:'이 링크는 무료 목록입니다. 개별 영상의 접근 가능 여부와 발표 연도를 확인하세요.'},
{name:'Unity 6.0 공식 문서',url:'https://docs.unity3d.com/6000.0/Documentation/Manual/index.html',field:'Unity · 설정 · API',summary:'Unity 6.0의 기능과 프로젝트 설정을 설명하는 공식 매뉴얼입니다.',use:'Unity 예제를 작성할 때 버전과 실제 기능을 확인하는 기준 자료입니다.',note:'사용 중인 엔진·패키지 버전 및 렌더 파이프라인과 맞춰 보세요.'},
{name:'Unreal Engine 공식 문서',url:'https://dev.epicgames.com/documentation/en-us/unreal-engine',field:'Unreal · 설정 · API',summary:'Unreal Engine의 기능과 C++ API를 안내하는 공식 문서입니다.',use:'Unreal 예제의 클래스·설정·기능 지원 여부를 확인하는 기준 자료입니다.',note:'루트 링크는 최신 문서로 연결될 수 있으므로 사용하는 엔진 버전을 선택하세요.'},
{name:'Steam Audio',url:'https://valvesoftware.github.io/steam-audio/doc/unity/index.html',field:'오디오 · 차폐 · 전파',summary:'Valve의 Steam Audio 공식 문서이며 Unity·Unreal·C API 자료로 이어집니다.',use:'소리 차폐와 여러 샘플 방식, 음향 전파의 개념을 확인할 수 있습니다.',note:'플러그인 기능과 엔진 기본 오디오 기능을 구분하세요.'}
];
const resourceTarget=document.getElementById('resource-list');
for(const source of researchSources){
 const card=document.createElement('article');card.className='resource-card';
 const tag=document.createElement('p');tag.className='eyebrow';tag.textContent=source.field;
 const link=document.createElement('a');link.textContent=source.name+' ↗';link.href=source.url;link.target='_blank';link.rel='noopener noreferrer';
 const summary=document.createElement('p');summary.textContent=source.summary+' '+source.use;
 const note=document.createElement('small');note.textContent=source.note;
 card.append(tag,link,summary,note);resourceTarget.append(card);
}
const resourcesDialog=document.getElementById('resources-dialog');
document.getElementById('open-resources').addEventListener('click',()=>resourcesDialog.showModal());
document.getElementById('close-resources').addEventListener('click',()=>resourcesDialog.close());
resourcesDialog.addEventListener('click',event=>{if(event.target!==resourcesDialog)return;const rect=resourcesDialog.getBoundingClientRect();if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)resourcesDialog.close();});
