const categories = [
{id:'all',name:'모든 표현',icon:'⊞'},
{"id":"assets","name":"에셋 · 패키지","icon":"◇"},{"id":"tools","name":"개발 도구","icon":"◇"},{"id":"platform","name":"빌드 · 플랫폼","icon":"◇"},{"id":"ui","name":"UI · 입력","icon":"◇"},
{"id":"rendering","name":"렌더링 · 재질","icon":"◇"},{"id":"animation","name":"애니메이션","icon":"◇"},{"id":"physics","name":"물리 · 충돌","icon":"◇"},{"id":"network","name":"네트워크","icon":"◇"},{"id":"optimization","name":"최적화","icon":"◇"},{"id":"procedural","name":"절차적 생성","icon":"◇"},{"id":"audio","name":"오디오","icon":"◇"},{"id":"architecture","name":"코드 · 구조","icon":"◇"},
{id:'camera',name:'카메라 · 시점',icon:'◎'},{id:'combat',name:'전투 · 타격감',icon:'⚔'},{id:'movement',name:'이동 · 조작',icon:'↗'},{id:'ai',name:'AI · 군중',icon:'⌘'},{id:'level',name:'레벨 · 공간',icon:'◇'},{id:'effects',name:'빛 · 시각 효과',icon:'✳'},{id:'principles',name:'원리 · 설계',icon:'◈'}
];
const terms = [
  {
    "category": "camera",
    "name": "숄더 뷰",
    "en": "Over-the-shoulder",
    "desc": "캐릭터의 어깨 너머로 바라보는 시점.",
    "ko": "캐릭터를 화면 한쪽에 배치하고 어깨 너머로 조준 방향이 보이는 3인칭 카메라를 만들어 주세요.",
    "promptEn": "Use an over-the-shoulder third-person camera, keeping the character to one side and the aiming direction visible.",
    "visual": "shoulder",
    "tags": [
      "beginner",
      "action"
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-Camera.html",
    "slug": "shoulder",
    "id": 0,
    "genres": [
      "action",
      "shooter",
      "rpg",
      "horror"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewScope": "Unity 6.0 카메라와 좌표 변환을 이용한 오프셋 배치 예시입니다. Shoulder라는 내장 컴포넌트가 있다는 뜻은 아닙니다.",
    "reviewLimit": "구성 기능·소스 구조 대조입니다. Unity/Unreal 컴파일과 실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-Camera.html",
        "method": "원문 자료 대조"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "출처 및 설명 대조",
        "scope": "Unity 6.0 카메라와 좌표 변환을 이용한 오프셋 배치 예시입니다. Shoulder라는 내장 컴포넌트가 있다는 뜻은 아닙니다."
      }
    ]
  },
  {
    "category": "camera",
    "name": "탑다운 뷰",
    "en": "Top-down view",
    "desc": "위에서 내려다보며 공간 전체를 읽는 시점.",
    "ko": "플레이어와 주변 장애물을 위에서 내려다보는 탑다운 카메라를 만들어 주세요.",
    "promptEn": "Use a top-down camera that shows the player and surrounding obstacles from above.",
    "visual": "topdown",
    "tags": [
      "beginner",
      "strategy"
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-Camera.html",
    "slug": "topdown",
    "id": 1,
    "genres": [
      "strategy",
      "rpg",
      "action",
      "puzzle",
      "simulation"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewScope": "Unity 6.0 카메라의 직교 투영을 확인했습니다. 위에서 보는 시점은 직접 배치하는 카메라 구성입니다.",
    "reviewLimit": "구성 기능·소스 구조 대조입니다. Unity/Unreal 컴파일과 실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-Camera.html",
        "method": "원문 자료 대조"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "출처 및 설명 대조",
        "scope": "Unity 6.0 카메라의 직교 투영을 확인했습니다. 위에서 보는 시점은 직접 배치하는 카메라 구성입니다."
      }
    ]
  },
  {
    "category": "camera",
    "name": "아이소메트릭 뷰",
    "en": "Isometric view",
    "desc": "비스듬한 평행 시점으로 깊이를 표현해요.",
    "ko": "원근에 따른 크기 변화 없이 공간의 높이와 깊이가 보이는 아이소메트릭 시점으로 구성해 주세요.",
    "promptEn": "Use an isometric view with parallel projection to reveal height and depth without perspective scaling.",
    "visual": "iso",
    "tags": [
      "strategy"
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html",
    "slug": "iso",
    "id": 2,
    "genres": [
      "action",
      "rpg",
      "shooter",
      "adventure",
      "horror"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewScope": "Unity 6 용어집의 등각 투영 정의를 대조했습니다. 카메라 구성 예제의 엔진 실행은 미확인입니다.",
    "reviewLimit": "구성 기능·소스 구조 대조입니다. Unity/Unreal 컴파일과 실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html",
        "method": "공식 용어집 정의 대조"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "출처 및 설명 대조",
        "scope": "Unity 6 용어집의 등각 투영 정의를 대조했습니다. 카메라 구성 예제의 엔진 실행은 미확인입니다."
      }
    ],
    "aliases": [
      "isometric projection"
    ]
  },
  {
    "category": "camera",
    "name": "락온 카메라",
    "en": "Lock-on camera",
    "desc": "대상을 시야에 유지하며 주변을 돌아요.",
    "ko": "플레이어와 선택한 적을 화면에 유지하고 대상 주변을 회전할 수 있는 락온 카메라를 만들어 주세요.",
    "promptEn": "Create a lock-on camera that keeps the player and selected enemy in view while allowing orbiting around the target.",
    "visual": "lock",
    "tags": [
      "action"
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/ScriptReference/Transform.LookAt.html",
    "slug": "lock",
    "id": 3,
    "genres": [
      "action",
      "rpg",
      "shooter",
      "adventure",
      "horror"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewScope": "Unity 6.0 Transform.LookAt의 목표 방향 회전을 확인했습니다. 락온 선택·해제·가시성 관리는 직접 구현합니다.",
    "reviewLimit": "구성 기능·소스 구조 대조입니다. Unity/Unreal 컴파일과 실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/ScriptReference/Transform.LookAt.html",
        "method": "원문 자료 대조"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "출처 및 설명 대조",
        "scope": "Unity 6.0 Transform.LookAt의 목표 방향 회전을 확인했습니다. 락온 선택·해제·가시성 관리는 직접 구현합니다."
      }
    ]
  },
  {
    "category": "combat",
    "name": "애니메이션 일시 정지",
    "en": "Animation pause",
    "desc": "짧게 애니메이션 재생을 멈추어 동작의 순간을 강조하는 구성입니다. 게임 전체의 히트 스톱과는 범위가 다릅니다.",
    "ko": "공격이 적중하는 순간 공격자와 대상의 동작을 짧게 멈추는 히트 스톱을 적용해 주세요.",
    "promptEn": "Apply a brief hit stop to the attacker and target when a strike connects.",
    "visual": "hit",
    "tags": [
      "beginner",
      "action"
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/ScriptReference/Animator-speed.html",
    "slug": "hit",
    "id": 4,
    "genres": [
      "action",
      "rpg",
      "shooter"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewScope": "Unity 6.0 Animator.speed로 애니메이션 속도 제어가 가능함을 확인했습니다. 물리와 게임 전체 정지를 구현한 코드가 아니므로 명칭을 좁혔습니다.",
    "reviewLimit": "구성 기능·소스 구조 대조입니다. Unity/Unreal 컴파일과 실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/ScriptReference/Animator-speed.html",
        "method": "원문 자료 대조"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "출처 및 설명 대조",
        "scope": "Unity 6.0 Animator.speed로 애니메이션 속도 제어가 가능함을 확인했습니다. 물리와 게임 전체 정지를 구현한 코드가 아니므로 명칭을 좁혔습니다."
      }
    ]
  },
  {
    "category": "combat",
    "name": "넉백",
    "en": "Knockback",
    "desc": "맞은 방향에 따라 대상을 밀어내요.",
    "ko": "공격을 맞은 대상이 타격 방향으로 밀려나는 넉백을 적용하고 거리는 조정 가능하게 해 주세요.",
    "promptEn": "Apply directional knockback on hit, with configurable displacement.",
    "visual": "knock",
    "tags": [
      "action"
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/ScriptReference/Rigidbody.AddForce.html",
    "slug": "knock",
    "id": 7,
    "genres": [
      "action",
      "rpg",
      "shooter"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewScope": "Unity 6.0 힘 적용과 이동 제어가 가능함을 확인했습니다. 현재 Unity 코드는 물리 힘 대신 CharacterController 이동입니다.",
    "reviewLimit": "구성 기능·소스 구조 대조입니다. Unity/Unreal 컴파일과 실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/ScriptReference/Rigidbody.AddForce.html",
        "method": "원문 자료 대조"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "출처 및 설명 대조",
        "scope": "Unity 6.0 힘 적용과 이동 제어가 가능함을 확인했습니다. 현재 Unity 코드는 물리 힘 대신 CharacterController 이동입니다."
      }
    ]
  },
  {
    "category": "movement",
    "name": "대시",
    "en": "Dash",
    "desc": "짧은 시간에 빠르게 거리를 좁혀요.",
    "ko": "입력 방향으로 짧게 빠르게 이동하는 대시를 만들고 거리와 재사용 시간을 조정 가능하게 해 주세요.",
    "promptEn": "Create a short directional dash with configurable distance and cooldown.",
    "visual": "dash",
    "tags": [
      "beginner",
      "action"
    ],
    "source": "https://raw.githubusercontent.com/NoelFB/Celeste/master/Source/Player/Player.cs",
    "slug": "dash",
    "id": 8,
    "genres": [
      "action",
      "platformer",
      "rpg"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewType": "구현·설계 패턴",
    "reviewScope": "Celeste 개발자 공개 Player.cs의 Dash 상태·속도 처리를 확인했습니다. 예제는 동일 게임 구현이 아닙니다.",
    "reviewVersion": "개발자 공개 Celeste 소스",
    "reviewLimit": "구성 기능·소스 구조 대조입니다. Unity/Unreal 컴파일과 실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://raw.githubusercontent.com/NoelFB/Celeste/master/Source/Player/Player.cs",
        "method": "원문 자료 대조"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "출처 및 설명 대조",
        "scope": "Celeste 개발자 공개 Player.cs의 Dash 상태·속도 처리를 확인했습니다. 예제는 동일 게임 구현이 아닙니다."
      }
    ]
  },
  {
    "category": "movement",
    "name": "코요테 타임",
    "en": "Coyote time",
    "desc": "발판을 벗어난 직후에도 점프할 수 있어요.",
    "ko": "발판에서 떨어진 직후 짧은 시간 동안 점프 입력을 허용하는 코요테 타임을 추가해 주세요.",
    "promptEn": "Add coyote time so a jump input is accepted briefly after leaving a ledge.",
    "visual": "coyote",
    "tags": [
      "beginner",
      "action"
    ],
    "source": "https://raw.githubusercontent.com/NoelFB/Celeste/master/Source/Player/Player.cs",
    "slug": "coyote",
    "id": 9,
    "genres": [
      "platformer",
      "action"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewType": "구현·설계 패턴",
    "reviewScope": "Celeste 개발자 공개 Player.cs의 jumpGraceTimer 갱신과 점프 허용 분기를 확인했습니다.",
    "reviewVersion": "개발자 공개 Celeste 소스",
    "reviewLimit": "구성 기능·소스 구조 대조입니다. Unity/Unreal 컴파일과 실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://raw.githubusercontent.com/NoelFB/Celeste/master/Source/Player/Player.cs",
        "method": "원문 자료 대조"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "출처 및 설명 대조",
        "scope": "Celeste 개발자 공개 Player.cs의 jumpGraceTimer 갱신과 점프 허용 분기를 확인했습니다."
      }
    ]
  },
  {
    "category": "movement",
    "name": "점프 입력 버퍼",
    "en": "Jump buffer",
    "desc": "착지 직전 누른 점프를 기억해요.",
    "ko": "착지 직전의 점프 입력을 잠깐 저장하고 착지할 때 점프를 실행하는 입력 버퍼를 추가해 주세요.",
    "promptEn": "Buffer jump input shortly before landing and execute the jump upon landing.",
    "visual": "jump",
    "tags": [
      "action"
    ],
    "source": "https://raw.githubusercontent.com/NoelFB/Celeste/master/Source/Player/Player.cs",
    "slug": "jump",
    "id": 10,
    "genres": [
      "action",
      "rpg",
      "platformer",
      "adventure"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewScope": "Celeste 개발자 공개 Player.cs의 Jump 입력 검사와 ConsumeBuffer 호출을 확인했습니다.",
    "reviewLimit": "구성 기능·소스 구조 대조입니다. Unity/Unreal 컴파일과 실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://raw.githubusercontent.com/NoelFB/Celeste/master/Source/Player/Player.cs",
        "method": "원문 자료 대조"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "출처 및 설명 대조",
        "scope": "Celeste 개발자 공개 Player.cs의 Jump 입력 검사와 ConsumeBuffer 호출을 확인했습니다."
      }
    ]
  },
  {
    "category": "movement",
    "name": "그래플 스윙",
    "en": "Grapple swing",
    "desc": "연결 지점을 중심으로 곡선을 그리며 이동해요.",
    "ko": "선택한 연결 지점을 기준으로 캐릭터가 스윙하도록 만들고 줄 길이와 이동 보정은 조정 가능하게 해 주세요.",
    "promptEn": "Create grapple swinging around a chosen anchor, with configurable rope length and movement assistance.",
    "visual": "swing",
    "tags": [
      "action"
    ],
    "source": "https://www.gdcvault.com/play/1026422",
    "slug": "swing",
    "id": 11,
    "genres": [
      "action",
      "platformer",
      "adventure"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewScope": "Insomniac 개발자의 GDC 2019 발표 소개에서 스윙 이동의 존재를 확인했습니다. 예제는 발표 구현이 아닌 별도 교육용 제약 모델입니다.",
    "reviewLimit": "구성 기능·소스 구조 대조입니다. Unity/Unreal 컴파일과 실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://www.gdcvault.com/play/1026422",
        "method": "검색에 노출된 원문 일부 대조"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "출처 및 설명 대조",
        "scope": "Insomniac 개발자의 GDC 2019 발표 소개에서 스윙 이동의 존재를 확인했습니다. 예제는 발표 구현이 아닌 별도 교육용 제약 모델입니다."
      }
    ]
  },
  {
    "category": "ai",
    "name": "공격 슬롯",
    "en": "Attack slots",
    "desc": "적마다 설 자리를 나눠 겹침을 줄여요.",
    "ko": "플레이어 주변에 공격 슬롯을 놓고 적이 빈 슬롯을 예약하도록 만들어 주세요. 슬롯을 못 받은 적은 대기하게 해 주세요.",
    "promptEn": "Assign enemies to reserved attack slots around the player and make unassigned enemies wait.",
    "visual": "slots",
    "tags": [
      "action",
      "strategy"
    ],
    "source": "https://www.gameaipro.com/GameAIPro/GameAIPro_Chapter28_Beyond_the_Kung-Fu_Circle_A_Flexible_System_for_Managing_NPC_Attacks.pdf",
    "slug": "slots",
    "id": 12,
    "genres": [
      "action",
      "rpg"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewScope": "Game AI Pro 28장의 NPC 공격 관리와 위치·용량 배분 설명을 확인했습니다. 예제는 단순 예약 배열입니다.",
    "reviewLimit": "구성 기능·소스 구조 대조입니다. Unity/Unreal 컴파일과 실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://www.gameaipro.com/GameAIPro/GameAIPro_Chapter28_Beyond_the_Kung-Fu_Circle_A_Flexible_System_for_Managing_NPC_Attacks.pdf",
        "method": "원문 자료 대조"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "출처 및 설명 대조",
        "scope": "Game AI Pro 28장의 NPC 공격 관리와 위치·용량 배분 설명을 확인했습니다. 예제는 단순 예약 배열입니다."
      }
    ]
  },
  {
    "category": "ai",
    "name": "포메이션",
    "en": "Formation",
    "desc": "여러 유닛이 정해진 대형으로 이동해요.",
    "ko": "유닛마다 대형 안의 위치를 배정하고 이동 중에도 간격을 유지하도록 만들어 주세요.",
    "promptEn": "Assign each unit a position in a formation and maintain spacing during movement.",
    "visual": "formation",
    "tags": [
      "strategy"
    ],
    "source": "https://www.gameaipro.com/GameAIPro2/GameAIPro2_Chapter20_Hierarchical_Architecture_for_Group_Navigation_Behaviors.pdf",
    "slug": "formation",
    "id": 13,
    "genres": [
      "strategy",
      "simulation"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewScope": "Game AI Pro 2 20장의 그룹 내비게이션·포메이션 설명을 확인했습니다. 예제는 그 시스템 전체를 재현하지 않습니다.",
    "reviewLimit": "구성 기능·소스 구조 대조입니다. Unity/Unreal 컴파일과 실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://www.gameaipro.com/GameAIPro2/GameAIPro2_Chapter20_Hierarchical_Architecture_for_Group_Navigation_Behaviors.pdf",
        "method": "원문 자료 대조"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "출처 및 설명 대조",
        "scope": "Game AI Pro 2 20장의 그룹 내비게이션·포메이션 설명을 확인했습니다. 예제는 그 시스템 전체를 재현하지 않습니다."
      }
    ]
  },
  {
    "category": "ai",
    "name": "경로 탐색",
    "en": "Pathfinding",
    "desc": "장애물을 돌아 목표 위치로 이동해요.",
    "ko": "이동 가능한 공간에서 장애물을 피하는 경로를 계산하고 목표 위치까지 따라가도록 만들어 주세요.",
    "promptEn": "Compute a path around obstacles through traversable space and follow it to the target.",
    "visual": "path",
    "tags": [
      "beginner",
      "strategy"
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/ScriptReference/AI.NavMeshAgent.SetDestination.html",
    "slug": "path",
    "id": 14,
    "genres": [
      "strategy",
      "rpg",
      "simulation",
      "adventure"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewScope": "Unity 6.0 NavMeshAgent.SetDestination의 요청 API를 확인했습니다. 반환 성공은 도착 완료가 아닙니다.",
    "reviewLimit": "구성 기능·소스 구조 대조입니다. Unity/Unreal 컴파일과 실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/ScriptReference/AI.NavMeshAgent.SetDestination.html",
        "method": "원문 자료 대조"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "출처 및 설명 대조",
        "scope": "Unity 6.0 NavMeshAgent.SetDestination의 요청 API를 확인했습니다. 반환 성공은 도착 완료가 아닙니다."
      }
    ]
  },
  {
    "category": "ai",
    "name": "시야 감지",
    "en": "Field-of-view detection",
    "desc": "시야 안에 들어온 대상을 감지해요.",
    "ko": "적의 시야 각도와 거리를 설정하고 장애물에 가려지지 않은 플레이어만 감지하도록 만들어 주세요.",
    "promptEn": "Detect the player within a configurable view cone and distance, checking for occluding obstacles.",
    "visual": "vision",
    "tags": [
      "action",
      "strategy"
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/ScriptReference/Physics.Raycast.html",
    "slug": "vision",
    "id": 15,
    "genres": [
      "action",
      "horror",
      "adventure",
      "strategy"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewScope": "Unity 6.0 직선 충돌 검사로 가림을 판정할 수 있음을 확인했습니다. 거리·시야각과 조합한 직접 구현 예시입니다.",
    "reviewLimit": "구성 기능·소스 구조 대조입니다. Unity/Unreal 컴파일과 실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/ScriptReference/Physics.Raycast.html",
        "method": "원문 자료 대조"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "출처 및 설명 대조",
        "scope": "Unity 6.0 직선 충돌 검사로 가림을 판정할 수 있음을 확인했습니다. 거리·시야각과 조합한 직접 구현 예시입니다."
      }
    ]
  },
  {
    "category": "level",
    "name": "시선 유도",
    "en": "Visual guidance",
    "desc": "빛과 형태로 다음 목적지를 알려줘요.",
    "ko": "밝은 출입구와 대비되는 형태로 플레이어의 시선을 다음 목표 방향으로 유도해 주세요.",
    "promptEn": "Guide the player toward the next objective using a lit doorway and contrasting shapes.",
    "visual": "guidance",
    "tags": [
      "beginner",
      "action"
    ],
    "source": "https://media.gdcvault.com/gdc2018/presentations/DShaver_Invisible_Intuition_GDC2018.pdf",
    "slug": "guidance",
    "id": 16,
    "genres": [
      "action",
      "rpg",
      "adventure",
      "horror",
      "puzzle"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewScope": "David Shaver의 GDC 2018 원저자 자료 검색 본문에서 빛·형태를 이용한 안내를 확인했습니다. 전체 PDF는 크기 제한으로 열지 못했습니다.",
    "reviewLimit": "구성 기능·소스 구조 대조입니다. Unity/Unreal 컴파일과 실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://media.gdcvault.com/gdc2018/presentations/DShaver_Invisible_Intuition_GDC2018.pdf",
        "method": "검색에 노출된 원문 일부 대조"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "출처 및 설명 대조",
        "scope": "David Shaver의 GDC 2018 원저자 자료 검색 본문에서 빛·형태를 이용한 안내를 확인했습니다. 전체 PDF는 크기 제한으로 열지 못했습니다."
      }
    ]
  },
  {
    "category": "level",
    "name": "랜드마크",
    "en": "Landmark",
    "desc": "눈에 띄는 지형으로 방향을 기억해요.",
    "ko": "멀리서도 구별되는 랜드마크를 배치해 플레이어가 방향과 위치를 파악하도록 해 주세요.",
    "promptEn": "Place a recognizable distant landmark to help the player understand orientation and position.",
    "visual": "landmark",
    "tags": [
      "beginner"
    ],
    "source": "https://media.gdcvault.com/gdc2018/presentations/DShaver_Invisible_Intuition_GDC2018.pdf",
    "slug": "landmark",
    "id": 17,
    "genres": [
      "action",
      "rpg",
      "adventure",
      "horror",
      "puzzle"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewScope": "David Shaver의 GDC 2018 원저자 자료 검색 본문에서 랜드마크를 통한 안내를 확인했습니다. 전체 PDF는 크기 제한으로 열지 못했습니다.",
    "reviewLimit": "구성 기능·소스 구조 대조입니다. Unity/Unreal 컴파일과 실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://media.gdcvault.com/gdc2018/presentations/DShaver_Invisible_Intuition_GDC2018.pdf",
        "method": "검색에 노출된 원문 일부 대조"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "출처 및 설명 대조",
        "scope": "David Shaver의 GDC 2018 원저자 자료 검색 본문에서 랜드마크를 통한 안내를 확인했습니다. 전체 PDF는 크기 제한으로 열지 못했습니다."
      }
    ]
  },
  {
    "category": "level",
    "name": "전투 아레나",
    "en": "Combat arena",
    "desc": "전투를 위한 공간과 동선을 설계해요.",
    "ko": "중앙 전투 공간, 가장자리 엄폐물, 우회 동선이 있는 전투 아레나를 구성해 주세요.",
    "promptEn": "Design a combat arena with a central fighting space, cover at the edges, and flanking routes.",
    "visual": "arena",
    "tags": [
      "action"
    ],
    "source": "https://dev.epicgames.com/documentation/fortnite/tmnt-enemy-encounters-and-obstacles-in-unreal-editor-for-fortnite?lang=en-US",
    "slug": "arena",
    "id": 18,
    "genres": [
      "action",
      "rpg",
      "adventure",
      "horror",
      "puzzle"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewType": "구현·설계 패턴",
    "reviewScope": "Epic UEFN TMNT의 전투 공간·진입·종료 사례를 확인했습니다. 일반 Unity/Unreal 예제는 엄폐물 배치만 다룹니다.",
    "reviewVersion": "UEFN 공식 문서",
    "reviewLimit": "구성 기능·소스 구조 대조입니다. Unity/Unreal 컴파일과 실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://dev.epicgames.com/documentation/fortnite/tmnt-enemy-encounters-and-obstacles-in-unreal-editor-for-fortnite?lang=en-US",
        "method": "원문 자료 대조"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "출처 및 설명 대조",
        "scope": "Epic UEFN TMNT의 전투 공간·진입·종료 사례를 확인했습니다. 일반 Unity/Unreal 예제는 엄폐물 배치만 다룹니다."
      }
    ]
  },
  {
    "category": "effects",
    "name": "림 라이트",
    "en": "Rim light",
    "desc": "가장자리를 밝혀 실루엣을 구분해요.",
    "ko": "배경과 캐릭터가 구분되도록 실루엣 가장자리에 림 라이트를 적용해 주세요.",
    "promptEn": "Add rim lighting along the character silhouette to separate it from the background.",
    "visual": "rim",
    "tags": [
      "beginner"
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/StandardShaderFresnel.html",
    "slug": "rim",
    "id": 20,
    "genres": [
      "action",
      "rpg",
      "shooter",
      "adventure",
      "horror"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewScope": "Unity 6.0 Standard Shader의 Fresnel 가장자리 반사 설명을 확인했습니다. 실제 후방 광원 조명과 구분하여 명칭을 수정했습니다.",
    "reviewLimit": "구성 기능·소스 구조 대조입니다. Unity/Unreal 컴파일과 실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/StandardShaderFresnel.html",
        "method": "원문 자료 대조"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "출처 및 설명 대조",
        "scope": "Unity 6.0 Standard Shader의 Fresnel 가장자리 반사 설명을 확인했습니다. 실제 후방 광원 조명과 구분하여 명칭을 수정했습니다."
      }
    ]
  },
  {
    "category": "effects",
    "name": "모션 트레일",
    "en": "Motion trail",
    "desc": "움직임의 궤적을 남겨 속도를 보여줘요.",
    "ko": "빠른 이동이나 무기 휘두르기에 짧게 사라지는 모션 트레일을 추가해 주세요.",
    "promptEn": "Add short-lived motion trails to fast movement or weapon swings.",
    "visual": "trail",
    "tags": [
      "action"
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html",
    "slug": "trail",
    "id": 21,
    "genres": [
      "action",
      "rpg",
      "shooter",
      "adventure",
      "horror"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewScope": "Unity 6 용어집의 Trail Renderer 개념을 대조했습니다. Unreal 예제의 Spline 데이터만으로 트레일이 렌더링되지는 않습니다.",
    "reviewLimit": "구성 기능·소스 구조 대조입니다. Unity/Unreal 컴파일과 실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html",
        "method": "공식 용어집 정의 대조"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "출처 및 설명 대조",
        "scope": "Unity 6 용어집의 Trail Renderer 개념을 대조했습니다. Unreal 예제의 Spline 데이터만으로 트레일이 렌더링되지는 않습니다."
      }
    ],
    "aliases": [
      "Trail Renderer"
    ]
  },
  {
    "category": "effects",
    "name": "안개 · 깊이감",
    "en": "Atmospheric fog",
    "desc": "먼 풍경의 대비를 낮춰 거리감을 줘요.",
    "ko": "거리가 멀수록 대비와 채도가 낮아지는 안개로 공간의 깊이를 표현해 주세요.",
    "promptEn": "Use distance-based fog to reduce contrast and saturation in distant scenery and convey depth.",
    "visual": "fog",
    "tags": [
      "beginner"
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html",
    "slug": "fog",
    "id": 22,
    "genres": [
      "action",
      "rpg",
      "shooter",
      "adventure",
      "horror"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewScope": "Unity 6 용어집의 거리 기반 안개 개념을 대조했습니다. 예제의 색상 보간은 실제 렌더링 안개 적용을 검증한 결과가 아닙니다.",
    "reviewLimit": "구성 기능·소스 구조 대조입니다. Unity/Unreal 컴파일과 실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html",
        "method": "공식 용어집 정의 대조"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "출처 및 설명 대조",
        "scope": "Unity 6 용어집의 거리 기반 안개 개념을 대조했습니다. 예제의 색상 보간은 실제 렌더링 안개 적용을 검증한 결과가 아닙니다."
      }
    ],
    "aliases": [
      "fog"
    ]
  },
  {
    "id": 24,
    "slug": "baked-lighting",
    "kind": "concept",
    "category": "principles",
    "name": "베이크 조명과 실시간 조명",
    "en": "Baked vs realtime lighting",
    "desc": "빛을 미리 저장할지, 실행 중 계산할지 선택해요.",
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html",
    "ko": "배경과 조명이 바뀌는 정도를 기준으로 베이크 조명과 실시간 조명의 장단점을 비교하고, 적합한 조합을 제안해 주세요.",
    "promptEn": "Compare baked and realtime lighting based on how the environment and lights change, and suggest a suitable combination.",
    "visual": "baked-lighting",
    "tags": [
      "beginner"
    ],
    "genres": [
      "adventure",
      "horror",
      "rpg",
      "puzzle"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewType": "기능·개념",
    "reviewScope": "Unity 용어집에서 Baked와 Realtime의 계산 시점 차이를 확인했습니다. 움직이는 물체에 저장된 광 정보를 적용하는 방식은 별도입니다.",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewLimit": "개념·출처 대조입니다. 엔진 실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html",
        "method": "공식 용어집 정의 대조"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "출처 및 설명 대조",
        "scope": "Unity 용어집에서 Baked와 Realtime의 계산 시점 차이를 확인했습니다. 움직이는 물체에 저장된 광 정보를 적용하는 방식은 별도입니다."
      }
    ],
    "aliases": [
      "baked lights"
    ]
  },
  {
    "id": 25,
    "slug": "screen-space",
    "kind": "concept",
    "category": "principles",
    "name": "스크린 스페이스 반사의 한계",
    "en": "Screen-space reflections",
    "desc": "현재 화면에 보이는 정보로 반사를 만들어요.",
    "source": "https://dev.epicgames.com/documentation/en-us/unreal-engine/screen-space-reflections-in-unreal-engine",
    "ko": "화면 밖 오브젝트의 반사가 필요한지 검토하고, 스크린 스페이스 반사의 한계와 보완 방식을 설명해 주세요.",
    "promptEn": "Explain the limitations of screen-space reflections and discuss alternatives when off-screen objects need to appear in reflections.",
    "visual": "screen-space",
    "tags": [
      "beginner"
    ],
    "genres": [
      "action",
      "racing",
      "simulation",
      "adventure"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewScope": "Epic SSR 문서에서 화면 정보로 반사를 만드는 기능을 확인했습니다. 가려지거나 화면 밖인 정보의 보완은 시스템 구성에 따릅니다.",
    "reviewLimit": "개념·출처 대조입니다. 엔진 실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/screen-space-reflections-in-unreal-engine",
        "method": "원문 자료 대조"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "출처 및 설명 대조",
        "scope": "Epic SSR 문서에서 화면 정보로 반사를 만드는 기능을 확인했습니다. 가려지거나 화면 밖인 정보의 보완은 시스템 구성에 따릅니다."
      }
    ]
  },
  {
    "id": 26,
    "slug": "sound-occlusion",
    "kind": "concept",
    "category": "principles",
    "name": "소리 차폐",
    "en": "Sound occlusion",
    "desc": "벽이 소리를 가리는 정도를 어떻게 근사할지 정해요.",
    "source": "https://valvesoftware.github.io/steam-audio/doc/capi/simulation.html",
    "ko": "벽과 문이 있는 공간에서 소리 차폐를 표현하고 싶습니다. 레이 한 줄과 여러 샘플 방식의 차이, 급격한 전환을 줄이는 방법을 설명해 주세요.",
    "promptEn": "Explain sound occlusion in spaces with walls and doors, comparing single-ray and sampled approaches and ways to smooth transitions.",
    "visual": "sound-occlusion",
    "tags": [
      "beginner"
    ],
    "genres": [
      "horror",
      "shooter",
      "adventure"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewScope": "Steam Audio C API 문서에서 직접 경로의 차폐 검사를 확인했습니다. Unity/Unreal 기본 오디오와 동일한 내장 기능으로 소개하지 않습니다.",
    "reviewLimit": "개념·출처 대조입니다. 엔진 실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://valvesoftware.github.io/steam-audio/doc/capi/simulation.html",
        "method": "원문 자료 대조"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "출처 및 설명 대조",
        "scope": "Steam Audio C API 문서에서 직접 경로의 차폐 검사를 확인했습니다. Unity/Unreal 기본 오디오와 동일한 내장 기능으로 소개하지 않습니다."
      }
    ]
  },
  {
    "id": 27,
    "slug": "pathfinding-choice",
    "kind": "concept",
    "category": "principles",
    "name": "A*와 플로 필드 선택",
    "en": "A* and flow fields",
    "desc": "개별 경로와 공통 목적지 방향장을 비교해요.",
    "source": "https://www.redblobgames.com/pathfinding/tower-defense/",
    "ko": "A*와 플로 필드 선택의 핵심 구조와 활용 상황, 한계를 설명해 주세요.",
    "promptEn": "Explain A* and flow fields and its use cases and limitations.",
    "visual": "pathfinding-choice",
    "tags": [
      "beginner"
    ],
    "genres": [
      "strategy",
      "simulation",
      "rpg"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewScope": "Red Blob 원문에서 개별 탐색과 공통 목표의 거리장 공유를 확인했습니다. BFS는 동일 비용일 때 사용하는 예시입니다.",
    "reviewLimit": "개념·출처 대조입니다. 엔진 실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://www.redblobgames.com/pathfinding/tower-defense/",
        "method": "원문 자료 대조"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "출처 및 설명 대조",
        "scope": "Red Blob 원문에서 개별 탐색과 공통 목표의 거리장 공유를 확인했습니다. BFS는 동일 비용일 때 사용하는 예시입니다."
      }
    ]
  },
  {
    "id": 28,
    "slug": "dot-product",
    "kind": "concept",
    "category": "principles",
    "name": "내적으로 앞뒤 판단",
    "en": "Dot product for direction",
    "desc": "두 방향이 얼마나 같은 쪽인지 판단해요.",
    "source": "https://docs.unity3d.com/6000.0/Documentation/ScriptReference/Vector3.Dot.html",
    "ko": "내적으로 앞뒤 판단의 핵심 구조와 활용 상황, 한계를 설명해 주세요.",
    "promptEn": "Explain Dot product for direction and its use cases and limitations.",
    "visual": "dot-product",
    "tags": [
      "beginner"
    ],
    "genres": [
      "action",
      "shooter",
      "sports",
      "horror"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewType": "기능·개념",
    "reviewScope": "Unity 6.0 Vector3.Dot의 정규화 방향 내적과 코사인 관계를 확인했습니다.",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewLimit": "개념·출처 대조입니다. 엔진 실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/ScriptReference/Vector3.Dot.html",
        "method": "원문 자료 대조"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "출처 및 설명 대조",
        "scope": "Unity 6.0 Vector3.Dot의 정규화 방향 내적과 코사인 관계를 확인했습니다."
      }
    ]
  },
  {
    "id": 29,
    "slug": "coordinate-spaces",
    "kind": "concept",
    "category": "principles",
    "name": "로컬 좌표와 월드 좌표",
    "en": "Local and world coordinates",
    "desc": "기준에 따라 달라지는 좌표를 구분해요.",
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-Transform.html",
    "ko": "로컬 좌표와 월드 좌표의 핵심 구조와 활용 상황, 한계를 설명해 주세요.",
    "promptEn": "Explain Local and world coordinates and its use cases and limitations.",
    "visual": "coordinate-spaces",
    "tags": [
      "beginner"
    ],
    "genres": [
      "action",
      "platformer",
      "simulation",
      "racing",
      "sports"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewType": "기능·개념",
    "reviewScope": "Unity 6.0 Transform 문서의 부모 기준 좌표와 월드 좌표 설명을 확인했습니다.",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewLimit": "개념·출처 대조입니다. 엔진 실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-Transform.html",
        "method": "원문 자료 대조"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "출처 및 설명 대조",
        "scope": "Unity 6.0 Transform 문서의 부모 기준 좌표와 월드 좌표 설명을 확인했습니다."
      }
    ]
  },
  {
    "id": 30,
    "slug": "object-pool",
    "kind": "concept",
    "category": "principles",
    "name": "오브젝트 풀",
    "en": "Object pool",
    "desc": "반복 생성하는 객체를 반환하고 재사용해요.",
    "source": "https://gameprogrammingpatterns.com/object-pool.html",
    "ko": "반복 생성되는 총알의 풀 구조를 설명하고 초기화, 반환, 최대 용량 정책을 구분해 주세요.",
    "promptEn": "Explain Object pool with its structure, use cases and limitations.",
    "visual": "object-pool",
    "tags": [
      "beginner"
    ],
    "genres": [
      "action",
      "shooter",
      "rhythm",
      "platformer"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewScope": "원저자 문서에서 객체 재사용·풀 용량·초기화 문제를 확인했습니다. 풀 사용의 성능 이득은 대상 환경에서 측정해야 합니다.",
    "reviewLimit": "개념·출처 대조입니다. 엔진 실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://gameprogrammingpatterns.com/object-pool.html",
        "method": "원문 자료 대조"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "출처 및 설명 대조",
        "scope": "원저자 문서에서 객체 재사용·풀 용량·초기화 문제를 확인했습니다. 풀 사용의 성능 이득은 대상 환경에서 측정해야 합니다."
      }
    ]
  },
  {
    "id": 31,
    "slug": "state-machine",
    "kind": "concept",
    "category": "principles",
    "name": "상태 머신",
    "en": "Finite state machine",
    "desc": "현재 상태와 허용된 전이로 행동을 정리해요.",
    "source": "https://gameprogrammingpatterns.com/state.html",
    "ko": "NPC의 대기·추적·공격 상태와 전이 조건, 진입 및 종료 작업을 간단히 정리해 주세요.",
    "promptEn": "Explain Finite state machine with its structure, use cases and limitations.",
    "visual": "state-machine",
    "tags": [
      "beginner"
    ],
    "genres": [
      "action",
      "rpg",
      "platformer",
      "horror",
      "simulation"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewScope": "원저자 문서의 상태·입력·전이·진입/종료 작업을 확인했습니다. 단순 머신 하나는 현재 상태 하나를 갖습니다.",
    "reviewLimit": "개념·출처 대조입니다. 엔진 실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://gameprogrammingpatterns.com/state.html",
        "method": "원문 자료 대조"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "출처 및 설명 대조",
        "scope": "원저자 문서의 상태·입력·전이·진입/종료 작업을 확인했습니다. 단순 머신 하나는 현재 상태 하나를 갖습니다."
      }
    ]
  },
  {
    "id": 32,
    "slug": "fixed-timestep",
    "kind": "concept",
    "category": "principles",
    "name": "고정 시간 간격과 보간",
    "en": "Fixed timestep and interpolation",
    "desc": "계산 간격과 화면 표시 간격을 구분해요.",
    "source": "https://gafferongames.com/post/fix_your_timestep/",
    "ko": "고정 시간 간격의 누적기와 렌더링 보간을 구분하고 과부하 처리 및 결정론의 한계를 설명해 주세요.",
    "promptEn": "Explain Fixed timestep and interpolation with its structure, use cases and limitations.",
    "visual": "fixed-timestep",
    "tags": [
      "beginner"
    ],
    "genres": [
      "simulation",
      "racing",
      "sports",
      "platformer",
      "action"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewType": "기능·개념",
    "reviewScope": "Gaffer 원문에서 누적 시간·고정 스텝·이전/현재 상태 보간을 확인했습니다. 고정 dt만으로 결정론이 보장되지 않습니다.",
    "reviewVersion": "원저자 자료",
    "reviewLimit": "개념·출처 대조입니다. 엔진 실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://gafferongames.com/post/fix_your_timestep/",
        "method": "원문 자료 대조"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "출처 및 설명 대조",
        "scope": "Gaffer 원문에서 누적 시간·고정 스텝·이전/현재 상태 보간을 확인했습니다. 고정 dt만으로 결정론이 보장되지 않습니다."
      }
    ],
    "aliases": [
      "fixed timestep"
    ]
  },
  {
    "id": 33,
    "slug": "pbr",
    "kind": "concept",
    "category": "rendering",
    "name": "물리 기반 렌더링",
    "en": "PBR",
    "desc": "재질의 반사 특성을 일관된 조명 모델로 표현합니다.",
    "ko": "물리 기반 렌더링을 게임에 적용하려고 합니다. 재질의 반사 특성을 일관된 조명 모델로 표현합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
    "promptEn": "Explain PBR with a minimal design, use case and limitations.",
    "visual": "pbr",
    "tags": [
      "beginner"
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html",
    "diagramSteps": [
      "재질 값",
      "조명 반응",
      "표면 색"
    ],
    "related": [
      "ambient-occlusion",
      "anti-aliasing",
      "bloom"
    ],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "adventure",
      "horror",
      "simulation",
      "racing",
      "sports"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewScope": "PBR은 모델과 재질 입력의 일관성을 목표로 합니다. 모든 셰이더나 엔진이 같은 입력값과 결과를 보장하는 것은 아닙니다.",
    "reviewLimit": "개념·출처 대조입니다. 엔진 실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html",
        "method": "공식 용어집 정의 대조"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "출처 및 설명 대조",
        "scope": "PBR은 모델과 재질 입력의 일관성을 목표로 합니다. 모든 셰이더나 엔진이 같은 입력값과 결과를 보장하는 것은 아닙니다."
      }
    ],
    "aliases": [
      "physically based shading"
    ]
  },
  {
    "id": 34,
    "slug": "normal-map",
    "kind": "concept",
    "category": "rendering",
    "name": "노멀 맵",
    "en": "Normal map",
    "desc": "텍스처에 저장한 방향으로 표면의 조명 계산을 바꿉니다.",
    "ko": "노멀 맵을 게임에 적용하려고 합니다. 텍스처에 저장한 방향으로 표면의 조명 계산을 바꿉니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
    "promptEn": "Explain Normal map with a minimal design, use case and limitations.",
    "visual": "normal-map",
    "tags": [
      "beginner"
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html",
    "diagramSteps": [
      "평평한 표면",
      "법선 방향",
      "음영 변화"
    ],
    "related": [
      "ambient-occlusion",
      "anti-aliasing",
      "bloom"
    ],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "adventure",
      "horror",
      "simulation",
      "racing",
      "sports"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewScope": "노멀 맵은 조명에 사용할 법선 방향을 바꾸며 메시 정점과 실루엣은 바꾸지 않습니다. 탠전트 공간·월드 공간 등 저장 기준도 확인합니다.",
    "reviewLimit": "개념·출처 대조입니다. 엔진 실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html",
        "method": "공식 용어집 정의 대조"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "출처 및 설명 대조",
        "scope": "노멀 맵은 조명에 사용할 법선 방향을 바꾸며 메시 정점과 실루엣은 바꾸지 않습니다. 탠전트 공간·월드 공간 등 저장 기준도 확인합니다."
      }
    ]
  },
  {
    "id": 35,
    "slug": "roughness",
    "kind": "concept",
    "category": "rendering",
    "name": "러프니스",
    "en": "Roughness",
    "desc": "표면의 미세한 거칠기를 반사 모델의 값으로 표현합니다.",
    "ko": "러프니스을 게임에 적용하려고 합니다. 표면의 미세한 거칠기를 반사 모델의 값으로 표현합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
    "promptEn": "Explain Roughness with a minimal design, use case and limitations.",
    "visual": "roughness",
    "tags": [
      "beginner"
    ],
    "source": "https://dev.epicgames.com/documentation/en-us/unreal-engine/physically-based-materials-in-unreal-engine",
    "diagramSteps": [
      "매끈한 표면",
      "거칠기 증가",
      "넓은 반사"
    ],
    "related": [
      "ambient-occlusion",
      "anti-aliasing",
      "bloom"
    ],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "adventure",
      "horror",
      "simulation",
      "racing",
      "sports"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewScope": "Unreal 5.8 Roughness의 반사 폭 제어를 확인했습니다. Unity의 Smoothness와 이름·값 방향을 구분합니다.",
    "reviewLimit": "개념·출처 대조입니다. 엔진 실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/physically-based-materials-in-unreal-engine",
        "method": "원문 자료 대조"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "출처 및 설명 대조",
        "scope": "Unreal 5.8 Roughness의 반사 폭 제어를 확인했습니다. Unity의 Smoothness와 이름·값 방향을 구분합니다."
      }
    ]
  },
  {
    "id": 36,
    "slug": "metallic",
    "kind": "concept",
    "category": "rendering",
    "name": "메탈릭",
    "en": "Metallic",
    "desc": "금속과 비금속의 반사 특성을 구분하는 재질 입력입니다.",
    "ko": "메탈릭을 게임에 적용하려고 합니다. 금속과 비금속의 반사 특성을 구분하는 재질 입력입니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
    "promptEn": "Explain Metallic with a minimal design, use case and limitations.",
    "visual": "metallic",
    "tags": [
      "beginner"
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/StandardShaderMaterialParameterMetallic.html",
    "diagramSteps": [
      "비금속",
      "금속 선택",
      "반사 성질"
    ],
    "related": [
      "ambient-occlusion",
      "anti-aliasing",
      "bloom"
    ],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "adventure",
      "horror",
      "simulation",
      "racing",
      "sports"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewScope": "금속과 비금속은 반사 모델의 재질 분류입니다. 경계 혼합이나 텍스처 필터링에서는 중간값이 생길 수 있습니다.",
    "reviewLimit": "개념·출처 대조입니다. 엔진 실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/StandardShaderMaterialParameterMetallic.html",
        "method": "원문 자료 대조"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "출처 및 설명 대조",
        "scope": "금속과 비금속은 반사 모델의 재질 분류입니다. 경계 혼합이나 텍스처 필터링에서는 중간값이 생길 수 있습니다."
      }
    ]
  },
  {
    "id": 37,
    "slug": "depth-buffer",
    "kind": "concept",
    "category": "rendering",
    "name": "깊이 버퍼",
    "en": "Depth buffer",
    "desc": "픽셀 위치별 깊이를 보관하여 앞뒤 관계를 판단합니다.",
    "ko": "깊이 버퍼을 게임에 적용하려고 합니다. 픽셀 위치별 깊이를 보관하여 앞뒤 관계를 판단합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
    "promptEn": "Explain Depth buffer with a minimal design, use case and limitations.",
    "visual": "depth-buffer",
    "tags": [
      "beginner"
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html",
    "diagramSteps": [
      "표면 깊이",
      "깊이 비교",
      "앞쪽 표시"
    ],
    "related": [
      "ambient-occlusion",
      "anti-aliasing",
      "bloom"
    ],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "adventure",
      "horror",
      "simulation",
      "racing",
      "sports"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewType": "기능·개념",
    "reviewScope": "여기서 깊이는 렌더링의 깊이 값이며 월드에서 카메라까지의 거리와 항상 같은 수치는 아닙니다. 투영과 깊이 정밀도에 따라 표현이 달라집니다.",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewLimit": "개념·출처 대조입니다. 엔진 실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html",
        "method": "공식 용어집 정의 대조"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "출처 및 설명 대조",
        "scope": "여기서 깊이는 렌더링의 깊이 값이며 월드에서 카메라까지의 거리와 항상 같은 수치는 아닙니다. 투영과 깊이 정밀도에 따라 표현이 달라집니다."
      }
    ]
  },
  {
    "id": 38,
    "slug": "shadow-map",
    "kind": "concept",
    "category": "rendering",
    "name": "섀도 맵",
    "en": "Shadow map",
    "desc": "광원 시점의 깊이 정보로 표면이 빛에 가려졌는지 판단합니다.",
    "ko": "섀도 맵을 게임에 적용하려고 합니다. 광원 시점의 깊이 정보로 표면이 빛에 가려졌는지 판단합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
    "promptEn": "Explain Shadow map with a minimal design, use case and limitations.",
    "visual": "shadow-map",
    "tags": [
      "beginner"
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/ShadowPerformance.html",
    "diagramSteps": [
      "광원 시점",
      "깊이 기록",
      "가림 판단"
    ],
    "related": [
      "ambient-occlusion",
      "anti-aliasing",
      "bloom"
    ],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "adventure",
      "horror",
      "simulation",
      "racing",
      "sports"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewScope": "Unity 6.0 그림자 성능 문서의 섀도 맵 생성·사용 단계를 확인했습니다.",
    "reviewLimit": "개념·출처 대조입니다. 엔진 실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/ShadowPerformance.html",
        "method": "원문 자료 대조"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "출처 및 설명 대조",
        "scope": "Unity 6.0 그림자 성능 문서의 섀도 맵 생성·사용 단계를 확인했습니다."
      }
    ]
  },
  {
    "id": 39,
    "slug": "ambient-occlusion",
    "kind": "concept",
    "category": "rendering",
    "name": "앰비언트 오클루전",
    "en": "Ambient occlusion",
    "desc": "주변 구조에 막혀 빛이 들어오기 어려운 정도를 표현합니다.",
    "ko": "앰비언트 오클루전을 게임에 적용하려고 합니다. 주변 구조에 막혀 빛이 들어오기 어려운 정도를 표현합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
    "promptEn": "Explain Ambient occlusion with a minimal design, use case and limitations.",
    "visual": "ambient-occlusion",
    "tags": [
      "beginner"
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html",
    "diagramSteps": [
      "주변 구조",
      "가려진 영역",
      "접촉 음영"
    ],
    "related": [
      "anti-aliasing",
      "bloom",
      "depth-buffer"
    ],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "adventure",
      "horror",
      "simulation",
      "racing",
      "sports"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewType": "기능·개념",
    "reviewScope": "AO는 주변 가림에 대한 근사입니다. 화면 기반 SSAO와 사전 계산된 AO는 사용할 수 있는 장면 정보가 다릅니다.",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewLimit": "개념·출처 대조입니다. 엔진 실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html",
        "method": "공식 용어집 정의 대조"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "출처 및 설명 대조",
        "scope": "AO는 주변 가림에 대한 근사입니다. 화면 기반 SSAO와 사전 계산된 AO는 사용할 수 있는 장면 정보가 다릅니다."
      }
    ]
  },
  {
    "id": 40,
    "slug": "global-illumination",
    "kind": "concept",
    "category": "rendering",
    "name": "전역 조명",
    "en": "Global illumination",
    "desc": "직접 도달한 빛뿐 아니라 표면 사이의 간접광을 고려합니다.",
    "ko": "전역 조명을 게임에 적용하려고 합니다. 직접 도달한 빛뿐 아니라 표면 사이의 간접광을 고려합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
    "promptEn": "Explain Global illumination with a minimal design, use case and limitations.",
    "visual": "global-illumination",
    "tags": [
      "beginner"
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html",
    "diagramSteps": [
      "직접광",
      "표면 반사",
      "간접광"
    ],
    "related": [
      "ambient-occlusion",
      "anti-aliasing",
      "bloom"
    ],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "adventure",
      "horror",
      "simulation",
      "racing",
      "sports"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewScope": "전역 조명은 직접광·간접광을 다루는 기법의 범주입니다. 베이크 여부와 동적 장면 반영은 선택한 시스템에 따라 다릅니다.",
    "reviewLimit": "개념·출처 대조입니다. 엔진 실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html",
        "method": "공식 용어집 정의 대조"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "출처 및 설명 대조",
        "scope": "전역 조명은 직접광·간접광을 다루는 기법의 범주입니다. 베이크 여부와 동적 장면 반영은 선택한 시스템에 따라 다릅니다."
      }
    ]
  },
  {
    "id": 41,
    "slug": "bloom",
    "kind": "concept",
    "category": "rendering",
    "name": "블룸",
    "en": "Bloom",
    "desc": "밝은 영역을 주변으로 퍼뜨리는 화면 효과입니다.",
    "ko": "블룸을 게임에 적용하려고 합니다. 밝은 영역을 주변으로 퍼뜨리는 화면 효과입니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
    "promptEn": "Explain Bloom with a minimal design, use case and limitations.",
    "visual": "bloom",
    "tags": [
      "beginner"
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html",
    "diagramSteps": [
      "밝은 영역",
      "주변 확산",
      "빛 번짐"
    ],
    "related": [
      "ambient-occlusion",
      "anti-aliasing",
      "depth-buffer"
    ],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "adventure",
      "horror",
      "simulation",
      "racing",
      "sports"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewType": "기능·개념",
    "reviewScope": "밝은 영역 주변의 번짐을 만드는 후처리이며 장면의 실제 간접광 계산을 대신하지 않습니다.",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewLimit": "개념·출처 대조입니다. 엔진 실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html",
        "method": "공식 용어집 정의 대조"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "출처 및 설명 대조",
        "scope": "밝은 영역 주변의 번짐을 만드는 후처리이며 장면의 실제 간접광 계산을 대신하지 않습니다."
      }
    ]
  },
  {
    "id": 42,
    "slug": "tone-mapping",
    "kind": "concept",
    "category": "rendering",
    "name": "톤 매핑",
    "en": "Tone mapping",
    "desc": "넓은 밝기 범위의 렌더 결과를 표시 가능한 범위로 변환합니다.",
    "ko": "톤 매핑을 게임에 적용하려고 합니다. 넓은 밝기 범위의 렌더 결과를 표시 가능한 범위로 변환합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
    "promptEn": "Explain Tone mapping with a minimal design, use case and limitations.",
    "visual": "tone-mapping",
    "tags": [
      "beginner"
    ],
    "source": "https://docs.unity3d.com/Packages/com.unity.render-pipelines.universal@17.0/manual/post-processing-tonemapping.html",
    "diagramSteps": [
      "HDR 값",
      "범위 변환",
      "화면 출력"
    ],
    "related": [
      "ambient-occlusion",
      "anti-aliasing",
      "bloom"
    ],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "adventure",
      "horror",
      "simulation",
      "racing",
      "sports"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewScope": "Unity 6.0/URP 17의 Tonemapping 문서에서 HDR 값의 범위 변환을 확인했습니다.",
    "reviewLimit": "개념·출처 대조입니다. 엔진 실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/Packages/com.unity.render-pipelines.universal@17.0/manual/post-processing-tonemapping.html",
        "method": "원문 자료 대조"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "출처 및 설명 대조",
        "scope": "Unity 6.0/URP 17의 Tonemapping 문서에서 HDR 값의 범위 변환을 확인했습니다."
      }
    ],
    "aliases": [
      "tonemapping"
    ]
  },
  {
    "id": 43,
    "slug": "anti-aliasing",
    "kind": "concept",
    "category": "rendering",
    "name": "안티앨리어싱",
    "en": "Anti-aliasing",
    "desc": "샘플링으로 생기는 경계의 계단과 깜빡임을 줄입니다.",
    "ko": "안티앨리어싱을 게임에 적용하려고 합니다. 샘플링으로 생기는 경계의 계단과 깜빡임을 줄입니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
    "promptEn": "Explain Anti-aliasing with a minimal design, use case and limitations.",
    "visual": "anti-aliasing",
    "tags": [
      "beginner"
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html",
    "diagramSteps": [
      "계단 경계",
      "샘플 처리",
      "경계 완화"
    ],
    "related": [
      "ambient-occlusion",
      "bloom",
      "depth-buffer"
    ],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "adventure",
      "horror",
      "simulation",
      "racing",
      "sports"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewType": "기능·개념",
    "reviewScope": "기술 자체는 확인했습니다. MSAA·FXAA·TAA 등 구체적 방식의 지원 여부와 잔상·비용은 파이프라인별로 확인해야 합니다.",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewLimit": "개념·출처 대조입니다. 엔진 실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html",
        "method": "공식 용어집 정의 대조"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "출처 및 설명 대조",
        "scope": "기술 자체는 확인했습니다. MSAA·FXAA·TAA 등 구체적 방식의 지원 여부와 잔상·비용은 파이프라인별로 확인해야 합니다."
      }
    ]
  },
  {
    "id": 44,
    "slug": "texture-mipmap",
    "kind": "concept",
    "category": "rendering",
    "name": "밉맵",
    "en": "Mipmapping",
    "desc": "텍스처를 여러 해상도로 준비하고 화면 크기에 맞춰 사용합니다.",
    "ko": "밉맵을 게임에 적용하려고 합니다. 텍스처를 여러 해상도로 준비하고 화면 크기에 맞춰 사용합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
    "promptEn": "Explain Mipmapping with a minimal design, use case and limitations.",
    "visual": "texture-mipmap",
    "tags": [
      "beginner"
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/texture-mipmaps-introduction.html",
    "diagramSteps": [
      "큰 텍스처",
      "축소 단계",
      "거리별 선택"
    ],
    "related": [
      "ambient-occlusion",
      "anti-aliasing",
      "bloom"
    ],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "adventure",
      "horror",
      "simulation",
      "racing",
      "sports"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewScope": "밉맵은 작은 텍스처 단계의 모음입니다. 밉 단계 생성과 필요한 단계만 로드하는 스트리밍은 별도 기능입니다.",
    "reviewLimit": "개념·출처 대조입니다. 엔진 실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/texture-mipmaps-introduction.html",
        "method": "원문 자료 대조"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "출처 및 설명 대조",
        "scope": "밉맵은 작은 텍스처 단계의 모음입니다. 밉 단계 생성과 필요한 단계만 로드하는 스트리밍은 별도 기능입니다."
      }
    ]
  },
  {
    "id": 45,
    "slug": "uv-mapping",
    "kind": "concept",
    "category": "rendering",
    "name": "UV 매핑",
    "en": "UV mapping",
    "desc": "메시 표면의 위치를 텍스처의 2차원 좌표에 대응시킵니다.",
    "ko": "UV 매핑을 게임에 적용하려고 합니다. 메시 표면의 위치를 텍스처의 2차원 좌표에 대응시킵니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
    "promptEn": "Explain UV mapping with a minimal design, use case and limitations.",
    "visual": "uv-mapping",
    "tags": [
      "beginner"
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html",
    "diagramSteps": [
      "메시 표면",
      "UV 좌표",
      "텍스처 배치"
    ],
    "related": [
      "ambient-occlusion",
      "anti-aliasing",
      "bloom"
    ],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "adventure",
      "horror",
      "simulation",
      "racing",
      "sports"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewScope": "UV는 표면과 텍스처의 좌표 대응입니다. 일반 재질 UV와 라이트맵 UV의 요구 조건이 같다는 뜻은 아닙니다.",
    "reviewLimit": "개념·출처 대조입니다. 엔진 실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html",
        "method": "공식 용어집 정의 대조"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "출처 및 설명 대조",
        "scope": "UV는 표면과 텍스처의 좌표 대응입니다. 일반 재질 UV와 라이트맵 UV의 요구 조건이 같다는 뜻은 아닙니다."
      }
    ]
  },
  {
    "id": 46,
    "slug": "vertex-shader",
    "kind": "concept",
    "category": "rendering",
    "name": "버텍스 셰이더",
    "en": "Vertex shader",
    "desc": "정점 단위의 위치와 속성을 처리하는 GPU 단계입니다.",
    "ko": "버텍스 셰이더을 게임에 적용하려고 합니다. 정점 단위의 위치와 속성을 처리하는 GPU 단계입니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
    "promptEn": "Explain Vertex shader with a minimal design, use case and limitations.",
    "visual": "vertex-shader",
    "tags": [
      "beginner"
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html",
    "diagramSteps": [
      "정점 입력",
      "좌표 변환",
      "정점 출력"
    ],
    "related": [
      "ambient-occlusion",
      "anti-aliasing",
      "bloom"
    ],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "adventure",
      "horror",
      "simulation",
      "racing",
      "sports"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewScope": "정점별 계산을 수행하는 셰이더 단계입니다. GPU 전체 작업이나 픽셀별 계산과 구분합니다.",
    "reviewLimit": "개념·출처 대조입니다. 엔진 실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html",
        "method": "공식 용어집 정의 대조"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "출처 및 설명 대조",
        "scope": "정점별 계산을 수행하는 셰이더 단계입니다. GPU 전체 작업이나 픽셀별 계산과 구분합니다."
      }
    ]
  },
  {
    "id": 47,
    "slug": "fragment-shader",
    "kind": "concept",
    "category": "rendering",
    "name": "픽셀 셰이더",
    "en": "Fragment shader",
    "desc": "래스터화된 프래그먼트의 색 등 출력값을 계산합니다.",
    "ko": "픽셀 셰이더을 게임에 적용하려고 합니다. 래스터화된 프래그먼트의 색 등 출력값을 계산합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
    "promptEn": "Explain Fragment shader with a minimal design, use case and limitations.",
    "visual": "fragment-shader",
    "tags": [
      "beginner"
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/writing-shader-writing-shader-programs-hlsl.html",
    "diagramSteps": [
      "표면 샘플",
      "재질 계산",
      "색 출력"
    ],
    "related": [
      "ambient-occlusion",
      "anti-aliasing",
      "bloom"
    ],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "adventure",
      "horror",
      "simulation",
      "racing",
      "sports"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewScope": "프래그먼트는 항상 최종 화면 픽셀과 일대일로 대응하지 않습니다. 가림과 샘플 처리 등으로 결과가 달라질 수 있습니다.",
    "reviewLimit": "개념·출처 대조입니다. 엔진 실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/writing-shader-writing-shader-programs-hlsl.html",
        "method": "원문 자료 대조"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "출처 및 설명 대조",
        "scope": "프래그먼트는 항상 최종 화면 픽셀과 일대일로 대응하지 않습니다. 가림과 샘플 처리 등으로 결과가 달라질 수 있습니다."
      }
    ]
  },
  {
    "id": 48,
    "slug": "blend-tree",
    "kind": "concept",
    "category": "animation",
    "name": "블렌드 트리",
    "en": "Blend tree",
    "desc": "속도 등 입력값으로 여러 애니메이션의 가중치를 조합합니다.",
    "ko": "블렌드 트리을 게임에 적용하려고 합니다. 속도 등 입력값으로 여러 애니메이션의 가중치를 조합합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
    "promptEn": "Explain Blend tree with a minimal design, use case and limitations.",
    "visual": "blend-tree",
    "tags": [
      "beginner"
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html",
    "diagramSteps": [
      "이동 속도",
      "클립 가중치",
      "혼합 포즈"
    ],
    "related": [
      "additive-animation",
      "animation-event",
      "animation-layer"
    ],
    "genres": [
      "action",
      "rpg",
      "platformer",
      "simulation",
      "sports"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewType": "기능·개념",
    "reviewScope": "Unity의 Blend Tree는 입력 파라미터로 클립을 연속 혼합합니다. 상태 머신의 전이 자체와 동일한 기능은 아닙니다.",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewLimit": "개념·출처 대조입니다. 엔진 실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html",
        "method": "공식 용어집 정의 대조"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "출처 및 설명 대조",
        "scope": "Unity의 Blend Tree는 입력 파라미터로 클립을 연속 혼합합니다. 상태 머신의 전이 자체와 동일한 기능은 아닙니다."
      }
    ],
    "aliases": [
      "Animation Blend Tree"
    ]
  },
  {
    "id": 49,
    "slug": "root-motion",
    "kind": "concept",
    "category": "animation",
    "name": "루트 모션",
    "en": "Root motion",
    "desc": "애니메이션 루트의 이동을 캐릭터 이동에 활용합니다.",
    "ko": "루트 모션을 게임에 적용하려고 합니다. 애니메이션 루트의 이동을 캐릭터 이동에 활용합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
    "promptEn": "Explain Root motion with a minimal design, use case and limitations.",
    "visual": "root-motion",
    "tags": [
      "beginner"
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/RootMotion.html",
    "diagramSteps": [
      "루트 궤적",
      "이동 추출",
      "캐릭터 이동"
    ],
    "related": [
      "additive-animation",
      "animation-event",
      "animation-layer"
    ],
    "genres": [
      "action",
      "rpg",
      "platformer",
      "simulation",
      "sports"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewScope": "Unity 6.0 Root Motion 문서의 루트 변환과 이동 적용 설명을 확인했습니다.",
    "reviewLimit": "개념·출처 대조입니다. 엔진 실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/RootMotion.html",
        "method": "원문 자료 대조"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "출처 및 설명 대조",
        "scope": "Unity 6.0 Root Motion 문서의 루트 변환과 이동 적용 설명을 확인했습니다."
      }
    ]
  },
  {
    "id": 50,
    "slug": "inverse-kinematics",
    "kind": "concept",
    "category": "animation",
    "name": "역운동학",
    "en": "Inverse kinematics",
    "desc": "손이나 발 같은 끝점 목표를 맞추도록 관절 자세를 구합니다.",
    "ko": "역운동학을 게임에 적용하려고 합니다. 손이나 발 같은 끝점 목표를 맞추도록 관절 자세를 구합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
    "promptEn": "Explain Inverse kinematics with a minimal design, use case and limitations.",
    "visual": "inverse-kinematics",
    "tags": [
      "beginner"
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html",
    "diagramSteps": [
      "끝점 목표",
      "관절 계산",
      "자세 보정"
    ],
    "related": [
      "additive-animation",
      "animation-event",
      "animation-layer"
    ],
    "genres": [
      "action",
      "rpg",
      "platformer",
      "simulation",
      "sports"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewScope": "끝점 목표로 관절 자세를 계산하는 개념을 확인했습니다. 사용한 IK 솔버에 따라 관절 제한과 도달 불가능 목표 처리가 다릅니다.",
    "reviewLimit": "개념·출처 대조입니다. 엔진 실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html",
        "method": "공식 용어집 정의 대조"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "출처 및 설명 대조",
        "scope": "끝점 목표로 관절 자세를 계산하는 개념을 확인했습니다. 사용한 IK 솔버에 따라 관절 제한과 도달 불가능 목표 처리가 다릅니다."
      }
    ],
    "aliases": [
      "inverse kinematics (IK)"
    ]
  },
  {
    "id": 51,
    "slug": "forward-kinematics",
    "kind": "concept",
    "category": "animation",
    "name": "순운동학",
    "en": "Forward kinematics",
    "desc": "부모에서 자식으로 관절 변환을 적용해 끝점 위치를 구합니다.",
    "ko": "순운동학을 게임에 적용하려고 합니다. 부모에서 자식으로 관절 변환을 적용해 끝점 위치를 구합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
    "promptEn": "Explain Forward kinematics with a minimal design, use case and limitations.",
    "visual": "forward-kinematics",
    "tags": [
      "beginner"
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html",
    "diagramSteps": [
      "관절 회전",
      "계층 합성",
      "끝점 위치"
    ],
    "related": [
      "additive-animation",
      "animation-event",
      "animation-layer"
    ],
    "genres": [
      "action",
      "rpg",
      "platformer",
      "simulation",
      "sports"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewScope": "관절 회전을 부모에서 자식으로 합성해 끝점 위치를 계산합니다. 목표 위치를 주고 관절을 푸는 IK와 방향이 반대입니다.",
    "reviewLimit": "개념·출처 대조입니다. 엔진 실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html",
        "method": "공식 용어집 정의 대조"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "출처 및 설명 대조",
        "scope": "관절 회전을 부모에서 자식으로 합성해 끝점 위치를 계산합니다. 목표 위치를 주고 관절을 푸는 IK와 방향이 반대입니다."
      }
    ]
  },
  {
    "id": 52,
    "slug": "retargeting",
    "kind": "concept",
    "category": "animation",
    "name": "리타기팅",
    "en": "Retargeting",
    "desc": "한 골격의 애니메이션을 다른 골격에 맞춰 전달합니다.",
    "ko": "리타기팅을 게임에 적용하려고 합니다. 한 골격의 애니메이션을 다른 골격에 맞춰 전달합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
    "promptEn": "Explain Retargeting with a minimal design, use case and limitations.",
    "visual": "retargeting",
    "tags": [
      "beginner"
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html",
    "diagramSteps": [
      "원본 골격",
      "뼈 대응",
      "대상 포즈"
    ],
    "related": [
      "additive-animation",
      "animation-event",
      "animation-layer"
    ],
    "genres": [
      "action",
      "rpg",
      "platformer",
      "simulation",
      "sports"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewScope": "동작의 골격 간 전달을 확인했습니다. 서로 다른 체형에 대한 자동 완성이나 완벽한 발 접촉을 보장하지 않습니다.",
    "reviewLimit": "개념·출처 대조입니다. 엔진 실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html",
        "method": "공식 용어집 정의 대조"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "출처 및 설명 대조",
        "scope": "동작의 골격 간 전달을 확인했습니다. 서로 다른 체형에 대한 자동 완성이나 완벽한 발 접촉을 보장하지 않습니다."
      }
    ]
  },
  {
    "id": 53,
    "slug": "animation-layer",
    "kind": "concept",
    "category": "animation",
    "name": "애니메이션 레이어",
    "en": "Animation layer",
    "desc": "신체 영역이나 기능별로 애니메이션을 나누어 합성합니다.",
    "ko": "애니메이션 레이어을 게임에 적용하려고 합니다. 신체 영역이나 기능별로 애니메이션을 나누어 합성합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
    "promptEn": "Explain Animation layer with a minimal design, use case and limitations.",
    "visual": "animation-layer",
    "tags": [
      "beginner"
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html",
    "diagramSteps": [
      "기본 포즈",
      "부위 마스크",
      "레이어 합성"
    ],
    "related": [
      "additive-animation",
      "animation-event",
      "blend-tree"
    ],
    "genres": [
      "action",
      "rpg",
      "platformer",
      "simulation",
      "sports"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewType": "기능·개념",
    "reviewScope": "레이어·마스크·혼합 방식이 포즈를 구성합니다. 별도 신체 기능을 처리하더라도 최종 포즈의 영향 순서는 확인해야 합니다.",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewLimit": "개념·출처 대조입니다. 엔진 실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html",
        "method": "공식 용어집 정의 대조"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "출처 및 설명 대조",
        "scope": "레이어·마스크·혼합 방식이 포즈를 구성합니다. 별도 신체 기능을 처리하더라도 최종 포즈의 영향 순서는 확인해야 합니다."
      }
    ]
  },
  {
    "id": 54,
    "slug": "additive-animation",
    "kind": "concept",
    "category": "animation",
    "name": "가산 애니메이션",
    "en": "Additive animation",
    "desc": "기준 포즈와의 차이를 기존 포즈에 더합니다.",
    "ko": "가산 애니메이션을 게임에 적용하려고 합니다. 기준 포즈와의 차이를 기존 포즈에 더합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
    "promptEn": "Explain Additive animation with a minimal design, use case and limitations.",
    "visual": "additive-animation",
    "tags": [
      "beginner"
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/AnimationLayers.html",
    "diagramSteps": [
      "기준 포즈",
      "동작 차이",
      "추가 합성"
    ],
    "related": [
      "animation-event",
      "animation-layer",
      "blend-tree"
    ],
    "genres": [
      "action",
      "rpg",
      "platformer",
      "simulation",
      "sports"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewType": "기능·개념",
    "reviewScope": "가산 혼합은 기준에 대한 동작 차이를 합성합니다. Unity 문서는 레이어 사이 애니메이션 속성 구성이 맞아야 한다고 설명합니다.",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewLimit": "개념·출처 대조입니다. 엔진 실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/AnimationLayers.html",
        "method": "원문 자료 대조"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "출처 및 설명 대조",
        "scope": "가산 혼합은 기준에 대한 동작 차이를 합성합니다. Unity 문서는 레이어 사이 애니메이션 속성 구성이 맞아야 한다고 설명합니다."
      }
    ]
  },
  {
    "id": 55,
    "slug": "animation-event",
    "kind": "concept",
    "category": "animation",
    "name": "애니메이션 이벤트",
    "en": "Animation event",
    "desc": "클립 재생의 지정 지점에서 이벤트를 발생시킵니다.",
    "ko": "애니메이션 이벤트을 게임에 적용하려고 합니다. 클립 재생의 지정 지점에서 이벤트를 발생시킵니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
    "promptEn": "Explain Animation event with a minimal design, use case and limitations.",
    "visual": "animation-event",
    "tags": [
      "beginner"
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html",
    "diagramSteps": [
      "클립 재생",
      "지정 시점",
      "이벤트 호출"
    ],
    "related": [
      "additive-animation",
      "animation-layer",
      "blend-tree"
    ],
    "genres": [
      "action",
      "rpg",
      "rhythm",
      "sports"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewType": "기능·개념",
    "reviewScope": "클립의 지정 시점 이벤트 호출을 확인했습니다. 공격 판정의 서버 권한과 중복 방지까지 제공하는 기능은 아닙니다.",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewLimit": "개념·출처 대조입니다. 엔진 실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html",
        "method": "공식 용어집 정의 대조"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "출처 및 설명 대조",
        "scope": "클립의 지정 시점 이벤트 호출을 확인했습니다. 공격 판정의 서버 권한과 중복 방지까지 제공하는 기능은 아닙니다."
      }
    ]
  },
  {
    "id": 56,
    "slug": "rigid-body",
    "kind": "concept",
    "category": "physics",
    "name": "강체",
    "en": "Rigid body",
    "desc": "변형하지 않는 물체의 위치·회전·운동을 모델링합니다.",
    "ko": "강체을 게임에 적용하려고 합니다. 변형하지 않는 물체의 위치·회전·운동을 모델링합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
    "promptEn": "Explain Rigid body with a minimal design, use case and limitations.",
    "visual": "rigid-body",
    "tags": [
      "beginner"
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html",
    "diagramSteps": [
      "물체 속성",
      "힘과 충돌",
      "운동 갱신"
    ],
    "related": [
      "collider",
      "collision-layer",
      "continuous-collision"
    ],
    "genres": [
      "action",
      "platformer",
      "simulation",
      "racing",
      "sports",
      "puzzle"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewScope": "강체는 변형을 계산하지 않는 물체 모델입니다. 렌더 메시와 충돌 형태, 질량·관성은 독립적으로 지정될 수 있습니다.",
    "reviewLimit": "개념·출처 대조입니다. 엔진 실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html",
        "method": "공식 용어집 정의 대조"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "출처 및 설명 대조",
        "scope": "강체는 변형을 계산하지 않는 물체 모델입니다. 렌더 메시와 충돌 형태, 질량·관성은 독립적으로 지정될 수 있습니다."
      }
    ],
    "aliases": [
      "Rigidbody"
    ]
  },
  {
    "id": 57,
    "slug": "collider",
    "kind": "concept",
    "category": "physics",
    "name": "콜라이더",
    "en": "Collider",
    "desc": "충돌 검사에 사용할 공간 모양입니다.",
    "ko": "콜라이더을 게임에 적용하려고 합니다. 충돌 검사에 사용할 공간 모양입니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
    "promptEn": "Explain Collider with a minimal design, use case and limitations.",
    "visual": "collider",
    "tags": [
      "beginner"
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html",
    "diagramSteps": [
      "표시 메시",
      "충돌 모양",
      "접촉 검사"
    ],
    "related": [
      "collision-layer",
      "continuous-collision",
      "joint-constraint"
    ],
    "genres": [
      "action",
      "platformer",
      "simulation",
      "racing",
      "sports",
      "puzzle"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewType": "기능·개념",
    "reviewScope": "콜라이더는 충돌 모양이며 눈에 보이는 메시와 같을 필요가 없습니다. 복잡한 형태와 동적 강체의 지원 제약은 엔진별로 확인합니다.",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewLimit": "개념·출처 대조입니다. 엔진 실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html",
        "method": "공식 용어집 정의 대조"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "출처 및 설명 대조",
        "scope": "콜라이더는 충돌 모양이며 눈에 보이는 메시와 같을 필요가 없습니다. 복잡한 형태와 동적 강체의 지원 제약은 엔진별로 확인합니다."
      }
    ]
  },
  {
    "id": 58,
    "slug": "trigger-volume",
    "kind": "concept",
    "category": "physics",
    "name": "트리거 볼륨",
    "en": "Trigger volume",
    "desc": "물리적으로 막기보다 영역 진입·이탈을 감지합니다.",
    "ko": "트리거 볼륨을 게임에 적용하려고 합니다. 물리적으로 막기보다 영역 진입·이탈을 감지합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
    "promptEn": "Explain Trigger volume with a minimal design, use case and limitations.",
    "visual": "trigger-volume",
    "tags": [
      "beginner"
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/collider-interactions-ontrigger.html",
    "diagramSteps": [
      "감지 영역",
      "겹침 발생",
      "진입 알림"
    ],
    "related": [
      "collider",
      "collision-layer",
      "continuous-collision"
    ],
    "genres": [
      "action",
      "platformer",
      "simulation",
      "racing",
      "sports",
      "puzzle"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewScope": "Unity OnTrigger 이벤트는 겹침을 감지하는 기능입니다. 설정한 콜라이더·강체 조건이 맞아야 이벤트가 발생합니다.",
    "reviewLimit": "개념·출처 대조입니다. 엔진 실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/collider-interactions-ontrigger.html",
        "method": "원문 자료 대조"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "출처 및 설명 대조",
        "scope": "Unity OnTrigger 이벤트는 겹침을 감지하는 기능입니다. 설정한 콜라이더·강체 조건이 맞아야 이벤트가 발생합니다."
      }
    ]
  },
  {
    "id": 59,
    "slug": "raycast",
    "kind": "concept",
    "category": "physics",
    "name": "레이캐스트",
    "en": "Raycast",
    "desc": "시작점에서 방향과 거리로 직선을 검사합니다.",
    "ko": "레이캐스트을 게임에 적용하려고 합니다. 시작점에서 방향과 거리로 직선을 검사합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
    "promptEn": "Explain Raycast with a minimal design, use case and limitations.",
    "visual": "raycast",
    "tags": [
      "beginner"
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/ScriptReference/Physics.Raycast.html",
    "diagramSteps": [
      "시작과 방향",
      "직선 검사",
      "충돌 결과"
    ],
    "related": [
      "collider",
      "collision-layer",
      "continuous-collision"
    ],
    "genres": [
      "action",
      "platformer",
      "simulation",
      "racing",
      "sports",
      "puzzle"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewScope": "Unity Raycast의 시작점이 콜라이더 내부인 경우 그 콜라이더를 감지하지 않는 제한이 문서에 있습니다.",
    "reviewLimit": "개념·출처 대조입니다. 엔진 실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/ScriptReference/Physics.Raycast.html",
        "method": "원문 자료 대조"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "출처 및 설명 대조",
        "scope": "Unity Raycast의 시작점이 콜라이더 내부인 경우 그 콜라이더를 감지하지 않는 제한이 문서에 있습니다."
      }
    ]
  },
  {
    "id": 60,
    "slug": "shape-sweep",
    "kind": "concept",
    "category": "physics",
    "name": "형상 스윕",
    "en": "Shape sweep",
    "desc": "구나 캡슐 같은 모양을 경로를 따라 움직이며 충돌을 검사합니다.",
    "ko": "형상 스윕을 게임에 적용하려고 합니다. 구나 캡슐 같은 모양을 경로를 따라 움직이며 충돌을 검사합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
    "promptEn": "Explain Shape sweep with a minimal design, use case and limitations.",
    "visual": "shape-sweep",
    "tags": [
      "beginner"
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/ScriptReference/Physics.SphereCast.html",
    "diagramSteps": [
      "검사 모양",
      "이동 경로",
      "접촉 위치"
    ],
    "related": [
      "collider",
      "collision-layer",
      "continuous-collision"
    ],
    "genres": [
      "action",
      "platformer",
      "simulation",
      "racing",
      "sports",
      "puzzle"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewScope": "Unity SphereCast는 시작부터 겹쳐 있는 콜라이더를 감지하지 않습니다. 초기 겹침은 별도 Overlap 검사로 구분합니다.",
    "reviewLimit": "개념·출처 대조입니다. 엔진 실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/ScriptReference/Physics.SphereCast.html",
        "method": "원문 자료 대조"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "출처 및 설명 대조",
        "scope": "Unity SphereCast는 시작부터 겹쳐 있는 콜라이더를 감지하지 않습니다. 초기 겹침은 별도 Overlap 검사로 구분합니다."
      }
    ]
  },
  {
    "id": 61,
    "slug": "continuous-collision",
    "kind": "concept",
    "category": "physics",
    "name": "연속 충돌 검사",
    "en": "Continuous collision detection",
    "desc": "시간 단계 사이의 이동을 고려해 빠른 물체의 충돌 누락을 줄입니다.",
    "ko": "연속 충돌 검사을 게임에 적용하려고 합니다. 시간 단계 사이의 이동을 고려해 빠른 물체의 충돌 누락을 줄입니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
    "promptEn": "Explain Continuous collision detection with a minimal design, use case and limitations.",
    "visual": "continuous-collision",
    "tags": [
      "beginner"
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html",
    "diagramSteps": [
      "빠른 이동",
      "경로 고려",
      "충돌 누락 완화"
    ],
    "related": [
      "collider",
      "collision-layer",
      "joint-constraint"
    ],
    "genres": [
      "action",
      "platformer",
      "simulation",
      "racing",
      "sports",
      "puzzle"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewType": "기능·개념",
    "reviewScope": "CCD는 이동 사이의 충돌 누락을 줄이는 기능입니다. 모든 충돌 쌍·회전·모드에 동일한 보장을 주지는 않습니다.",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewLimit": "개념·출처 대조입니다. 엔진 실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html",
        "method": "공식 용어집 정의 대조"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "출처 및 설명 대조",
        "scope": "CCD는 이동 사이의 충돌 누락을 줄이는 기능입니다. 모든 충돌 쌍·회전·모드에 동일한 보장을 주지는 않습니다."
      }
    ]
  },
  {
    "id": 62,
    "slug": "collision-layer",
    "kind": "concept",
    "category": "physics",
    "name": "충돌 레이어",
    "en": "Collision filtering",
    "desc": "객체 분류에 따라 어떤 쌍을 검사할지 정합니다.",
    "ko": "충돌 레이어을 게임에 적용하려고 합니다. 객체 분류에 따라 어떤 쌍을 검사할지 정합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
    "promptEn": "Explain Collision filtering with a minimal design, use case and limitations.",
    "visual": "collision-layer",
    "tags": [
      "beginner"
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/LayerBasedCollision.html",
    "diagramSteps": [
      "객체 분류",
      "검사 쌍 선택",
      "필요 충돌만"
    ],
    "related": [
      "collider",
      "continuous-collision",
      "joint-constraint"
    ],
    "genres": [
      "action",
      "platformer",
      "simulation",
      "racing",
      "sports",
      "puzzle"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewType": "기능·개념",
    "reviewScope": "레이어 충돌 매트릭스와 질의의 LayerMask는 서로 다른 적용 지점입니다. 두 설정을 혼동하지 않습니다.",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewLimit": "개념·출처 대조입니다. 엔진 실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/LayerBasedCollision.html",
        "method": "원문 자료 대조"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "출처 및 설명 대조",
        "scope": "레이어 충돌 매트릭스와 질의의 LayerMask는 서로 다른 적용 지점입니다. 두 설정을 혼동하지 않습니다."
      }
    ]
  },
  {
    "id": 63,
    "slug": "joint-constraint",
    "kind": "concept",
    "category": "physics",
    "name": "Configurable Joint",
    "en": "Configurable Joint",
    "desc": "축별 이동·회전 제한과 드라이브를 조절할 수 있는 Unity 물리 조인트 컴포넌트입니다.",
    "ko": "Configurable Joint의 축별 이동·회전 제한과 드라이브를 구분해서 설명해 주세요.",
    "promptEn": "Explain Joint constraint with a minimal design, use case and limitations.",
    "visual": "joint-constraint",
    "tags": [
      "beginner"
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-ConfigurableJoint.html",
    "diagramSteps": [
      "연결 물체",
      "허용 범위",
      "제약 적용"
    ],
    "related": [
      "collider",
      "collision-layer",
      "continuous-collision"
    ],
    "genres": [
      "action",
      "platformer",
      "simulation",
      "racing",
      "sports",
      "puzzle"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewScope": "Unity 6.0 Configurable Joint 상세 문서에서 축별 Motion과 Limit·Drive 설정을 대조했습니다. 일반 조인트 제약 원리와 컴포넌트를 구분합니다.",
    "reviewLimit": "개념·출처 대조입니다. 엔진 실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-ConfigurableJoint.html",
        "method": "공식 상세 문서 대조",
        "version": "Unity 6.0"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "출처 및 설명 대조",
        "scope": "연결 물체의 운동 자유도를 제한하는 기능입니다. 지정한 조인트 종류·축·범위를 실제 장면에서 확인해야 합니다."
      },
      {
        "date": "2026-10-14",
        "action": "일반 원리와 실제 컴포넌트 이름 구분",
        "scope": "Unity 6.0 Configurable Joint 상세 문서에서 축별 Motion과 Limit·Drive 설정을 대조했습니다. 일반 조인트 제약 원리와 컴포넌트를 구분합니다."
      }
    ],
    "aliases": [
      "Configurable Joint"
    ]
  },
  {
    "id": 64,
    "slug": "spring-damper",
    "kind": "concept",
    "category": "physics",
    "name": "스프링과 댐퍼",
    "en": "Spring and damper",
    "desc": "변위에 따른 복원력과 속도에 따른 감쇠를 조합합니다.",
    "ko": "스프링과 댐퍼을 게임에 적용하려고 합니다. 변위에 따른 복원력과 속도에 따른 감쇠를 조합합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
    "promptEn": "Explain Spring and damper with a minimal design, use case and limitations.",
    "visual": "spring-damper",
    "tags": [
      "beginner"
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-SpringJoint.html",
    "diagramSteps": [
      "목표 변위",
      "복원과 감쇠",
      "진동 완화"
    ],
    "related": [
      "collider",
      "collision-layer",
      "continuous-collision"
    ],
    "genres": [
      "simulation",
      "racing",
      "sports"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewScope": "Unity 6.0 Spring Joint의 복원력과 상대 속도에 비례하는 Damper 설명을 확인했습니다.",
    "reviewLimit": "개념·출처 대조입니다. 엔진 실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-SpringJoint.html",
        "method": "원문 자료 대조"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "출처 및 설명 대조",
        "scope": "Unity 6.0 Spring Joint의 복원력과 상대 속도에 비례하는 Damper 설명을 확인했습니다."
      }
    ]
  },
  {
    "id": 65,
    "slug": "physics-material",
    "kind": "concept",
    "category": "physics",
    "name": "물리 재질",
    "en": "Physics material",
    "desc": "접촉의 마찰과 반발 성질을 정의합니다.",
    "ko": "물리 재질을 게임에 적용하려고 합니다. 접촉의 마찰과 반발 성질을 정의합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
    "promptEn": "Explain Physics material with a minimal design, use case and limitations.",
    "visual": "physics-material",
    "tags": [
      "beginner"
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html",
    "diagramSteps": [
      "표면 속성",
      "접촉 결합",
      "마찰과 반발"
    ],
    "related": [
      "collider",
      "collision-layer",
      "continuous-collision"
    ],
    "genres": [
      "action",
      "platformer",
      "simulation",
      "racing",
      "sports",
      "puzzle"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewScope": "물리 재질은 마찰과 반발을 정합니다. 시각 재질의 금속·거칠기 입력과는 별개입니다.",
    "reviewLimit": "개념·출처 대조입니다. 엔진 실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html",
        "method": "공식 용어집 정의 대조"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "출처 및 설명 대조",
        "scope": "물리 재질은 마찰과 반발을 정합니다. 시각 재질의 금속·거칠기 입력과는 별개입니다."
      }
    ]
  },
  {
    "id": 66,
    "slug": "behavior-tree",
    "kind": "concept",
    "category": "ai",
    "name": "행동 트리",
    "en": "Behavior tree",
    "desc": "조건과 작업을 트리 형태로 구성하여 행동을 선택·실행합니다.",
    "ko": "행동 트리을 게임에 적용하려고 합니다. 조건과 작업을 트리 형태로 구성하여 행동을 선택·실행합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
    "promptEn": "Explain Behavior tree with a minimal design, use case and limitations.",
    "visual": "behavior-tree",
    "tags": [
      "beginner"
    ],
    "source": "https://dev.epicgames.com/documentation/en-us/unreal-engine/behavior-trees-in-unreal-engine",
    "diagramSteps": [
      "조건 검사",
      "분기 선택",
      "작업 실행"
    ],
    "related": [
      "blackboard",
      "environment-query",
      "formation"
    ],
    "genres": [
      "action",
      "rpg",
      "strategy",
      "shooter",
      "simulation"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewType": "기능·개념",
    "reviewScope": "Unreal Behavior Tree 기능을 확인했습니다. 성공·실패·진행 중 결과와 중단 정책은 실제 노드 구성을 따라야 합니다.",
    "reviewVersion": "Unreal Engine 5.8 문서",
    "reviewLimit": "개념·출처 대조입니다. 엔진 실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/behavior-trees-in-unreal-engine",
        "method": "원문 자료 대조"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "출처 및 설명 대조",
        "scope": "Unreal Behavior Tree 기능을 확인했습니다. 성공·실패·진행 중 결과와 중단 정책은 실제 노드 구성을 따라야 합니다."
      }
    ]
  },
  {
    "id": 67,
    "slug": "blackboard",
    "kind": "concept",
    "category": "ai",
    "name": "블랙보드",
    "en": "Blackboard",
    "desc": "대상과 위치 같은 AI 의사결정 정보를 공유 저장합니다.",
    "ko": "블랙보드을 게임에 적용하려고 합니다. 대상과 위치 같은 AI 의사결정 정보를 공유 저장합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
    "promptEn": "Explain Blackboard with a minimal design, use case and limitations.",
    "visual": "blackboard",
    "tags": [
      "beginner"
    ],
    "source": "https://dev.epicgames.com/documentation/en-us/unreal-engine/behavior-tree-in-unreal-engine---user-guide",
    "diagramSteps": [
      "감지 정보",
      "키 값 저장",
      "행동에서 조회"
    ],
    "related": [
      "behavior-tree",
      "environment-query",
      "formation"
    ],
    "genres": [
      "action",
      "rpg",
      "strategy",
      "shooter",
      "simulation"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewType": "기능·개념",
    "reviewScope": "Unreal Blackboard는 행동 판단에 사용할 키 값을 저장합니다. 저장만으로 지각이나 행동이 자동 실행되지는 않습니다.",
    "reviewVersion": "Unreal Engine 5.8 문서",
    "reviewLimit": "개념·출처 대조입니다. 엔진 실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/behavior-tree-in-unreal-engine---user-guide",
        "method": "원문 자료 대조"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "출처 및 설명 대조",
        "scope": "Unreal Blackboard는 행동 판단에 사용할 키 값을 저장합니다. 저장만으로 지각이나 행동이 자동 실행되지는 않습니다."
      }
    ]
  },
  {
    "id": 68,
    "slug": "navigation-mesh",
    "kind": "concept",
    "category": "ai",
    "name": "내비게이션 메시",
    "en": "Navigation mesh",
    "desc": "이동 가능한 표면을 연결된 영역으로 표현합니다.",
    "ko": "내비게이션 메시을 게임에 적용하려고 합니다. 이동 가능한 표면을 연결된 영역으로 표현합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
    "promptEn": "Explain Navigation mesh with a minimal design, use case and limitations.",
    "visual": "navigation-mesh",
    "tags": [
      "beginner"
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/ScriptReference/AI.NavMesh.html",
    "diagramSteps": [
      "이동 표면",
      "연결 영역",
      "경로 요청"
    ],
    "related": [
      "behavior-tree",
      "blackboard",
      "environment-query"
    ],
    "genres": [
      "action",
      "rpg",
      "strategy",
      "shooter",
      "simulation"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewScope": "Unity 6.0 NavMesh의 경로·표면 질의 API를 확인했습니다. 생성에는 별도 내비게이션 데이터가 필요합니다.",
    "reviewLimit": "개념·출처 대조입니다. 엔진 실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/ScriptReference/AI.NavMesh.html",
        "method": "원문 자료 대조"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "출처 및 설명 대조",
        "scope": "Unity 6.0 NavMesh의 경로·표면 질의 API를 확인했습니다. 생성에는 별도 내비게이션 데이터가 필요합니다."
      }
    ]
  },
  {
    "id": 69,
    "slug": "local-avoidance",
    "kind": "concept",
    "category": "ai",
    "name": "로컬 회피",
    "en": "Local avoidance",
    "desc": "주변 유닛과 장애물을 고려해 현재 이동을 조절합니다.",
    "ko": "로컬 회피을 게임에 적용하려고 합니다. 주변 유닛과 장애물을 고려해 현재 이동을 조절합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
    "promptEn": "Explain Local avoidance with a minimal design, use case and limitations.",
    "visual": "local-avoidance",
    "tags": [
      "beginner"
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/ScriptReference/AI.NavMeshAgent-obstacleAvoidanceType.html",
    "diagramSteps": [
      "주변 감지",
      "이동 후보",
      "방향 조절"
    ],
    "related": [
      "behavior-tree",
      "blackboard",
      "environment-query"
    ],
    "genres": [
      "action",
      "rpg",
      "strategy",
      "shooter",
      "simulation"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewScope": "Unity 6.0 NavMeshAgent.obstacleAvoidanceType의 회피 품질 설정을 확인했습니다. 전역 경로 생성 기능과 구분합니다.",
    "reviewLimit": "개념·출처 대조입니다. 엔진 실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/ScriptReference/AI.NavMeshAgent-obstacleAvoidanceType.html",
        "method": "원문 자료 대조"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "출처 및 설명 대조",
        "scope": "Unity 6.0 NavMeshAgent.obstacleAvoidanceType의 회피 품질 설정을 확인했습니다. 전역 경로 생성 기능과 구분합니다."
      }
    ]
  },
  {
    "id": 70,
    "slug": "steering",
    "kind": "concept",
    "category": "ai",
    "name": "스티어링",
    "en": "Steering behaviors",
    "desc": "목표 추종과 분리 등의 이동 성향을 조합합니다.",
    "ko": "스티어링을 게임에 적용하려고 합니다. 목표 추종과 분리 등의 이동 성향을 조합합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
    "promptEn": "Explain Steering behaviors with a minimal design, use case and limitations.",
    "visual": "steering",
    "tags": [
      "beginner"
    ],
    "source": "https://www.red3d.com/cwr/steer/",
    "diagramSteps": [
      "이동 성향",
      "가중치 합성",
      "속도 조절"
    ],
    "related": [
      "behavior-tree",
      "blackboard",
      "environment-query"
    ],
    "genres": [
      "action",
      "rpg",
      "strategy",
      "shooter",
      "simulation"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewScope": "Craig Reynolds의 원저자 자료에서 목표 추종·장애물 회피와 행동 조합을 확인했습니다. 단일 엔진 내장 기능명이 아닙니다.",
    "reviewLimit": "개념·출처 대조입니다. 엔진 실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://www.red3d.com/cwr/steer/",
        "method": "원문 자료 대조"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "출처 및 설명 대조",
        "scope": "Craig Reynolds의 원저자 자료에서 목표 추종·장애물 회피와 행동 조합을 확인했습니다. 단일 엔진 내장 기능명이 아닙니다."
      }
    ]
  },
  {
    "id": 71,
    "slug": "environment-query",
    "kind": "concept",
    "category": "ai",
    "name": "환경 질의",
    "en": "Environment query",
    "desc": "주변 위치 후보를 생성하고 조건과 점수로 평가합니다.",
    "ko": "환경 질의을 게임에 적용하려고 합니다. 주변 위치 후보를 생성하고 조건과 점수로 평가합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
    "promptEn": "Explain Environment query with a minimal design, use case and limitations.",
    "visual": "environment-query",
    "tags": [
      "beginner"
    ],
    "source": "https://dev.epicgames.com/documentation/en-us/unreal-engine/environment-query-system-in-unreal-engine",
    "diagramSteps": [
      "후보 생성",
      "조건과 점수",
      "위치 선택"
    ],
    "related": [
      "behavior-tree",
      "blackboard",
      "formation"
    ],
    "genres": [
      "action",
      "rpg",
      "strategy",
      "shooter",
      "simulation"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewType": "기능·개념",
    "reviewScope": "Unreal EQS는 후보 데이터를 생성하고 검사·점수화하는 기능입니다. 질의 결과를 행동에 적용하는 코드는 별도입니다.",
    "reviewVersion": "Unreal Engine 5.8 문서",
    "reviewLimit": "개념·출처 대조입니다. 엔진 실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/environment-query-system-in-unreal-engine",
        "method": "원문 자료 대조"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "출처 및 설명 대조",
        "scope": "Unreal EQS는 후보 데이터를 생성하고 검사·점수화하는 기능입니다. 질의 결과를 행동에 적용하는 코드는 별도입니다."
      }
    ]
  },
  {
    "id": 72,
    "slug": "replication",
    "kind": "concept",
    "category": "network",
    "name": "상태 복제",
    "en": "State replication",
    "desc": "권한을 가진 쪽의 상태를 다른 참여자에게 전달합니다.",
    "ko": "상태 복제을 게임에 적용하려고 합니다. 권한을 가진 쪽의 상태를 다른 참여자에게 전달합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
    "promptEn": "Explain State replication with a minimal design, use case and limitations.",
    "visual": "replication",
    "tags": [
      "beginner"
    ],
    "source": "https://dev.epicgames.com/documentation/en-us/unreal-engine/networking-overview-for-unreal-engine",
    "diagramSteps": [
      "권한 상태",
      "변경 전송",
      "원격 반영"
    ],
    "related": [
      "client-prediction",
      "lag-compensation",
      "network-jitter"
    ],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "strategy",
      "racing",
      "sports",
      "simulation"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewScope": "상태 복제는 여러 머신의 상태 공유입니다. 전송 빈도·관심 대상·권한을 설계해야 합니다.",
    "reviewLimit": "개념·출처 대조입니다. 엔진 실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/networking-overview-for-unreal-engine",
        "method": "원문 자료 대조"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "출처 및 설명 대조",
        "scope": "상태 복제는 여러 머신의 상태 공유입니다. 전송 빈도·관심 대상·권한을 설계해야 합니다."
      }
    ]
  },
  {
    "id": 73,
    "slug": "rpc",
    "kind": "concept",
    "category": "network",
    "name": "원격 프로시저 호출",
    "en": "RPC",
    "desc": "네트워크를 통해 다른 실행 주체에 함수 호출 메시지를 보냅니다.",
    "ko": "원격 프로시저 호출을 게임에 적용하려고 합니다. 네트워크를 통해 다른 실행 주체에 함수 호출 메시지를 보냅니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
    "promptEn": "Explain RPC with a minimal design, use case and limitations.",
    "visual": "rpc",
    "tags": [
      "beginner"
    ],
    "source": "https://dev.epicgames.com/documentation/en-us/unreal-engine/remote-procedure-calls-in-unreal-engine",
    "diagramSteps": [
      "호출 요청",
      "네트워크 메시지",
      "원격 실행"
    ],
    "related": [
      "client-prediction",
      "lag-compensation",
      "network-jitter"
    ],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "strategy",
      "racing",
      "sports",
      "simulation"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewScope": "Unreal RPC는 다른 머신에서 실행할 호출이며 일반 반환값이 없습니다. 다른 프레임워크의 RPC 의미와 구분합니다.",
    "reviewLimit": "개념·출처 대조입니다. 엔진 실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/remote-procedure-calls-in-unreal-engine",
        "method": "원문 자료 대조"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "출처 및 설명 대조",
        "scope": "Unreal RPC는 다른 머신에서 실행할 호출이며 일반 반환값이 없습니다. 다른 프레임워크의 RPC 의미와 구분합니다."
      }
    ]
  },
  {
    "id": 74,
    "slug": "server-authority",
    "kind": "concept",
    "category": "network",
    "name": "서버 권한",
    "en": "Server authority",
    "desc": "최종 게임 상태의 판단 권한을 서버에 둡니다.",
    "ko": "서버 권한을 게임에 적용하려고 합니다. 최종 게임 상태의 판단 권한을 서버에 둡니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
    "promptEn": "Explain Server authority with a minimal design, use case and limitations.",
    "visual": "server-authority",
    "tags": [
      "beginner"
    ],
    "source": "https://gafferongames.com/post/what_every_programmer_needs_to_know_about_game_networking/",
    "diagramSteps": [
      "클라이언트 요청",
      "서버 검증",
      "결과 반영"
    ],
    "related": [
      "client-prediction",
      "lag-compensation",
      "network-jitter"
    ],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "strategy",
      "racing",
      "sports",
      "simulation"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewScope": "서버가 최종 판단하는 모델입니다. 검증 로직이 없으면 서버 권한이라는 이름만으로 잘못된 요청을 막지 못합니다.",
    "reviewLimit": "개념·출처 대조입니다. 엔진 실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://gafferongames.com/post/what_every_programmer_needs_to_know_about_game_networking/",
        "method": "원문 자료 대조"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "출처 및 설명 대조",
        "scope": "서버가 최종 판단하는 모델입니다. 검증 로직이 없으면 서버 권한이라는 이름만으로 잘못된 요청을 막지 못합니다."
      }
    ]
  },
  {
    "id": 75,
    "slug": "client-prediction",
    "kind": "concept",
    "category": "network",
    "name": "클라이언트 예측",
    "en": "Client prediction",
    "desc": "서버 응답을 기다리기 전에 로컬 입력의 결과를 계산합니다.",
    "ko": "클라이언트 예측을 게임에 적용하려고 합니다. 서버 응답을 기다리기 전에 로컬 입력의 결과를 계산합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
    "promptEn": "Explain Client prediction with a minimal design, use case and limitations.",
    "visual": "client-prediction",
    "tags": [
      "beginner"
    ],
    "source": "https://gafferongames.com/post/networked_physics_2004/",
    "diagramSteps": [
      "로컬 입력",
      "즉시 예상",
      "서버 확인"
    ],
    "related": [
      "lag-compensation",
      "network-jitter",
      "replication"
    ],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "strategy",
      "racing",
      "sports",
      "simulation"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewType": "기능·개념",
    "reviewScope": "클라이언트에서 입력 결과를 먼저 계산하는 방식입니다. 보정 없이 예측만 사용하는 것으로 설명하지 않습니다.",
    "reviewVersion": "원저자 자료",
    "reviewLimit": "개념·출처 대조입니다. 엔진 실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://gafferongames.com/post/networked_physics_2004/",
        "method": "원문 자료 대조"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "출처 및 설명 대조",
        "scope": "클라이언트에서 입력 결과를 먼저 계산하는 방식입니다. 보정 없이 예측만 사용하는 것으로 설명하지 않습니다."
      }
    ]
  },
  {
    "id": 76,
    "slug": "server-reconciliation",
    "kind": "concept",
    "category": "network",
    "name": "서버 보정",
    "en": "Server reconciliation",
    "desc": "서버의 확인 결과와 클라이언트 예측을 맞춥니다.",
    "ko": "서버 보정을 게임에 적용하려고 합니다. 서버의 확인 결과와 클라이언트 예측을 맞춥니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
    "promptEn": "Explain Server reconciliation with a minimal design, use case and limitations.",
    "visual": "server-reconciliation",
    "tags": [
      "beginner"
    ],
    "source": "https://gafferongames.com/post/what_every_programmer_needs_to_know_about_game_networking/",
    "diagramSteps": [
      "서버 확인",
      "예측 오차",
      "입력 재적용"
    ],
    "related": [
      "client-prediction",
      "lag-compensation",
      "network-jitter"
    ],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "strategy",
      "racing",
      "sports",
      "simulation"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewScope": "Gaffer On Games의 입력 기록을 되감아 재적용하는 보정 설명을 확인했습니다.",
    "reviewLimit": "개념·출처 대조입니다. 엔진 실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://gafferongames.com/post/what_every_programmer_needs_to_know_about_game_networking/",
        "method": "원문 자료 대조"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "출처 및 설명 대조",
        "scope": "Gaffer On Games의 입력 기록을 되감아 재적용하는 보정 설명을 확인했습니다."
      }
    ]
  },
  {
    "id": 77,
    "slug": "snapshot-interpolation",
    "kind": "concept",
    "category": "network",
    "name": "스냅샷 보간",
    "en": "Snapshot interpolation",
    "desc": "수신한 과거 상태 사이를 보간해 원격 움직임을 표시합니다.",
    "ko": "스냅샷 보간을 게임에 적용하려고 합니다. 수신한 과거 상태 사이를 보간해 원격 움직임을 표시합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
    "promptEn": "Explain Snapshot interpolation with a minimal design, use case and limitations.",
    "visual": "snapshot-interpolation",
    "tags": [
      "beginner"
    ],
    "source": "https://gafferongames.com/post/snapshot_interpolation/",
    "diagramSteps": [
      "상태 수신",
      "시간 버퍼",
      "중간 상태 표시"
    ],
    "related": [
      "client-prediction",
      "lag-compensation",
      "network-jitter"
    ],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "strategy",
      "racing",
      "sports",
      "simulation"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewScope": "수신한 상태를 버퍼에 보관하고 사이를 보간합니다. 지터 완화와 표시 지연 사이 절충을 확인했습니다.",
    "reviewLimit": "개념·출처 대조입니다. 엔진 실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://gafferongames.com/post/snapshot_interpolation/",
        "method": "원문 자료 대조"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "출처 및 설명 대조",
        "scope": "수신한 상태를 버퍼에 보관하고 사이를 보간합니다. 지터 완화와 표시 지연 사이 절충을 확인했습니다."
      }
    ]
  },
  {
    "id": 78,
    "slug": "lag-compensation",
    "kind": "concept",
    "category": "network",
    "name": "지연 보상",
    "en": "Lag compensation",
    "desc": "통신 지연을 고려하여 과거 상태 등으로 판정을 보완합니다.",
    "ko": "지연 보상을 게임에 적용하려고 합니다. 통신 지연을 고려하여 과거 상태 등으로 판정을 보완합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
    "promptEn": "Explain Lag compensation with a minimal design, use case and limitations.",
    "visual": "lag-compensation",
    "tags": [
      "beginner"
    ],
    "source": "https://developer.valvesoftware.com/w/index.php?title=Latency_Compensating_Methods_in_Client%2FServer_In-game_Protocol_Design_and_Optimization&uselang=en",
    "diagramSteps": [
      "요청 시간",
      "과거 상태 조회",
      "판정 보완"
    ],
    "related": [
      "client-prediction",
      "network-jitter",
      "replication"
    ],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "strategy",
      "racing",
      "sports",
      "simulation"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewScope": "Valve 개발자 원문 검색 본문에서 과거 상태 되감기 판정을 확인했습니다. 직접 페이지 접근은 차단되었습니다.",
    "reviewLimit": "개념·출처 대조입니다. 엔진 실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://developer.valvesoftware.com/w/index.php?title=Latency_Compensating_Methods_in_Client%2FServer_In-game_Protocol_Design_and_Optimization&uselang=en",
        "method": "검색에 노출된 원문 일부 대조"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "출처 및 설명 대조",
        "scope": "Valve 개발자 원문 검색 본문에서 과거 상태 되감기 판정을 확인했습니다. 직접 페이지 접근은 차단되었습니다."
      }
    ]
  },
  {
    "id": 79,
    "slug": "network-jitter",
    "kind": "concept",
    "category": "network",
    "name": "네트워크 지터",
    "en": "Network jitter",
    "desc": "패킷이 도착하는 시간 간격의 변동입니다.",
    "ko": "네트워크 지터을 게임에 적용하려고 합니다. 패킷이 도착하는 시간 간격의 변동입니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
    "promptEn": "Explain Network jitter with a minimal design, use case and limitations.",
    "visual": "network-jitter",
    "tags": [
      "beginner"
    ],
    "source": "https://gafferongames.com/post/snapshot_interpolation/",
    "diagramSteps": [
      "불규칙 도착",
      "간격 변동",
      "버퍼 검토"
    ],
    "related": [
      "client-prediction",
      "lag-compensation",
      "replication"
    ],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "strategy",
      "racing",
      "sports",
      "simulation"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewScope": "Gaffer의 스냅샷 보간 설명에서 불규칙한 패킷 도착과 버퍼의 필요성을 확인했습니다. 평균 지연과 구분합니다.",
    "reviewLimit": "개념·출처 대조입니다. 엔진 실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://gafferongames.com/post/snapshot_interpolation/",
        "method": "원문 자료 대조"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "출처 및 설명 대조",
        "scope": "Gaffer의 스냅샷 보간 설명에서 불규칙한 패킷 도착과 버퍼의 필요성을 확인했습니다. 평균 지연과 구분합니다."
      }
    ]
  },
  {
    "id": 80,
    "slug": "level-of-detail",
    "kind": "concept",
    "category": "optimization",
    "name": "디테일 단계",
    "en": "Level of detail",
    "desc": "화면 크기나 거리 등에 따라 표현 복잡도를 바꿉니다.",
    "ko": "디테일 단계을 게임에 적용하려고 합니다. 화면 크기나 거리 등에 따라 표현 복잡도를 바꿉니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
    "promptEn": "Explain Level of detail with a minimal design, use case and limitations.",
    "visual": "level-of-detail",
    "tags": [
      "beginner"
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/LevelOfDetail.html",
    "diagramSteps": [
      "가까운 상세",
      "거리 변화",
      "먼 단순화"
    ],
    "related": [
      "asset-streaming",
      "batching",
      "draw-call"
    ],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "strategy",
      "simulation",
      "racing",
      "sports",
      "rhythm",
      "puzzle",
      "platformer",
      "adventure",
      "horror"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewScope": "화면 크기 등에 따라 디테일을 바꾸는 LOD를 확인했습니다. 메시 LOD와 셰이더 LOD는 같은 기능이 아닙니다.",
    "reviewLimit": "개념·출처 대조입니다. 엔진 실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/LevelOfDetail.html",
        "method": "원문 자료 대조"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "출처 및 설명 대조",
        "scope": "화면 크기 등에 따라 디테일을 바꾸는 LOD를 확인했습니다. 메시 LOD와 셰이더 LOD는 같은 기능이 아닙니다."
      }
    ],
    "aliases": [
      "LOD"
    ]
  },
  {
    "id": 81,
    "slug": "frustum-culling",
    "kind": "concept",
    "category": "optimization",
    "name": "시야 절두체 컬링",
    "en": "Frustum culling",
    "desc": "카메라의 시야 범위 밖에 있는 대상을 렌더링 후보에서 제외합니다.",
    "ko": "시야 절두체 컬링을 게임에 적용하려고 합니다. 카메라의 시야 범위 밖에 있는 대상을 렌더링 후보에서 제외합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
    "promptEn": "Explain Frustum culling with a minimal design, use case and limitations.",
    "visual": "frustum-culling",
    "tags": [
      "beginner"
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/OcclusionCulling.html",
    "diagramSteps": [
      "카메라 범위",
      "경계 검사",
      "밖의 대상 제외"
    ],
    "related": [
      "asset-streaming",
      "batching",
      "draw-call"
    ],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "strategy",
      "simulation",
      "racing",
      "sports",
      "rhythm",
      "puzzle",
      "platformer",
      "adventure",
      "horror"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewScope": "Unity 6.0 컬링 문서에서 기본 시야 범위 검사와 가림 컬링의 차이를 확인했습니다.",
    "reviewLimit": "개념·출처 대조입니다. 엔진 실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/OcclusionCulling.html",
        "method": "원문 자료 대조"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "출처 및 설명 대조",
        "scope": "Unity 6.0 컬링 문서에서 기본 시야 범위 검사와 가림 컬링의 차이를 확인했습니다."
      }
    ]
  },
  {
    "id": 82,
    "slug": "occlusion-culling",
    "kind": "concept",
    "category": "optimization",
    "name": "오클루전 컬링",
    "en": "Occlusion culling",
    "desc": "다른 구조에 완전히 가려진 대상을 그리기에서 제외합니다.",
    "ko": "오클루전 컬링을 게임에 적용하려고 합니다. 다른 구조에 완전히 가려진 대상을 그리기에서 제외합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
    "promptEn": "Explain Occlusion culling with a minimal design, use case and limitations.",
    "visual": "occlusion-culling",
    "tags": [
      "beginner"
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html",
    "diagramSteps": [
      "가림 구조",
      "가시성 검사",
      "숨은 대상 제외"
    ],
    "related": [
      "asset-streaming",
      "batching",
      "draw-call"
    ],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "strategy",
      "simulation",
      "racing",
      "sports",
      "rhythm",
      "puzzle",
      "platformer",
      "adventure",
      "horror"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewScope": "Unity 문서에서 가려진 렌더러를 제외하는 기능을 확인했습니다. 카메라·데이터·장면 구조의 제약을 검토합니다.",
    "reviewLimit": "개념·출처 대조입니다. 엔진 실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html",
        "method": "공식 용어집 정의 대조"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "출처 및 설명 대조",
        "scope": "Unity 문서에서 가려진 렌더러를 제외하는 기능을 확인했습니다. 카메라·데이터·장면 구조의 제약을 검토합니다."
      }
    ]
  },
  {
    "id": 83,
    "slug": "draw-call",
    "kind": "concept",
    "category": "optimization",
    "name": "드로 콜",
    "en": "Draw call",
    "desc": "그래픽 API에 그리기 작업을 요청하는 호출입니다.",
    "ko": "드로 콜을 게임에 적용하려고 합니다. 그래픽 API에 그리기 작업을 요청하는 호출입니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
    "promptEn": "Explain Draw call with a minimal design, use case and limitations.",
    "visual": "draw-call",
    "tags": [
      "beginner"
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/DrawCallBatching.html",
    "diagramSteps": [
      "그릴 데이터",
      "그리기 요청",
      "GPU 처리"
    ],
    "related": [
      "asset-streaming",
      "batching",
      "frustum-culling"
    ],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "strategy",
      "simulation",
      "racing",
      "sports",
      "rhythm",
      "puzzle",
      "platformer",
      "adventure",
      "horror"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewType": "기능·개념",
    "reviewScope": "드로 콜은 제출 단위입니다. 수만 줄여도 모든 장면의 총 처리 비용이 줄어드는 것은 아닙니다.",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewLimit": "개념·출처 대조입니다. 엔진 실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/DrawCallBatching.html",
        "method": "원문 자료 대조"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "출처 및 설명 대조",
        "scope": "드로 콜은 제출 단위입니다. 수만 줄여도 모든 장면의 총 처리 비용이 줄어드는 것은 아닙니다."
      }
    ]
  },
  {
    "id": 84,
    "slug": "batching",
    "kind": "concept",
    "category": "optimization",
    "name": "배칭",
    "en": "Batching",
    "desc": "조건이 맞는 그리기 작업을 묶어 제출 비용을 줄입니다.",
    "ko": "배칭을 게임에 적용하려고 합니다. 조건이 맞는 그리기 작업을 묶어 제출 비용을 줄입니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
    "promptEn": "Explain Batching with a minimal design, use case and limitations.",
    "visual": "batching",
    "tags": [
      "beginner"
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/DrawCallBatching.html",
    "diagramSteps": [
      "개별 작업",
      "조건별 묶기",
      "제출 감소"
    ],
    "related": [
      "asset-streaming",
      "draw-call",
      "frustum-culling"
    ],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "strategy",
      "simulation",
      "racing",
      "sports",
      "rhythm",
      "puzzle",
      "platformer",
      "adventure",
      "horror"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewType": "기능·개념",
    "reviewScope": "Unity 문서는 같은 재질의 메시 묶기를 설명합니다. 배칭 종류와 렌더러 지원 제약을 함께 확인합니다.",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewLimit": "개념·출처 대조입니다. 엔진 실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/DrawCallBatching.html",
        "method": "원문 자료 대조"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "출처 및 설명 대조",
        "scope": "Unity 문서는 같은 재질의 메시 묶기를 설명합니다. 배칭 종류와 렌더러 지원 제약을 함께 확인합니다."
      }
    ]
  },
  {
    "id": 85,
    "slug": "gpu-instancing",
    "kind": "concept",
    "category": "optimization",
    "name": "GPU 인스턴싱",
    "en": "GPU instancing",
    "desc": "같은 메시 등을 여러 변환과 함께 묶어 그립니다.",
    "ko": "GPU 인스턴싱을 게임에 적용하려고 합니다. 같은 메시 등을 여러 변환과 함께 묶어 그립니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
    "promptEn": "Explain GPU instancing with a minimal design, use case and limitations.",
    "visual": "gpu-instancing",
    "tags": [
      "beginner"
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/GPUInstancing.html",
    "diagramSteps": [
      "공유 메시",
      "인스턴스 값",
      "묶음 렌더링"
    ],
    "related": [
      "asset-streaming",
      "batching",
      "draw-call"
    ],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "strategy",
      "simulation",
      "racing",
      "sports",
      "rhythm",
      "puzzle",
      "platformer",
      "adventure",
      "horror"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewScope": "같은 메시·재질의 여러 객체를 한 그리기 요청으로 처리하는 기능을 확인했습니다. 인스턴스별 값에 지원 제약이 있습니다.",
    "reviewLimit": "개념·출처 대조입니다. 엔진 실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/GPUInstancing.html",
        "method": "원문 자료 대조"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "출처 및 설명 대조",
        "scope": "같은 메시·재질의 여러 객체를 한 그리기 요청으로 처리하는 기능을 확인했습니다. 인스턴스별 값에 지원 제약이 있습니다."
      }
    ]
  },
  {
    "id": 86,
    "slug": "profiler",
    "kind": "concept",
    "category": "optimization",
    "name": "프로파일러",
    "en": "Profiler",
    "desc": "실행 시간과 메모리 등 측정값으로 병목을 분석합니다.",
    "ko": "프로파일러을 게임에 적용하려고 합니다. 실행 시간과 메모리 등 측정값으로 병목을 분석합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
    "promptEn": "Explain Profiler with a minimal design, use case and limitations.",
    "visual": "profiler",
    "tags": [
      "beginner"
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html",
    "diagramSteps": [
      "대표 상황",
      "구간 측정",
      "병목 판단"
    ],
    "related": [
      "asset-streaming",
      "batching",
      "draw-call"
    ],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "strategy",
      "simulation",
      "racing",
      "sports",
      "rhythm",
      "puzzle",
      "platformer",
      "adventure",
      "horror"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewScope": "프로파일러에서 구간별 시간과 자원 사용량을 측정하는 기능을 확인했습니다. 실제 대상 기기의 대표 상황으로 검증합니다.",
    "reviewLimit": "개념·출처 대조입니다. 엔진 실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html",
        "method": "공식 용어집 정의 대조"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "출처 및 설명 대조",
        "scope": "프로파일러에서 구간별 시간과 자원 사용량을 측정하는 기능을 확인했습니다. 실제 대상 기기의 대표 상황으로 검증합니다."
      }
    ]
  },
  {
    "id": 87,
    "slug": "garbage-collection",
    "kind": "concept",
    "category": "optimization",
    "name": "가비지 컬렉션",
    "en": "Garbage collection",
    "desc": "관리되는 메모리에서 더 이상 접근하지 않는 객체를 회수합니다.",
    "ko": "가비지 컬렉션을 게임에 적용하려고 합니다. 관리되는 메모리에서 더 이상 접근하지 않는 객체를 회수합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
    "promptEn": "Explain Garbage collection with a minimal design, use case and limitations.",
    "visual": "garbage-collection",
    "tags": [
      "beginner"
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/performance-garbage-collector.html",
    "diagramSteps": [
      "객체 할당",
      "접근 불가",
      "메모리 회수"
    ],
    "related": [
      "asset-streaming",
      "batching",
      "draw-call"
    ],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "strategy",
      "simulation",
      "racing",
      "sports",
      "rhythm",
      "puzzle",
      "platformer",
      "adventure",
      "horror"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewScope": "Unity의 관리 힙 회수 기능을 확인했습니다. 모든 네이티브 자원을 대신 정리하는 기능은 아닙니다.",
    "reviewLimit": "개념·출처 대조입니다. 엔진 실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/performance-garbage-collector.html",
        "method": "원문 자료 대조"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "출처 및 설명 대조",
        "scope": "Unity의 관리 힙 회수 기능을 확인했습니다. 모든 네이티브 자원을 대신 정리하는 기능은 아닙니다."
      }
    ]
  },
  {
    "id": 88,
    "slug": "spatial-partition",
    "kind": "concept",
    "category": "optimization",
    "name": "공간 분할",
    "en": "Spatial partition",
    "desc": "객체를 공간 구역에 나누어 주변 검색 범위를 줄입니다.",
    "ko": "공간 분할을 게임에 적용하려고 합니다. 객체를 공간 구역에 나누어 주변 검색 범위를 줄입니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
    "promptEn": "Explain Spatial partition with a minimal design, use case and limitations.",
    "visual": "spatial-partition",
    "tags": [
      "beginner"
    ],
    "source": "https://gameprogrammingpatterns.com/spatial-partition.html",
    "diagramSteps": [
      "공간 구역",
      "객체 등록",
      "주변 검색"
    ],
    "related": [
      "asset-streaming",
      "batching",
      "draw-call"
    ],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "strategy",
      "simulation",
      "racing",
      "sports",
      "rhythm",
      "puzzle",
      "platformer",
      "adventure",
      "horror"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewScope": "Game Programming Patterns 원문에서 위치 기반 자료구조로 주변 객체 검색을 줄이는 패턴을 확인했습니다.",
    "reviewLimit": "개념·출처 대조입니다. 엔진 실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://gameprogrammingpatterns.com/spatial-partition.html",
        "method": "원문 자료 대조"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "출처 및 설명 대조",
        "scope": "Game Programming Patterns 원문에서 위치 기반 자료구조로 주변 객체 검색을 줄이는 패턴을 확인했습니다."
      }
    ]
  },
  {
    "id": 89,
    "slug": "asset-streaming",
    "kind": "concept",
    "category": "optimization",
    "name": "텍스처 밉 스트리밍",
    "en": "Mipmap streaming",
    "desc": "필요한 텍스처 밉 레벨을 로드해 GPU 메모리를 관리합니다.",
    "ko": "텍스처 밉 스트리밍으로 GPU 메모리를 관리하고, 일반 에셋 로딩과 구분해서 예산·화질 저하·로드 지연을 검토해 주세요.",
    "promptEn": "Explain Asset streaming with a minimal design, use case and limitations.",
    "visual": "asset-streaming",
    "tags": [
      "beginner"
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/TextureStreaming.html",
    "diagramSteps": [
      "필요 영역",
      "로드 요청",
      "사용과 해제"
    ],
    "related": [
      "batching",
      "draw-call",
      "frustum-culling"
    ],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "strategy",
      "simulation",
      "racing",
      "sports",
      "rhythm",
      "puzzle",
      "platformer",
      "adventure",
      "horror"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewType": "기능·개념",
    "reviewScope": "Unity 6.0의 mipmap streaming 문서를 확인했습니다. 근거 범위에 맞춰 텍스처 밉 스트리밍으로 좁혔습니다.",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewLimit": "개념·출처 대조입니다. 엔진 실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/TextureStreaming.html",
        "method": "원문 자료 대조"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "출처 및 설명 대조",
        "scope": "Unity 6.0의 mipmap streaming 문서를 확인했습니다. 근거 범위에 맞춰 텍스처 밉 스트리밍으로 좁혔습니다."
      }
    ]
  },
  {
    "id": 90,
    "slug": "random-seed",
    "kind": "concept",
    "category": "procedural",
    "name": "랜덤 시드",
    "en": "Random seed",
    "desc": "의사난수 생성기의 시작 상태를 정하는 값입니다.",
    "ko": "랜덤 시드을 게임에 적용하려고 합니다. 의사난수 생성기의 시작 상태를 정하는 값입니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
    "promptEn": "Explain Random seed with a minimal design, use case and limitations.",
    "visual": "random-seed",
    "tags": [
      "beginner"
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/ScriptReference/Random.InitState.html",
    "diagramSteps": [
      "시드 설정",
      "난수 순서",
      "생성 결과"
    ],
    "related": [
      "noise-field",
      "procedural-mesh",
      "weighted-random"
    ],
    "genres": [
      "rpg",
      "adventure",
      "strategy",
      "simulation",
      "puzzle"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewScope": "Unity InitState는 생성기 시작 상태를 정합니다. 재현에는 호출 순서·생성기·버전도 일치해야 합니다.",
    "reviewLimit": "개념·출처 대조입니다. 엔진 실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/ScriptReference/Random.InitState.html",
        "method": "원문 자료 대조"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "출처 및 설명 대조",
        "scope": "Unity InitState는 생성기 시작 상태를 정합니다. 재현에는 호출 순서·생성기·버전도 일치해야 합니다."
      }
    ]
  },
  {
    "id": 91,
    "slug": "noise-field",
    "kind": "concept",
    "category": "procedural",
    "name": "노이즈 필드",
    "en": "Noise field",
    "desc": "좌표에 따라 연속적으로 변하는 값을 생성합니다.",
    "ko": "노이즈 필드을 게임에 적용하려고 합니다. 좌표에 따라 연속적으로 변하는 값을 생성합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
    "promptEn": "Explain Noise field with a minimal design, use case and limitations.",
    "visual": "noise-field",
    "tags": [
      "beginner"
    ],
    "source": "https://catlikecoding.com/unity/tutorials/pseudorandom-noise/value-noise/",
    "diagramSteps": [
      "좌표 입력",
      "연속 값",
      "지형 패턴"
    ],
    "related": [
      "procedural-mesh",
      "random-seed",
      "weighted-random"
    ],
    "genres": [
      "rpg",
      "adventure",
      "strategy",
      "simulation",
      "puzzle"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewScope": "Catlike Coding의 Value Noise 원문에서 좌표별 연속값 생성을 확인했습니다. 모든 노이즈 종류가 같은 성질은 아닙니다.",
    "reviewLimit": "개념·출처 대조입니다. 엔진 실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://catlikecoding.com/unity/tutorials/pseudorandom-noise/value-noise/",
        "method": "원문 자료 대조"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "출처 및 설명 대조",
        "scope": "Catlike Coding의 Value Noise 원문에서 좌표별 연속값 생성을 확인했습니다. 모든 노이즈 종류가 같은 성질은 아닙니다."
      }
    ]
  },
  {
    "id": 92,
    "slug": "weighted-random",
    "kind": "concept",
    "category": "procedural",
    "name": "가중치 랜덤",
    "en": "Weighted random",
    "desc": "각 후보의 상대 가중치에 따라 선택 확률을 나눕니다.",
    "ko": "가중치 랜덤을 게임에 적용하려고 합니다. 각 후보의 상대 가중치에 따라 선택 확률을 나눕니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
    "promptEn": "Explain Weighted random with a minimal design, use case and limitations.",
    "visual": "weighted-random",
    "tags": [
      "beginner"
    ],
    "source": "https://docs.unity3d.com/2018.4/Documentation/Manual/RandomNumbers.html",
    "diagramSteps": [
      "후보 가중치",
      "누적 구간",
      "선택"
    ],
    "related": [
      "noise-field",
      "procedural-mesh",
      "random-seed"
    ],
    "genres": [
      "rpg",
      "puzzle",
      "strategy"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewScope": "Unity 2018.4의 서로 다른 확률 선택 설명을 확인했습니다. 확률 알고리즘 참고이며 최신 엔진 메뉴 안내가 아닙니다.",
    "reviewLimit": "개념·출처 대조입니다. 엔진 실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/2018.4/Documentation/Manual/RandomNumbers.html",
        "method": "원문 자료 대조"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "출처 및 설명 대조",
        "scope": "Unity 2018.4의 서로 다른 확률 선택 설명을 확인했습니다. 확률 알고리즘 참고이며 최신 엔진 메뉴 안내가 아닙니다."
      }
    ]
  },
  {
    "id": 93,
    "slug": "procedural-mesh",
    "kind": "concept",
    "category": "procedural",
    "name": "절차적 메시",
    "en": "Procedural mesh",
    "desc": "정점과 인덱스 등을 계산해 메시를 생성합니다.",
    "ko": "절차적 메시을 게임에 적용하려고 합니다. 정점과 인덱스 등을 계산해 메시를 생성합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
    "promptEn": "Explain Procedural mesh with a minimal design, use case and limitations.",
    "visual": "procedural-mesh",
    "tags": [
      "beginner"
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/GeneratingMeshGeometryProcedurally.html",
    "diagramSteps": [
      "정점 계산",
      "삼각형 연결",
      "메시 생성"
    ],
    "related": [
      "noise-field",
      "random-seed",
      "weighted-random"
    ],
    "genres": [
      "rpg",
      "adventure",
      "strategy",
      "simulation",
      "puzzle"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewScope": "Unity Mesh API를 통한 정점·삼각형 생성 기능을 확인했습니다. 충돌 데이터 갱신과 렌더 메시 생성은 구분합니다.",
    "reviewLimit": "개념·출처 대조입니다. 엔진 실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/GeneratingMeshGeometryProcedurally.html",
        "method": "원문 자료 대조"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "출처 및 설명 대조",
        "scope": "Unity Mesh API를 통한 정점·삼각형 생성 기능을 확인했습니다. 충돌 데이터 갱신과 렌더 메시 생성은 구분합니다."
      }
    ]
  },
  {
    "id": 94,
    "slug": "audio-attenuation",
    "kind": "concept",
    "category": "audio",
    "name": "소리 감쇠",
    "en": "Audio attenuation",
    "desc": "거리 등 조건에 따라 음량을 줄입니다.",
    "ko": "소리 감쇠을 게임에 적용하려고 합니다. 거리 등 조건에 따라 음량을 줄입니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
    "promptEn": "Explain Audio attenuation with a minimal design, use case and limitations.",
    "visual": "audio-attenuation",
    "tags": [
      "beginner"
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/ScriptReference/AudioRolloffMode.html",
    "diagramSteps": [
      "음원 거리",
      "감쇠 곡선",
      "출력 음량"
    ],
    "related": [
      "audio-mixer",
      "audio-spatialization",
      "reverb"
    ],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "adventure",
      "horror",
      "rhythm",
      "racing",
      "sports"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewType": "기능·개념",
    "reviewScope": "Unity 6.0 AudioRolloffMode의 거리 기반 음량 감쇠 모드를 확인했습니다.",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewLimit": "개념·출처 대조입니다. 엔진 실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/ScriptReference/AudioRolloffMode.html",
        "method": "원문 자료 대조"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "출처 및 설명 대조",
        "scope": "Unity 6.0 AudioRolloffMode의 거리 기반 음량 감쇠 모드를 확인했습니다."
      }
    ]
  },
  {
    "id": 95,
    "slug": "audio-spatialization",
    "kind": "concept",
    "category": "audio",
    "name": "공간 음향",
    "en": "Spatialization",
    "desc": "음원의 방향과 위치를 청취 출력에 반영합니다.",
    "ko": "공간 음향을 게임에 적용하려고 합니다. 음원의 방향과 위치를 청취 출력에 반영합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
    "promptEn": "Explain Spatialization with a minimal design, use case and limitations.",
    "visual": "audio-spatialization",
    "tags": [
      "beginner"
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html",
    "diagramSteps": [
      "음원 위치",
      "방향 처리",
      "청취 출력"
    ],
    "related": [
      "audio-attenuation",
      "audio-mixer",
      "reverb"
    ],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "adventure",
      "horror",
      "rhythm",
      "racing",
      "sports"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewType": "기능·개념",
    "reviewScope": "위치에 따른 청취 출력과 Unity Spatializer 개념을 확인했습니다. 모든 출력 장치에서 같은 방향 인지를 보장하지 않습니다.",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewLimit": "개념·출처 대조입니다. 엔진 실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html",
        "method": "공식 용어집 정의 대조"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "출처 및 설명 대조",
        "scope": "위치에 따른 청취 출력과 Unity Spatializer 개념을 확인했습니다. 모든 출력 장치에서 같은 방향 인지를 보장하지 않습니다."
      }
    ]
  },
  {
    "id": 96,
    "slug": "reverb",
    "kind": "concept",
    "category": "audio",
    "name": "리버브",
    "en": "Reverb",
    "desc": "공간에서 반복 반사되는 소리의 잔향을 표현합니다.",
    "ko": "리버브을 게임에 적용하려고 합니다. 공간에서 반복 반사되는 소리의 잔향을 표현합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
    "promptEn": "Explain Reverb with a minimal design, use case and limitations.",
    "visual": "reverb",
    "tags": [
      "beginner"
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-AudioReverbFilter.html",
    "diagramSteps": [
      "원음",
      "반사와 감쇠",
      "잔향"
    ],
    "related": [
      "audio-attenuation",
      "audio-mixer",
      "audio-spatialization"
    ],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "adventure",
      "horror",
      "rhythm",
      "racing",
      "sports"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewScope": "Unity Reverb Filter의 감쇠 시간과 초기 반사·잔향 설정을 확인했습니다. 원음의 음량 조절과 구분합니다.",
    "reviewLimit": "개념·출처 대조입니다. 엔진 실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-AudioReverbFilter.html",
        "method": "원문 자료 대조"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "출처 및 설명 대조",
        "scope": "Unity Reverb Filter의 감쇠 시간과 초기 반사·잔향 설정을 확인했습니다. 원음의 음량 조절과 구분합니다."
      }
    ]
  },
  {
    "id": 97,
    "slug": "audio-mixer",
    "kind": "concept",
    "category": "audio",
    "name": "오디오 믹서",
    "en": "Audio mixer",
    "desc": "여러 소리 그룹의 음량과 효과를 조합합니다.",
    "ko": "오디오 믹서을 게임에 적용하려고 합니다. 여러 소리 그룹의 음량과 효과를 조합합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
    "promptEn": "Explain Audio mixer with a minimal design, use case and limitations.",
    "visual": "audio-mixer",
    "tags": [
      "beginner"
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/AudioMixer.html",
    "diagramSteps": [
      "소리 그룹",
      "음량과 효과",
      "최종 출력"
    ],
    "related": [
      "audio-attenuation",
      "audio-spatialization",
      "reverb"
    ],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "adventure",
      "horror",
      "rhythm",
      "racing",
      "sports"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewType": "기능·개념",
    "reviewScope": "Unity Mixer Group의 신호 혼합·음량·효과 처리를 확인했습니다. 과도한 합산 출력은 별도로 점검합니다.",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewLimit": "개념·출처 대조입니다. 엔진 실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/AudioMixer.html",
        "method": "원문 자료 대조"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "출처 및 설명 대조",
        "scope": "Unity Mixer Group의 신호 혼합·음량·효과 처리를 확인했습니다. 과도한 합산 출력은 별도로 점검합니다."
      }
    ]
  },
  {
    "id": 98,
    "slug": "component-system",
    "kind": "concept",
    "category": "architecture",
    "name": "컴포넌트 구조",
    "en": "Component architecture",
    "desc": "객체 기능을 분리된 구성 요소로 조합합니다.",
    "ko": "컴포넌트 구조을 게임에 적용하려고 합니다. 객체 기능을 분리된 구성 요소로 조합합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
    "promptEn": "Explain Component architecture with a minimal design, use case and limitations.",
    "visual": "component-system",
    "tags": [
      "beginner"
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html",
    "diagramSteps": [
      "분리된 기능",
      "객체에 조합",
      "상호작용"
    ],
    "related": [
      "event-queue"
    ],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "strategy",
      "simulation",
      "racing",
      "sports",
      "rhythm",
      "puzzle",
      "platformer",
      "adventure",
      "horror"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewType": "기능·개념",
    "reviewScope": "Unity GameObject의 컴포넌트 구성을 확인했습니다. 이 설명은 ECS나 모든 엔진의 객체 모델과 같다는 뜻이 아닙니다.",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewLimit": "개념·출처 대조입니다. 엔진 실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html",
        "method": "공식 용어집 정의 대조"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "출처 및 설명 대조",
        "scope": "Unity GameObject의 컴포넌트 구성을 확인했습니다. 이 설명은 ECS나 모든 엔진의 객체 모델과 같다는 뜻이 아닙니다."
      }
    ]
  },
  {
    "id": 99,
    "slug": "event-queue",
    "kind": "concept",
    "category": "architecture",
    "name": "이벤트 큐",
    "en": "Event queue",
    "desc": "발생한 이벤트를 보관하고 나중에 순서대로 처리합니다.",
    "ko": "이벤트 큐을 게임에 적용하려고 합니다. 발생한 이벤트를 보관하고 나중에 순서대로 처리합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
    "promptEn": "Explain Event queue with a minimal design, use case and limitations.",
    "visual": "event-queue",
    "tags": [
      "beginner"
    ],
    "source": "https://gameprogrammingpatterns.com/event-queue.html",
    "diagramSteps": [
      "이벤트 발생",
      "큐 저장",
      "후속 처리"
    ],
    "related": [
      "component-system"
    ],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "strategy",
      "simulation",
      "racing",
      "sports",
      "rhythm",
      "puzzle",
      "platformer",
      "adventure",
      "horror"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewType": "구현·설계 패턴",
    "reviewScope": "원저자 문서에서 이벤트 발송과 처리 시점을 분리하는 큐 패턴을 확인했습니다.",
    "reviewVersion": "원저자 자료",
    "reviewLimit": "개념·출처 대조입니다. 엔진 실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://gameprogrammingpatterns.com/event-queue.html",
        "method": "원문 자료 대조"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "출처 및 설명 대조",
        "scope": "원저자 문서에서 이벤트 발송과 처리 시점을 분리하는 큐 패턴을 확인했습니다."
      }
    ]
  },
  {
    "id": 100,
    "slug": "animation-clip",
    "kind": "concept",
    "category": "animation",
    "name": "애니메이션 클립",
    "en": "Animation Clip",
    "desc": "시간에 따른 위치·회전·속성 변화 등을 담은 애니메이션 데이터입니다.",
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-AnimationClip.html",
    "ko": "애니메이션 클립의 데이터와 처리 흐름을 설명하고 클립 데이터와 이를 재생하는 컨트롤러를 구분합니다.",
    "promptEn": "Explain Animation Clip including its structure, setup requirements and limitations.",
    "visual": "animation-clip",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "simulation"
    ],
    "diagramSteps": [
      "입력·데이터",
      "설정·처리",
      "결과 확인"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewScope": "Unity 6.0 용어집의 정의와 연결 문서의 존재를 대조했습니다. 관련 문서: Animation tab",
    "reviewLimit": "기본 정의와 문서 연결 대조입니다. 엔진별 동등 기능과 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-AnimationClip.html",
        "method": "공식 용어집 정의 및 연결 문서 응답 대조",
        "version": "Unity 6.0"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "신규 기본 개념 등록",
        "scope": "Unity 6.0 용어집의 정의와 연결 문서의 존재를 대조했습니다. 관련 문서: Animation tab"
      }
    ]
  },
  {
    "id": 101,
    "slug": "animation-curves",
    "kind": "concept",
    "category": "animation",
    "name": "애니메이션 커브",
    "en": "Animation Curves",
    "desc": "시간과 속성 값 사이의 관계를 곡선으로 표현합니다.",
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/AnimationCurvesOnImportedClips.html",
    "ko": "애니메이션 커브의 데이터와 처리 흐름을 설명하고 키 사이의 보간 방법에 따라 움직임이 달라집니다.",
    "promptEn": "Explain Animation Curves including its structure, setup requirements and limitations.",
    "visual": "animation-curves",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "simulation"
    ],
    "diagramSteps": [
      "입력·데이터",
      "설정·처리",
      "결과 확인"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewScope": "Unity 6.0 용어집의 정의와 연결 문서의 존재를 대조했습니다. 관련 문서: Use curves to control the timing of animation clips",
    "reviewLimit": "기본 정의와 문서 연결 대조입니다. 엔진별 동등 기능과 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/AnimationCurvesOnImportedClips.html",
        "method": "공식 용어집 정의 및 연결 문서 응답 대조",
        "version": "Unity 6.0"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "신규 기본 개념 등록",
        "scope": "Unity 6.0 용어집의 정의와 연결 문서의 존재를 대조했습니다. 관련 문서: Use curves to control the timing of animation clips"
      }
    ]
  },
  {
    "id": 102,
    "slug": "animation-parameters",
    "kind": "concept",
    "category": "animation",
    "name": "애니메이션 파라미터",
    "en": "Animation Parameters",
    "desc": "애니메이션 제어기에 전달하는 숫자·불리언·트리거 등의 입력입니다.",
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/AnimationParameters.html",
    "ko": "애니메이션 파라미터의 데이터와 처리 흐름을 설명하고 파라미터 변경 자체와 전환 조건 만족 여부를 구분합니다.",
    "promptEn": "Explain Animation Parameters including its structure, setup requirements and limitations.",
    "visual": "animation-parameters",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "simulation"
    ],
    "diagramSteps": [
      "입력·데이터",
      "설정·처리",
      "결과 확인"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewScope": "Unity 6.0 용어집의 정의와 연결 문서의 존재를 대조했습니다. 관련 문서: Animation Parameters",
    "reviewLimit": "기본 정의와 문서 연결 대조입니다. 엔진별 동등 기능과 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/AnimationParameters.html",
        "method": "공식 용어집 정의 및 연결 문서 응답 대조",
        "version": "Unity 6.0"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "신규 기본 개념 등록",
        "scope": "Unity 6.0 용어집의 정의와 연결 문서의 존재를 대조했습니다. 관련 문서: Animation Parameters"
      }
    ]
  },
  {
    "id": 103,
    "slug": "animation-transition",
    "kind": "concept",
    "category": "animation",
    "name": "애니메이션 전환",
    "en": "Animation Transition",
    "desc": "애니메이션 상태 사이를 옮기는 조건과 혼합 구성을 지정합니다.",
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/StateMachineTransitions.html",
    "ko": "애니메이션 전환의 데이터와 처리 흐름을 설명하고 종료 시점과 조건, 혼합 시간을 함께 검토합니다.",
    "promptEn": "Explain Animation Transition including its structure, setup requirements and limitations.",
    "visual": "animation-transition",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "simulation"
    ],
    "diagramSteps": [
      "입력·데이터",
      "설정·처리",
      "결과 확인"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewScope": "Unity 6.0 용어집의 정의와 연결 문서의 존재를 대조했습니다. 관련 문서: State Machine Transitions",
    "reviewLimit": "기본 정의와 문서 연결 대조입니다. 엔진별 동등 기능과 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/StateMachineTransitions.html",
        "method": "공식 용어집 정의 및 연결 문서 응답 대조",
        "version": "Unity 6.0"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "신규 기본 개념 등록",
        "scope": "Unity 6.0 용어집의 정의와 연결 문서의 존재를 대조했습니다. 관련 문서: State Machine Transitions"
      }
    ],
    "aliases": [
      "transition"
    ]
  },
  {
    "id": 104,
    "slug": "animator-override",
    "kind": "concept",
    "category": "animation",
    "name": "애니메이터 오버라이드 컨트롤러",
    "en": "Animator Override Controller",
    "desc": "기존 상태 구조를 활용하면서 사용하는 애니메이션 클립을 교체합니다.",
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/AnimatorOverrideController.html",
    "ko": "애니메이터 오버라이드 컨트롤러의 데이터와 처리 흐름을 설명하고 상태 구조를 새로 설계하는 기능과 클립 교체를 구분합니다.",
    "promptEn": "Explain Animator Override Controller including its structure, setup requirements and limitations.",
    "visual": "animator-override",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "simulation"
    ],
    "diagramSteps": [
      "입력·데이터",
      "설정·처리",
      "결과 확인"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewScope": "Unity 6.0 용어집의 정의와 연결 문서의 존재를 대조했습니다. 관련 문서: Animator Override Controller",
    "reviewLimit": "기본 정의와 문서 연결 대조입니다. 엔진별 동등 기능과 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/AnimatorOverrideController.html",
        "method": "공식 용어집 정의 및 연결 문서 응답 대조",
        "version": "Unity 6.0"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "신규 기본 개념 등록",
        "scope": "Unity 6.0 용어집의 정의와 연결 문서의 존재를 대조했습니다. 관련 문서: Animator Override Controller"
      }
    ]
  },
  {
    "id": 105,
    "slug": "avatar-mask",
    "kind": "concept",
    "category": "animation",
    "name": "아바타 마스크",
    "en": "Avatar Mask",
    "desc": "애니메이션을 적용할 신체 부위나 변환 경로를 제한합니다.",
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-AvatarMask.html",
    "ko": "아바타 마스크의 데이터와 처리 흐름을 설명하고 레이어의 혼합 방식과 적용 부위는 서로 다른 설정입니다.",
    "promptEn": "Explain Avatar Mask including its structure, setup requirements and limitations.",
    "visual": "avatar-mask",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "simulation"
    ],
    "diagramSteps": [
      "입력·데이터",
      "설정·처리",
      "결과 확인"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewScope": "Unity 6.0 용어집의 정의와 연결 문서의 존재를 대조했습니다. 관련 문서: Avatar Mask window reference",
    "reviewLimit": "기본 정의와 문서 연결 대조입니다. 엔진별 동등 기능과 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-AvatarMask.html",
        "method": "공식 용어집 정의 및 연결 문서 응답 대조",
        "version": "Unity 6.0"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "신규 기본 개념 등록",
        "scope": "Unity 6.0 용어집의 정의와 연결 문서의 존재를 대조했습니다. 관련 문서: Avatar Mask window reference"
      }
    ]
  },
  {
    "id": 106,
    "slug": "skinning",
    "kind": "concept",
    "category": "animation",
    "name": "스키닝",
    "en": "Skinning",
    "desc": "뼈의 움직임과 정점 가중치로 메시를 변형하는 구성입니다.",
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/UsingHumanoidChars.html",
    "ko": "스키닝의 데이터와 처리 흐름을 설명하고 뼈 계층과 정점 가중치를 함께 점검합니다.",
    "promptEn": "Explain Skinning including its structure, setup requirements and limitations.",
    "visual": "skinning",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "simulation"
    ],
    "diagramSteps": [
      "입력·데이터",
      "설정·처리",
      "결과 확인"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewScope": "Unity 6.0 용어집의 정의와 연결 문서의 존재를 대조했습니다. 관련 문서: Creating models for animation",
    "reviewLimit": "기본 정의와 문서 연결 대조입니다. 엔진별 동등 기능과 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/UsingHumanoidChars.html",
        "method": "공식 용어집 정의 및 연결 문서 응답 대조",
        "version": "Unity 6.0"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "신규 기본 개념 등록",
        "scope": "Unity 6.0 용어집의 정의와 연결 문서의 존재를 대조했습니다. 관련 문서: Creating models for animation"
      }
    ]
  },
  {
    "id": 107,
    "slug": "target-matching",
    "kind": "concept",
    "category": "animation",
    "name": "타깃 매칭",
    "en": "target matching",
    "desc": "애니메이션의 특정 구간에서 신체 부위가 목표 위치에 맞도록 조정합니다.",
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/TargetMatching.html",
    "ko": "타깃 매칭의 데이터와 처리 흐름을 설명하고 일반적인 IK와 같은 기능이라고 단정하지 않습니다.",
    "promptEn": "Explain target matching including its structure, setup requirements and limitations.",
    "visual": "target-matching",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "simulation"
    ],
    "diagramSteps": [
      "입력·데이터",
      "설정·처리",
      "결과 확인"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewScope": "Unity 6.0 용어집의 정의와 연결 문서의 존재를 대조했습니다. 관련 문서: Target Matching",
    "reviewLimit": "기본 정의와 문서 연결 대조입니다. 엔진별 동등 기능과 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/TargetMatching.html",
        "method": "공식 용어집 정의 및 연결 문서 응답 대조",
        "version": "Unity 6.0"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "신규 기본 개념 등록",
        "scope": "Unity 6.0 용어집의 정의와 연결 문서의 존재를 대조했습니다. 관련 문서: Target Matching"
      }
    ]
  },
  {
    "id": 108,
    "slug": "cloth",
    "kind": "concept",
    "category": "physics",
    "name": "천 시뮬레이션",
    "en": "Cloth",
    "desc": "천 형태의 변형을 물리 계산으로 표현하는 기능입니다.",
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-Cloth.html",
    "ko": "천 시뮬레이션의 데이터와 처리 흐름을 설명하고 충돌 설정과 고정 지점, 계산 비용을 확인합니다.",
    "promptEn": "Explain Cloth including its structure, setup requirements and limitations.",
    "visual": "cloth",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "simulation"
    ],
    "diagramSteps": [
      "입력·데이터",
      "설정·처리",
      "결과 확인"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewScope": "Unity 6.0 용어집의 정의와 연결 문서의 존재를 대조했습니다. 관련 문서: Cloth",
    "reviewLimit": "기본 정의와 문서 연결 대조입니다. 엔진별 동등 기능과 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-Cloth.html",
        "method": "공식 용어집 정의 및 연결 문서 응답 대조",
        "version": "Unity 6.0"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "신규 기본 개념 등록",
        "scope": "Unity 6.0 용어집의 정의와 연결 문서의 존재를 대조했습니다. 관련 문서: Cloth"
      }
    ]
  },
  {
    "id": 109,
    "slug": "center-of-mass",
    "kind": "concept",
    "category": "physics",
    "name": "질량 중심",
    "en": "center of mass",
    "desc": "강체의 질량 분포를 대표하는 중심 위치입니다.",
    "source": "https://docs.unity3d.com/6000.0/Documentation/ScriptReference/Rigidbody-centerOfMass.html",
    "ko": "질량 중심의 데이터와 처리 흐름을 설명하고 외형의 기하학적 중심과 항상 같지는 않습니다.",
    "promptEn": "Explain center of mass including its structure, setup requirements and limitations.",
    "visual": "center-of-mass",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "simulation"
    ],
    "diagramSteps": [
      "입력·데이터",
      "설정·처리",
      "결과 확인"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewScope": "Unity 6.0 용어집의 정의와 연결 문서의 존재를 대조했습니다. 관련 문서: Unity - Scripting API: Rigidbody.centerOfMass",
    "reviewLimit": "기본 정의와 문서 연결 대조입니다. 엔진별 동등 기능과 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/ScriptReference/Rigidbody-centerOfMass.html",
        "method": "공식 용어집 정의 및 연결 문서 응답 대조",
        "version": "Unity 6.0"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "신규 기본 개념 등록",
        "scope": "Unity 6.0 용어집의 정의와 연결 문서의 존재를 대조했습니다. 관련 문서: Unity - Scripting API: Rigidbody.centerOfMass"
      }
    ]
  },
  {
    "id": 110,
    "slug": "hinge-joint",
    "kind": "concept",
    "category": "physics",
    "name": "힌지 조인트",
    "en": "Hinge Joint",
    "desc": "연결된 물체의 회전을 하나의 축 중심으로 제한합니다.",
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-HingeJoint.html",
    "ko": "힌지 조인트의 데이터와 처리 흐름을 설명하고 회전 제한과 모터, 스프링 설정을 구분합니다.",
    "promptEn": "Explain Hinge Joint including its structure, setup requirements and limitations.",
    "visual": "hinge-joint",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "simulation"
    ],
    "diagramSteps": [
      "입력·데이터",
      "설정·처리",
      "결과 확인"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewScope": "Unity 6.0 용어집의 정의와 연결 문서의 존재를 대조했습니다. 관련 문서: Hinge Joint component reference",
    "reviewLimit": "기본 정의와 문서 연결 대조입니다. 엔진별 동등 기능과 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-HingeJoint.html",
        "method": "공식 용어집 정의 및 연결 문서 응답 대조",
        "version": "Unity 6.0"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "신규 기본 개념 등록",
        "scope": "Unity 6.0 용어집의 정의와 연결 문서의 존재를 대조했습니다. 관련 문서: Hinge Joint component reference"
      }
    ]
  },
  {
    "id": 111,
    "slug": "fixed-joint",
    "kind": "concept",
    "category": "physics",
    "name": "고정 조인트",
    "en": "Fixed Joint",
    "desc": "두 강체 사이의 상대적인 위치와 회전을 유지하는 연결입니다.",
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-FixedJoint.html",
    "ko": "고정 조인트의 데이터와 처리 흐름을 설명하고 부모 자식 관계로 변환을 묶는 방식과 구분합니다.",
    "promptEn": "Explain Fixed Joint including its structure, setup requirements and limitations.",
    "visual": "fixed-joint",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "simulation"
    ],
    "diagramSteps": [
      "입력·데이터",
      "설정·처리",
      "결과 확인"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewScope": "Unity 6.0 용어집의 정의와 연결 문서의 존재를 대조했습니다. 관련 문서: Fixed Joint component reference",
    "reviewLimit": "기본 정의와 문서 연결 대조입니다. 엔진별 동등 기능과 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-FixedJoint.html",
        "method": "공식 용어집 정의 및 연결 문서 응답 대조",
        "version": "Unity 6.0"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "신규 기본 개념 등록",
        "scope": "Unity 6.0 용어집의 정의와 연결 문서의 존재를 대조했습니다. 관련 문서: Fixed Joint component reference"
      }
    ]
  },
  {
    "id": 112,
    "slug": "wheel-collider",
    "kind": "concept",
    "category": "physics",
    "name": "휠 콜라이더",
    "en": "Wheel Collider",
    "desc": "바퀴 접촉과 서스펜션·마찰을 차량 물리 구성에 사용하는 컴포넌트입니다.",
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-WheelCollider.html",
    "ko": "휠 콜라이더의 데이터와 처리 흐름을 설명하고 시각적인 바퀴 메시를 자동으로 만드는 기능은 아닙니다.",
    "promptEn": "Explain Wheel Collider including its structure, setup requirements and limitations.",
    "visual": "wheel-collider",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "simulation"
    ],
    "diagramSteps": [
      "입력·데이터",
      "설정·처리",
      "결과 확인"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewScope": "Unity 6.0 용어집의 정의와 연결 문서의 존재를 대조했습니다. 관련 문서: Wheel collider component reference",
    "reviewLimit": "기본 정의와 문서 연결 대조입니다. 엔진별 동등 기능과 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-WheelCollider.html",
        "method": "공식 용어집 정의 및 연결 문서 응답 대조",
        "version": "Unity 6.0"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "신규 기본 개념 등록",
        "scope": "Unity 6.0 용어집의 정의와 연결 문서의 존재를 대조했습니다. 관련 문서: Wheel collider component reference"
      }
    ]
  },
  {
    "id": 113,
    "slug": "character-controller",
    "kind": "concept",
    "category": "movement",
    "name": "캐릭터 컨트롤러",
    "en": "Character Controller",
    "desc": "충돌을 고려한 캐릭터 이동을 구성하는 Unity 컴포넌트입니다.",
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-CharacterController.html",
    "ko": "캐릭터 컨트롤러의 데이터와 처리 흐름을 설명하고 Rigidbody의 힘으로 이동하는 구성과 차이를 확인합니다.",
    "promptEn": "Explain Character Controller including its structure, setup requirements and limitations.",
    "visual": "character-controller",
    "tags": [],
    "genres": [
      "action",
      "platformer"
    ],
    "diagramSteps": [
      "입력·데이터",
      "설정·처리",
      "결과 확인"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewScope": "Unity 6.0 용어집의 정의와 연결 문서의 존재를 대조했습니다. 관련 문서: Character Controller component reference",
    "reviewLimit": "기본 정의와 문서 연결 대조입니다. 엔진별 동등 기능과 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-CharacterController.html",
        "method": "공식 용어집 정의 및 연결 문서 응답 대조",
        "version": "Unity 6.0"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "신규 기본 개념 등록",
        "scope": "Unity 6.0 용어집의 정의와 연결 문서의 존재를 대조했습니다. 관련 문서: Character Controller component reference"
      }
    ]
  },
  {
    "id": 114,
    "slug": "deferred-shading",
    "kind": "concept",
    "category": "rendering",
    "name": "디퍼드 셰이딩",
    "en": "deferred shading",
    "desc": "표면 정보를 버퍼에 저장한 뒤 조명 계산에 사용하는 렌더링 방식입니다.",
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/RenderTech-DeferredShading.html",
    "ko": "디퍼드 셰이딩의 데이터와 처리 흐름을 설명하고 지원되는 재질과 투명 물체 처리, 버퍼 비용을 확인합니다.",
    "promptEn": "Explain deferred shading including its structure, setup requirements and limitations.",
    "visual": "deferred-shading",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "simulation"
    ],
    "diagramSteps": [
      "입력·데이터",
      "설정·처리",
      "결과 확인"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewScope": "Unity 6.0 용어집의 정의와 연결 문서의 존재를 대조했습니다. 관련 문서: Deferred rendering path in the Built-In Render Pipeline ",
    "reviewLimit": "기본 정의와 문서 연결 대조입니다. 엔진별 동등 기능과 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/RenderTech-DeferredShading.html",
        "method": "공식 용어집 정의 및 연결 문서 응답 대조",
        "version": "Unity 6.0"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "신규 기본 개념 등록",
        "scope": "Unity 6.0 용어집의 정의와 연결 문서의 존재를 대조했습니다. 관련 문서: Deferred rendering path in the Built-In Render Pipeline "
      }
    ]
  },
  {
    "id": 115,
    "slug": "forward-rendering",
    "kind": "concept",
    "category": "rendering",
    "name": "포워드 렌더링",
    "en": "Forward Rendering",
    "desc": "물체를 그리는 과정에서 재질과 조명 영향을 계산하는 렌더링 방식입니다.",
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/RenderTech-ForwardRendering.html",
    "ko": "포워드 렌더링의 데이터와 처리 흐름을 설명하고 엔진과 파이프라인에 따라 조명 처리 방법이 달라집니다.",
    "promptEn": "Explain Forward Rendering including its structure, setup requirements and limitations.",
    "visual": "forward-rendering",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "simulation"
    ],
    "diagramSteps": [
      "입력·데이터",
      "설정·처리",
      "결과 확인"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewScope": "Unity 6.0 용어집의 정의와 연결 문서의 존재를 대조했습니다. 관련 문서: Forward rendering path in the Built-In Render Pipeline",
    "reviewLimit": "기본 정의와 문서 연결 대조입니다. 엔진별 동등 기능과 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/RenderTech-ForwardRendering.html",
        "method": "공식 용어집 정의 및 연결 문서 응답 대조",
        "version": "Unity 6.0"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "신규 기본 개념 등록",
        "scope": "Unity 6.0 용어집의 정의와 연결 문서의 존재를 대조했습니다. 관련 문서: Forward rendering path in the Built-In Render Pipeline"
      }
    ]
  },
  {
    "id": 116,
    "slug": "cubemap",
    "kind": "concept",
    "category": "rendering",
    "name": "큐브맵",
    "en": "Cubemap",
    "desc": "여섯 방향의 이미지로 주변 환경을 표현하는 텍스처 형태입니다.",
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-Cubemap-landing.html",
    "ko": "큐브맵의 데이터와 처리 흐름을 설명하고 환경 데이터 저장과 실제 반사 계산을 구분합니다.",
    "promptEn": "Explain Cubemap including its structure, setup requirements and limitations.",
    "visual": "cubemap",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "simulation"
    ],
    "diagramSteps": [
      "입력·데이터",
      "설정·처리",
      "결과 확인"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewScope": "Unity 6.0 용어집의 정의와 연결 문서의 존재를 대조했습니다. 관련 문서: Cubemaps",
    "reviewLimit": "기본 정의와 문서 연결 대조입니다. 엔진별 동등 기능과 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-Cubemap-landing.html",
        "method": "공식 용어집 정의 및 연결 문서 응답 대조",
        "version": "Unity 6.0"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "신규 기본 개념 등록",
        "scope": "Unity 6.0 용어집의 정의와 연결 문서의 존재를 대조했습니다. 관련 문서: Cubemaps"
      }
    ]
  },
  {
    "id": 117,
    "slug": "reflection-probe",
    "kind": "concept",
    "category": "rendering",
    "name": "반사 프로브",
    "en": "Reflection Probe",
    "desc": "특정 위치의 주변 환경을 반사에 사용할 수 있도록 수집합니다.",
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-ReflectionProbe.html",
    "ko": "반사 프로브의 데이터와 처리 흐름을 설명하고 갱신 방식과 적용 범위를 선택해야 합니다.",
    "promptEn": "Explain Reflection Probe including its structure, setup requirements and limitations.",
    "visual": "reflection-probe",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "simulation"
    ],
    "diagramSteps": [
      "입력·데이터",
      "설정·처리",
      "결과 확인"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewScope": "Unity 6.0 용어집의 정의와 연결 문서의 존재를 대조했습니다. 관련 문서: Reflection Probe Inspector window reference",
    "reviewLimit": "기본 정의와 문서 연결 대조입니다. 엔진별 동등 기능과 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-ReflectionProbe.html",
        "method": "공식 용어집 정의 및 연결 문서 응답 대조",
        "version": "Unity 6.0"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "신규 기본 개념 등록",
        "scope": "Unity 6.0 용어집의 정의와 연결 문서의 존재를 대조했습니다. 관련 문서: Reflection Probe Inspector window reference"
      }
    ]
  },
  {
    "id": 118,
    "slug": "light-probe",
    "kind": "concept",
    "category": "rendering",
    "name": "라이트 프로브",
    "en": "Light Probe",
    "desc": "공간의 지점들에 조명 정보를 저장하여 물체 조명에 활용합니다.",
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/LightProbes.html",
    "ko": "라이트 프로브의 데이터와 처리 흐름을 설명하고 라이트맵처럼 표면별 텍스처에 저장하는 방식과 구분합니다.",
    "promptEn": "Explain Light Probe including its structure, setup requirements and limitations.",
    "visual": "light-probe",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "simulation"
    ],
    "diagramSteps": [
      "입력·데이터",
      "설정·처리",
      "결과 확인"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewScope": "Unity 6.0 용어집의 정의와 연결 문서의 존재를 대조했습니다. 관련 문서: Light Probes",
    "reviewLimit": "기본 정의와 문서 연결 대조입니다. 엔진별 동등 기능과 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/LightProbes.html",
        "method": "공식 용어집 정의 및 연결 문서 응답 대조",
        "version": "Unity 6.0"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "신규 기본 개념 등록",
        "scope": "Unity 6.0 용어집의 정의와 연결 문서의 존재를 대조했습니다. 관련 문서: Light Probes"
      }
    ]
  },
  {
    "id": 119,
    "slug": "lightmap",
    "kind": "concept",
    "category": "rendering",
    "name": "라이트맵",
    "en": "Lightmap",
    "desc": "미리 계산한 표면 조명 정보를 텍스처에 저장합니다.",
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/Lightmapping.html",
    "ko": "라이트맵의 데이터와 처리 흐름을 설명하고 조명이나 물체가 바뀔 때 재계산 여부를 확인합니다.",
    "promptEn": "Explain Lightmap including its structure, setup requirements and limitations.",
    "visual": "lightmap",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "simulation"
    ],
    "diagramSteps": [
      "입력·데이터",
      "설정·처리",
      "결과 확인"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewScope": "Unity 6.0 용어집의 정의와 연결 문서의 존재를 대조했습니다. 관련 문서: Set up your scene and lights for baking",
    "reviewLimit": "기본 정의와 문서 연결 대조입니다. 엔진별 동등 기능과 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/Lightmapping.html",
        "method": "공식 용어집 정의 및 연결 문서 응답 대조",
        "version": "Unity 6.0"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "신규 기본 개념 등록",
        "scope": "Unity 6.0 용어집의 정의와 연결 문서의 존재를 대조했습니다. 관련 문서: Set up your scene and lights for baking"
      }
    ]
  },
  {
    "id": 120,
    "slug": "render-texture",
    "kind": "concept",
    "category": "rendering",
    "name": "렌더 텍스처",
    "en": "Render Texture",
    "desc": "렌더링 결과를 화면 대신 텍스처에 기록하는 자원입니다.",
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-RenderTexture.html",
    "ko": "렌더 텍스처의 데이터와 처리 흐름을 설명하고 크기와 포맷, 갱신 주기에 따른 비용을 검토합니다.",
    "promptEn": "Explain Render Texture including its structure, setup requirements and limitations.",
    "visual": "render-texture",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "simulation"
    ],
    "diagramSteps": [
      "입력·데이터",
      "설정·처리",
      "결과 확인"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewScope": "Unity 6.0 용어집의 정의와 연결 문서의 존재를 대조했습니다. 관련 문서: Render Texture Inspector window reference",
    "reviewLimit": "기본 정의와 문서 연결 대조입니다. 엔진별 동등 기능과 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-RenderTexture.html",
        "method": "공식 용어집 정의 및 연결 문서 응답 대조",
        "version": "Unity 6.0"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "신규 기본 개념 등록",
        "scope": "Unity 6.0 용어집의 정의와 연결 문서의 존재를 대조했습니다. 관련 문서: Render Texture Inspector window reference"
      }
    ]
  },
  {
    "id": 121,
    "slug": "stencil-buffer",
    "kind": "concept",
    "category": "rendering",
    "name": "스텐실 버퍼",
    "en": "stencil buffer",
    "desc": "픽셀별 정수 값을 검사하거나 기록해 그리기 범위를 제어합니다.",
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-RenderTexture.html",
    "ko": "스텐실 버퍼의 데이터와 처리 흐름을 설명하고 깊이 버퍼의 거리 비교와 역할이 다릅니다.",
    "promptEn": "Explain stencil buffer including its structure, setup requirements and limitations.",
    "visual": "stencil-buffer",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "simulation"
    ],
    "diagramSteps": [
      "입력·데이터",
      "설정·처리",
      "결과 확인"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewScope": "Unity 6.0 용어집의 정의와 연결 문서의 존재를 대조했습니다. 관련 문서: Render Texture Inspector window reference",
    "reviewLimit": "기본 정의와 문서 연결 대조입니다. 엔진별 동등 기능과 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-RenderTexture.html",
        "method": "공식 용어집 정의 및 연결 문서 응답 대조",
        "version": "Unity 6.0"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "신규 기본 개념 등록",
        "scope": "Unity 6.0 용어집의 정의와 연결 문서의 존재를 대조했습니다. 관련 문서: Render Texture Inspector window reference"
      }
    ]
  },
  {
    "id": 122,
    "slug": "shader-variant",
    "kind": "concept",
    "category": "rendering",
    "name": "셰이더 배리언트",
    "en": "shader variant",
    "desc": "키워드나 옵션 조합에 따라 달라지는 셰이더 프로그램 버전입니다.",
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/shader-variants.html",
    "ko": "셰이더 배리언트의 데이터와 처리 흐름을 설명하고 옵션 조합 증가가 빌드 크기와 준비 비용에 영향을 줄 수 있습니다.",
    "promptEn": "Explain shader variant including its structure, setup requirements and limitations.",
    "visual": "shader-variant",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "simulation"
    ],
    "diagramSteps": [
      "입력·데이터",
      "설정·처리",
      "결과 확인"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewScope": "Unity 6.0 용어집의 정의와 연결 문서의 존재를 대조했습니다. 관련 문서: Introduction to shader variants",
    "reviewLimit": "기본 정의와 문서 연결 대조입니다. 엔진별 동등 기능과 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/shader-variants.html",
        "method": "공식 용어집 정의 및 연결 문서 응답 대조",
        "version": "Unity 6.0"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "신규 기본 개념 등록",
        "scope": "Unity 6.0 용어집의 정의와 연결 문서의 존재를 대조했습니다. 관련 문서: Introduction to shader variants"
      }
    ]
  },
  {
    "id": 123,
    "slug": "depth-of-field",
    "kind": "concept",
    "category": "effects",
    "name": "피사계 심도",
    "en": "depth of field",
    "desc": "초점 거리와 깊이에 따라 화면의 선명도 차이를 표현하는 효과입니다.",
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/PostProcessingOverview.html",
    "ko": "피사계 심도의 데이터와 처리 흐름을 설명하고 게임 플레이 정보가 흐려지지 않도록 강도를 검토합니다.",
    "promptEn": "Explain depth of field including its structure, setup requirements and limitations.",
    "visual": "depth-of-field",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "simulation"
    ],
    "diagramSteps": [
      "입력·데이터",
      "설정·처리",
      "결과 확인"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewScope": "Unity 6.0 용어집의 정의와 연결 문서의 존재를 대조했습니다. 관련 문서: Introduction to post-processing",
    "reviewLimit": "기본 정의와 문서 연결 대조입니다. 엔진별 동등 기능과 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/PostProcessingOverview.html",
        "method": "공식 용어집 정의 및 연결 문서 응답 대조",
        "version": "Unity 6.0"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "신규 기본 개념 등록",
        "scope": "Unity 6.0 용어집의 정의와 연결 문서의 존재를 대조했습니다. 관련 문서: Introduction to post-processing"
      }
    ]
  },
  {
    "id": 124,
    "slug": "sprite-mask",
    "kind": "concept",
    "category": "rendering",
    "name": "스프라이트 마스크",
    "en": "Sprite Mask",
    "desc": "스프라이트의 표시 영역을 마스크 형태로 제한합니다.",
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/sprite/mask/mask-landing.html",
    "ko": "스프라이트 마스크의 데이터와 처리 흐름을 설명하고 UI 마스킹과 적용 대상 및 설정을 구분합니다.",
    "promptEn": "Explain Sprite Mask including its structure, setup requirements and limitations.",
    "visual": "sprite-mask",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "simulation"
    ],
    "diagramSteps": [
      "입력·데이터",
      "설정·처리",
      "결과 확인"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewScope": "Unity 6.0 용어집의 정의와 연결 문서의 존재를 대조했습니다. 관련 문서: Masking sprites",
    "reviewLimit": "기본 정의와 문서 연결 대조입니다. 엔진별 동등 기능과 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/sprite/mask/mask-landing.html",
        "method": "공식 용어집 정의 및 연결 문서 응답 대조",
        "version": "Unity 6.0"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "신규 기본 개념 등록",
        "scope": "Unity 6.0 용어집의 정의와 연결 문서의 존재를 대조했습니다. 관련 문서: Masking sprites"
      }
    ]
  },
  {
    "id": 125,
    "slug": "tilemap",
    "kind": "concept",
    "category": "level",
    "name": "타일맵",
    "en": "Tilemap",
    "desc": "격자에 타일을 배치하여 2D 공간을 구성합니다.",
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/tilemaps/work-with-tilemaps/tilemap-reference.html",
    "ko": "타일맵의 데이터와 처리 흐름을 설명하고 타일 데이터, 렌더링과 충돌을 별도로 설정합니다.",
    "promptEn": "Explain Tilemap including its structure, setup requirements and limitations.",
    "visual": "tilemap",
    "tags": [],
    "genres": [
      "adventure",
      "rpg",
      "simulation"
    ],
    "diagramSteps": [
      "입력·데이터",
      "설정·처리",
      "결과 확인"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewScope": "Unity 6.0 용어집의 정의와 연결 문서의 존재를 대조했습니다. 관련 문서: Tilemap component reference",
    "reviewLimit": "기본 정의와 문서 연결 대조입니다. 엔진별 동등 기능과 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/tilemaps/work-with-tilemaps/tilemap-reference.html",
        "method": "공식 용어집 정의 및 연결 문서 응답 대조",
        "version": "Unity 6.0"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "신규 기본 개념 등록",
        "scope": "Unity 6.0 용어집의 정의와 연결 문서의 존재를 대조했습니다. 관련 문서: Tilemap component reference"
      }
    ]
  },
  {
    "id": 126,
    "slug": "terrain",
    "kind": "concept",
    "category": "level",
    "name": "터레인",
    "en": "Terrain",
    "desc": "지형 높이와 표면 데이터를 이용해 넓은 지형을 구성합니다.",
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/terrain-UsingTerrains.html",
    "ko": "터레인의 데이터와 처리 흐름을 설명하고 일반 메시와 데이터 구조 및 편집 방식이 다릅니다.",
    "promptEn": "Explain Terrain including its structure, setup requirements and limitations.",
    "visual": "terrain",
    "tags": [],
    "genres": [
      "adventure",
      "rpg",
      "simulation"
    ],
    "diagramSteps": [
      "입력·데이터",
      "설정·처리",
      "결과 확인"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewScope": "Unity 6.0 용어집의 정의와 연결 문서의 존재를 대조했습니다. 관련 문서: Creating and editing Terrains",
    "reviewLimit": "기본 정의와 문서 연결 대조입니다. 엔진별 동등 기능과 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/terrain-UsingTerrains.html",
        "method": "공식 용어집 정의 및 연결 문서 응답 대조",
        "version": "Unity 6.0"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "신규 기본 개념 등록",
        "scope": "Unity 6.0 용어집의 정의와 연결 문서의 존재를 대조했습니다. 관련 문서: Creating and editing Terrains"
      }
    ]
  },
  {
    "id": 127,
    "slug": "audio-listener",
    "kind": "concept",
    "category": "audio",
    "name": "오디오 리스너",
    "en": "Audio Listener",
    "desc": "소리를 듣는 기준 위치와 방향을 제공하는 컴포넌트입니다.",
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-AudioListener.html",
    "ko": "오디오 리스너의 데이터와 처리 흐름을 설명하고 음원 위치와 청취 위치를 분리해 설계합니다.",
    "promptEn": "Explain Audio Listener including its structure, setup requirements and limitations.",
    "visual": "audio-listener",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "simulation"
    ],
    "diagramSteps": [
      "입력·데이터",
      "설정·처리",
      "결과 확인"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewScope": "Unity 6.0 용어집의 정의와 연결 문서의 존재를 대조했습니다. 관련 문서: Audio Listener",
    "reviewLimit": "기본 정의와 문서 연결 대조입니다. 엔진별 동등 기능과 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-AudioListener.html",
        "method": "공식 용어집 정의 및 연결 문서 응답 대조",
        "version": "Unity 6.0"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "신규 기본 개념 등록",
        "scope": "Unity 6.0 용어집의 정의와 연결 문서의 존재를 대조했습니다. 관련 문서: Audio Listener"
      }
    ]
  },
  {
    "id": 128,
    "slug": "audio-source",
    "kind": "concept",
    "category": "audio",
    "name": "오디오 소스",
    "en": "Audio Source",
    "desc": "오디오 클립을 재생하고 음원 관련 설정을 제공하는 컴포넌트입니다.",
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-AudioSource.html",
    "ko": "오디오 소스의 데이터와 처리 흐름을 설명하고 클립 데이터와 재생 주체를 구분합니다.",
    "promptEn": "Explain Audio Source including its structure, setup requirements and limitations.",
    "visual": "audio-source",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "simulation"
    ],
    "diagramSteps": [
      "입력·데이터",
      "설정·처리",
      "결과 확인"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewScope": "Unity 6.0 용어집의 정의와 연결 문서의 존재를 대조했습니다. 관련 문서: Audio Source",
    "reviewLimit": "기본 정의와 문서 연결 대조입니다. 엔진별 동등 기능과 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-AudioSource.html",
        "method": "공식 용어집 정의 및 연결 문서 응답 대조",
        "version": "Unity 6.0"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "신규 기본 개념 등록",
        "scope": "Unity 6.0 용어집의 정의와 연결 문서의 존재를 대조했습니다. 관련 문서: Audio Source"
      }
    ]
  },
  {
    "id": 129,
    "slug": "audio-low-pass",
    "kind": "concept",
    "category": "audio",
    "name": "오디오 로우패스 필터",
    "en": "Audio Low Pass Filter",
    "desc": "높은 주파수 영역을 감쇠시키는 오디오 필터입니다.",
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-AudioLowPassFilter.html",
    "ko": "오디오 로우패스 필터의 데이터와 처리 흐름을 설명하고 음량 전체 감소와 주파수별 감쇠는 다릅니다.",
    "promptEn": "Explain Audio Low Pass Filter including its structure, setup requirements and limitations.",
    "visual": "audio-low-pass",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "simulation"
    ],
    "diagramSteps": [
      "입력·데이터",
      "설정·처리",
      "결과 확인"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewScope": "Unity 6.0 용어집의 정의와 연결 문서의 존재를 대조했습니다. 관련 문서: Audio Low Pass Filter",
    "reviewLimit": "기본 정의와 문서 연결 대조입니다. 엔진별 동등 기능과 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-AudioLowPassFilter.html",
        "method": "공식 용어집 정의 및 연결 문서 응답 대조",
        "version": "Unity 6.0"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "신규 기본 개념 등록",
        "scope": "Unity 6.0 용어집의 정의와 연결 문서의 존재를 대조했습니다. 관련 문서: Audio Low Pass Filter"
      }
    ]
  },
  {
    "id": 130,
    "slug": "audio-high-pass",
    "kind": "concept",
    "category": "audio",
    "name": "오디오 하이패스 필터",
    "en": "Audio High Pass Filter",
    "desc": "낮은 주파수 영역을 감쇠시키는 오디오 필터입니다.",
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-AudioHighPassFilter.html",
    "ko": "오디오 하이패스 필터의 데이터와 처리 흐름을 설명하고 차단 주파수와 다른 음향 처리의 조합을 검토합니다.",
    "promptEn": "Explain Audio High Pass Filter including its structure, setup requirements and limitations.",
    "visual": "audio-high-pass",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "simulation"
    ],
    "diagramSteps": [
      "입력·데이터",
      "설정·처리",
      "결과 확인"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewScope": "Unity 6.0 용어집의 정의와 연결 문서의 존재를 대조했습니다. 관련 문서: Audio High Pass Filter",
    "reviewLimit": "기본 정의와 문서 연결 대조입니다. 엔진별 동등 기능과 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-AudioHighPassFilter.html",
        "method": "공식 용어집 정의 및 연결 문서 응답 대조",
        "version": "Unity 6.0"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "신규 기본 개념 등록",
        "scope": "Unity 6.0 용어집의 정의와 연결 문서의 존재를 대조했습니다. 관련 문서: Audio High Pass Filter"
      }
    ]
  },
  {
    "id": 131,
    "slug": "doppler-factor",
    "kind": "concept",
    "category": "audio",
    "name": "도플러 효과 계수",
    "en": "doppler factor",
    "desc": "음원과 청취자의 상대적인 움직임에 따른 음높이 변화의 정도를 조절합니다.",
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-AudioManager.html",
    "ko": "도플러 효과 계수의 데이터와 처리 흐름을 설명하고 거리 기반 음량 감쇠와는 다른 설정입니다.",
    "promptEn": "Explain doppler factor including its structure, setup requirements and limitations.",
    "visual": "doppler-factor",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "simulation"
    ],
    "diagramSteps": [
      "입력·데이터",
      "설정·처리",
      "결과 확인"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewScope": "Unity 6.0 용어집의 정의와 연결 문서의 존재를 대조했습니다. 관련 문서: Audio",
    "reviewLimit": "기본 정의와 문서 연결 대조입니다. 엔진별 동등 기능과 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-AudioManager.html",
        "method": "공식 용어집 정의 및 연결 문서 응답 대조",
        "version": "Unity 6.0"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "신규 기본 개념 등록",
        "scope": "Unity 6.0 용어집의 정의와 연결 문서의 존재를 대조했습니다. 관련 문서: Audio"
      }
    ]
  },
  {
    "id": 132,
    "slug": "prefab",
    "kind": "concept",
    "category": "architecture",
    "name": "프리팹",
    "en": "prefab",
    "desc": "게임 오브젝트 구성을 재사용할 수 있는 에셋으로 저장합니다.",
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/Prefabs.html",
    "ko": "프리팹의 데이터와 처리 흐름을 설명하고 Unity의 프리팹이며 Unreal의 동일한 이름 기능을 뜻하지 않습니다.",
    "promptEn": "Explain prefab including its structure, setup requirements and limitations.",
    "visual": "prefab",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "simulation"
    ],
    "diagramSteps": [
      "입력·데이터",
      "설정·처리",
      "결과 확인"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewScope": "Unity 6.0 용어집의 정의와 연결 문서의 존재를 대조했습니다. 관련 문서: Prefabs",
    "reviewLimit": "기본 정의와 문서 연결 대조입니다. 엔진별 동등 기능과 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/Prefabs.html",
        "method": "공식 용어집 정의 및 연결 문서 응답 대조",
        "version": "Unity 6.0"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "신규 기본 개념 등록",
        "scope": "Unity 6.0 용어집의 정의와 연결 문서의 존재를 대조했습니다. 관련 문서: Prefabs"
      }
    ]
  },
  {
    "id": 133,
    "slug": "quaternion",
    "kind": "concept",
    "category": "principles",
    "name": "쿼터니언",
    "en": "Quaternion",
    "desc": "3D 회전을 표현하는 수학적 표현입니다.",
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-Quaternion.html",
    "ko": "쿼터니언의 데이터와 처리 흐름을 설명하고 오일러 각과 변환 규칙, 보간 방식의 차이를 확인합니다.",
    "promptEn": "Explain Quaternion including its structure, setup requirements and limitations.",
    "visual": "quaternion",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "simulation"
    ],
    "diagramSteps": [
      "입력·데이터",
      "설정·처리",
      "결과 확인"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewScope": "Unity 6.0 용어집의 정의와 연결 문서의 존재를 대조했습니다. 관련 문서: Programming with the Quaternion class",
    "reviewLimit": "기본 정의와 문서 연결 대조입니다. 엔진별 동등 기능과 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-Quaternion.html",
        "method": "공식 용어집 정의 및 연결 문서 응답 대조",
        "version": "Unity 6.0"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "신규 기본 개념 등록",
        "scope": "Unity 6.0 용어집의 정의와 연결 문서의 존재를 대조했습니다. 관련 문서: Programming with the Quaternion class"
      }
    ]
  },
  {
    "id": 134,
    "slug": "playable-graph",
    "kind": "concept",
    "category": "animation",
    "name": "플레이어블 그래프",
    "en": "Playable Graph",
    "desc": "재생 데이터와 처리 노드를 연결하여 출력으로 전달하는 그래프입니다.",
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/Playables-Graph.html",
    "ko": "플레이어블 그래프의 데이터와 처리 흐름을 설명하고 그래프 노드의 연결과 출력 대상을 함께 구성해야 합니다.",
    "promptEn": "Explain Playable Graph including its structure, setup requirements and limitations.",
    "visual": "playable-graph",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "simulation"
    ],
    "diagramSteps": [
      "입력·데이터",
      "설정·처리",
      "결과 확인"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewScope": "Unity 6.0 용어집의 정의와 연결 문서의 존재를 대조했습니다. 관련 문서: The PlayableGraph",
    "reviewLimit": "기본 정의와 문서 연결 대조입니다. 엔진별 동등 기능과 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/Playables-Graph.html",
        "method": "공식 용어집 정의 및 연결 문서 응답 대조",
        "version": "Unity 6.0"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "신규 기본 개념 등록",
        "scope": "Unity 6.0 용어집의 정의와 연결 문서의 존재를 대조했습니다. 관련 문서: The PlayableGraph"
      }
    ]
  },
  {
    "id": 135,
    "slug": "il2cpp",
    "kind": "concept",
    "category": "architecture",
    "name": "IL2CPP",
    "en": "IL2CPP",
    "desc": "Unity의 관리 코드 실행을 위한 스크립팅 백엔드 중 하나입니다.",
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/scripting-backends-il2cpp.html",
    "ko": "IL2CPP의 데이터와 처리 흐름을 설명하고 Mono와 지원 플랫폼 및 빌드 과정을 구분합니다.",
    "promptEn": "Explain IL2CPP including its structure, setup requirements and limitations.",
    "visual": "il2cpp",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "simulation"
    ],
    "diagramSteps": [
      "입력·데이터",
      "설정·처리",
      "결과 확인"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewScope": "Unity 6.0 용어집의 정의와 연결 문서의 존재를 대조했습니다. 관련 문서: IL2CPP scripting back end",
    "reviewLimit": "기본 정의와 문서 연결 대조입니다. 엔진별 동등 기능과 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/scripting-backends-il2cpp.html",
        "method": "공식 용어집 정의 및 연결 문서 응답 대조",
        "version": "Unity 6.0"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "신규 기본 개념 등록",
        "scope": "Unity 6.0 용어집의 정의와 연결 문서의 존재를 대조했습니다. 관련 문서: IL2CPP scripting back end"
      }
    ]
  },
  {
    "id": 136,
    "slug": "texture-compression",
    "kind": "concept",
    "category": "optimization",
    "name": "텍스처 압축",
    "en": "texture compression",
    "desc": "텍스처 저장과 사용 비용을 줄이기 위해 압축 형식을 적용합니다.",
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/texture-choose-format-by-platform.html",
    "ko": "텍스처 압축의 데이터와 처리 흐름을 설명하고 지원 플랫폼과 화질, 런타임 포맷을 함께 확인합니다.",
    "promptEn": "Explain texture compression including its structure, setup requirements and limitations.",
    "visual": "texture-compression",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "simulation"
    ],
    "diagramSteps": [
      "입력·데이터",
      "설정·처리",
      "결과 확인"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewScope": "Unity 6.0 용어집의 정의와 연결 문서의 존재를 대조했습니다. 관련 문서: Choose a GPU texture format by platform",
    "reviewLimit": "기본 정의와 문서 연결 대조입니다. 엔진별 동등 기능과 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/texture-choose-format-by-platform.html",
        "method": "공식 용어집 정의 및 연결 문서 응답 대조",
        "version": "Unity 6.0"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "신규 기본 개념 등록",
        "scope": "Unity 6.0 용어집의 정의와 연결 문서의 존재를 대조했습니다. 관련 문서: Choose a GPU texture format by platform"
      }
    ]
  },
  {
    "id": 137,
    "slug": "blend-tree-1d",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "animation",
    "name": "1D 블렌드 트리",
    "en": "1D Blend Tree",
    "desc": "한 개의 숫자 파라미터에 따라 여러 애니메이션의 비중을 혼합합니다.",
    "ko": "1D 블렌드 트리의 의미를 설명하고 다음 조건을 구분해 주세요. 걷기와 달리기를 속도 값으로 섞는 구성이 대표적입니다. 상태 전환과 연속 혼합을 구분합니다.",
    "promptEn": "Explain 1D Blend Tree and distinguish its scope, prerequisites and limitations.",
    "visual": "blend-tree-1d",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: 1D Blending · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/BlendTree-1DBlending.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: 1D Blending · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/BlendTree-1DBlending.html"
  },
  {
    "id": 138,
    "slug": "blend-tree-2d",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "animation",
    "name": "2D 블렌드 트리",
    "en": "2D Blend Tree",
    "desc": "두 개의 파라미터를 사용해 애니메이션의 혼합 비중을 결정합니다.",
    "ko": "2D 블렌드 트리의 의미를 설명하고 다음 조건을 구분해 주세요. 이동 방향처럼 두 축을 쓰는 입력에 활용합니다. 선택한 2D 혼합 방식의 조건을 확인합니다.",
    "promptEn": "Explain 2D Blend Tree and distinguish its scope, prerequisites and limitations.",
    "visual": "blend-tree-2d",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: 2D Blending · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/BlendTree-2DBlending.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: 2D Blending · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/BlendTree-2DBlending.html"
  },
  {
    "id": 139,
    "slug": "object-2d",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "assets",
    "name": "2D 오브젝트",
    "en": "2D Object",
    "desc": "스프라이트나 타일 등 평면 중심의 게임 요소입니다.",
    "ko": "2D 오브젝트의 의미를 설명하고 다음 조건을 구분해 주세요. 2D 콘텐츠도 Transform과 카메라를 사용합니다. 2D라는 이름이 모든 좌표의 Z 값을 없앤다는 뜻은 아닙니다.",
    "promptEn": "Explain 2D Object and distinguish its scope, prerequisites and limitations.",
    "visual": "object-2d",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: 2D game development · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/Unity2D.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: 2D game development · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/Unity2D.html"
  },
  {
    "id": 140,
    "slug": "object-3d",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "assets",
    "name": "3D 오브젝트",
    "en": "3D Object",
    "desc": "메시와 변환 등을 이용해 입체적인 게임 요소를 구성합니다.",
    "ko": "3D 오브젝트의 의미를 설명하고 다음 조건을 구분해 주세요. 오브젝트 데이터와 실제로 화면에 그리는 Renderer의 역할을 구분합니다.",
    "promptEn": "Explain 3D Object and distinguish its scope, prerequisites and limitations.",
    "visual": "object-3d",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Introduction to GameObjects · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/GameObjects.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Introduction to GameObjects · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/GameObjects.html"
  },
  {
    "id": 141,
    "slug": "unity-accelerator",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "tools",
    "name": "Unity Accelerator",
    "en": "Accelerator",
    "desc": "팀이 가져온 에셋의 처리 결과를 캐시하여 재가져오기 부담을 줄이는 도구입니다.",
    "ko": "Unity Accelerator의 의미를 설명하고 다음 조건을 구분해 주세요. 원본 파일을 관리하는 버전 관리 시스템을 대체하지 않습니다. 네트워크와 캐시 구성을 확인합니다.",
    "promptEn": "Explain Accelerator and distinguish its scope, prerequisites and limitations.",
    "visual": "unity-accelerator",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Introduction to Unity Accelerator · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/UnityAccelerator.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Introduction to Unity Accelerator · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/UnityAccelerator.html"
  },
  {
    "id": 142,
    "slug": "ambient-light",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "rendering",
    "name": "환경광",
    "en": "ambient light",
    "desc": "장면 주변에서 들어오는 조명의 전반적인 영향을 표현합니다.",
    "ko": "환경광의 의미를 설명하고 다음 조건을 구분해 주세요. 직접광과 환경광을 구분합니다. 소스와 설정 방식은 렌더 파이프라인에 따라 다릅니다.",
    "promptEn": "Explain ambient light and distinguish its scope, prerequisites and limitations.",
    "visual": "ambient-light",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Lighting window reference · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/lighting-window.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Lighting window reference · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/lighting-window.html"
  },
  {
    "id": 143,
    "slug": "unity-analytics",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "tools",
    "name": "Unity Analytics",
    "en": "Analytics",
    "desc": "게임에서 수집한 이벤트 데이터를 분석하는 Unity 서비스입니다.",
    "ko": "Unity Analytics의 의미를 설명하고 다음 조건을 구분해 주세요. 데이터 수집 설정과 이용자 동의, 서비스 요구 조건을 별도로 검토해야 합니다.",
    "promptEn": "Explain Analytics and distinguish its scope, prerequisites and limitations.",
    "visual": "unity-analytics",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 서비스 문서 (2026-10-14 확인)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Unity Analytics • Analytics • Unity Docs · Unity 서비스 문서 (2026-10-14 확인)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity.com/ugs/en-us/manual/analytics/manual/overview",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 서비스 문서 (2026-10-14 확인)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Unity Analytics • Analytics • Unity Docs · Unity 서비스 문서 (2026-10-14 확인)"
      }
    ],
    "source": "https://docs.unity.com/ugs/en-us/manual/analytics/manual/overview"
  },
  {
    "id": 144,
    "slug": "android-keystore",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "platform",
    "name": "Android 키스토어",
    "en": "Android Keystore",
    "desc": "Android 앱 서명에 사용하는 키 정보를 보관하는 저장소입니다.",
    "ko": "Android 키스토어의 의미를 설명하고 다음 조건을 구분해 주세요. 업로드 키와 앱 서명 키의 역할을 구분하고 키와 암호를 코드 저장소에 포함하지 않습니다.",
    "promptEn": "Explain Android Keystore and distinguish its scope, prerequisites and limitations.",
    "visual": "android-keystore",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Android Player settings · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-PlayerSettingsAndroid.html#projectkeystore",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Android Player settings · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-PlayerSettingsAndroid.html#projectkeystore"
  },
  {
    "id": 145,
    "slug": "blend-shape",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "animation",
    "name": "블렌드 셰이프",
    "en": "Animation Blend Shape",
    "desc": "기본 메시와 변형 형상 사이의 가중치를 조절하여 형태를 바꿉니다.",
    "ko": "블렌드 셰이프의 의미를 설명하고 다음 조건을 구분해 주세요. 얼굴 표정 등에 활용합니다. 본 기반 스키닝과 다른 변형 데이터입니다.",
    "promptEn": "Explain Animation Blend Shape and distinguish its scope, prerequisites and limitations.",
    "visual": "blend-shape",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Work with blend shapes · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/BlendShapes.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Work with blend shapes · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/BlendShapes.html"
  },
  {
    "id": 146,
    "slug": "animation-clip-node",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "animation",
    "name": "애니메이션 클립 노드",
    "en": "Animation Clip Node",
    "desc": "블렌드 트리에서 재생할 개별 클립을 참조하는 말단 노드입니다.",
    "ko": "애니메이션 클립 노드의 의미를 설명하고 다음 조건을 구분해 주세요. 클립을 담는 노드와 여러 자식을 섞는 블렌드 노드를 구분합니다.",
    "promptEn": "Explain Animation Clip Node and distinguish its scope, prerequisites and limitations.",
    "visual": "animation-clip-node",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Animation Blend Trees · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-BlendTree.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Animation Blend Trees · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-BlendTree.html"
  },
  {
    "id": 147,
    "slug": "animation-compression",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "optimization",
    "name": "애니메이션 압축",
    "en": "animation compression",
    "desc": "애니메이션 데이터의 저장 비용을 줄이도록 키와 표현을 압축합니다.",
    "ko": "애니메이션 압축의 의미를 설명하고 다음 조건을 구분해 주세요. 허용 오차가 크면 동작이 달라질 수 있습니다. 파일 크기와 실제 재생 품질을 함께 비교합니다.",
    "promptEn": "Explain animation compression and distinguish its scope, prerequisites and limitations.",
    "visual": "animation-compression",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Animation tab · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-AnimationClip.html#AssetProperties",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Animation tab · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-AnimationClip.html#AssetProperties"
  },
  {
    "id": 148,
    "slug": "animation-key",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "animation",
    "name": "애니메이션 키",
    "en": "Animation Key",
    "desc": "특정 시점의 애니메이션 속성 값을 기록한 데이터입니다.",
    "ko": "애니메이션 키의 의미를 설명하고 다음 조건을 구분해 주세요. 키 사이의 값은 곡선의 보간 규칙에 따라 결정됩니다. 모든 프레임에 키를 넣을 필요는 없습니다.",
    "promptEn": "Explain Animation Key and distinguish its scope, prerequisites and limitations.",
    "visual": "animation-key",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Use Animation curves · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/animeditor-AnimationCurves.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Use Animation curves · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/animeditor-AnimationCurves.html"
  },
  {
    "id": 149,
    "slug": "animator-state-machine",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "animation",
    "name": "애니메이터 상태 머신",
    "en": "Animation State Machine",
    "desc": "Animator Controller에서 클립이나 블렌드 트리의 상태와 전환을 구성한 그래프입니다.",
    "ko": "애니메이터 상태 머신의 의미를 설명하고 다음 조건을 구분해 주세요. 게임 로직 전체를 관리하는 일반 상태 머신과 적용 범위를 구분합니다.",
    "promptEn": "Explain Animation State Machine and distinguish its scope, prerequisites and limitations.",
    "visual": "animator-state-machine",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Animation state machine · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/AnimationStateMachines.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Animation state machine · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/AnimationStateMachines.html",
    "aliases": [
      "State Machine"
    ]
  },
  {
    "id": 150,
    "slug": "animator-component",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "animation",
    "name": "Animator 컴포넌트",
    "en": "Animator Component",
    "desc": "게임 오브젝트에 연결하여 애니메이션 재생을 담당하는 Unity 컴포넌트입니다.",
    "ko": "Animator 컴포넌트의 의미를 설명하고 다음 조건을 구분해 주세요. 제어 규칙을 담는 Controller 에셋과 실제 재생 주체를 구분합니다.",
    "promptEn": "Explain Animator Component and distinguish its scope, prerequisites and limitations.",
    "visual": "animator-component",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Introduction to Animator Controllers · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-AnimatorController.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Introduction to Animator Controllers · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-AnimatorController.html"
  },
  {
    "id": 151,
    "slug": "animator-controller",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "animation",
    "name": "Animator Controller",
    "en": "Animator Controller",
    "desc": "애니메이션 상태·전환·레이어·파라미터를 저장하는 제어 에셋입니다.",
    "ko": "Animator Controller의 의미를 설명하고 다음 조건을 구분해 주세요. 여러 Animator에서 같은 제어 에셋을 사용할 수 있습니다. 모델과 Avatar 호환 조건을 확인합니다.",
    "promptEn": "Explain Animator Controller and distinguish its scope, prerequisites and limitations.",
    "visual": "animator-controller",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Introduction to Animator Controllers · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-AnimatorController.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Introduction to Animator Controllers · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-AnimatorController.html"
  },
  {
    "id": 152,
    "slug": "animator-window",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "tools",
    "name": "Animator 창",
    "en": "Animator Window",
    "desc": "Animator Controller의 상태 그래프를 편집하는 에디터 창입니다.",
    "ko": "Animator 창의 의미를 설명하고 다음 조건을 구분해 주세요. Animation 창의 클립 키 편집과 구분합니다. 에디터 도구이며 런타임 UI가 아닙니다.",
    "promptEn": "Explain Animator Window and distinguish its scope, prerequisites and limitations.",
    "visual": "animator-window",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Animator window · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/AnimatorWindow.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Animator window · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/AnimatorWindow.html"
  },
  {
    "id": 153,
    "slug": "anisotropic-filtering",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "rendering",
    "name": "비등방성 필터링",
    "en": "Aniso Level",
    "desc": "비스듬히 보이는 텍스처의 샘플링 품질을 개선하는 필터 설정입니다.",
    "ko": "비등방성 필터링의 의미를 설명하고 다음 조건을 구분해 주세요. 바닥 텍스처처럼 화면에서 늘어져 보이는 표면에 활용합니다. 대상 기기의 비용과 품질을 비교합니다.",
    "promptEn": "Explain Aniso Level and distinguish its scope, prerequisites and limitations.",
    "visual": "anisotropic-filtering",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Texture.anisoLevel · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/ScriptReference/Texture-anisoLevel.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Texture.anisoLevel · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/ScriptReference/Texture-anisoLevel.html"
  },
  {
    "id": 154,
    "slug": "aot-compilation",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "platform",
    "name": "AOT 컴파일",
    "en": "AOT Compilation",
    "desc": "코드를 실행하기 전에 대상 환경에서 실행할 코드로 컴파일하는 방식입니다.",
    "ko": "AOT 컴파일의 의미를 설명하고 다음 조건을 구분해 주세요. JIT와 구분합니다. Unity IL2CPP는 AOT 경로이며 지원 기능과 플랫폼 제약을 확인해야 합니다.",
    "promptEn": "Explain AOT Compilation and distinguish its scope, prerequisites and limitations.",
    "visual": "aot-compilation",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Scripting back ends · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/scripting-backends.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Scripting back ends · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/scripting-backends.html"
  },
  {
    "id": 155,
    "slug": "android-apk",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "platform",
    "name": "APK",
    "en": "APK",
    "desc": "Android 애플리케이션을 설치하는 패키지 파일 형식입니다.",
    "ko": "APK의 의미를 설명하고 다음 조건을 구분해 주세요. 배포에 쓰는 Android App Bundle과 구분합니다. 스토어 제출 요구 사항은 별도 문서를 확인합니다.",
    "promptEn": "Explain APK and distinguish its scope, prerequisites and limitations.",
    "visual": "android-apk",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Build your application for Android · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/android-BuildProcess.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Build your application for Android · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/android-BuildProcess.html"
  },
  {
    "id": 156,
    "slug": "augmented-reality",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "platform",
    "name": "증강 현실",
    "en": "Augmented Reality",
    "desc": "현실 환경의 영상이나 공간에 가상 요소를 겹쳐 상호작용하는 기술입니다.",
    "ko": "증강 현실의 의미를 설명하고 다음 조건을 구분해 주세요. 기기 추적과 카메라·권한 지원이 필요합니다. 가상 공간 중심의 VR과 구분합니다.",
    "promptEn": "Explain Augmented Reality and distinguish its scope, prerequisites and limitations.",
    "visual": "augmented-reality",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: AR development in Unity · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/AROverview.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: AR development in Unity · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/AROverview.html",
    "aliases": [
      "AR"
    ]
  },
  {
    "id": 157,
    "slug": "asset-package",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "assets",
    "name": "에셋 패키지",
    "en": "asset package",
    "desc": "Unity 에셋을 묶어 가져오기와 내보내기에 사용하는 .unitypackage 파일입니다.",
    "ko": "에셋 패키지의 의미를 설명하고 다음 조건을 구분해 주세요. Package Manager의 UPM 패키지와 파일 구조 및 의존성 관리 방법이 다릅니다.",
    "promptEn": "Explain asset package and distinguish its scope, prerequisites and limitations.",
    "visual": "asset-package",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Distribute assets as packages · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/AssetPackages.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Distribute assets as packages · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/AssetPackages.html"
  },
  {
    "id": 158,
    "slug": "asset",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "assets",
    "name": "에셋",
    "en": "asset",
    "desc": "프로젝트에서 사용하는 이미지·음원·모델·설정 같은 데이터 자원입니다.",
    "ko": "에셋의 의미를 설명하고 다음 조건을 구분해 주세요. 원본 파일과 임포트 결과를 구분합니다. 프로젝트에서 만든 제어 에셋도 에셋에 포함됩니다.",
    "promptEn": "Explain asset and distinguish its scope, prerequisites and limitations.",
    "visual": "asset",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Introduction to assets in Unity · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/AssetWorkflow.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Introduction to assets in Unity · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/AssetWorkflow.html"
  },
  {
    "id": 159,
    "slug": "audio-clip",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "audio",
    "name": "오디오 클립",
    "en": "Audio Clip",
    "desc": "재생할 음원 데이터를 담은 Unity 에셋입니다.",
    "ko": "오디오 클립의 의미를 설명하고 다음 조건을 구분해 주세요. Audio Source는 재생 주체입니다. 클립의 압축과 로딩 방법에 따른 메모리·지연을 확인합니다.",
    "promptEn": "Explain Audio Clip and distinguish its scope, prerequisites and limitations.",
    "visual": "audio-clip",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Audio Clip Import Settings reference · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-AudioClip.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Audio Clip Import Settings reference · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-AudioClip.html"
  },
  {
    "id": 160,
    "slug": "audio-distortion",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "audio",
    "name": "오디오 디스토션 필터",
    "en": "Audio Distortion Filter",
    "desc": "파형을 왜곡하여 거칠게 들리는 음색을 만드는 필터입니다.",
    "ko": "오디오 디스토션 필터의 의미를 설명하고 다음 조건을 구분해 주세요. 음량만 조절하는 처리와 다릅니다. 강한 왜곡은 소리의 명료도를 낮출 수 있습니다.",
    "promptEn": "Explain Audio Distortion Filter and distinguish its scope, prerequisites and limitations.",
    "visual": "audio-distortion",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Audio Distortion Filter · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-AudioDistortionFilter.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Audio Distortion Filter · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-AudioDistortionFilter.html",
    "aliases": [
      "distortion effect"
    ]
  },
  {
    "id": 161,
    "slug": "audio-effect",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "audio",
    "name": "오디오 효과",
    "en": "Audio Effect",
    "desc": "믹서 등을 통해 소리의 특성을 바꾸는 처리입니다.",
    "ko": "오디오 효과의 의미를 설명하고 다음 조건을 구분해 주세요. 리버브·필터 같은 효과의 순서와 적용 위치를 확인합니다. 음원 자체의 데이터와 구분합니다.",
    "promptEn": "Explain Audio Effect and distinguish its scope, prerequisites and limitations.",
    "visual": "audio-effect",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Use audio effects · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-AudioEffectMixer.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Use audio effects · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-AudioEffectMixer.html"
  },
  {
    "id": 162,
    "slug": "audio-filter",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "audio",
    "name": "오디오 필터",
    "en": "Audio Filter",
    "desc": "Audio Source 또는 Listener를 통해 소리를 처리하는 컴포넌트 계열입니다.",
    "ko": "오디오 필터의 의미를 설명하고 다음 조건을 구분해 주세요. 믹서 버스에 효과를 넣는 구성과 적용 범위가 다릅니다. 같은 필터가 중복 적용되는지 확인합니다.",
    "promptEn": "Explain Audio Filter and distinguish its scope, prerequisites and limitations.",
    "visual": "audio-filter",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Use audio filters · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-AudioEffect.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Use audio filters · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-AudioEffect.html"
  },
  {
    "id": 163,
    "slug": "humanoid-avatar",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "animation",
    "name": "휴머노이드 아바타",
    "en": "Avatar",
    "desc": "휴머노이드 뼈 구조와 Unity 애니메이션 시스템 사이의 매핑 데이터입니다.",
    "ko": "휴머노이드 아바타의 의미를 설명하고 다음 조건을 구분해 주세요. 일반적인 게임 캐릭터 외형이라는 뜻과 구분합니다. 리타기팅에는 유효한 뼈 매핑이 필요합니다.",
    "promptEn": "Explain Avatar and distinguish its scope, prerequisites and limitations.",
    "visual": "humanoid-avatar",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Importing a model with humanoid animations · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/ConfiguringtheAvatar.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Importing a model with humanoid animations · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/ConfiguringtheAvatar.html"
  },
  {
    "id": 164,
    "slug": "billboard",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "rendering",
    "name": "빌보드",
    "en": "billboard",
    "desc": "카메라를 향하도록 방향을 맞추는 평면 표현입니다.",
    "ko": "빌보드의 의미를 설명하고 다음 조건을 구분해 주세요. 수목·효과 등에 사용합니다. 축 제한 여부와 실제 카메라 위치에 맞춘 회전 방식을 구분합니다.",
    "promptEn": "Explain billboard and distinguish its scope, prerequisites and limitations.",
    "visual": "billboard",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Billboard Renderer component reference · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-BillboardRenderer.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Billboard Renderer component reference · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-BillboardRenderer.html"
  },
  {
    "id": 165,
    "slug": "animation-blend-node",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "animation",
    "name": "애니메이션 블렌드 노드",
    "en": "Blend Node",
    "desc": "블렌드 트리에서 자식 애니메이션 노드들을 혼합하는 노드입니다.",
    "ko": "애니메이션 블렌드 노드의 의미를 설명하고 다음 조건을 구분해 주세요. 말단의 클립 노드와 혼합 규칙을 가진 노드를 구분합니다.",
    "promptEn": "Explain Blend Node and distinguish its scope, prerequisites and limitations.",
    "visual": "animation-blend-node",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Animation Blend Trees · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-BlendTree.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Animation Blend Trees · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-BlendTree.html"
  },
  {
    "id": 166,
    "slug": "body-transform",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "animation",
    "name": "바디 트랜스폼",
    "en": "Body Transform",
    "desc": "휴머노이드 애니메이션에서 신체의 중심과 방향을 나타내는 데이터입니다.",
    "ko": "바디 트랜스폼의 의미를 설명하고 다음 조건을 구분해 주세요. 일반 GameObject Transform이나 루트 변환과 혼동하지 않습니다. 루트 모션 계산과의 관계를 살펴봅니다.",
    "promptEn": "Explain Body Transform and distinguish its scope, prerequisites and limitations.",
    "visual": "body-transform",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: How Root Motion works · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/RootMotion.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: How Root Motion works · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/RootMotion.html"
  },
  {
    "id": 167,
    "slug": "rigidbody2d-body-type",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "physics",
    "name": "Rigidbody 2D 바디 타입",
    "en": "Body Type",
    "desc": "2D 강체의 시뮬레이션 방식을 Dynamic·Kinematic·Static으로 나눕니다.",
    "ko": "Rigidbody 2D 바디 타입의 의미를 설명하고 다음 조건을 구분해 주세요. 3D Rigidbody 설정과 이름만으로 동일하다고 가정하지 않습니다. 타입에 따른 이동·충돌 조건을 확인합니다.",
    "promptEn": "Explain Body Type and distinguish its scope, prerequisites and limitations.",
    "visual": "rigidbody2d-body-type",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Introduction to Rigidbody 2D · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/2d-physics/rigidbody/introduction-to-rigidbody-2d.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Introduction to Rigidbody 2D · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/2d-physics/rigidbody/introduction-to-rigidbody-2d.html"
  },
  {
    "id": 168,
    "slug": "box-collider",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "physics",
    "name": "박스 콜라이더",
    "en": "Box Collider",
    "desc": "상자 모양으로 충돌 영역을 근사하는 Unity 컴포넌트입니다.",
    "ko": "박스 콜라이더의 의미를 설명하고 다음 조건을 구분해 주세요. 렌더링 메시와 별개입니다. 크기와 중심을 조절하여 실제 게임에서 필요한 충돌 범위를 구성합니다.",
    "promptEn": "Explain Box Collider and distinguish its scope, prerequisites and limitations.",
    "visual": "box-collider",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Box collider component reference · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-BoxCollider.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Box collider component reference · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-BoxCollider.html"
  },
  {
    "id": 169,
    "slug": "build-profile",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "platform",
    "name": "빌드 프로필",
    "en": "build profile",
    "desc": "플랫폼별 빌드를 만들 때 사용할 설정 묶음을 관리합니다.",
    "ko": "빌드 프로필의 의미를 설명하고 다음 조건을 구분해 주세요. 플랫폼 대상과 프로필의 설정 덮어쓰기를 구분합니다. Unity 6의 프로필 구조를 기준으로 설명합니다.",
    "promptEn": "Explain build profile and distinguish its scope, prerequisites and limitations.",
    "visual": "build-profile",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Introduction to build profiles · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/build-profiles.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Introduction to build profiles · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/build-profiles.html"
  },
  {
    "id": 170,
    "slug": "game-build",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "platform",
    "name": "빌드",
    "en": "build",
    "desc": "프로젝트 데이터를 처리하고 코드를 컴파일하여 실행 가능한 결과물을 만드는 과정입니다.",
    "ko": "빌드의 의미를 설명하고 다음 조건을 구분해 주세요. 에디터 Play Mode와 실제 대상 기기의 실행은 다릅니다. 플랫폼별 빌드 의존성을 확인합니다.",
    "promptEn": "Explain build and distinguish its scope, prerequisites and limitations.",
    "visual": "game-build",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Introduction to building · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/building-introduction.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Introduction to building · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/building-introduction.html"
  },
  {
    "id": 171,
    "slug": "bump-map",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "rendering",
    "name": "범프 맵",
    "en": "bump map",
    "desc": "표면의 미세한 요철을 셰이딩에 반영하기 위한 텍스처 데이터입니다.",
    "ko": "범프 맵의 의미를 설명하고 다음 조건을 구분해 주세요. 노멀 맵과 높이 기반 표현을 구분합니다. 일반 범프 매핑은 실제 메시의 실루엣을 바꾸지 않습니다.",
    "promptEn": "Explain bump map and distinguish its scope, prerequisites and limitations.",
    "visual": "bump-map",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Introduction to normal maps (bump mapping) · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/StandardShaderMaterialParameterNormalMap.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Introduction to normal maps (bump mapping) · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/StandardShaderMaterialParameterNormalMap.html"
  },
  {
    "id": 172,
    "slug": "camera-component",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "camera",
    "name": "카메라 컴포넌트",
    "en": "Camera",
    "desc": "장면을 특정 시점에서 렌더링하여 화면이나 텍스처로 출력합니다.",
    "ko": "카메라 컴포넌트의 의미를 설명하고 다음 조건을 구분해 주세요. 뷰 배치·투영 방식·출력 대상을 각각 설정합니다. 카메라 개수와 렌더 비용을 함께 확인합니다.",
    "promptEn": "Explain Camera and distinguish its scope, prerequisites and limitations.",
    "visual": "camera-component",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Introduction to cameras · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/CamerasOverview.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Introduction to cameras · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/CamerasOverview.html"
  },
  {
    "id": 173,
    "slug": "capsule-collider",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "physics",
    "name": "캡슐 콜라이더",
    "en": "Capsule Collider",
    "desc": "반구 두 개와 원통 형태로 물체의 충돌 영역을 근사합니다.",
    "ko": "캡슐 콜라이더의 의미를 설명하고 다음 조건을 구분해 주세요. 캐릭터 같은 형상에 활용합니다. 축 방향과 높이·반지름을 모델 외형과 구분해서 설정합니다.",
    "promptEn": "Explain Capsule Collider and distinguish its scope, prerequisites and limitations.",
    "visual": "capsule-collider",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Capsule collider component reference · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-CapsuleCollider.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Capsule collider component reference · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-CapsuleCollider.html"
  },
  {
    "id": 174,
    "slug": "profiler-category",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "optimization",
    "name": "프로파일러 카테고리",
    "en": "category",
    "desc": "프로파일러에서 작업 데이터를 하위 시스템별로 구분하는 분류입니다.",
    "ko": "프로파일러 카테고리의 의미를 설명하고 다음 조건을 구분해 주세요. 일반 게시물 분류와는 다릅니다. 마커의 분류와 실제 소요 시간을 함께 확인합니다.",
    "promptEn": "Explain category and distinguish its scope, prerequisites and limitations.",
    "visual": "profiler-category",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: ProfilerCategory · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/ScriptReference/Unity.Profiling.ProfilerCategory.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: ProfilerCategory · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/ScriptReference/Unity.Profiling.ProfilerCategory.html"
  },
  {
    "id": 175,
    "slug": "character-joint",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "physics",
    "name": "캐릭터 조인트",
    "en": "Character Joint",
    "desc": "물체의 연결 회전을 축별 제한으로 제어하는 조인트입니다.",
    "ko": "캐릭터 조인트의 의미를 설명하고 다음 조건을 구분해 주세요. 래그돌 구성 등에 사용합니다. 애니메이션 본과 물리 조인트를 별도로 구성해야 합니다.",
    "promptEn": "Explain Character Joint and distinguish its scope, prerequisites and limitations.",
    "visual": "character-joint",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Character Joint component reference · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-CharacterJoint.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Character Joint component reference · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-CharacterJoint.html"
  },
  {
    "id": 176,
    "slug": "clipping-planes",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "camera",
    "name": "클리핑 평면",
    "en": "clipping plane",
    "desc": "카메라가 그릴 깊이 범위의 앞쪽과 뒤쪽 경계를 정합니다.",
    "ko": "클리핑 평면의 의미를 설명하고 다음 조건을 구분해 주세요. 경계 밖 물체는 그려지지 않습니다. near와 far 설정은 깊이 정밀도에도 관련됩니다.",
    "promptEn": "Explain clipping plane and distinguish its scope, prerequisites and limitations.",
    "visual": "clipping-planes",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Camera Inspector window reference for the Built-In Render Pipeline · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-Camera.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Camera Inspector window reference for the Built-In Render Pipeline · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-Camera.html"
  },
  {
    "id": 177,
    "slug": "collision-detection",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "physics",
    "name": "충돌 검출",
    "en": "collision detection",
    "desc": "물리 형상의 접촉 가능성과 실제 접촉을 계산하는 과정입니다.",
    "ko": "충돌 검출의 의미를 설명하고 다음 조건을 구분해 주세요. 충돌 검출, 힘으로 해결하는 반응, Trigger 알림을 구분합니다. 이동 방식별 지원 조건을 확인합니다.",
    "promptEn": "Explain collision detection and distinguish its scope, prerequisites and limitations.",
    "visual": "collision-detection",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Introduction to collision · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/CollidersOverview.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Introduction to collision · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/CollidersOverview.html"
  },
  {
    "id": 178,
    "slug": "collision-contact",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "physics",
    "name": "충돌 접촉",
    "en": "collision",
    "desc": "물리 형상들이 만나거나 겹치는 상황을 뜻합니다.",
    "ko": "충돌 접촉의 의미를 설명하고 다음 조건을 구분해 주세요. 표시 메시가 닿았다고 반드시 물리 접촉이 발생하지는 않습니다. Collider와 시뮬레이션 설정을 확인합니다.",
    "promptEn": "Explain collision and distinguish its scope, prerequisites and limitations.",
    "visual": "collision-contact",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Introduction to collision · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/CollidersOverview.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Introduction to collision · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/CollidersOverview.html"
  },
  {
    "id": 179,
    "slug": "unity-component",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "architecture",
    "name": "Unity 컴포넌트",
    "en": "component",
    "desc": "GameObject에 붙여 기능과 데이터를 제공하는 구성 요소입니다.",
    "ko": "Unity 컴포넌트의 의미를 설명하고 다음 조건을 구분해 주세요. 컴포넌트 기반 설계 원리와 실제 Unity Component 타입을 구분합니다.",
    "promptEn": "Explain component and distinguish its scope, prerequisites and limitations.",
    "visual": "unity-component",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Use components · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/UsingComponents.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Use components · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/UsingComponents.html"
  },
  {
    "id": 180,
    "slug": "data-compression",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "optimization",
    "name": "데이터 압축",
    "en": "compression",
    "desc": "데이터 표현을 바꿔 저장이나 전송 비용을 줄이는 방법입니다.",
    "ko": "데이터 압축의 의미를 설명하고 다음 조건을 구분해 주세요. 무손실과 손실 압축을 구분합니다. 크기 감소와 복원 비용·품질을 함께 고려합니다.",
    "promptEn": "Explain compression and distinguish its scope, prerequisites and limitations.",
    "visual": "data-compression",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Choose a GPU texture format by platform · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/texture-choose-format-by-platform.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Choose a GPU texture format by platform · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/texture-choose-format-by-platform.html"
  },
  {
    "id": 181,
    "slug": "console-window",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "tools",
    "name": "콘솔 창",
    "en": "Console window",
    "desc": "에디터 메시지·경고·오류와 스크립트 로그를 확인하는 창입니다.",
    "ko": "콘솔 창의 의미를 설명하고 다음 조건을 구분해 주세요. 로그 메시지와 실제 오류 원인을 구분합니다. 스택 추적과 재현 조건을 함께 기록합니다.",
    "promptEn": "Explain Console window and distinguish its scope, prerequisites and limitations.",
    "visual": "console-window",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Console window reference · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/Console.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Console window reference · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/Console.html"
  },
  {
    "id": 182,
    "slug": "constant-force",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "physics",
    "name": "Constant Force",
    "en": "Constant Force",
    "desc": "Rigidbody에 지속적인 힘이나 토크를 적용하는 컴포넌트입니다.",
    "ko": "Constant Force의 의미를 설명하고 다음 조건을 구분해 주세요. 속도를 직접 지정하는 이동과 다릅니다. 질량과 시뮬레이션 시간에 따른 반응을 확인합니다.",
    "promptEn": "Explain Constant Force and distinguish its scope, prerequisites and limitations.",
    "visual": "constant-force",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Constant Force component reference · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-ConstantForce.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Constant Force component reference · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-ConstantForce.html"
  },
  {
    "id": 183,
    "slug": "joint-constraints",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "physics",
    "name": "조인트 제약",
    "en": "constraints",
    "desc": "조인트로 연결된 물체의 허용 이동이나 회전을 제한하는 규칙입니다.",
    "ko": "조인트 제약의 의미를 설명하고 다음 조건을 구분해 주세요. 조인트 종류마다 설정 가능한 축과 제한이 다릅니다. Rigidbody Freeze 제약과 구분합니다.",
    "promptEn": "Explain constraints and distinguish its scope, prerequisites and limitations.",
    "visual": "joint-constraints",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Configurable Joint component reference · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-ConfigurableJoint.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Configurable Joint component reference · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-ConfigurableJoint.html"
  },
  {
    "id": 184,
    "slug": "joint-contact-distance",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "physics",
    "name": "조인트 접촉 거리",
    "en": "contact distance",
    "desc": "조인트 제한에서 접촉을 유지할 거리 허용값을 정하는 속성입니다.",
    "ko": "조인트 접촉 거리의 의미를 설명하고 다음 조건을 구분해 주세요. Collider 접촉 거리와 구분합니다. 제한 경계 부근에서의 안정성과 설정 비용을 살펴봅니다.",
    "promptEn": "Explain contact distance and distinguish its scope, prerequisites and limitations.",
    "visual": "joint-contact-distance",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Character Joint component reference · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-CharacterJoint.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Character Joint component reference · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-CharacterJoint.html"
  },
  {
    "id": 185,
    "slug": "damping-ratio",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "physics",
    "name": "감쇠비",
    "en": "damping ratio",
    "desc": "스프링 같은 진동이 줄어드는 정도를 표현하는 비율입니다.",
    "ko": "감쇠비의 의미를 설명하고 다음 조건을 구분해 주세요. 구체적인 수치 의미는 사용하는 조인트 모델에 따라 확인합니다. 스프링 강도와 같은 값은 아닙니다.",
    "promptEn": "Explain damping ratio and distinguish its scope, prerequisites and limitations.",
    "visual": "damping-ratio",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Fixed Joint 2D component reference · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/2d-physics/joints/fixed-joint-2d-reference.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Fixed Joint 2D component reference · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/2d-physics/joints/fixed-joint-2d-reference.html"
  },
  {
    "id": 186,
    "slug": "development-build",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "platform",
    "name": "개발 빌드",
    "en": "development build",
    "desc": "디버깅과 성능 조사에 필요한 기능을 포함하도록 만드는 빌드입니다.",
    "ko": "개발 빌드의 의미를 설명하고 다음 조건을 구분해 주세요. 일반 배포 빌드와 실행 비용이 다를 수 있습니다. 실제 성능 비교에서는 빌드 설정을 함께 기록합니다.",
    "promptEn": "Explain development build and distinguish its scope, prerequisites and limitations.",
    "visual": "development-build",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Introduction to building · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/building-introduction.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Introduction to building · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/building-introduction.html"
  },
  {
    "id": 187,
    "slug": "dimetric-projection",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "camera",
    "name": "이축 투영",
    "en": "dimetric projection",
    "desc": "세 축 중 두 축의 축척 관계가 같은 평행 투영 방식입니다.",
    "ko": "이축 투영의 의미를 설명하고 다음 조건을 구분해 주세요. 세 축이 모두 같은 등각 투영과 구분합니다. 게임의 쿼터뷰라는 관용 표현이 정확한 투영 분류와 항상 일치하지는 않습니다.",
    "promptEn": "Explain dimetric projection and distinguish its scope, prerequisites and limitations.",
    "visual": "dimetric-projection",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Glossary · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html",
        "method": "공식 용어집의 해당 정의 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Glossary · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html"
  },
  {
    "id": 188,
    "slug": "direct-blend-tree",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "animation",
    "name": "직접 블렌드 트리",
    "en": "Direct Blend Tree",
    "desc": "자식 애니메이션의 혼합 가중치를 파라미터로 직접 제어합니다.",
    "ko": "직접 블렌드 트리의 의미를 설명하고 다음 조건을 구분해 주세요. 1D·2D 위치 기반 가중치 계산과 다릅니다. 필요하면 가중치 정규화 설정을 확인합니다.",
    "promptEn": "Explain Direct Blend Tree and distinguish its scope, prerequisites and limitations.",
    "visual": "direct-blend-tree",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Direct blending · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/BlendTree-DirectBlending.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Direct blending · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/BlendTree-DirectBlending.html"
  },
  {
    "id": 189,
    "slug": "direct-dependency",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "assets",
    "name": "직접 의존성",
    "en": "Direct dependency",
    "desc": "프로젝트가 명시적으로 요청한 패키지 의존성입니다.",
    "ko": "직접 의존성의 의미를 설명하고 다음 조건을 구분해 주세요. 다른 패키지를 통해 간접적으로 필요한 의존성과 구분합니다. 버전 고정과 잠금 파일 역할을 확인합니다.",
    "promptEn": "Explain Direct dependency and distinguish its scope, prerequisites and limitations.",
    "visual": "direct-dependency",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Package dependency and resolution · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/upm-dependencies.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Package dependency and resolution · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/upm-dependencies.html"
  },
  {
    "id": 190,
    "slug": "discrete-collision",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "physics",
    "name": "이산 충돌 검출",
    "en": "discrete collision detection",
    "desc": "물리 스텝의 위치를 기준으로 충돌을 검사하는 방식입니다.",
    "ko": "이산 충돌 검출의 의미를 설명하고 다음 조건을 구분해 주세요. 빠른 이동에서 작은 형상을 통과할 수 있습니다. 연속 검출과 비용·지원 조건을 비교합니다.",
    "promptEn": "Explain discrete collision detection and distinguish its scope, prerequisites and limitations.",
    "visual": "discrete-collision",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Rigidbody component reference · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-Rigidbody.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Rigidbody component reference · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-Rigidbody.html"
  },
  {
    "id": 191,
    "slug": "distance-shadowmask",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "rendering",
    "name": "거리 섀도마스크",
    "en": "Distance Shadowmask",
    "desc": "그림자 거리 조건에 따라 실시간 그림자와 베이크된 섀도마스크를 조합하는 모드입니다.",
    "ko": "거리 섀도마스크의 의미를 설명하고 다음 조건을 구분해 주세요. Shadowmask와 거리 안팎의 처리 차이를 확인합니다. 파이프라인별 지원이 다릅니다.",
    "promptEn": "Explain Distance Shadowmask and distinguish its scope, prerequisites and limitations.",
    "visual": "distance-shadowmask",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Lighting Mode · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/lighting-mode.html#shadowmask",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Lighting Mode · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/lighting-mode.html#shadowmask"
  },
  {
    "id": 192,
    "slug": "dynamic-batching",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "optimization",
    "name": "동적 배칭",
    "en": "dynamic batching",
    "desc": "조건에 맞는 메시의 정점을 CPU에서 처리하여 그리기 묶음을 구성하는 최적화입니다.",
    "ko": "동적 배칭의 의미를 설명하고 다음 조건을 구분해 주세요. CPU 변환 비용이 이득보다 클 수 있습니다. SRP Batcher나 GPU 인스턴싱과 별개의 방식입니다.",
    "promptEn": "Explain dynamic batching and distinguish its scope, prerequisites and limitations.",
    "visual": "dynamic-batching",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Introduction to batching meshes · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/DrawCallBatching.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Introduction to batching meshes · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/DrawCallBatching.html"
  },
  {
    "id": 193,
    "slug": "dynamic-friction",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "physics",
    "name": "동마찰",
    "en": "dynamic friction",
    "desc": "서로 미끄러지는 물리 형상 사이의 마찰을 설정합니다.",
    "ko": "동마찰의 의미를 설명하고 다음 조건을 구분해 주세요. 정지 마찰과 구분합니다. 두 물리 재질의 결합 방식도 결과에 영향을 줍니다.",
    "promptEn": "Explain dynamic friction and distinguish its scope, prerequisites and limitations.",
    "visual": "dynamic-friction",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Physics Material asset reference · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-PhysicsMaterial.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Physics Material asset reference · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-PhysicsMaterial.html"
  },
  {
    "id": 194,
    "slug": "dynamic-resolution",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "optimization",
    "name": "동적 해상도",
    "en": "dynamic resolution",
    "desc": "렌더 대상의 해상도를 상황에 맞게 조절하여 GPU 부담을 바꾸는 구성입니다.",
    "ko": "동적 해상도의 의미를 설명하고 다음 조건을 구분해 주세요. UI·화면 출력 해상도와 실제 렌더 해상도를 구분합니다. 업스케일과 플랫폼 지원을 함께 확인합니다.",
    "promptEn": "Explain dynamic resolution and distinguish its scope, prerequisites and limitations.",
    "visual": "dynamic-resolution",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Dynamic Resolution · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/DynamicResolution-landing.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Dynamic Resolution · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/DynamicResolution-landing.html"
  },
  {
    "id": 195,
    "slug": "embedded-package",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "assets",
    "name": "임베디드 패키지",
    "en": "embedded package",
    "desc": "프로젝트의 Packages 폴더 안에서 소스를 직접 관리하는 패키지입니다.",
    "ko": "임베디드 패키지의 의미를 설명하고 다음 조건을 구분해 주세요. 캐시된 레지스트리 패키지와 구분합니다. 프로젝트 내 수정 내용을 버전 관리해야 합니다.",
    "promptEn": "Explain embedded package and distinguish its scope, prerequisites and limitations.",
    "visual": "embedded-package",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Introduction to packages · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/upm-concepts.html#Embedded",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Introduction to packages · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/upm-concepts.html#Embedded"
  },
  {
    "id": 196,
    "slug": "etc-texture",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "rendering",
    "name": "ETC 텍스처 압축",
    "en": "ETC",
    "desc": "텍스처를 블록 단위로 표현하는 압축 형식 계열입니다.",
    "ko": "ETC 텍스처 압축의 의미를 설명하고 다음 조건을 구분해 주세요. ETC와 ETC2의 기능과 기기 지원이 다릅니다. 알파 채널 필요 여부를 확인합니다.",
    "promptEn": "Explain ETC and distinguish its scope, prerequisites and limitations.",
    "visual": "etc-texture",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Choose a GPU texture format by platform · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/texture-choose-format-by-platform.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Choose a GPU texture format by platform · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/texture-choose-format-by-platform.html"
  },
  {
    "id": 197,
    "slug": "event-system",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "ui",
    "name": "EventSystem",
    "en": "Event System",
    "desc": "UI 입력과 대상 오브젝트에 전달할 이벤트를 중개하는 Unity 시스템입니다.",
    "ko": "EventSystem의 의미를 설명하고 다음 조건을 구분해 주세요. 입력 모듈과 UI 레이캐스터의 역할을 구분합니다. 일반 이벤트 큐 설계와 같은 기능은 아닙니다.",
    "promptEn": "Explain Event System and distinguish its scope, prerequisites and limitations.",
    "visual": "event-system",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Runtime UI event system and input handling · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/UIE-Runtime-Event-System.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Runtime UI event system and input handling · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/UIE-Runtime-Event-System.html"
  },
  {
    "id": 198,
    "slug": "fbx-format",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "assets",
    "name": "FBX",
    "en": "FBX",
    "desc": "모델과 뼈·애니메이션 등 3D 데이터를 교환하는 파일 형식입니다.",
    "ko": "FBX의 의미를 설명하고 다음 조건을 구분해 주세요. 파일이 지원하는 데이터와 실제 임포터가 가져오는 데이터를 구분합니다.",
    "promptEn": "Explain FBX and distinguish its scope, prerequisites and limitations.",
    "visual": "fbx-format",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Introduction to importing assets · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/ImportingAssets.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Introduction to importing assets · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/ImportingAssets.html"
  },
  {
    "id": 199,
    "slug": "feature-set",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "assets",
    "name": "패키지 기능 세트",
    "en": "feature set",
    "desc": "관련 기능을 제공하는 여러 패키지를 묶어 관리하는 단위입니다.",
    "ko": "패키지 기능 세트의 의미를 설명하고 다음 조건을 구분해 주세요. 하나의 런타임 컴포넌트가 아닙니다. 필요한 패키지와 버전 호환성을 확인합니다.",
    "promptEn": "Explain feature set and distinguish its scope, prerequisites and limitations.",
    "visual": "feature-set",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Feature sets · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/FeatureSets.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Feature sets · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/FeatureSets.html"
  },
  {
    "id": 200,
    "slug": "fixed-joint-2d",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "physics",
    "name": "2D 고정 조인트",
    "en": "Fixed Joint 2D",
    "desc": "두 Rigidbody2D의 상대 위치와 회전을 유지하도록 연결합니다.",
    "ko": "2D 고정 조인트의 의미를 설명하고 다음 조건을 구분해 주세요. 스프링 기반 구현으로 작은 오차가 생길 수 있습니다. 3D Fixed Joint와 구분합니다.",
    "promptEn": "Explain Fixed Joint 2D and distinguish its scope, prerequisites and limitations.",
    "visual": "fixed-joint-2d",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Fixed Joint 2D component reference · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/2d-physics/joints/fixed-joint-2d-reference.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Fixed Joint 2D component reference · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/2d-physics/joints/fixed-joint-2d-reference.html"
  },
  {
    "id": 201,
    "slug": "scene-flythrough",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "tools",
    "name": "씬 플라이스루 모드",
    "en": "flythrough mode",
    "desc": "Scene 뷰를 1인칭 이동처럼 탐색하는 에디터 조작 모드입니다.",
    "ko": "씬 플라이스루 모드의 의미를 설명하고 다음 조건을 구분해 주세요. 게임에 자동으로 추가되는 카메라 기능이 아닙니다. 런타임 이동 로직은 별도로 구현합니다.",
    "promptEn": "Explain flythrough mode and distinguish its scope, prerequisites and limitations.",
    "visual": "scene-flythrough",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Scene view navigation · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/SceneViewNavigation.html#flythrough",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Scene view navigation · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/SceneViewNavigation.html#flythrough"
  },
  {
    "id": 202,
    "slug": "frame",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "principles",
    "name": "프레임",
    "en": "frame",
    "desc": "연속해서 표시되는 영상에서 하나의 화면이나 시간 단위를 뜻합니다.",
    "ko": "프레임의 의미를 설명하고 다음 조건을 구분해 주세요. 렌더 프레임과 물리 스텝은 항상 일대일 관계가 아닙니다.",
    "promptEn": "Explain frame and distinguish its scope, prerequisites and limitations.",
    "visual": "frame",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Rendering Statistics window reference · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/RenderingStatistics.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Rendering Statistics window reference · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/RenderingStatistics.html"
  },
  {
    "id": 203,
    "slug": "frames-per-second",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "optimization",
    "name": "초당 프레임 수",
    "en": "frames per second",
    "desc": "1초 동안 표시되거나 렌더링되는 프레임의 수입니다.",
    "ko": "초당 프레임 수의 의미를 설명하고 다음 조건을 구분해 주세요. 평균 FPS만으로 순간 끊김을 설명할 수 없습니다. 프레임 시간과 변동도 함께 봅니다.",
    "promptEn": "Explain frames per second and distinguish its scope, prerequisites and limitations.",
    "visual": "frames-per-second",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Rendering Statistics window reference · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/RenderingStatistics.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Rendering Statistics window reference · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/RenderingStatistics.html"
  },
  {
    "id": 204,
    "slug": "view-frustum",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "camera",
    "name": "뷰 프러스텀",
    "en": "frustum",
    "desc": "카메라가 볼 수 있는 공간의 경계를 나타냅니다.",
    "ko": "뷰 프러스텀의 의미를 설명하고 다음 조건을 구분해 주세요. 원근 카메라는 잘린 피라미드 형태입니다. 프러스텀 자체와 범위 밖 물체를 제외하는 컬링을 구분합니다.",
    "promptEn": "Explain frustum and distinguish its scope, prerequisites and limitations.",
    "visual": "view-frustum",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Introduction to the camera view · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/UnderstandingFrustum.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Introduction to the camera view · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/UnderstandingFrustum.html"
  },
  {
    "id": 205,
    "slug": "gameobject",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "architecture",
    "name": "게임 오브젝트",
    "en": "GameObject",
    "desc": "Unity 씬에서 컴포넌트들을 담는 기본 구성 단위입니다.",
    "ko": "게임 오브젝트의 의미를 설명하고 다음 조건을 구분해 주세요. GameObject 자체와 붙어 있는 Renderer·Rigidbody 등의 역할을 구분합니다.",
    "promptEn": "Explain GameObject and distinguish its scope, prerequisites and limitations.",
    "visual": "gameobject",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: The GameObject class · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-GameObject.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: The GameObject class · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-GameObject.html",
    "aliases": [
      "object"
    ]
  },
  {
    "id": 206,
    "slug": "gi-cache",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "tools",
    "name": "GI 캐시",
    "en": "GI Cache",
    "desc": "조명 계산을 다시 수행할 때 활용하는 중간 계산 결과 저장소입니다.",
    "ko": "GI 캐시의 의미를 설명하고 다음 조건을 구분해 주세요. 최종 빌드용 라이트맵과 구분합니다. 캐시를 지우면 재계산이 필요할 수 있습니다.",
    "promptEn": "Explain GI Cache and distinguish its scope, prerequisites and limitations.",
    "visual": "gi-cache",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Global Illumination (GI) cache · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/GICache.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Global Illumination (GI) cache · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/GICache.html"
  },
  {
    "id": 207,
    "slug": "git-dependency",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "assets",
    "name": "Git 패키지 의존성",
    "en": "Git dependency",
    "desc": "패키지 소스를 레지스트리 대신 Git 저장소에서 가져오는 구성입니다.",
    "ko": "Git 패키지 의존성의 의미를 설명하고 다음 조건을 구분해 주세요. 브랜치 이름만 사용하면 내용이 바뀔 수 있습니다. 커밋이나 태그로 재현성을 관리합니다.",
    "promptEn": "Explain Git dependency and distinguish its scope, prerequisites and limitations.",
    "visual": "git-dependency",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Introduction to packages · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/upm-concepts.html#Git",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Introduction to packages · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/upm-concepts.html#Git"
  },
  {
    "id": 208,
    "slug": "gizmo",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "tools",
    "name": "기즈모",
    "en": "Gizmo",
    "desc": "씬 편집과 디버깅을 돕기 위해 에디터에 그리는 시각적 표시입니다.",
    "ko": "기즈모의 의미를 설명하고 다음 조건을 구분해 주세요. 기본적으로 게임 화면의 사용자 인터페이스가 아닙니다. 선택된 오브젝트에서만 표시할지 구분합니다.",
    "promptEn": "Explain Gizmo and distinguish its scope, prerequisites and limitations.",
    "visual": "gizmo",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Gizmos menu reference · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/GizmosMenu.html#GizmosIcons",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Gizmos menu reference · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/GizmosMenu.html#GizmosIcons"
  },
  {
    "id": 209,
    "slug": "gradle",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "platform",
    "name": "Gradle",
    "en": "Gradle",
    "desc": "Android 빌드에서 의존성 처리와 빌드 작업을 관리하는 도구입니다.",
    "ko": "Gradle의 의미를 설명하고 다음 조건을 구분해 주세요. Unity 에디터 빌드 단계와 생성된 Android 프로젝트의 빌드 단계를 구분합니다.",
    "promptEn": "Explain Gradle and distinguish its scope, prerequisites and limitations.",
    "visual": "gradle",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Gradle for Android · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/android-gradle-overview.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Gradle for Android · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/android-gradle-overview.html"
  },
  {
    "id": 210,
    "slug": "particle-gravity-modifier",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "effects",
    "name": "파티클 중력 배율",
    "en": "Gravity Modifier",
    "desc": "파티클 시스템에서 중력 영향을 조절하는 배율입니다.",
    "ko": "파티클 중력 배율의 의미를 설명하고 다음 조건을 구분해 주세요. 장면의 모든 Rigidbody 중력을 바꾸는 속성이 아닙니다. 파티클의 시뮬레이션 공간도 확인합니다.",
    "promptEn": "Explain Gravity Modifier and distinguish its scope, prerequisites and limitations.",
    "visual": "particle-gravity-modifier",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Main module reference · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/PartSysMainModule.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Main module reference · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/PartSysMainModule.html"
  },
  {
    "id": 211,
    "slug": "halo",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "effects",
    "name": "헤일로",
    "en": "Halo",
    "desc": "빛 주변에 밝은 영역을 표현하는 Unity의 시각 효과입니다.",
    "ko": "헤일로의 의미를 설명하고 다음 조건을 구분해 주세요. Bloom 후처리와는 다릅니다. 렌더 파이프라인 지원 범위를 확인합니다.",
    "promptEn": "Explain Halo and distinguish its scope, prerequisites and limitations.",
    "visual": "halo",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Halo component reference · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-Halo.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Halo component reference · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-Halo.html"
  },
  {
    "id": 212,
    "slug": "high-twist-limit",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "physics",
    "name": "상한 트위스트 제한",
    "en": "high twist limit",
    "desc": "Character Joint에서 비틀림 회전의 상한을 지정합니다.",
    "ko": "상한 트위스트 제한의 의미를 설명하고 다음 조건을 구분해 주세요. 하한 설정과 함께 허용 범위를 구성합니다. 회전 축의 기준을 먼저 확인합니다.",
    "promptEn": "Explain high twist limit and distinguish its scope, prerequisites and limitations.",
    "visual": "high-twist-limit",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Character Joint component reference · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-CharacterJoint.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Character Joint component reference · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-CharacterJoint.html"
  },
  {
    "id": 213,
    "slug": "network-host",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "network",
    "name": "네트워크 호스트",
    "en": "host",
    "desc": "한 프로세스나 참여자가 서버와 로컬 클라이언트 역할을 함께 수행하는 멀티플레이 구성입니다.",
    "ko": "네트워크 호스트의 의미를 설명하고 다음 조건을 구분해 주세요. 전용 서버 구성과 구분합니다. 구체적인 API는 사용하는 네트워크 패키지에 따라 다릅니다.",
    "promptEn": "Explain host and distinguish its scope, prerequisites and limitations.",
    "visual": "network-host",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Netcode for GameObjects 2.4",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Class NetworkManager\r\n | Netcode for GameObjects | 2.4.4  · Netcode for GameObjects 2.4",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/Packages/com.unity.netcode.gameobjects@2.4/api/Unity.Netcode.NetworkManager.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Netcode for GameObjects 2.4"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Class NetworkManager\r\n | Netcode for GameObjects | 2.4.4  · Netcode for GameObjects 2.4"
      }
    ],
    "source": "https://docs.unity3d.com/Packages/com.unity.netcode.gameobjects@2.4/api/Unity.Netcode.NetworkManager.html"
  },
  {
    "id": 214,
    "slug": "human-template",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "animation",
    "name": "휴먼 템플릿",
    "en": "Human template",
    "desc": "휴머노이드 뼈 이름 매핑을 저장하여 재사용하는 .ht 파일입니다.",
    "ko": "휴먼 템플릿의 의미를 설명하고 다음 조건을 구분해 주세요. 다른 모델에 적용할 때 뼈 이름과 계층이 일치하는지 확인합니다.",
    "promptEn": "Explain Human template and distinguish its scope, prerequisites and limitations.",
    "visual": "human-template",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Human Template window · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-HumanTemplate.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Human Template window · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-HumanTemplate.html"
  },
  {
    "id": 215,
    "slug": "humanoid-animation",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "animation",
    "name": "휴머노이드 애니메이션",
    "en": "Humanoid animation",
    "desc": "인체에 대응하는 뼈 매핑을 이용하여 애니메이션을 처리하는 방식입니다.",
    "ko": "휴머노이드 애니메이션의 의미를 설명하고 다음 조건을 구분해 주세요. Generic 리그와 구분합니다. 리타기팅에는 유효한 Avatar 설정이 필요합니다.",
    "promptEn": "Explain Humanoid animation and distinguish its scope, prerequisites and limitations.",
    "visual": "humanoid-animation",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Importing a model with humanoid animations · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/ConfiguringtheAvatar.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Importing a model with humanoid animations · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/ConfiguringtheAvatar.html"
  },
  {
    "id": 216,
    "slug": "in-app-purchase",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "platform",
    "name": "인앱 구매",
    "en": "in app purchase",
    "desc": "앱 내부에서 디지털 상품이나 서비스를 구매하는 기능입니다.",
    "ko": "인앱 구매의 의미를 설명하고 다음 조건을 구분해 주세요. 결제 요청·거래 검증·상품 지급은 구분해야 합니다. 패키지 버전과 스토어 요구 조건을 확인합니다.",
    "promptEn": "Explain in app purchase and distinguish its scope, prerequisites and limitations.",
    "visual": "in-app-purchase",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 서비스 문서 (2026-10-14 확인)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Unity In-App Purchasing • In-App Purchasing • Unity Docs · Unity 서비스 문서 (2026-10-14 확인)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity.com/en-us/iap",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 서비스 문서 (2026-10-14 확인)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Unity In-App Purchasing • In-App Purchasing • Unity Docs · Unity 서비스 문서 (2026-10-14 확인)"
      }
    ],
    "source": "https://docs.unity.com/en-us/iap",
    "aliases": [
      "IAP",
      "Unity IAP"
    ]
  },
  {
    "id": 217,
    "slug": "indirect-dependency",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "assets",
    "name": "간접 의존성",
    "en": "indirect dependency",
    "desc": "프로젝트가 요청한 패키지가 다시 요구하는 다른 패키지입니다.",
    "ko": "간접 의존성의 의미를 설명하고 다음 조건을 구분해 주세요. 직접 설치하지 않았더라도 제거하면 상위 패키지가 동작하지 않을 수 있습니다.",
    "promptEn": "Explain indirect dependency and distinguish its scope, prerequisites and limitations.",
    "visual": "indirect-dependency",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Package dependency and resolution · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/upm-dependencies.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Package dependency and resolution · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/upm-dependencies.html"
  },
  {
    "id": 218,
    "slug": "input-key",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "movement",
    "name": "키 입력",
    "en": "input key",
    "desc": "키보드 버튼의 상태를 입력 시스템으로 읽는 구성입니다.",
    "ko": "키 입력의 의미를 설명하고 다음 조건을 구분해 주세요. 문자 입력과 물리 키 입력을 구분합니다. 한글 입력에는 텍스트 입력 체계를 사용합니다.",
    "promptEn": "Explain input key and distinguish its scope, prerequisites and limitations.",
    "visual": "input-key",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: KeyCode · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/ScriptReference/KeyCode.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: KeyCode · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/ScriptReference/KeyCode.html"
  },
  {
    "id": 219,
    "slug": "legacy-input-manager",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "tools",
    "name": "레거시 Input Manager",
    "en": "Input Manager",
    "desc": "기존 Input API에서 사용할 축과 버튼을 설정하는 Unity 도구입니다.",
    "ko": "레거시 Input Manager의 의미를 설명하고 다음 조건을 구분해 주세요. Unity 6 문서는 새 프로젝트에 Input System 패키지를 권장합니다. 두 체계의 설정을 혼용하지 않습니다.",
    "promptEn": "Explain Input Manager and distinguish its scope, prerequisites and limitations.",
    "visual": "legacy-input-manager",
    "tags": [
      "legacy"
    ],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Input Manager · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-InputManager.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Input Manager · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-InputManager.html"
  },
  {
    "id": 220,
    "slug": "inspector-window",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "tools",
    "name": "Inspector 창",
    "en": "Inspector",
    "desc": "선택한 오브젝트·에셋·설정의 속성을 보고 수정하는 에디터 창입니다.",
    "ko": "Inspector 창의 의미를 설명하고 다음 조건을 구분해 주세요. 편집한 값의 저장 위치가 에셋인지 씬 인스턴스인지 구분합니다.",
    "promptEn": "Explain Inspector and distinguish its scope, prerequisites and limitations.",
    "visual": "inspector-window",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Inspector window reference · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/UsingTheInspector.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Inspector window reference · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/UsingTheInspector.html"
  },
  {
    "id": 221,
    "slug": "irradiance-budget",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "rendering",
    "name": "Irradiance Budget",
    "en": "Irradiance Budget",
    "desc": "Enlighten Realtime GI에서 조명 샘플 정보의 정밀도를 조절하는 파라미터입니다.",
    "ko": "Irradiance Budget의 의미를 설명하고 다음 조건을 구분해 주세요. 모든 라이트매퍼의 공통 설정이 아닙니다. 해당 파이프라인에서 Enlighten 지원 여부를 확인합니다.",
    "promptEn": "Explain Irradiance Budget and distinguish its scope, prerequisites and limitations.",
    "visual": "irradiance-budget",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Lightmap Parameters Asset Inspector window reference · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-LightmapParameters.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Lightmap Parameters Asset Inspector window reference · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-LightmapParameters.html"
  },
  {
    "id": 222,
    "slug": "irradiance-quality",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "rendering",
    "name": "Irradiance Quality",
    "en": "Irradiance Quality",
    "desc": "Enlighten Realtime GI 계산에 사용하는 광선 샘플 수를 조절하는 파라미터입니다.",
    "ko": "Irradiance Quality의 의미를 설명하고 다음 조건을 구분해 주세요. Irradiance Budget과 구분합니다. 지원되는 조명 방식에서만 설정 의미를 적용합니다.",
    "promptEn": "Explain Irradiance Quality and distinguish its scope, prerequisites and limitations.",
    "visual": "irradiance-quality",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Lightmap Parameters Asset Inspector window reference · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-LightmapParameters.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Lightmap Parameters Asset Inspector window reference · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-LightmapParameters.html"
  },
  {
    "id": 223,
    "slug": "physics-joint",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "physics",
    "name": "물리 조인트",
    "en": "joint",
    "desc": "강체 사이의 연결과 허용 운동을 정의하는 구성 요소입니다.",
    "ko": "물리 조인트의 의미를 설명하고 다음 조건을 구분해 주세요. 연결된 몸체·축·제한과 구동력을 따로 확인합니다. 애니메이션 뼈 계층과는 다른 연결입니다.",
    "promptEn": "Explain joint and distinguish its scope, prerequisites and limitations.",
    "visual": "physics-joint",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Introduction to joints · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/Joints.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Introduction to joints · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/Joints.html"
  },
  {
    "id": 224,
    "slug": "legacy-joystick-number",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "movement",
    "name": "레거시 조이스틱 번호",
    "en": "Joy Num",
    "desc": "기존 Input Manager의 축이 읽을 조이스틱 대상을 선택하는 설정입니다.",
    "ko": "레거시 조이스틱 번호의 의미를 설명하고 다음 조건을 구분해 주세요. Input System의 기기 매칭 설정과 다릅니다. 기존 입력 체계에서 쓰는 속성입니다. 확인한 상세 자료는 Unity 2018.4입니다. Unity 6에서 같은 속성명이 유지되는지는 미확인입니다.",
    "promptEn": "Explain Joy Num and distinguish its scope, prerequisites and limitations.",
    "visual": "legacy-joystick-number",
    "tags": [
      "legacy"
    ],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 2018.4 (역사·레거시 자료)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료:  Input Manager · Unity 2018.4 (역사·레거시 자료)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/2018.4/Documentation/Manual/class-InputManager.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 2018.4 (역사·레거시 자료)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료:  Input Manager · Unity 2018.4 (역사·레거시 자료)"
      }
    ],
    "source": "https://docs.unity3d.com/2018.4/Documentation/Manual/class-InputManager.html"
  },
  {
    "id": 225,
    "slug": "keyframe-reduction",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "optimization",
    "name": "키프레임 감소",
    "en": "Keyframe Reduction",
    "desc": "허용 오차 범위에서 불필요한 애니메이션 키를 줄이는 처리입니다.",
    "ko": "키프레임 감소의 의미를 설명하고 다음 조건을 구분해 주세요. 키 수가 줄어도 원래 동작을 얼마나 유지하는지 재생 결과로 점검해야 합니다.",
    "promptEn": "Explain Keyframe Reduction and distinguish its scope, prerequisites and limitations.",
    "visual": "keyframe-reduction",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Animation tab · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-AnimationClip.html#AssetProperties",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Animation tab · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-AnimationClip.html#AssetProperties"
  },
  {
    "id": 226,
    "slug": "layer-mask",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "architecture",
    "name": "레이어 마스크",
    "en": "Layer Mask",
    "desc": "Unity 레이어들을 포함하거나 제외할지 비트 값으로 표현합니다.",
    "ko": "레이어 마스크의 의미를 설명하고 다음 조건을 구분해 주세요. 레이어 번호와 마스크 값을 구분합니다. 렌더링·레이캐스트 등 API의 입력 형식을 확인합니다.",
    "promptEn": "Explain Layer Mask and distinguish its scope, prerequisites and limitations.",
    "visual": "layer-mask",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Assign GameObjects to layers · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/Layers.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Assign GameObjects to layers · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/Layers.html"
  },
  {
    "id": 227,
    "slug": "unity-layer",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "architecture",
    "name": "Unity 레이어",
    "en": "layer",
    "desc": "오브젝트들을 선택적 렌더링이나 물리 질의 등에 사용할 그룹으로 분류합니다.",
    "ko": "Unity 레이어의 의미를 설명하고 다음 조건을 구분해 주세요. 정렬 순서를 정하는 Sorting Layer와는 다른 체계입니다.",
    "promptEn": "Explain layer and distinguish its scope, prerequisites and limitations.",
    "visual": "unity-layer",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Assign GameObjects to layers · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/Layers.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Assign GameObjects to layers · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/Layers.html"
  },
  {
    "id": 228,
    "slug": "lens-flare",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "effects",
    "name": "렌즈 플레어",
    "en": "Lens Flare",
    "desc": "밝은 빛에 의한 렌즈 내부 반사 등의 모습을 시각적으로 표현합니다.",
    "ko": "렌즈 플레어의 의미를 설명하고 다음 조건을 구분해 주세요. 파이프라인별 컴포넌트와 설정이 다를 수 있습니다. 광원 자체의 조명 기여와 구분합니다.",
    "promptEn": "Explain Lens Flare and distinguish its scope, prerequisites and limitations.",
    "visual": "lens-flare",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Lens Flare component reference · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-LensFlare.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Lens Flare component reference · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-LensFlare.html"
  },
  {
    "id": 229,
    "slug": "light-mode",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "rendering",
    "name": "라이트 모드",
    "en": "Light Mode",
    "desc": "광원 계산 방식을 Realtime·Baked·Mixed 등으로 지정합니다.",
    "ko": "라이트 모드의 의미를 설명하고 다음 조건을 구분해 주세요. 광원 모드와 씬 전체의 Mixed Lighting Mode는 서로 다른 설정입니다.",
    "promptEn": "Explain Light Mode and distinguish its scope, prerequisites and limitations.",
    "visual": "light-mode",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Set the Mode of a Light · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/LightModes.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Set the Mode of a Light · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/LightModes.html"
  },
  {
    "id": 230,
    "slug": "light-probe-group",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "rendering",
    "name": "라이트 프로브 그룹",
    "en": "Light Probe Group",
    "desc": "씬에서 라이트 프로브의 샘플 위치들을 배치하는 컴포넌트입니다.",
    "ko": "라이트 프로브 그룹의 의미를 설명하고 다음 조건을 구분해 주세요. 빛 자체를 생성하는 컴포넌트가 아닙니다. 샘플 위치와 보간 범위를 고려합니다.",
    "promptEn": "Explain Light Probe Group and distinguish its scope, prerequisites and limitations.",
    "visual": "light-probe-group",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Place Light Probes with the Editor · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-LightProbeGroup.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Place Light Probes with the Editor · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-LightProbeGroup.html"
  },
  {
    "id": 231,
    "slug": "light-probe-proxy-volume",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "rendering",
    "name": "라이트 프로브 프록시 볼륨",
    "en": "Light Probe Proxy Volume",
    "desc": "큰 동적 물체에 더 넓은 공간의 프로브 조명 정보를 공급하는 구성입니다.",
    "ko": "라이트 프로브 프록시 볼륨의 의미를 설명하고 다음 조건을 구분해 주세요. 일반 단일 프로브 샘플링과 구분합니다. 렌더 파이프라인 지원 조건을 확인합니다.",
    "promptEn": "Explain Light Probe Proxy Volume and distinguish its scope, prerequisites and limitations.",
    "visual": "light-probe-proxy-volume",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Introduction to Light Probe Proxy Volumes in the Built-In Render Pipeline · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-LightProbeProxyVolume.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Introduction to Light Probe Proxy Volumes in the Built-In Render Pipeline · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-LightProbeProxyVolume.html"
  },
  {
    "id": 232,
    "slug": "lightmapper",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "rendering",
    "name": "라이트매퍼",
    "en": "Lightmapper",
    "desc": "씬의 빛과 형상을 계산하여 베이크 조명 데이터를 만드는 도구입니다.",
    "ko": "라이트매퍼의 의미를 설명하고 다음 조건을 구분해 주세요. 생성된 라이트맵과 계산 도구를 구분합니다. CPU·GPU와 품질 설정의 선택을 검토합니다.",
    "promptEn": "Explain Lightmapper and distinguish its scope, prerequisites and limitations.",
    "visual": "lightmapper",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Introduction to lightmaps and baking · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/Lightmappers.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Introduction to lightmaps and baking · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/Lightmappers.html"
  },
  {
    "id": 233,
    "slug": "line-renderer",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "effects",
    "name": "라인 렌더러",
    "en": "Line Renderer",
    "desc": "여러 점을 연결한 선을 폭이 있는 형상으로 렌더링합니다.",
    "ko": "라인 렌더러의 의미를 설명하고 다음 조건을 구분해 주세요. 이동 이력을 누적하는 Trail Renderer와 다릅니다. 점 배열과 좌표 공간을 설정합니다.",
    "promptEn": "Explain Line Renderer and distinguish its scope, prerequisites and limitations.",
    "visual": "line-renderer",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Line Renderer component reference · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-LineRenderer.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Line Renderer component reference · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-LineRenderer.html"
  },
  {
    "id": 234,
    "slug": "local-package",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "assets",
    "name": "로컬 패키지",
    "en": "local package",
    "desc": "파일 시스템의 경로를 참조하여 프로젝트에 연결하는 패키지입니다.",
    "ko": "로컬 패키지의 의미를 설명하고 다음 조건을 구분해 주세요. Packages 폴더에 포함된 임베디드 패키지와 구분합니다. 다른 개발 환경에서도 경로가 유효해야 합니다.",
    "promptEn": "Explain local package and distinguish its scope, prerequisites and limitations.",
    "visual": "local-package",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Install a UPM package from a local folder · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/upm-ui-local.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Install a UPM package from a local folder · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/upm-ui-local.html"
  },
  {
    "id": 235,
    "slug": "lod-group",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "optimization",
    "name": "LOD 그룹",
    "en": "LOD Group",
    "desc": "거리나 화면 점유 조건에 따라 보여줄 렌더러 묶음을 전환하는 컴포넌트입니다.",
    "ko": "LOD 그룹의 의미를 설명하고 다음 조건을 구분해 주세요. LOD 원리와 실제 그룹 설정을 구분합니다. 모델 단계와 전환 경계를 확인합니다.",
    "promptEn": "Explain LOD Group and distinguish its scope, prerequisites and limitations.",
    "visual": "lod-group",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: LOD Group component reference · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-LODGroup.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: LOD Group component reference · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-LODGroup.html"
  },
  {
    "id": 236,
    "slug": "loop-pose",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "animation",
    "name": "루프 포즈",
    "en": "Loop Pose",
    "desc": "클립의 시작과 끝 포즈 차이를 보정하여 반복 연결을 돕는 설정입니다.",
    "ko": "루프 포즈의 의미를 설명하고 다음 조건을 구분해 주세요. Loop Time과 구분합니다. 루트 이동과 포즈 차이는 각각 확인해야 합니다.",
    "promptEn": "Explain Loop Pose and distinguish its scope, prerequisites and limitations.",
    "visual": "loop-pose",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Animation tab · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-AnimationClip.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Animation tab · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-AnimationClip.html"
  },
  {
    "id": 237,
    "slug": "low-twist-limit",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "physics",
    "name": "하한 트위스트 제한",
    "en": "Low Twist Limit",
    "desc": "Character Joint에서 비틀림 회전의 하한을 지정합니다.",
    "ko": "하한 트위스트 제한의 의미를 설명하고 다음 조건을 구분해 주세요. 상한 제한과 함께 허용 범위를 구성합니다. 축 기준과 부호를 확인합니다.",
    "promptEn": "Explain Low Twist Limit and distinguish its scope, prerequisites and limitations.",
    "visual": "low-twist-limit",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Character Joint component reference · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-CharacterJoint.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Character Joint component reference · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-CharacterJoint.html"
  },
  {
    "id": 238,
    "slug": "managed-plugin",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "architecture",
    "name": "관리 코드 플러그인",
    "en": "managed plug-in",
    "desc": ".NET 어셈블리 형태로 Unity에서 사용하는 외부 코드 라이브러리입니다.",
    "ko": "관리 코드 플러그인의 의미를 설명하고 다음 조건을 구분해 주세요. 네이티브 라이브러리와 구분합니다. 대상 런타임·플랫폼의 지원 API를 확인합니다.",
    "promptEn": "Explain managed plug-in and distinguish its scope, prerequisites and limitations.",
    "visual": "managed-plugin",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Integrating third-party code libraries (plug-ins) · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/plug-ins.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Integrating third-party code libraries (plug-ins) · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/plug-ins.html"
  },
  {
    "id": 239,
    "slug": "package-manifests",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "assets",
    "name": "패키지 매니페스트",
    "en": "manifest",
    "desc": "패키지 정보나 프로젝트의 패키지 의존성을 선언하는 JSON 파일 계열입니다.",
    "ko": "패키지 매니페스트의 의미를 설명하고 다음 조건을 구분해 주세요. 프로젝트 manifest.json과 패키지 package.json은 역할과 위치가 다릅니다.",
    "promptEn": "Explain manifest and distinguish its scope, prerequisites and limitations.",
    "visual": "package-manifests",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Project manifest file · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/upm-manifestPrj.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Project manifest file · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/upm-manifestPrj.html"
  },
  {
    "id": 240,
    "slug": "profiler-marker",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "optimization",
    "name": "프로파일러 마커",
    "en": "marker",
    "desc": "프로파일러에서 특정 작업 구간을 식별하도록 남기는 표시입니다.",
    "ko": "프로파일러 마커의 의미를 설명하고 다음 조건을 구분해 주세요. 이벤트 이름만으로 병목을 판단하지 않습니다. 소요 시간과 호출 수를 함께 확인합니다.",
    "promptEn": "Explain marker and distinguish its scope, prerequisites and limitations.",
    "visual": "profiler-marker",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Profiler markers reference · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/profiler-markers.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Profiler markers reference · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/profiler-markers.html"
  },
  {
    "id": 241,
    "slug": "material",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "rendering",
    "name": "머티리얼",
    "en": "Material",
    "desc": "셰이더와 그 입력 속성을 묶어 표면 렌더링 방식을 지정하는 자원입니다.",
    "ko": "머티리얼의 의미를 설명하고 다음 조건을 구분해 주세요. 셰이더 프로그램과 머티리얼 인스턴스를 구분합니다. 텍스처만으로 머티리얼이 완성되지는 않습니다.",
    "promptEn": "Explain Material and distinguish its scope, prerequisites and limitations.",
    "visual": "material",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Material Inspector window reference · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-Material.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Material Inspector window reference · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-Material.html"
  },
  {
    "id": 242,
    "slug": "mesh-collider",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "physics",
    "name": "메시 콜라이더",
    "en": "Mesh Collider",
    "desc": "메시 형상을 사용하여 충돌 표면을 구성하는 Collider입니다.",
    "ko": "메시 콜라이더의 의미를 설명하고 다음 조건을 구분해 주세요. Convex 옵션과 Rigidbody 사용 조건을 확인합니다. 렌더용 고밀도 메시를 그대로 쓰면 비용이 커질 수 있습니다.",
    "promptEn": "Explain Mesh Collider and distinguish its scope, prerequisites and limitations.",
    "visual": "mesh-collider",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Mesh collider component reference · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-MeshCollider.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Mesh collider component reference · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-MeshCollider.html"
  },
  {
    "id": 243,
    "slug": "mesh-filter",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "rendering",
    "name": "메시 필터",
    "en": "Mesh Filter",
    "desc": "렌더링에 사용할 메시 데이터를 Mesh Renderer에 제공하는 컴포넌트입니다.",
    "ko": "메시 필터의 의미를 설명하고 다음 조건을 구분해 주세요. Mesh Filter만 붙이면 화면에 그려지는 것은 아닙니다. Renderer와 머티리얼이 필요합니다.",
    "promptEn": "Explain Mesh Filter and distinguish its scope, prerequisites and limitations.",
    "visual": "mesh-filter",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Mesh Filter component reference · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-MeshFilter.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Mesh Filter component reference · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-MeshFilter.html"
  },
  {
    "id": 244,
    "slug": "mesh-renderer",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "rendering",
    "name": "메시 렌더러",
    "en": "Mesh Renderer",
    "desc": "Mesh Filter의 형상을 머티리얼과 오브젝트 변환을 사용해 렌더링합니다.",
    "ko": "메시 렌더러의 의미를 설명하고 다음 조건을 구분해 주세요. 애니메이션 변형 메시를 위한 Skinned Mesh Renderer와 구분합니다.",
    "promptEn": "Explain Mesh Renderer and distinguish its scope, prerequisites and limitations.",
    "visual": "mesh-renderer",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Mesh Renderer component reference · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-MeshRenderer.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Mesh Renderer component reference · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-MeshRenderer.html"
  },
  {
    "id": 245,
    "slug": "mesh",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "assets",
    "name": "메시",
    "en": "Mesh",
    "desc": "정점과 면 연결 및 표면 속성으로 입체 형상을 표현하는 데이터입니다.",
    "ko": "메시의 의미를 설명하고 다음 조건을 구분해 주세요. 메시 데이터·렌더러·콜라이더를 구분합니다. 노멀과 UV도 메시의 주요 속성입니다.",
    "promptEn": "Explain Mesh and distinguish its scope, prerequisites and limitations.",
    "visual": "mesh",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Meshes · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/mesh.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Meshes · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/mesh.html"
  },
  {
    "id": 246,
    "slug": "mixed-lighting",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "rendering",
    "name": "혼합 조명",
    "en": "Mixed Lights",
    "desc": "미리 계산하는 조명과 실시간 계산을 함께 사용하는 광원 구성입니다.",
    "ko": "혼합 조명의 의미를 설명하고 다음 조건을 구분해 주세요. Mixed Lighting Mode와 렌더 파이프라인에 따라 동작이 달라집니다. 어떤 결과가 베이크되는지 확인합니다.",
    "promptEn": "Explain Mixed Lights and distinguish its scope, prerequisites and limitations.",
    "visual": "mixed-lighting",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Setting a light as realtime or baked · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/LightModes-landing.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Setting a light as realtime or baked · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/LightModes-landing.html"
  },
  {
    "id": 247,
    "slug": "model-file",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "assets",
    "name": "모델 파일",
    "en": "model file",
    "desc": "메시·뼈·애니메이션 등 3D 자원을 교환하고 가져오는 파일입니다.",
    "ko": "모델 파일의 의미를 설명하고 다음 조건을 구분해 주세요. 파일 형식별로 포함되는 데이터가 다릅니다. 임포트 설정과 원본 데이터의 단위를 확인합니다.",
    "promptEn": "Explain model file and distinguish its scope, prerequisites and limitations.",
    "visual": "model-file",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Model file formats reference · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/3D-formats.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Model file formats reference · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/3D-formats.html"
  },
  {
    "id": 248,
    "slug": "model",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "assets",
    "name": "3D 모델",
    "en": "model",
    "desc": "캐릭터나 환경 같은 입체 대상을 표현하는 자원입니다.",
    "ko": "3D 모델의 의미를 설명하고 다음 조건을 구분해 주세요. 형상 데이터인 메시 외에도 재질·리그 등의 구성 요소가 포함될 수 있습니다.",
    "promptEn": "Explain model and distinguish its scope, prerequisites and limitations.",
    "visual": "model",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Model file formats reference · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/3D-formats.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Model file formats reference · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/3D-formats.html"
  },
  {
    "id": 249,
    "slug": "mono-backend",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "platform",
    "name": "Mono 백엔드",
    "en": "Mono",
    "desc": "관리 코드 런타임을 이용하여 Unity 스크립트를 실행하는 백엔드입니다.",
    "ko": "Mono 백엔드의 의미를 설명하고 다음 조건을 구분해 주세요. IL2CPP와 컴파일 방식 및 지원 플랫폼이 다릅니다. 플랫폼별 선택 가능 여부를 확인합니다.",
    "promptEn": "Explain Mono and distinguish its scope, prerequisites and limitations.",
    "visual": "mono-backend",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Scripting back ends · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/scripting-backends.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Scripting back ends · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/scripting-backends.html"
  },
  {
    "id": 250,
    "slug": "humanoid-muscles",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "animation",
    "name": "휴머노이드 머슬 정의",
    "en": "muscle definition",
    "desc": "휴머노이드 리그의 움직임 범위를 인체 매핑에 맞춰 조절합니다.",
    "ko": "휴머노이드 머슬 정의의 의미를 설명하고 다음 조건을 구분해 주세요. 실제 생물학적 근육 시뮬레이션이 아닙니다. Avatar 유효성과 관절 범위를 확인합니다.",
    "promptEn": "Explain muscle definition and distinguish its scope, prerequisites and limitations.",
    "visual": "humanoid-muscles",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Avatar Muscle   Settings tab reference · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/MuscleDefinitions.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Avatar Muscle   Settings tab reference · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/MuscleDefinitions.html"
  },
  {
    "id": 251,
    "slug": "mutable-package",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "assets",
    "name": "수정 가능한 패키지",
    "en": "mutable",
    "desc": "사용자가 패키지 내용을 직접 편집할 수 있는 상태를 뜻합니다.",
    "ko": "수정 가능한 패키지의 의미를 설명하고 다음 조건을 구분해 주세요. 로컬·임베디드 패키지와 읽기 전용 캐시 패키지를 구분합니다.",
    "promptEn": "Explain mutable and distinguish its scope, prerequisites and limitations.",
    "visual": "mutable-package",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Install a UPM package from a local folder · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/upm-ui-local.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Install a UPM package from a local folder · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/upm-ui-local.html"
  },
  {
    "id": 252,
    "slug": "native-plugin",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "architecture",
    "name": "네이티브 플러그인",
    "en": "native plug-in",
    "desc": "C·C++ 등으로 만든 플랫폼별 라이브러리를 Unity에서 호출하는 구성입니다.",
    "ko": "네이티브 플러그인의 의미를 설명하고 다음 조건을 구분해 주세요. CPU 아키텍처와 플랫폼별 라이브러리를 맞춰야 합니다. 관리 코드와의 데이터 전달 방식도 확인합니다.",
    "promptEn": "Explain native plug-in and distinguish its scope, prerequisites and limitations.",
    "visual": "native-plugin",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Integrating third-party code libraries (plug-ins) · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/plug-ins.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Integrating third-party code libraries (plug-ins) · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/plug-ins.html"
  },
  {
    "id": 253,
    "slug": "near-clipping-plane",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "camera",
    "name": "근거리 클리핑 평면",
    "en": "near clipping plane",
    "desc": "카메라 앞에서 렌더링할 수 있는 가장 가까운 깊이 경계입니다.",
    "ko": "근거리 클리핑 평면의 의미를 설명하고 다음 조건을 구분해 주세요. 카메라와 물체 사이의 월드 거리 판정과 동일하지 않습니다. 지나치게 작은 값은 깊이 정밀도에 불리할 수 있습니다.",
    "promptEn": "Explain near clipping plane and distinguish its scope, prerequisites and limitations.",
    "visual": "near-clipping-plane",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Camera.nearClipPlane · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/ScriptReference/Camera-nearClipPlane.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Camera.nearClipPlane · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/ScriptReference/Camera-nearClipPlane.html"
  },
  {
    "id": 254,
    "slug": "multiplayer-networking",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "network",
    "name": "멀티플레이 네트워킹",
    "en": "networking",
    "desc": "여러 참여자의 입력과 게임 상태를 네트워크로 주고받는 구성입니다.",
    "ko": "멀티플레이 네트워킹의 의미를 설명하고 다음 조건을 구분해 주세요. Unity 6에서는 선택한 패키지와 서비스에 따라 구현이 달라집니다. 하나의 내장 네트워크 API로 단정하지 않습니다.",
    "promptEn": "Explain networking and distinguish its scope, prerequisites and limitations.",
    "visual": "multiplayer-networking",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Multiplayer · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/multiplayer.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Multiplayer · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/multiplayer.html"
  },
  {
    "id": 255,
    "slug": "surface-normal",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "rendering",
    "name": "표면 노멀",
    "en": "normal",
    "desc": "표면에 수직인 방향을 나타내는 벡터 데이터입니다.",
    "ko": "표면 노멀의 의미를 설명하고 다음 조건을 구분해 주세요. 좌표 공간을 일치시켜 조명 계산에 사용합니다. 노멀 맵과 메시 노멀은 서로 다른 데이터입니다.",
    "promptEn": "Explain normal and distinguish its scope, prerequisites and limitations.",
    "visual": "surface-normal",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Mesh.normals · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/ScriptReference/Mesh-normals.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Mesh.normals · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/ScriptReference/Mesh-normals.html"
  },
  {
    "id": 256,
    "slug": "on-demand-resources",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "platform",
    "name": "온디맨드 리소스",
    "en": "ODR",
    "desc": "Apple 플랫폼에서 필요할 때 가져오는 리소스를 구분하는 배포 구성입니다.",
    "ko": "온디맨드 리소스의 의미를 설명하고 다음 조건을 구분해 주세요. 일반적인 게임 에셋 스트리밍과 같다고 단정하지 않습니다. 대상 플랫폼과 배포 조건을 확인합니다.",
    "promptEn": "Explain ODR and distinguish its scope, prerequisites and limitations.",
    "visual": "on-demand-resources",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: App thinning · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/AppThinning.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: App thinning · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/AppThinning.html"
  },
  {
    "id": 257,
    "slug": "orthographic-projection",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "camera",
    "name": "직교 투영",
    "en": "orthographic 3D",
    "desc": "거리와 관계없이 물체의 투영 크기를 유지하는 카메라 방식입니다.",
    "ko": "직교 투영의 의미를 설명하고 다음 조건을 구분해 주세요. 원근 투영과 구분합니다. 직교 투영만으로 등각 시점이 자동으로 정해지지는 않습니다.",
    "promptEn": "Explain orthographic 3D and distinguish its scope, prerequisites and limitations.",
    "visual": "orthographic-projection",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: 2D and 3D projects · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/2Dor3D.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: 2D and 3D projects · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/2Dor3D.html"
  },
  {
    "id": 258,
    "slug": "package-manifest",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "assets",
    "name": "패키지 정보 파일",
    "en": "package manifest",
    "desc": "package.json에 이름·버전·의존성 등 개별 패키지 정보를 선언합니다.",
    "ko": "패키지 정보 파일의 의미를 설명하고 다음 조건을 구분해 주세요. 프로젝트 의존성을 기록하는 manifest.json과 구분합니다.",
    "promptEn": "Explain package manifest and distinguish its scope, prerequisites and limitations.",
    "visual": "package-manifest",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Package manifest file · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/upm-manifestPkg.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Package manifest file · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/upm-manifestPkg.html"
  },
  {
    "id": 259,
    "slug": "transform-parent",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "architecture",
    "name": "부모·자식 계층",
    "en": "parent",
    "desc": "Transform 계층에서 자식이 부모의 공간을 기준으로 배치되는 관계입니다.",
    "ko": "부모·자식 계층의 의미를 설명하고 다음 조건을 구분해 주세요. 로컬 변환과 월드 변환을 구분합니다. 부모 변경 시 월드 좌표 유지 옵션을 확인합니다.",
    "promptEn": "Explain parent and distinguish its scope, prerequisites and limitations.",
    "visual": "transform-parent",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Transforms · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-Transform.html#parent",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Transforms · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-Transform.html#parent"
  },
  {
    "id": 260,
    "slug": "particle-system",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "effects",
    "name": "파티클 시스템",
    "en": "particle system",
    "desc": "작은 입자를 생성하고 수명·움직임·모양을 조절하여 효과를 구성합니다.",
    "ko": "파티클 시스템의 의미를 설명하고 다음 조건을 구분해 주세요. 유체 효과처럼 보이더라도 실제 유체 시뮬레이션과 같지는 않습니다. 모듈과 계산 비용을 확인합니다.",
    "promptEn": "Explain particle system and distinguish its scope, prerequisites and limitations.",
    "visual": "particle-system",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Particle System component reference · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-ParticleSystem.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Particle System component reference · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-ParticleSystem.html"
  },
  {
    "id": 261,
    "slug": "particle",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "effects",
    "name": "파티클",
    "en": "particle",
    "desc": "시각 효과 시스템이 생성하고 갱신하는 작은 이미지나 메시 단위입니다.",
    "ko": "파티클의 의미를 설명하고 다음 조건을 구분해 주세요. 개별 입자 데이터와 전체 시스템의 설정을 구분합니다.",
    "promptEn": "Explain particle and distinguish its scope, prerequisites and limitations.",
    "visual": "particle",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Particle System component reference · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-ParticleSystem.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Particle System component reference · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-ParticleSystem.html"
  },
  {
    "id": 262,
    "slug": "perforce",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "tools",
    "name": "Perforce 버전 관리",
    "en": "Perforce",
    "desc": "파일 변경과 협업 이력을 관리하는 버전 관리 도구입니다.",
    "ko": "Perforce 버전 관리의 의미를 설명하고 다음 조건을 구분해 주세요. Unity 프로젝트에서 사용할 경우 서버와 워크스페이스 구성이 필요합니다.",
    "promptEn": "Explain Perforce and distinguish its scope, prerequisites and limitations.",
    "visual": "perforce",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Perforce Integration · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/perForceIntegration.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Perforce Integration · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/perForceIntegration.html"
  },
  {
    "id": 263,
    "slug": "windows-photo-capture",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "platform",
    "name": "Windows PhotoCapture",
    "en": "PhotoCapture",
    "desc": "지원되는 Windows 장치에서 카메라 사진을 캡처하는 Unity API입니다.",
    "ko": "Windows PhotoCapture의 의미를 설명하고 다음 조건을 구분해 주세요. 모든 플랫폼에서 사용 가능한 화면 캡처 API가 아닙니다. 장치 지원과 권한을 확인합니다.",
    "promptEn": "Explain PhotoCapture and distinguish its scope, prerequisites and limitations.",
    "visual": "windows-photo-capture",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: PhotoCapture · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/ScriptReference/Windows.WebCam.PhotoCapture.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: PhotoCapture · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/ScriptReference/Windows.WebCam.PhotoCapture.html"
  },
  {
    "id": 264,
    "slug": "physics-engine",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "physics",
    "name": "물리 엔진",
    "en": "physics engine",
    "desc": "힘·운동·충돌 같은 물리 현상을 수치적으로 계산하는 시스템입니다.",
    "ko": "물리 엔진의 의미를 설명하고 다음 조건을 구분해 주세요. 현실을 완벽하게 재현하는 것은 아닙니다. 스텝 간격과 근사 형상에 따른 오차가 있습니다.",
    "promptEn": "Explain physics engine and distinguish its scope, prerequisites and limitations.",
    "visual": "physics-engine",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Physics · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/PhysicsSection.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Physics · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/PhysicsSection.html"
  },
  {
    "id": 265,
    "slug": "physics-material-2d",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "physics",
    "name": "2D 물리 재질",
    "en": "Physics Material 2D",
    "desc": "2D Collider 접촉에서 마찰과 반발 특성을 설정하는 자원입니다.",
    "ko": "2D 물리 재질의 의미를 설명하고 다음 조건을 구분해 주세요. 표면을 그리는 Material이나 3D Physic Material과 구분합니다.",
    "promptEn": "Explain Physics Material 2D and distinguish its scope, prerequisites and limitations.",
    "visual": "physics-material-2d",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Physics Material 2D reference · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/2d-physics/physics-material-2d-reference.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Physics Material 2D reference · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/2d-physics/physics-material-2d-reference.html"
  },
  {
    "id": 266,
    "slug": "pixel",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "rendering",
    "name": "픽셀",
    "en": "pixel",
    "desc": "디지털 이미지의 색상 정보를 표현하는 최소 격자 단위입니다.",
    "ko": "픽셀의 의미를 설명하고 다음 조건을 구분해 주세요. 텍스처의 texel과 화면의 pixel은 역할이 다릅니다. 출력 해상도와 샘플링을 확인합니다.",
    "promptEn": "Explain pixel and distinguish its scope, prerequisites and limitations.",
    "visual": "pixel",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Glossary · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html",
        "method": "공식 용어집의 해당 정의 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Glossary · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html"
  },
  {
    "id": 267,
    "slug": "audio-play-on-awake",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "audio",
    "name": "Play On Awake",
    "en": "Play On Awake",
    "desc": "Audio Source가 활성 초기화될 때 재생을 시작하도록 지정하는 설정입니다.",
    "ko": "Play On Awake의 의미를 설명하고 다음 조건을 구분해 주세요. 모든 애니메이션의 자동 재생을 제어하는 설정이 아닙니다. 클립과 초기 활성 상태를 확인합니다.",
    "promptEn": "Explain Play On Awake and distinguish its scope, prerequisites and limitations.",
    "visual": "audio-play-on-awake",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: AudioSource.playOnAwake · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/ScriptReference/AudioSource-playOnAwake.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: AudioSource.playOnAwake · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/ScriptReference/AudioSource-playOnAwake.html"
  },
  {
    "id": 268,
    "slug": "playables-api",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "animation",
    "name": "Playables API",
    "en": "Playables",
    "desc": "데이터 소스와 처리 노드를 연결한 그래프를 평가하는 Unity 재생 API입니다.",
    "ko": "Playables API의 의미를 설명하고 다음 조건을 구분해 주세요. PlayableGraph는 그래프 컨테이너입니다. 재생 API와 특정 Timeline 편집 기능을 구분합니다.",
    "promptEn": "Explain Playables and distinguish its scope, prerequisites and limitations.",
    "visual": "playables-api",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Playables API · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/Playables.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Playables API · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/Playables.html"
  },
  {
    "id": 269,
    "slug": "player-log",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "tools",
    "name": "플레이어 로그",
    "en": "player log",
    "desc": "실행된 게임에서 발생한 메시지와 진단 정보를 기록하는 로그입니다.",
    "ko": "플레이어 로그의 의미를 설명하고 다음 조건을 구분해 주세요. 에디터 로그와 구분합니다. 저장 위치는 실행 플랫폼에 따라 달라집니다.",
    "promptEn": "Explain player log and distinguish its scope, prerequisites and limitations.",
    "visual": "player-log",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Log files reference · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/log-files.html#player",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Log files reference · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/log-files.html#player"
  },
  {
    "id": 270,
    "slug": "player-settings",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "platform",
    "name": "Player 설정",
    "en": "Player Settings",
    "desc": "최종 실행 파일의 식별자·실행 환경 등 플랫폼 관련 옵션을 관리합니다.",
    "ko": "Player 설정의 의미를 설명하고 다음 조건을 구분해 주세요. 에디터 환경 설정과 구분합니다. 플랫폼 탭별로 적용되는 범위가 다릅니다.",
    "promptEn": "Explain Player Settings and distinguish its scope, prerequisites and limitations.",
    "visual": "player-settings",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Player project settings reference · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-PlayerSettings.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Player project settings reference · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-PlayerSettings.html"
  },
  {
    "id": 271,
    "slug": "unity-plugin",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "architecture",
    "name": "Unity 플러그인",
    "en": "plug-in",
    "desc": "외부 코드 라이브러리로 Unity 기능을 확장하는 구성입니다.",
    "ko": "Unity 플러그인의 의미를 설명하고 다음 조건을 구분해 주세요. 관리 코드와 네이티브 플러그인을 구분합니다. 라이브러리별 라이선스와 플랫폼 지원을 확인합니다.",
    "promptEn": "Explain plug-in and distinguish its scope, prerequisites and limitations.",
    "visual": "unity-plugin",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Integrating third-party code libraries (plug-ins) · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/plug-ins.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Integrating third-party code libraries (plug-ins) · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/plug-ins.html"
  },
  {
    "id": 272,
    "slug": "post-processing",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "effects",
    "name": "후처리",
    "en": "post-processing",
    "desc": "렌더링된 영상에 색·빛·초점 등의 효과를 적용하는 처리 단계입니다.",
    "ko": "후처리의 의미를 설명하고 다음 조건을 구분해 주세요. 파이프라인마다 지원되는 효과와 설정 방식이 다릅니다. 효과 순서와 비용을 확인합니다.",
    "promptEn": "Explain post-processing and distinguish its scope, prerequisites and limitations.",
    "visual": "post-processing",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Introduction to post-processing · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/PostProcessingOverview.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Introduction to post-processing · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/PostProcessingOverview.html"
  },
  {
    "id": 273,
    "slug": "project-manifest",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "assets",
    "name": "프로젝트 패키지 매니페스트",
    "en": "project manifest",
    "desc": "Packages/manifest.json에서 프로젝트의 패키지 의존성을 선언합니다.",
    "ko": "프로젝트 패키지 매니페스트의 의미를 설명하고 다음 조건을 구분해 주세요. 패키지 자체의 package.json과 역할이 다릅니다. 패키지 잠금 파일과도 구분합니다.",
    "promptEn": "Explain project manifest and distinguish its scope, prerequisites and limitations.",
    "visual": "project-manifest",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Project manifest file · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/upm-manifestPrj.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Project manifest file · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/upm-manifestPrj.html"
  },
  {
    "id": 274,
    "slug": "project-settings",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "tools",
    "name": "프로젝트 설정",
    "en": "Project Settings",
    "desc": "물리·입력·그래픽 등 프로젝트에 적용되는 설정을 모아 관리합니다.",
    "ko": "프로젝트 설정의 의미를 설명하고 다음 조건을 구분해 주세요. 사용자별 에디터 Preferences와 구분합니다. 설정 파일도 협업에 필요한 자원입니다.",
    "promptEn": "Explain Project Settings and distinguish its scope, prerequisites and limitations.",
    "visual": "project-settings",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Project Settings reference · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/comp-ManagerGroup.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Project Settings reference · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/comp-ManagerGroup.html"
  },
  {
    "id": 275,
    "slug": "project-window",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "tools",
    "name": "Project 창",
    "en": "Project window",
    "desc": "프로젝트의 에셋을 찾아 선택하고 관리하는 에디터 창입니다.",
    "ko": "Project 창의 의미를 설명하고 다음 조건을 구분해 주세요. 씬 계층을 표시하는 Hierarchy 창과 구분합니다.",
    "promptEn": "Explain Project window and distinguish its scope, prerequisites and limitations.",
    "visual": "project-window",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Project window reference · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/ProjectView.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Project window reference · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/ProjectView.html"
  },
  {
    "id": 276,
    "slug": "unity-project",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "assets",
    "name": "Unity 프로젝트",
    "en": "project",
    "desc": "게임 개발에 필요한 에셋·패키지·설정 등을 함께 관리하는 작업 단위입니다.",
    "ko": "Unity 프로젝트의 의미를 설명하고 다음 조건을 구분해 주세요. 프로젝트 폴더와 최종 빌드 결과물은 다릅니다. 원본 자원과 생성 캐시를 구분합니다.",
    "promptEn": "Explain project and distinguish its scope, prerequisites and limitations.",
    "visual": "unity-project",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Glossary · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html",
        "method": "공식 용어집의 해당 정의 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Glossary · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html"
  },
  {
    "id": 277,
    "slug": "property-drawer",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "tools",
    "name": "프로퍼티 드로어",
    "en": "Property Drawer",
    "desc": "직렬화된 필드나 타입의 Inspector 표시 방식을 확장하는 에디터 기능입니다.",
    "ko": "프로퍼티 드로어의 의미를 설명하고 다음 조건을 구분해 주세요. 필드 데이터 자체의 런타임 동작을 자동으로 바꾸는 기능이 아닙니다.",
    "promptEn": "Explain Property Drawer and distinguish its scope, prerequisites and limitations.",
    "visual": "property-drawer",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Use Property Drawers with IMGUI to customize the Inspector · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/editor-PropertyDrawers.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Use Property Drawers with IMGUI to customize the Inspector · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/editor-PropertyDrawers.html"
  },
  {
    "id": 278,
    "slug": "pseudo-depth",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "rendering",
    "name": "유사 깊이 표현",
    "en": "pseudo-depth",
    "desc": "평면 콘텐츠에 입체적인 깊이처럼 보이는 단서를 넣는 표현 방식입니다.",
    "ko": "유사 깊이 표현의 의미를 설명하고 다음 조건을 구분해 주세요. 2.5D라는 표현은 여러 구성을 가리킵니다. 실제 3D 좌표 사용 여부와 시각 효과를 구분합니다.",
    "promptEn": "Explain pseudo-depth and distinguish its scope, prerequisites and limitations.",
    "visual": "pseudo-depth",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Glossary · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html",
        "method": "공식 용어집의 해당 정의 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Glossary · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html"
  },
  {
    "id": 279,
    "slug": "quad-primitive",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "assets",
    "name": "쿼드",
    "en": "Quad",
    "desc": "네 정점으로 구성한 평면 사각형 형상입니다.",
    "ko": "쿼드의 의미를 설명하고 다음 조건을 구분해 주세요. Unity 기본 Quad와 Plane은 방향·정점 구성 등이 다릅니다. 앞뒤 면과 노멀 방향을 확인합니다.",
    "promptEn": "Explain Quad and distinguish its scope, prerequisites and limitations.",
    "visual": "quad-primitive",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Primitive and placeholder objects · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/PrimitiveObjects.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Primitive and placeholder objects · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/PrimitiveObjects.html"
  },
  {
    "id": 280,
    "slug": "realtime-lighting",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "rendering",
    "name": "실시간 조명",
    "en": "Realtime Lights",
    "desc": "실행 중 조명 계산을 수행하는 광원 구성입니다.",
    "ko": "실시간 조명의 의미를 설명하고 다음 조건을 구분해 주세요. 베이크 조명과 구분합니다. 그림자 생성 비용과 광원 수를 검토합니다.",
    "promptEn": "Explain Realtime Lights and distinguish its scope, prerequisites and limitations.",
    "visual": "realtime-lighting",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Light Modes · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/LightModes-introduction.html#realtime",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Light Modes · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/LightModes-introduction.html#realtime"
  },
  {
    "id": 281,
    "slug": "relative-joint-2d",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "physics",
    "name": "2D 상대 조인트",
    "en": "Relative Joint 2D",
    "desc": "두 Rigidbody2D 사이에 설정한 상대 위치와 각도를 유지하도록 구동합니다.",
    "ko": "2D 상대 조인트의 의미를 설명하고 다음 조건을 구분해 주세요. Fixed Joint 2D와 구동 방식 및 설정이 다릅니다. 최대 힘과 토크를 확인합니다.",
    "promptEn": "Explain Relative Joint 2D and distinguish its scope, prerequisites and limitations.",
    "visual": "relative-joint-2d",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Relative Joint 2D component reference · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/2d-physics/joints/relative-joint-2d-reference.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Relative Joint 2D component reference · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/2d-physics/joints/relative-joint-2d-reference.html"
  },
  {
    "id": 282,
    "slug": "render-pipeline",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "rendering",
    "name": "렌더 파이프라인",
    "en": "render pipeline",
    "desc": "씬 데이터에서 최종 화면을 만들기까지 수행하는 렌더링 단계들의 구성입니다.",
    "ko": "렌더 파이프라인의 의미를 설명하고 다음 조건을 구분해 주세요. Built-in·URP·HDRP 사이에 기능과 셰이더 호환 차이가 있습니다.",
    "promptEn": "Explain render pipeline and distinguish its scope, prerequisites and limitations.",
    "visual": "render-pipeline",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Render pipelines · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/render-pipelines.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Render pipelines · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/render-pipelines.html"
  },
  {
    "id": 283,
    "slug": "rendering-path",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "rendering",
    "name": "렌더링 경로",
    "en": "rendering path",
    "desc": "파이프라인 안에서 조명과 표면을 계산하는 방식의 선택입니다.",
    "ko": "렌더링 경로의 의미를 설명하고 다음 조건을 구분해 주세요. 파이프라인 자체와 Forward·Deferred 같은 경로를 구분합니다.",
    "promptEn": "Explain rendering path and distinguish its scope, prerequisites and limitations.",
    "visual": "rendering-path",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Introduction to rendering paths in the Built-In Render Pipeline · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/RenderingPaths.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Introduction to rendering paths in the Built-In Render Pipeline · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/RenderingPaths.html"
  },
  {
    "id": 284,
    "slug": "skeletal-rig",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "animation",
    "name": "리그",
    "en": "rig",
    "desc": "메시의 움직임을 제어하는 뼈와 연결 구조입니다.",
    "ko": "리그의 의미를 설명하고 다음 조건을 구분해 주세요. 뼈 계층만으로 정점 변형이 완성되지는 않습니다. 스키닝 가중치와 제어 구조를 구분합니다.",
    "promptEn": "Explain rig and distinguish its scope, prerequisites and limitations.",
    "visual": "skeletal-rig",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Rig tab Import Settings reference · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/FBXImporter-Rig.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Rig tab Import Settings reference · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/FBXImporter-Rig.html"
  },
  {
    "id": 285,
    "slug": "rigging",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "animation",
    "name": "리깅",
    "en": "rigging",
    "desc": "모델에 뼈와 제어 구조를 구성하는 제작 과정입니다.",
    "ko": "리깅의 의미를 설명하고 다음 조건을 구분해 주세요. 스키닝과 관련되지만 같은 작업은 아닙니다. 엔진에 가져올 수 있는 구조인지 확인합니다.",
    "promptEn": "Explain rigging and distinguish its scope, prerequisites and limitations.",
    "visual": "rigging",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Creating models for animation · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/UsingHumanoidChars.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Creating models for animation · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/UsingHumanoidChars.html"
  },
  {
    "id": 286,
    "slug": "animation-root-node",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "animation",
    "name": "애니메이션 루트 노드",
    "en": "Root node",
    "desc": "Generic 애니메이션에서 루트 이동의 기준으로 사용할 계층 노드입니다.",
    "ko": "애니메이션 루트 노드의 의미를 설명하고 다음 조건을 구분해 주세요. 휴머노이드 Body Transform과 구분합니다. 클립들의 일관된 기준 노드를 지정합니다.",
    "promptEn": "Explain Root node and distinguish its scope, prerequisites and limitations.",
    "visual": "animation-root-node",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Animation tab · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-AnimationClip.html#AllClipProperties",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Animation tab · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-AnimationClip.html#AllClipProperties"
  },
  {
    "id": 287,
    "slug": "animation-root-transform",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "animation",
    "name": "애니메이션 루트 변환",
    "en": "Root Transform",
    "desc": "루트 모션에 적용할 위치와 방향 변화를 나타내는 변환입니다.",
    "ko": "애니메이션 루트 변환의 의미를 설명하고 다음 조건을 구분해 주세요. Humanoid에서는 Body Transform의 투영과 관련됩니다. 일반 계층의 최상위 Transform과 맥락을 구분합니다.",
    "promptEn": "Explain Root Transform and distinguish its scope, prerequisites and limitations.",
    "visual": "animation-root-transform",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: How Root Motion works · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/RootMotion.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: How Root Motion works · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/RootMotion.html"
  },
  {
    "id": 288,
    "slug": "scene-view",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "tools",
    "name": "Scene 뷰",
    "en": "Scene View",
    "desc": "오브젝트의 배치와 편집을 위해 씬 공간을 탐색하는 에디터 화면입니다.",
    "ko": "Scene 뷰의 의미를 설명하고 다음 조건을 구분해 주세요. 카메라의 최종 출력을 보여주는 Game 뷰와 다릅니다.",
    "promptEn": "Explain Scene View and distinguish its scope, prerequisites and limitations.",
    "visual": "scene-view",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Scene view reference · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/UsingTheSceneView.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Scene view reference · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/UsingTheSceneView.html"
  },
  {
    "id": 289,
    "slug": "scene",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "level",
    "name": "씬",
    "en": "Scene",
    "desc": "게임 공간이나 메뉴 등을 구성하는 오브젝트와 설정의 저장 단위입니다.",
    "ko": "씬의 의미를 설명하고 다음 조건을 구분해 주세요. 하나의 씬이 반드시 하나의 스테이지를 뜻하지는 않습니다. 여러 씬을 함께 로드하는 구성도 있습니다.",
    "promptEn": "Explain Scene and distinguish its scope, prerequisites and limitations.",
    "visual": "scene",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Introduction to scenes · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/CreatingScenes.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Introduction to scenes · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/CreatingScenes.html"
  },
  {
    "id": 290,
    "slug": "scripting-backend",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "platform",
    "name": "스크립팅 백엔드",
    "en": "Scripting Backend",
    "desc": "Unity 스크립트를 실행 가능한 코드로 처리하는 런타임 기술입니다.",
    "ko": "스크립팅 백엔드의 의미를 설명하고 다음 조건을 구분해 주세요. Unity 6의 Mono와 IL2CPP를 기준으로 설명합니다. 오래된 .NET 백엔드 안내를 현재 선택지로 제시하지 않습니다.",
    "promptEn": "Explain Scripting Backend and distinguish its scope, prerequisites and limitations.",
    "visual": "scripting-backend",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Scripting back ends · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/scripting-backends.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Scripting back ends · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/scripting-backends.html"
  },
  {
    "id": 291,
    "slug": "unityevent",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "architecture",
    "name": "UnityEvent",
    "en": "Scripting Event",
    "desc": "에디터에서 연결한 콜백을 직렬화하여 실행 시 호출하는 이벤트 구성입니다.",
    "ko": "UnityEvent의 의미를 설명하고 다음 조건을 구분해 주세요. 일반 C# event와 저장·연결 방식이 다릅니다. 지속 호출 대상과 런타임 리스너를 구분합니다.",
    "promptEn": "Explain Scripting Event and distinguish its scope, prerequisites and limitations.",
    "visual": "unityevent",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Configure custom events in the Editor · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/UnityEvents.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Configure custom events in the Editor · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/UnityEvents.html"
  },
  {
    "id": 292,
    "slug": "unity-scripts",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "architecture",
    "name": "Unity 스크립트",
    "en": "Scripts",
    "desc": "게임 규칙과 컴포넌트 동작을 코드로 정의하는 자원입니다.",
    "ko": "Unity 스크립트의 의미를 설명하고 다음 조건을 구분해 주세요. Unity 6에서는 C#을 사용합니다. 실행 순서와 생명주기 콜백을 확인합니다.",
    "promptEn": "Explain Scripts and distinguish its scope, prerequisites and limitations.",
    "visual": "unity-scripts",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Creating scripts · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/creating-scripts.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Creating scripts · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/creating-scripts.html"
  },
  {
    "id": 293,
    "slug": "scroll-view",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "ui",
    "name": "스크롤 뷰",
    "en": "ScrollView",
    "desc": "정해진 표시 영역 안에서 큰 콘텐츠를 스크롤하는 UI 구성입니다.",
    "ko": "스크롤 뷰의 의미를 설명하고 다음 조건을 구분해 주세요. UI Toolkit·uGUI·IMGUI의 API와 설정이 다릅니다. 어느 UI 체계인지 먼저 확인합니다.",
    "promptEn": "Explain ScrollView and distinguish its scope, prerequisites and limitations.",
    "visual": "scroll-view",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: ScrollView · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/UIE-uxml-element-ScrollView.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: ScrollView · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/UIE-uxml-element-ScrollView.html"
  },
  {
    "id": 294,
    "slug": "cloth-self-collision",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "physics",
    "name": "천 자체 충돌",
    "en": "Self Collision",
    "desc": "천 시뮬레이션이 자신의 다른 부분을 통과하지 않도록 계산하는 설정입니다.",
    "ko": "천 자체 충돌의 의미를 설명하고 다음 조건을 구분해 주세요. 다른 Collider와의 충돌 처리와 구분합니다. 정확도와 추가 계산 비용을 함께 고려합니다.",
    "promptEn": "Explain Self Collision and distinguish its scope, prerequisites and limitations.",
    "visual": "cloth-self-collision",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Cloth · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-Cloth.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Cloth · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-Cloth.html"
  },
  {
    "id": 295,
    "slug": "unity-services",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "tools",
    "name": "Unity 서비스",
    "en": "Services",
    "desc": "분석·빌드·멀티플레이 등 엔진 외의 기능을 제공하는 서비스 묶음입니다.",
    "ko": "Unity 서비스의 의미를 설명하고 다음 조건을 구분해 주세요. 에디터 컴포넌트와 온라인 서비스를 구분합니다. 계정·프로젝트 연결과 서비스별 조건을 확인합니다.",
    "promptEn": "Explain Services and distinguish its scope, prerequisites and limitations.",
    "visual": "unity-services",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Unity Services · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/UnityServices.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Unity Services · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/UnityServices.html"
  },
  {
    "id": 296,
    "slug": "shader-object",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "rendering",
    "name": "Shader 오브젝트",
    "en": "Shader object",
    "desc": "셰이더 프로그램과 렌더 상태 정의를 담는 Unity Shader 자원입니다.",
    "ko": "Shader 오브젝트의 의미를 설명하고 다음 조건을 구분해 주세요. 재질별 값을 담는 Material과 구분합니다. 프로그램 단계별 코드는 이 자원 안에 포함될 수 있습니다.",
    "promptEn": "Explain Shader object and distinguish its scope, prerequisites and limitations.",
    "visual": "shader-object",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Shader object fundamentals · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/shader-objects.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Shader object fundamentals · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/shader-objects.html"
  },
  {
    "id": 297,
    "slug": "shader-program",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "rendering",
    "name": "셰이더",
    "en": "shader",
    "desc": "GPU에서 정점·픽셀 등 렌더링 데이터를 처리하는 프로그램입니다.",
    "ko": "셰이더의 의미를 설명하고 다음 조건을 구분해 주세요. 셰이더 프로그램과 재질 속성 값을 구분합니다. 지원 단계와 문법은 파이프라인에 따라 다릅니다.",
    "promptEn": "Explain shader and distinguish its scope, prerequisites and limitations.",
    "visual": "shader-program",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Custom shaders · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/Shaders.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Custom shaders · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/Shaders.html"
  },
  {
    "id": 298,
    "slug": "shaderlab",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "rendering",
    "name": "ShaderLab",
    "en": "ShaderLab",
    "desc": "Unity 셰이더의 속성·서브셰이더·패스 구조 등을 선언하는 문법입니다.",
    "ko": "ShaderLab의 의미를 설명하고 다음 조건을 구분해 주세요. GPU 계산을 작성하는 HLSL 코드와 역할이 다릅니다.",
    "promptEn": "Explain ShaderLab and distinguish its scope, prerequisites and limitations.",
    "visual": "shaderlab",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Shader block in ShaderLab reference · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/SL-Shader.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Shader block in ShaderLab reference · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/SL-Shader.html"
  },
  {
    "id": 299,
    "slug": "shadowmask",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "rendering",
    "name": "섀도마스크",
    "en": "Shadowmask",
    "desc": "베이크된 그림자 정보를 저장하여 혼합 조명에 활용하는 텍스처 구성입니다.",
    "ko": "섀도마스크의 의미를 설명하고 다음 조건을 구분해 주세요. 일반 라이트맵과 저장 정보가 다릅니다. Distance Shadowmask와 거리 처리 차이를 확인합니다.",
    "promptEn": "Explain Shadowmask and distinguish its scope, prerequisites and limitations.",
    "visual": "shadowmask",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Lighting Mode · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/lighting-mode.html#shadowmask",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Lighting Mode · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/lighting-mode.html#shadowmask"
  },
  {
    "id": 300,
    "slug": "skybox",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "rendering",
    "name": "스카이박스",
    "en": "Skybox",
    "desc": "카메라 뒤쪽의 하늘이나 먼 배경을 표현하는 구성입니다.",
    "ko": "스카이박스의 의미를 설명하고 다음 조건을 구분해 주세요. 배경 표시와 환경 조명 기여를 구분합니다. 지원 셰이더와 파이프라인 설정을 확인합니다.",
    "promptEn": "Explain Skybox and distinguish its scope, prerequisites and limitations.",
    "visual": "skybox",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Sky · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/sky-landing.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Sky · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/sky-landing.html"
  },
  {
    "id": 301,
    "slug": "soft-particles",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "effects",
    "name": "소프트 파티클",
    "en": "Soft Particles",
    "desc": "불투명 형상과 가까워질 때 입자를 부드럽게 희미하게 만드는 효과입니다.",
    "ko": "소프트 파티클의 의미를 설명하고 다음 조건을 구분해 주세요. 깊이 정보와 셰이더 지원이 필요합니다. 입자끼리의 물리 충돌을 만드는 기능이 아닙니다.",
    "promptEn": "Explain Soft Particles and distinguish its scope, prerequisites and limitations.",
    "visual": "soft-particles",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Standard Particle Shaders Material Inspector window reference for the Built-In Render Pipeline · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/shader-StandardParticleShaders.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Standard Particle Shaders Material Inspector window reference for the Built-In Render Pipeline · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/shader-StandardParticleShaders.html"
  },
  {
    "id": 302,
    "slug": "speculative-collision",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "physics",
    "name": "추측 기반 연속 충돌 검출",
    "en": "speculative continuous collision detection",
    "desc": "다음 이동을 고려해 넓힌 경계로 접촉 가능성을 예측하는 검출 방식입니다.",
    "ko": "추측 기반 연속 충돌 검출의 의미를 설명하고 다음 조건을 구분해 주세요. 스윕 기반 연속 검출과 다릅니다. 실제로 닿지 않은 형상에서 접촉처럼 반응하는 경우를 점검합니다.",
    "promptEn": "Explain speculative continuous collision detection and distinguish its scope, prerequisites and limitations.",
    "visual": "speculative-collision",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Continuous collision detection (CCD) · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/ContinuousCollisionDetection.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Continuous collision detection (CCD) · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/ContinuousCollisionDetection.html"
  },
  {
    "id": 303,
    "slug": "sphere-collider",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "physics",
    "name": "구 콜라이더",
    "en": "Sphere Collider",
    "desc": "구 형태로 충돌 영역을 근사하는 Collider입니다.",
    "ko": "구 콜라이더의 의미를 설명하고 다음 조건을 구분해 주세요. 표시 메시와 별개입니다. 반지름과 중심·변환 스케일을 확인합니다.",
    "promptEn": "Explain Sphere Collider and distinguish its scope, prerequisites and limitations.",
    "visual": "sphere-collider",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Sphere collider component reference · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-SphereCollider.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Sphere collider component reference · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-SphereCollider.html"
  },
  {
    "id": 304,
    "slug": "spring-joint",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "physics",
    "name": "스프링 조인트",
    "en": "Spring Joint",
    "desc": "두 강체의 거리가 변할 때 스프링 같은 힘으로 연결하는 조인트입니다.",
    "ko": "스프링 조인트의 의미를 설명하고 다음 조건을 구분해 주세요. 일반 스프링·댐퍼 원리와 실제 컴포넌트 설정을 구분합니다. 힘과 거리 제한을 확인합니다.",
    "promptEn": "Explain Spring Joint and distinguish its scope, prerequisites and limitations.",
    "visual": "spring-joint",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Spring Joint component reference · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-SpringJoint.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Spring Joint component reference · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-SpringJoint.html"
  },
  {
    "id": 305,
    "slug": "sprite-renderer",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "rendering",
    "name": "스프라이트 렌더러",
    "en": "Sprite Renderer",
    "desc": "Sprite 에셋을 씬에서 표시하는 컴포넌트입니다.",
    "ko": "스프라이트 렌더러의 의미를 설명하고 다음 조건을 구분해 주세요. Sprite 데이터 자체와 구분합니다. 정렬 레이어와 머티리얼 설정을 확인합니다.",
    "promptEn": "Explain Sprite Renderer and distinguish its scope, prerequisites and limitations.",
    "visual": "sprite-renderer",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Sprite Renderer component reference · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/sprite/renderer/sprite-renderer-reference.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Sprite Renderer component reference · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/sprite/renderer/sprite-renderer-reference.html"
  },
  {
    "id": 306,
    "slug": "sprite",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "assets",
    "name": "스프라이트",
    "en": "Sprite",
    "desc": "이미지의 영역과 표시 정보를 묶어 2D 그래픽에 사용하는 에셋입니다.",
    "ko": "스프라이트의 의미를 설명하고 다음 조건을 구분해 주세요. 원본 Texture와 Sprite의 경계·피벗·단위 설정을 구분합니다.",
    "promptEn": "Explain Sprite and distinguish its scope, prerequisites and limitations.",
    "visual": "sprite",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Sprites · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/sprite/sprite-landing.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Sprites · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/sprite/sprite-landing.html"
  },
  {
    "id": 307,
    "slug": "state-machine-behaviour",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "animation",
    "name": "상태 머신 비헤이비어",
    "en": "State Machine Behaviour",
    "desc": "Animator 상태에 연결하여 진입·종료·갱신 시 실행하는 스크립트입니다.",
    "ko": "상태 머신 비헤이비어의 의미를 설명하고 다음 조건을 구분해 주세요. GameObject에 붙는 MonoBehaviour와 연결 대상 및 콜백이 다릅니다.",
    "promptEn": "Explain State Machine Behaviour and distinguish its scope, prerequisites and limitations.",
    "visual": "state-machine-behaviour",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: State Machine Behaviours · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/StateMachineBehaviours.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: State Machine Behaviours · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/StateMachineBehaviours.html"
  },
  {
    "id": 308,
    "slug": "static-batching",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "optimization",
    "name": "정적 배칭",
    "en": "Static Batching",
    "desc": "움직이지 않는 대상의 메시를 묶어 렌더링 비용을 줄이는 방식입니다.",
    "ko": "정적 배칭의 의미를 설명하고 다음 조건을 구분해 주세요. 동적 배칭과 CPU 처리 시점·메모리 비용이 다릅니다. 실제 드로 콜과 메모리 변화를 측정합니다.",
    "promptEn": "Explain Static Batching and distinguish its scope, prerequisites and limitations.",
    "visual": "static-batching",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Introduction to batching meshes · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/DrawCallBatching.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Introduction to batching meshes · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/DrawCallBatching.html"
  },
  {
    "id": 309,
    "slug": "static-shadow-receiver",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "rendering",
    "name": "정적 그림자 수신체",
    "en": "static receiver",
    "desc": "런타임에 움직이지 않으면서 그림자를 받는 물체를 뜻합니다.",
    "ko": "정적 그림자 수신체의 의미를 설명하고 다음 조건을 구분해 주세요. 그림자를 만드는 Cast Shadows와 받는 Receive Shadows는 별개의 설정입니다.",
    "promptEn": "Explain static receiver and distinguish its scope, prerequisites and limitations.",
    "visual": "static-shadow-receiver",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Mesh Renderer component reference · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-MeshRenderer.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Mesh Renderer component reference · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-MeshRenderer.html"
  },
  {
    "id": 310,
    "slug": "surface-shader",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "rendering",
    "name": "서피스 셰이더",
    "en": "Surface Shader",
    "desc": "Built-in Render Pipeline에서 조명 연동 셰이더 작성을 돕는 방식입니다.",
    "ko": "서피스 셰이더의 의미를 설명하고 다음 조건을 구분해 주세요. URP·HDRP의 공통 작성 방식이 아닙니다. 파이프라인에 맞는 셰이더 방식을 선택합니다.",
    "promptEn": "Explain Surface Shader and distinguish its scope, prerequisites and limitations.",
    "visual": "surface-shader",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Introduction to surface shaders in the Built-In Render Pipeline · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/SL-SurfaceShaders.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Introduction to surface shaders in the Built-In Render Pipeline · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/SL-SurfaceShaders.html"
  },
  {
    "id": 311,
    "slug": "joint-swing-axis",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "physics",
    "name": "조인트 스윙 축",
    "en": "Swing Axis",
    "desc": "Character Joint의 스윙 회전 기준을 구성하는 축입니다.",
    "ko": "조인트 스윙 축의 의미를 설명하고 다음 조건을 구분해 주세요. 트위스트 축과 구분합니다. 연결 기준 좌표 공간을 확인합니다.",
    "promptEn": "Explain Swing Axis and distinguish its scope, prerequisites and limitations.",
    "visual": "joint-swing-axis",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Character Joint component reference · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-CharacterJoint.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Character Joint component reference · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-CharacterJoint.html"
  },
  {
    "id": 312,
    "slug": "joint-swing-limit",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "physics",
    "name": "조인트 스윙 제한",
    "en": "Swing Limit",
    "desc": "조인트의 스윙 방향 회전 범위를 제한하는 설정입니다.",
    "ko": "조인트 스윙 제한의 의미를 설명하고 다음 조건을 구분해 주세요. 각도 제한과 스프링 강도는 다른 설정입니다. Swing 1·2 기준 축을 확인합니다.",
    "promptEn": "Explain Swing Limit and distinguish its scope, prerequisites and limitations.",
    "visual": "joint-swing-limit",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Character Joint component reference · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-CharacterJoint.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Character Joint component reference · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-CharacterJoint.html"
  },
  {
    "id": 313,
    "slug": "joint-target-position",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "physics",
    "name": "조인트 목표 위치",
    "en": "target position",
    "desc": "조인트 드라이브가 이동하려는 목표 위치를 지정합니다.",
    "ko": "조인트 목표 위치의 의미를 설명하고 다음 조건을 구분해 주세요. Transform을 즉시 이동시키는 명령이 아닙니다. 축 잠금과 구동력 설정에 따라 도달 결과가 달라집니다.",
    "promptEn": "Explain target position and distinguish its scope, prerequisites and limitations.",
    "visual": "joint-target-position",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Configurable Joint component reference · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-ConfigurableJoint.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Configurable Joint component reference · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-ConfigurableJoint.html"
  },
  {
    "id": 314,
    "slug": "joint-target-velocity",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "physics",
    "name": "조인트 목표 속도",
    "en": "target velocity",
    "desc": "조인트 드라이브가 추종하려는 속도를 지정합니다.",
    "ko": "조인트 목표 속도의 의미를 설명하고 다음 조건을 구분해 주세요. 최대 힘·감쇠·축 설정에 따라 실제 속도는 달라집니다. 목표 위치와 구분합니다.",
    "promptEn": "Explain target velocity and distinguish its scope, prerequisites and limitations.",
    "visual": "joint-target-velocity",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Configurable Joint component reference · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-ConfigurableJoint.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Configurable Joint component reference · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-ConfigurableJoint.html"
  },
  {
    "id": 315,
    "slug": "terrain-collider",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "physics",
    "name": "터레인 콜라이더",
    "en": "Terrain Collider",
    "desc": "Terrain의 형상을 따라 물리 충돌 표면을 제공하는 컴포넌트입니다.",
    "ko": "터레인 콜라이더의 의미를 설명하고 다음 조건을 구분해 주세요. 지형이 렌더링되는 것과 충돌이 존재하는 것은 별개입니다.",
    "promptEn": "Explain Terrain Collider and distinguish its scope, prerequisites and limitations.",
    "visual": "terrain-collider",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Terrain collider component reference · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-TerrainCollider.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Terrain collider component reference · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-TerrainCollider.html"
  },
  {
    "id": 316,
    "slug": "text-mesh",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "ui",
    "name": "Text Mesh",
    "en": "Text Mesh",
    "desc": "글자 문자열을 씬 안의 형상으로 표시하는 Unity 컴포넌트입니다.",
    "ko": "Text Mesh의 의미를 설명하고 다음 조건을 구분해 주세요. TextMeshPro와 별개의 레거시 컴포넌트입니다. 글꼴·머티리얼·렌더 순서를 확인합니다.",
    "promptEn": "Explain Text Mesh and distinguish its scope, prerequisites and limitations.",
    "visual": "text-mesh",
    "tags": [
      "legacy"
    ],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Text Mesh component reference · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-TextMesh.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Text Mesh component reference · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-TextMesh.html"
  },
  {
    "id": 317,
    "slug": "imgui-text-field",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "ui",
    "name": "IMGUI 텍스트 입력 필드",
    "en": "TextField control",
    "desc": "사용자가 문자열을 입력하고 수정할 수 있는 IMGUI 컨트롤입니다.",
    "ko": "IMGUI 텍스트 입력 필드의 의미를 설명하고 다음 조건을 구분해 주세요. 비상호작용 설명인 Label과 구분합니다. 용어집의 잘못된 비상호작용 설명 대신 상세 문서의 TextField 동작을 기준으로 합니다.",
    "promptEn": "Explain TextField control and distinguish its scope, prerequisites and limitations.",
    "visual": "imgui-text-field",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: IMGUI Controls · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/gui-Controls.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: IMGUI Controls · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/gui-Controls.html"
  },
  {
    "id": 318,
    "slug": "texture-format",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "rendering",
    "name": "텍스처 포맷",
    "en": "texture format",
    "desc": "GPU가 텍스처 데이터를 저장하고 해석하는 형식입니다.",
    "ko": "텍스처 포맷의 의미를 설명하고 다음 조건을 구분해 주세요. 원본 이미지 파일 확장자와 런타임 포맷을 구분합니다. 색 채널과 정밀도·압축 지원을 확인합니다.",
    "promptEn": "Explain texture format and distinguish its scope, prerequisites and limitations.",
    "visual": "texture-format",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Choose a GPU texture format by platform · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/texture-choose-format-by-platform.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Choose a GPU texture format by platform · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/texture-choose-format-by-platform.html"
  },
  {
    "id": 319,
    "slug": "texture-importer",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "assets",
    "name": "텍스처 임포터",
    "en": "Texture Import Inspector",
    "desc": "원본 이미지를 엔진 텍스처로 가져올 때 사용할 설정입니다.",
    "ko": "텍스처 임포터의 의미를 설명하고 다음 조건을 구분해 주세요. 원본 이미지와 결과 텍스처의 크기·색 공간·압축이 다를 수 있습니다. 용도별 타입을 확인합니다.",
    "promptEn": "Explain Texture Import Inspector and distinguish its scope, prerequisites and limitations.",
    "visual": "texture-importer",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Texture Import Settings window reference · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-TextureImporter.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Texture Import Settings window reference · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-TextureImporter.html"
  },
  {
    "id": 320,
    "slug": "texture-platform-overrides",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "assets",
    "name": "텍스처 플랫폼 오버라이드",
    "en": "texture overrides",
    "desc": "대상 플랫폼별 텍스처 크기와 포맷 등의 가져오기 설정을 덮어씁니다.",
    "ko": "텍스처 플랫폼 오버라이드의 의미를 설명하고 다음 조건을 구분해 주세요. 기본 설정과 플랫폼별 결과를 구분합니다. 기기 지원과 메모리 사용량을 확인합니다.",
    "promptEn": "Explain texture overrides and distinguish its scope, prerequisites and limitations.",
    "visual": "texture-platform-overrides",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: TextureImporterPlatformSettings · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/ScriptReference/TextureImporterPlatformSettings.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: TextureImporterPlatformSettings · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/ScriptReference/TextureImporterPlatformSettings.html"
  },
  {
    "id": 321,
    "slug": "texture",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "rendering",
    "name": "텍스처",
    "en": "texture",
    "desc": "표면이나 UI 등에 사용하는 이미지 또는 샘플링 데이터 자원입니다.",
    "ko": "텍스처의 의미를 설명하고 다음 조건을 구분해 주세요. 색 정보만 담는 것은 아닙니다. 노멀·깊이 등 데이터 용도에 맞춰 색 공간과 포맷을 선택합니다.",
    "promptEn": "Explain texture and distinguish its scope, prerequisites and limitations.",
    "visual": "texture",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Texture Import Settings window reference · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-TextureImporter.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Texture Import Settings window reference · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-TextureImporter.html"
  },
  {
    "id": 322,
    "slug": "tile",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "level",
    "name": "타일",
    "en": "tile",
    "desc": "Tilemap의 격자 위치에 표시 정보 등을 제공하는 에셋입니다.",
    "ko": "타일의 의미를 설명하고 다음 조건을 구분해 주세요. 개별 타일 데이터와 이를 배치하는 Tilemap을 구분합니다. 셀 변환과 충돌 정보를 확인합니다.",
    "promptEn": "Explain tile and distinguish its scope, prerequisites and limitations.",
    "visual": "tile",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Create a custom tile that runs a script · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/tilemaps/tiles-for-tilemaps/scriptable-tiles/scriptable-tiles-landing.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Create a custom tile that runs a script · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/tilemaps/tiles-for-tilemaps/scriptable-tiles/scriptable-tiles-landing.html"
  },
  {
    "id": 323,
    "slug": "time-settings",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "tools",
    "name": "시간 설정",
    "en": "Time Manager",
    "desc": "물리 스텝과 시간 배율 등 시간 관련 값을 관리하는 Unity 프로젝트 설정입니다.",
    "ko": "시간 설정의 의미를 설명하고 다음 조건을 구분해 주세요. 프레임마다 흐르는 시간과 고정 물리 스텝을 구분합니다. 과도한 물리 스텝 누적을 점검합니다.",
    "promptEn": "Explain Time Manager and distinguish its scope, prerequisites and limitations.",
    "visual": "time-settings",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Time project settings reference · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-TimeManager.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Time project settings reference · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-TimeManager.html"
  },
  {
    "id": 324,
    "slug": "ui-toggle",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "ui",
    "name": "토글",
    "en": "Toggle",
    "desc": "켜짐과 꺼짐 상태를 선택하는 UI 컨트롤입니다.",
    "ko": "토글의 의미를 설명하고 다음 조건을 구분해 주세요. 화면 표시와 실제 상태 변경 이벤트를 연결해야 합니다. 사용하는 UI 체계의 API를 확인합니다.",
    "promptEn": "Explain Toggle and distinguish its scope, prerequisites and limitations.",
    "visual": "ui-toggle",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Toggle · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/UIE-uxml-element-Toggle.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Toggle · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/UIE-uxml-element-Toggle.html"
  },
  {
    "id": 325,
    "slug": "editor-toolbar",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "tools",
    "name": "에디터 툴바",
    "en": "toolbar",
    "desc": "씬 조작과 Play Mode 등 에디터 동작에 사용하는 기본 도구 영역입니다.",
    "ko": "에디터 툴바의 의미를 설명하고 다음 조건을 구분해 주세요. 최종 게임에 포함되는 UI가 아닙니다. 에디터 버전에 따라 배치와 도구 구성이 다릅니다.",
    "promptEn": "Explain toolbar and distinguish its scope, prerequisites and limitations.",
    "visual": "editor-toolbar",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: The Toolbar · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/Toolbar.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: The Toolbar · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/Toolbar.html"
  },
  {
    "id": 326,
    "slug": "transform-component",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "architecture",
    "name": "Transform 컴포넌트",
    "en": "Transform component",
    "desc": "오브젝트의 위치·회전·크기와 계층 관계를 저장하는 컴포넌트입니다.",
    "ko": "Transform 컴포넌트의 의미를 설명하고 다음 조건을 구분해 주세요. 좌표계 원리 설명과 실제 Unity 컴포넌트를 구분합니다. 로컬 변환과 월드 변환을 확인합니다.",
    "promptEn": "Explain Transform component and distinguish its scope, prerequisites and limitations.",
    "visual": "transform-component",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Transforms · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-Transform.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Transforms · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-Transform.html"
  },
  {
    "id": 327,
    "slug": "tree-editor",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "tools",
    "name": "Tree Editor",
    "en": "Tree",
    "desc": "Unity 에디터에서 가지와 잎을 구성해 수목을 제작하는 기존 도구입니다.",
    "ko": "Tree Editor의 의미를 설명하고 다음 조건을 구분해 주세요. Unity 6 문서는 Built-in 전용·이전 콘텐츠 호환용이라고 설명합니다. URP·HDRP는 다른 수목 제작 경로를 확인합니다.",
    "promptEn": "Explain Tree and distinguish its scope, prerequisites and limitations.",
    "visual": "tree-editor",
    "tags": [
      "legacy"
    ],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Create trees with Tree Editor · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-Tree.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Create trees with Tree Editor · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-Tree.html"
  },
  {
    "id": 328,
    "slug": "unity-build-automation",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "tools",
    "name": "Unity Build Automation",
    "en": "Unity Build Automation",
    "desc": "Unity 프로젝트의 빌드 작업을 원격 서비스에서 자동 실행하는 구성입니다.",
    "ko": "Unity Build Automation의 의미를 설명하고 다음 조건을 구분해 주세요. 로컬 에디터 빌드와 구분합니다. 저장소 연결·빌드 대상·서비스 이용 조건을 확인합니다.",
    "promptEn": "Explain Unity Build Automation and distinguish its scope, prerequisites and limitations.",
    "visual": "unity-build-automation",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 서비스 문서 (2026-10-14 확인)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Unity Build Automation • Build Automation • Unity Docs · Unity 서비스 문서 (2026-10-14 확인)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity.com/devops/en/manual/unity-build-automation",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 서비스 문서 (2026-10-14 확인)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Unity Build Automation • Build Automation • Unity Docs · Unity 서비스 문서 (2026-10-14 확인)"
      }
    ],
    "source": "https://docs.unity.com/devops/en/manual/unity-build-automation"
  },
  {
    "id": 329,
    "slug": "unity-remote",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "tools",
    "name": "Unity Remote",
    "en": "Unity Remote",
    "desc": "에디터에서 실행 중인 프로젝트를 기기 입력과 함께 시험하는 보조 앱입니다.",
    "ko": "Unity Remote의 의미를 설명하고 다음 조건을 구분해 주세요. 실제 기기용 빌드의 성능이나 완전한 실행 환경을 재현하지는 않습니다.",
    "promptEn": "Explain Unity Remote and distinguish its scope, prerequisites and limitations.",
    "visual": "unity-remote",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Unity Remote · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/UnityRemote5.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Unity Remote · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/UnityRemote5.html"
  },
  {
    "id": 330,
    "slug": "upm-package",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "assets",
    "name": "UPM 패키지",
    "en": "UPM package",
    "desc": "Unity Package Manager에서 관리하는 기능·도구·자원 묶음입니다.",
    "ko": "UPM 패키지의 의미를 설명하고 다음 조건을 구분해 주세요. .unitypackage 형태의 에셋 내보내기와 구분합니다. 패키지 출처와 의존성 버전을 확인합니다.",
    "promptEn": "Explain UPM package and distinguish its scope, prerequisites and limitations.",
    "visual": "upm-package",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Get started with packages · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/Packages.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Get started with packages · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/Packages.html"
  },
  {
    "id": 331,
    "slug": "version-control",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "tools",
    "name": "버전 관리",
    "en": "version control",
    "desc": "파일 변경 이력을 저장하고 협업 중 변경을 통합하는 체계입니다.",
    "ko": "버전 관리의 의미를 설명하고 다음 조건을 구분해 주세요. 게임 저장 기능과는 다릅니다. 대형 바이너리 자원과 메타데이터의 관리 방식을 함께 정합니다.",
    "promptEn": "Explain version control and distinguish its scope, prerequisites and limitations.",
    "visual": "version-control",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Version Control · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/VersionControl.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Version Control · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/VersionControl.html"
  },
  {
    "id": 332,
    "slug": "windows-video-capture",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "platform",
    "name": "Windows VideoCapture",
    "en": "VideoCapture",
    "desc": "지원되는 Windows 장치에서 카메라 영상을 기록하는 Unity API입니다.",
    "ko": "Windows VideoCapture의 의미를 설명하고 다음 조건을 구분해 주세요. 일반적인 모든 플랫폼용 게임 녹화 기능이 아닙니다. 장치·카메라·마이크 권한을 확인합니다.",
    "promptEn": "Explain VideoCapture and distinguish its scope, prerequisites and limitations.",
    "visual": "windows-video-capture",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: VideoCapture · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/ScriptReference/Windows.WebCam.VideoCapture.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: VideoCapture · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/ScriptReference/Windows.WebCam.VideoCapture.html"
  },
  {
    "id": 333,
    "slug": "virtual-reality",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "platform",
    "name": "가상 현실",
    "en": "virtual reality",
    "desc": "헤드셋 등의 추적 입력과 입체 영상을 이용해 가상 공간을 체험하는 기술입니다.",
    "ko": "가상 현실의 의미를 설명하고 다음 조건을 구분해 주세요. 증강 현실과 구분합니다. 기기·XR 공급자·성능 요구 조건을 확인합니다.",
    "promptEn": "Explain virtual reality and distinguish its scope, prerequisites and limitations.",
    "visual": "virtual-reality",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: VR and MR development in Unity · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/VROverview.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: VR and MR development in Unity · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/VROverview.html",
    "aliases": [
      "VR"
    ]
  },
  {
    "id": 334,
    "slug": "visual-element",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "ui",
    "name": "UI Toolkit VisualElement",
    "en": "visual element",
    "desc": "UI Toolkit의 시각적 트리를 구성하는 기본 요소 타입입니다.",
    "ko": "UI Toolkit VisualElement의 의미를 설명하고 다음 조건을 구분해 주세요. uGUI GameObject 계층과 다릅니다. 스타일과 이벤트·레이아웃은 해당 UI 체계를 사용합니다.",
    "promptEn": "Explain visual element and distinguish its scope, prerequisites and limitations.",
    "visual": "visual-element",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Introduction to visual elements and the visual tree · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/UIE-VisualTree.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Introduction to visual elements and the visual tree · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/UIE-VisualTree.html"
  },
  {
    "id": 335,
    "slug": "webgl",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "platform",
    "name": "WebGL",
    "en": "WebGL",
    "desc": "웹 브라우저에서 그래픽을 그리는 API입니다.",
    "ko": "WebGL의 의미를 설명하고 다음 조건을 구분해 주세요. Unity 웹 빌드가 사용하는 기술 중 하나입니다. 브라우저별 기능과 빌드 제한을 확인합니다.",
    "promptEn": "Explain WebGL and distinguish its scope, prerequisites and limitations.",
    "visual": "webgl",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Web · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/webgl.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Web · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/webgl.html"
  },
  {
    "id": 336,
    "slug": "wind-zone",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "effects",
    "name": "윈드 존",
    "en": "wind zone",
    "desc": "지원되는 수목이나 파티클 등에 바람 효과의 정보를 제공하는 구성입니다.",
    "ko": "윈드 존의 의미를 설명하고 다음 조건을 구분해 주세요. 모든 Rigidbody에 자동으로 바람 힘을 주는 컴포넌트가 아닙니다. 효과 수신 대상의 지원을 확인합니다.",
    "promptEn": "Explain wind zone and distinguish its scope, prerequisites and limitations.",
    "visual": "wind-zone",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Add wind zones to trees · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-WindZone.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Add wind zones to trees · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-WindZone.html"
  },
  {
    "id": 337,
    "slug": "extended-reality",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "platform",
    "name": "XR",
    "en": "XR",
    "desc": "가상 현실·증강 현실·혼합 현실 등을 함께 부르는 상위 용어입니다.",
    "ko": "XR의 의미를 설명하고 다음 조건을 구분해 주세요. 단일 기기나 하나의 구현 API 이름이 아닙니다. 대상 경험과 장치 지원을 먼저 정합니다.",
    "promptEn": "Explain XR and distinguish its scope, prerequisites and limitations.",
    "visual": "extended-reality",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: XR · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/XR.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: XR · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/XR.html"
  },
  {
    "id": 338,
    "slug": "camera-zoom",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "camera",
    "name": "카메라 줌",
    "en": "zoom",
    "desc": "투영 설정이나 시점 거리 조절로 화면에서 대상이 차지하는 크기를 바꾸는 조작입니다.",
    "ko": "카메라 줌의 의미를 설명하고 다음 조건을 구분해 주세요. 원근 카메라의 FOV 조절과 카메라 이동은 원근 관계가 다릅니다. 참고 API의 fieldOfView는 직교 카메라에서 무시됩니다.",
    "promptEn": "Explain zoom and distinguish its scope, prerequisites and limitations.",
    "visual": "camera-zoom",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Camera.fieldOfView · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/ScriptReference/Camera-fieldOfView.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Camera.fieldOfView · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/ScriptReference/Camera-fieldOfView.html"
  },
  {
    "id": 339,
    "slug": "broad-phase",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "physics",
    "name": "광역 충돌 검사",
    "en": "광역 충돌 검사",
    "desc": "정밀 검사에 넘길 충돌 가능 물체 쌍을 먼저 추리는 단계입니다.",
    "ko": "광역 충돌 검사의 의미를 설명하고 다음 조건을 구분해 주세요. 경계 볼륨 검사는 실제 표면 접촉 여부를 확정하는 검사와 다릅니다.",
    "promptEn": "Explain 광역 충돌 검사 and distinguish its scope, prerequisites and limitations.",
    "visual": "broad-phase",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "PhysX 5.5.0",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Rigid Body Collision   physx 5.5.0 documentation · PhysX 5.5.0",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://nvidia-omniverse.github.io/PhysX/physx/5.5.0/docs/RigidBodyCollision.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "PhysX 5.5.0"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Rigid Body Collision   physx 5.5.0 documentation · PhysX 5.5.0"
      }
    ],
    "source": "https://nvidia-omniverse.github.io/PhysX/physx/5.5.0/docs/RigidBodyCollision.html"
  },
  {
    "id": 340,
    "slug": "narrow-phase",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "physics",
    "name": "정밀 충돌 검사",
    "en": "정밀 충돌 검사",
    "desc": "후보 형상의 실제 접촉과 접촉 데이터를 계산하는 단계입니다.",
    "ko": "정밀 충돌 검사의 의미를 설명하고 다음 조건을 구분해 주세요. 광역 검사를 거친 후보 중에서도 실제 접촉이 없을 수 있습니다.",
    "promptEn": "Explain 정밀 충돌 검사 and distinguish its scope, prerequisites and limitations.",
    "visual": "narrow-phase",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "PhysX 5.5.0",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Rigid Body Collision   physx 5.5.0 documentation · PhysX 5.5.0",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://nvidia-omniverse.github.io/PhysX/physx/5.5.0/docs/RigidBodyCollision.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "PhysX 5.5.0"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Rigid Body Collision   physx 5.5.0 documentation · PhysX 5.5.0"
      }
    ],
    "source": "https://nvidia-omniverse.github.io/PhysX/physx/5.5.0/docs/RigidBodyCollision.html"
  },
  {
    "id": 341,
    "slug": "sprite-atlas",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "optimization",
    "name": "스프라이트 아틀라스",
    "en": "스프라이트 아틀라스",
    "desc": "여러 Sprite 이미지를 하나의 텍스처 묶음으로 배치하는 자원입니다.",
    "ko": "스프라이트 아틀라스의 의미를 설명하고 다음 조건을 구분해 주세요. 재질과 렌더 상태가 다르면 아틀라스만으로 드로 콜이 합쳐지지 않습니다.",
    "promptEn": "Explain 스프라이트 아틀라스 and distinguish its scope, prerequisites and limitations.",
    "visual": "sprite-atlas",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Upgrade Sprite Atlas V1 assets · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/sprite/atlas/v2/v2-landing.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Upgrade Sprite Atlas V1 assets · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/sprite/atlas/v2/v2-landing.html"
  },
  {
    "id": 342,
    "slug": "audio-spatializer-plugin",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "audio",
    "name": "오디오 공간화 플러그인",
    "en": "Audio Spatializer",
    "desc": "음원과 청취자 위치에 따른 공간 음향 처리를 확장하는 플러그인입니다.",
    "ko": "오디오 공간화 플러그인의 의미를 설명하고 다음 조건을 구분해 주세요. 일반 3D 오디오 설정과 플러그인 기반 처리의 범위를 구분합니다. 대상 기기와 오디오 SDK 지원을 확인합니다.",
    "promptEn": "Explain Audio Spatializer and distinguish its scope, prerequisites and limitations.",
    "visual": "audio-spatializer-plugin",
    "tags": [],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 6.0 (6000.0)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Audio Spatializer SDK · Unity 6.0 (6000.0)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/AudioSpatializerSDK.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 6.0 (6000.0)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Audio Spatializer SDK · Unity 6.0 (6000.0)"
      }
    ],
    "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/AudioSpatializerSDK.html"
  },
  {
    "id": 343,
    "slug": "legacy-mcs-compiler",
    "kind": "concept",
    "visualType": "dictionary",
    "category": "tools",
    "name": "mcs 컴파일러",
    "en": "mcs",
    "desc": "이전 Unity의 Mono 기반 환경에서 사용하던 C# 컴파일러입니다.",
    "ko": "mcs 컴파일러의 의미를 설명하고 다음 조건을 구분해 주세요. Unity 2018.4의 .NET 3.5 호환 런타임 자료를 기준으로 한 역사적 항목입니다. Unity 6의 현행 컴파일러로 안내하지 않습니다.",
    "promptEn": "Explain mcs and distinguish its scope, prerequisites and limitations.",
    "visual": "legacy-mcs-compiler",
    "tags": [
      "legacy"
    ],
    "genres": [
      "action",
      "rpg",
      "shooter",
      "platformer",
      "strategy",
      "puzzle",
      "horror",
      "adventure",
      "simulation",
      "racing",
      "sports",
      "rhythm"
    ],
    "reviewedAt": "2026-10-14",
    "reviewStatus": "source-reviewed",
    "reviewVersion": "Unity 2018.4 (역사·레거시 자료)",
    "reviewType": "기본 용어 정의",
    "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료:  C# compiler · Unity 2018.4 (역사·레거시 자료)",
    "reviewLimit": "기본 정의·적용 범위의 문서 대조입니다. 모든 세부 기능, Unreal 대응 기능, 엔진 컴파일·실행은 미검증입니다.",
    "reviewSources": [
      {
        "url": "https://docs.unity3d.com/2018.4/Documentation/Manual/CSharpCompiler.html",
        "method": "공식·원저자 상세 문서의 관련 설명 대조",
        "version": "Unity 2018.4 (역사·레거시 자료)"
      }
    ],
    "reviewHistory": [
      {
        "date": "2026-10-14",
        "action": "사전 정의 등록",
        "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료:  C# compiler · Unity 2018.4 (역사·레거시 자료)"
      }
    ],
    "source": "https://docs.unity3d.com/2018.4/Documentation/Manual/CSharpCompiler.html"
  }
];


function illustration(term) {
 const n=term.id, color=['#c7ee93','#9bd8c2','#efc38c','#c4b0e5'][Math.floor(n/4)%4], dim='#54704b';
 const person=(x,y,cls='')=>'<g class="'+cls+'"><ellipse cx="'+x+'" cy="'+(y+24)+'" rx="13" ry="5" fill="#000" opacity=".25"/><circle cx="'+x+'" cy="'+(y-12)+'" r="7" fill="'+color+'"/><path d="M'+(x-8)+' '+y+'h16v19h-16z" fill="'+color+'"/><path d="M'+(x-6)+' '+(y+18)+'v11m12-11v11" stroke="'+color+'" stroke-width="5"/></g>';
 const box=(x,y,w=32,h=32)=>'<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" rx="3" fill="#25342a" stroke="'+dim+'"/>';
 const arrow='<path d="M90 119H231l-9-7m9 7-9 7" fill="none" stroke="'+color+'" stroke-dasharray="5 5" class="drift"/>';
 let s='';
 switch(term.visual){
 case 'shoulder':s='<path d="M190 95L300 39V152Z" fill="'+color+'" opacity=".08"/>'+person(108,96)+box(213,73,24,38)+'<circle cx="229" cy="88" r="16" fill="none" stroke="'+color+'"/><path d="M223 88h12m-6-6v12" stroke="'+color+'"/>';break;
 case 'topdown':s=box(57,49,40,34)+box(224,90,36,32)+'<path d="M160 93L214 40L256 72Z" fill="'+color+'" opacity=".1"/><circle cx="160" cy="93" r="12" fill="'+color+'"/><path d="M156 93l13-12" stroke="#18201a" stroke-width="3"/>';break;
 case 'iso':s='<g transform="translate(160 86) scale(1 .5) rotate(45)">'+box(-69,-69,138,138)+box(-51,-51,32,32)+box(16,11,40,40)+'</g>'+person(156,66);break;
 case 'lock':s='<ellipse cx="160" cy="100" rx="84" ry="37" fill="none" stroke="'+dim+'" stroke-dasharray="5 5"/>'+person(160,81)+'<g class="orbit"><path d="M70 92L160 92" stroke="'+color+'" stroke-dasharray="4 4"/><rect x="62" y="84" width="18" height="16" rx="3" fill="'+color+'"/></g>';break;
 case 'hit':s=person(102,92)+person(211,92,'hit')+'<g class="pulse"><path d="M166 66l-7 24 20-7-10 30 30-28-21 5 6-24" fill="'+color+'"/><text x="129" y="148" fill="'+color+'" font-size="11">IMPACT → FREEZE</text></g>';break;
 case 'telegraph':s='<path d="M202 89L69 63V134Z" fill="#dd8a63" opacity=".23" class="pulse"/><path d="M202 89L69 63V134Z" fill="none" stroke="#dd8a63" stroke-dasharray="4 4"/>'+person(206,80)+person(95,85);break;
 case 'iframe':s='<ellipse cx="160" cy="103" rx="42" ry="37" fill="'+color+'" opacity=".09" class="pulse"/><ellipse cx="160" cy="103" rx="42" ry="37" fill="none" stroke="'+color+'" class="pulse"/>'+person(160,82)+'<text x="111" y="151" fill="'+color+'" font-size="10">INVULNERABLE</text>';break;
 case 'knock':s=person(90,90)+person(177,90,'motion')+arrow;break;
 case 'dash':s=arrow+person(110,90,'dash')+'<path d="M55 82h37m-48 13h40m-25 13h34" stroke="'+color+'" opacity=".3"/>';break;
 case 'coyote':s=box(38,124,99,35)+'<path d="M137 124h80" stroke="'+color+'" stroke-dasharray="5 4"/>'+person(150,95,'jump')+'<text x="174" y="146" fill="'+color+'" font-size="10">JUMP WINDOW</text>';break;
 case 'jump':s=box(42,129,236,18)+person(155,98,'jump')+'<g class="pulse"><rect x="209" y="66" width="49" height="24" rx="5" fill="#30452b"/><text x="218" y="82" fill="'+color+'" font-size="10">JUMP ↑</text></g>';break;
 case 'swing':s='<circle cx="160" cy="25" r="5" fill="'+color+'"/><g class="swing"><path d="M160 25V100" stroke="'+color+'" stroke-width="2"/>'+person(160,109)+'</g><path d="M83 102Q160 173 237 102" fill="none" stroke="'+dim+'" stroke-dasharray="4 5"/>';break;
 case 'slots':s=person(160,78);for(let i=0;i<8;i++){let a=i*Math.PI/4,x=160+Math.cos(a)*77,y=91+Math.sin(a)*43;s+='<circle cx="'+x+'" cy="'+y+'" r="10" stroke="'+color+'" fill="'+(i<5?color:'#18251c')+'" opacity=".7"/>';}s+='<ellipse cx="160" cy="91" rx="77" ry="43" fill="none" stroke="'+dim+'" stroke-dasharray="3 6"/>';break;
 case 'formation':for(let i=0;i<12;i++)s+='<g class="motion"><circle cx="'+(65+i%4*39)+'" cy="'+(61+Math.floor(i/4)*30)+'" r="7" fill="'+color+'"/><rect x="'+(53+i%4*39)+'" y="'+(49+Math.floor(i/4)*30)+'" width="24" height="24" rx="4" fill="none" stroke="'+dim+'"/></g>';break;
 case 'path':s=box(126,52,42,70)+box(216,104,40,40)+'<path d="M59 118L97 118L97 38L189 38L189 85L260 85" fill="none" stroke="'+color+'" stroke-width="3" stroke-dasharray="7 5" class="drift"/><circle cx="59" cy="118" r="8" fill="'+color+'"/><circle cx="260" cy="85" r="8" fill="none" stroke="'+color+'"/>';break;
 case 'vision':s='<path d="M81 97L259 26Q290 95 259 164Z" fill="'+color+'" opacity=".12"/><path d="M81 97L259 26M81 97L259 164" stroke="'+color+'" opacity=".5"/><circle cx="81" cy="97" r="10" fill="'+color+'"/>'+person(225,77,'pulse');break;
 case 'guidance':s='<path d="M44 152L137 75H197L290 152Z" fill="#203127"/><rect x="137" y="44" width="55" height="74" rx="2" fill="'+color+'" opacity=".5"/><path d="M141 118L97 176H242L189 118Z" fill="'+color+'" opacity=".08"/>'+person(107,115);break;
 case 'landmark':s='<path d="M20 143L68 79L109 139L154 51L210 136L264 93L306 143" fill="#2c4132"/><path d="M159 111V39l13-17 13 17v72" fill="#648258"/><path d="M163 42h18" stroke="'+color+'" stroke-width="4"/>'+person(88,122);break;
 case 'arena':s='<ellipse cx="160" cy="103" rx="110" ry="52" fill="#203127" stroke="'+dim+'"/>'+box(91,62)+box(211,101)+box(69,108,34,21)+person(160,79);break;
 case 'loop':s='<path d="M78 105V49H246V133H78V105M157 49V133" fill="none" stroke="'+dim+'" stroke-width="17"/><path d="M78 105V49H246V133H78V105" fill="none" stroke="'+color+'" stroke-width="2" stroke-dasharray="6 8" class="drift"/><circle cx="78" cy="105" r="9" fill="'+color+'"/><path d="M147 89h20" stroke="#ecc38d" stroke-width="6"/>';break;
 case 'rim':s='<ellipse cx="160" cy="90" rx="45" ry="59" fill="'+color+'" opacity=".07"/>'+person(160,85)+'<path d="M169 78v26h-4v22M162 67a7 7 0 0 0 3-13" fill="none" stroke="#f5ffe7" stroke-width="2"/>';break;
 case 'trail':s='<path d="M63 118Q153 32 243 96" fill="none" stroke="'+color+'" stroke-width="18" opacity=".07"/><path d="M63 118Q153 32 243 96" fill="none" stroke="'+color+'" stroke-width="4" stroke-dasharray="70 180" class="drift"/>'+person(164,104);break;
 case 'fog':s='<path d="M0 117L66 57L132 117L220 48L320 121V180H0" fill="#7d9275" opacity=".3"/><path d="M0 139L100 79L169 135L258 94L320 141V180H0" fill="#456543"/><path d="M0 164L71 114L168 170L262 136L320 167V180H0" fill="#263f2a"/><path d="M0 114H320M0 123H320" stroke="'+color+'" opacity=".1" stroke-width="12"/>';break;
 case 'shock':s=person(160,87)+'<g class="pulse"><ellipse cx="160" cy="118" rx="40" ry="17" fill="none" stroke="'+color+'" stroke-width="3"/><ellipse cx="160" cy="118" rx="78" ry="34" fill="none" stroke="'+color+'" opacity=".5"/><ellipse cx="160" cy="118" rx="112" ry="47" fill="none" stroke="'+color+'" opacity=".2"/></g>';break;
 }
 return '<svg viewBox="0 0 320 184" role="img" aria-label="'+term.name+' 개념 도식"><defs><pattern id="grid'+n+'" width="24" height="24" patternUnits="userSpaceOnUse"><path d="M24 0H0V24" fill="none" stroke="#9baa89" stroke-opacity=".10"/></pattern></defs><rect width="320" height="184" fill="#17231c"/><rect width="320" height="184" fill="url(#grid'+n+')"/><ellipse cx="160" cy="124" rx="116" ry="41" fill="'+color+'" opacity=".025"/>'+s+'</svg>';
}

