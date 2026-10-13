---
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
}
---

# 충돌 레이어

## 핵심 구조

객체 분류 → 검사 쌍 선택 → 필요 충돌만

## 개념 설명

객체 분류에 따라 어떤 쌍을 검사할지 정합니다.

## 활용 상황

플레이어와 장식 효과 사이의 불필요한 검사를 제외합니다.

## 비교와 선택

레이 검사 필터와 물리 충돌 필터를 함께 확인합니다. 먼저 목적에 맞는지 판단하고, 비용과 결과는 대상 환경에서 확인합니다.

## 설계할 때 확인

입력값과 처리 결과를 구분하고, 실패하거나 범위를 벗어나는 상황을 정합니다. 레이 검사 필터와 물리 충돌 필터를 함께 확인합니다.

## 도식의 한계

이 카드는 처리 단계 안내를 반복 재생합니다. 실제 Collision filtering의 화면 효과나 엔진 실행을 재현한 영상은 아닙니다.

## 요청 예시

충돌 레이어을 게임에 적용하려고 합니다. 객체 분류에 따라 어떤 쌍을 검사할지 정합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.

## 참고 자료

https://docs.unity3d.com/6000.0/Documentation/Manual/LayerBasedCollision.html

## 함께 볼 용어

콜라이더 (Collider) · 연속 충돌 검사 (Continuous collision detection) · 조인트와 제약 (Joint constraint)


## 자료 대조에서 보강한 내용


