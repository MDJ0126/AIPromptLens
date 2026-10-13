---
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
}
---

# 내비게이션 메시

## 핵심 구조

이동 표면 → 연결 영역 → 경로 요청

## 개념 설명

이동 가능한 표면을 연결된 영역으로 표현합니다.

## 활용 상황

NPC가 장애물을 피해 목적지로 이동하게 합니다.

## 비교와 선택

에이전트 크기와 동적 장애물 갱신 조건을 확인합니다. 먼저 목적에 맞는지 판단하고, 비용과 결과는 대상 환경에서 확인합니다.

## 설계할 때 확인

입력값과 처리 결과를 구분하고, 실패하거나 범위를 벗어나는 상황을 정합니다. 에이전트 크기와 동적 장애물 갱신 조건을 확인합니다.

## 도식의 한계

이 카드는 처리 단계 안내를 반복 재생합니다. 실제 Navigation mesh의 화면 효과나 엔진 실행을 재현한 영상은 아닙니다.

## 요청 예시

내비게이션 메시을 게임에 적용하려고 합니다. 이동 가능한 표면을 연결된 영역으로 표현합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.

## 참고 자료

https://dev.epicgames.com/documentation/unreal-engine/behavior-trees-in-unreal-engine
분야별 참고 자료입니다. 메뉴·API·설정은 사용하는 엔진 버전의 상세 문서에서 확인해 주세요.

## 함께 볼 용어

행동 트리 (Behavior tree) · 블랙보드 (Blackboard) · 환경 질의 (Environment query)


## 자료 대조에서 보강한 내용

경로 탐색과 위치 질의를 지원하는 이동 표면 표현입니다. 메시 데이터가 준비되고 에이전트 크기와 접근 영역이 맞아야 합니다.

## 확인 기록

마지막 확인: 2026-10-14

Unity 6.0 NavMesh의 경로·표면 질의 API를 확인했습니다. 생성에는 별도 내비게이션 데이터가 필요합니다.

개념·출처 대조입니다. 엔진 실행은 미검증입니다.

확인 자료: https://docs.unity3d.com/6000.0/Documentation/ScriptReference/AI.NavMesh.html
