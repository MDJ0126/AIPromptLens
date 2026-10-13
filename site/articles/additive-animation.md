---
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
}
---

# 가산 애니메이션

## 핵심 구조

기준 포즈 → 동작 차이 → 추가 합성

## 개념 설명

기준 포즈와의 차이를 기존 포즈에 더합니다.

## 활용 상황

호흡과 반동을 기본 동작 위에 얹습니다.

## 비교와 선택

기준 포즈가 맞지 않으면 예상 밖의 왜곡이 생깁니다. 먼저 목적에 맞는지 판단하고, 비용과 결과는 대상 환경에서 확인합니다.

## 설계할 때 확인

입력값과 처리 결과를 구분하고, 실패하거나 범위를 벗어나는 상황을 정합니다. 기준 포즈가 맞지 않으면 예상 밖의 왜곡이 생깁니다.

## 도식의 한계

이 카드는 처리 단계 안내를 반복 재생합니다. 실제 Additive animation의 화면 효과나 엔진 실행을 재현한 영상은 아닙니다.

## 요청 예시

가산 애니메이션을 게임에 적용하려고 합니다. 기준 포즈와의 차이를 기존 포즈에 더합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.

## 참고 자료

https://docs.unity3d.com/6000.0/Documentation/Manual/AnimationLayers.html

## 함께 볼 용어

애니메이션 이벤트 (Animation event) · 애니메이션 레이어 (Animation layer) · 블렌드 트리 (Blend tree)


## 자료 대조에서 보강한 내용


