const categories = [
{id:'all',name:'모든 표현',icon:'⊞'},

{"id":"rendering","name":"렌더링 · 재질","icon":"◇"},{"id":"animation","name":"애니메이션","icon":"◇"},{"id":"physics","name":"물리 · 충돌","icon":"◇"},{"id":"network","name":"네트워크","icon":"◇"},{"id":"optimization","name":"최적화","icon":"◇"},{"id":"procedural","name":"절차적 생성","icon":"◇"},{"id":"audio","name":"오디오","icon":"◇"},
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

