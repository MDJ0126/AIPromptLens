---
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
}
---

# 블렌드 트리

## 핵심 구조

이동 속도 → 클립 가중치 → 혼합 포즈

## 개념 설명

속도 등 입력값으로 여러 애니메이션의 가중치를 조합합니다.

## 활용 상황

걷기와 달리기를 자연스럽게 연결합니다.

## 비교와 선택

상태 전이와 클립 혼합은 서로 다른 역할입니다. 먼저 목적에 맞는지 판단하고, 비용과 결과는 대상 환경에서 확인합니다.

## 설계할 때 확인

입력값과 처리 결과를 구분하고, 실패하거나 범위를 벗어나는 상황을 정합니다. 상태 전이와 클립 혼합은 서로 다른 역할입니다.

## 도식의 한계

이 카드는 처리 단계 안내를 반복 재생합니다. 실제 Blend tree의 화면 효과나 엔진 실행을 재현한 영상은 아닙니다.

## 요청 예시

블렌드 트리을 게임에 적용하려고 합니다. 속도 등 입력값으로 여러 애니메이션의 가중치를 조합합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.

## 참고 자료

https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html

## 함께 볼 용어

가산 애니메이션 (Additive animation) · 애니메이션 이벤트 (Animation event) · 애니메이션 레이어 (Animation layer)


## 자료 대조에서 보강한 내용


