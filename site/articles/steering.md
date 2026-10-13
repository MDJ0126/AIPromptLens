---
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
}
---

# 스티어링

## 핵심 구조

이동 성향 → 가중치 합성 → 속도 조절

## 개념 설명

목표 추종과 분리 등의 이동 성향을 조합합니다.

## 활용 상황

무리 이동과 자연스러운 추격을 만듭니다.

## 비교와 선택

가중치가 충돌하면 떨림이나 정체가 생길 수 있습니다. 먼저 목적에 맞는지 판단하고, 비용과 결과는 대상 환경에서 확인합니다.

## 설계할 때 확인

입력값과 처리 결과를 구분하고, 실패하거나 범위를 벗어나는 상황을 정합니다. 가중치가 충돌하면 떨림이나 정체가 생길 수 있습니다.

## 도식의 한계

이 카드는 처리 단계 안내를 반복 재생합니다. 실제 Steering behaviors의 화면 효과나 엔진 실행을 재현한 영상은 아닙니다.

## 요청 예시

스티어링을 게임에 적용하려고 합니다. 목표 추종과 분리 등의 이동 성향을 조합합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.

## 참고 자료

https://dev.epicgames.com/documentation/unreal-engine/behavior-trees-in-unreal-engine
분야별 참고 자료입니다. 메뉴·API·설정은 사용하는 엔진 버전의 상세 문서에서 확인해 주세요.

## 함께 볼 용어

행동 트리 (Behavior tree) · 블랙보드 (Blackboard) · 환경 질의 (Environment query)


## 자료 대조에서 보강한 내용


