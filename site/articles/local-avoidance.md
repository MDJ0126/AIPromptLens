---
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
}
---

# 로컬 회피

## 핵심 구조

주변 감지 → 이동 후보 → 방향 조절

## 개념 설명

주변 유닛과 장애물을 고려해 현재 이동을 조절합니다.

## 활용 상황

좁은 길에서 여러 NPC의 충돌을 줄입니다.

## 비교와 선택

전역 경로 탐색을 대체하지 않으며 막다른 곳 문제를 별도로 다룹니다. 먼저 목적에 맞는지 판단하고, 비용과 결과는 대상 환경에서 확인합니다.

## 설계할 때 확인

입력값과 처리 결과를 구분하고, 실패하거나 범위를 벗어나는 상황을 정합니다. 전역 경로 탐색을 대체하지 않으며 막다른 곳 문제를 별도로 다룹니다.

## 도식의 한계

이 카드는 처리 단계 안내를 반복 재생합니다. 실제 Local avoidance의 화면 효과나 엔진 실행을 재현한 영상은 아닙니다.

## 요청 예시

로컬 회피을 게임에 적용하려고 합니다. 주변 유닛과 장애물을 고려해 현재 이동을 조절합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.

## 참고 자료

https://dev.epicgames.com/documentation/unreal-engine/behavior-trees-in-unreal-engine
분야별 참고 자료입니다. 메뉴·API·설정은 사용하는 엔진 버전의 상세 문서에서 확인해 주세요.

## 함께 볼 용어

행동 트리 (Behavior tree) · 블랙보드 (Blackboard) · 환경 질의 (Environment query)


## 자료 대조에서 보강한 내용

회피 품질과 처리 비용의 절충을 확인했습니다. 경로 전체를 찾는 탐색과 국소 이동 보정은 구분합니다.

