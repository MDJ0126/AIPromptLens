---
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
}
---

# 리타기팅

## 핵심 구조

원본 골격 → 뼈 대응 → 대상 포즈

## 개념 설명

한 골격의 애니메이션을 다른 골격에 맞춰 전달합니다.

## 활용 상황

체형이 다른 캐릭터에 동작을 재사용합니다.

## 비교와 선택

골격 대응과 비율 차이에 따라 발 미끄러짐이나 자세 왜곡이 생깁니다. 먼저 목적에 맞는지 판단하고, 비용과 결과는 대상 환경에서 확인합니다.

## 설계할 때 확인

입력값과 처리 결과를 구분하고, 실패하거나 범위를 벗어나는 상황을 정합니다. 골격 대응과 비율 차이에 따라 발 미끄러짐이나 자세 왜곡이 생깁니다.

## 도식의 한계

이 카드는 처리 단계 안내를 반복 재생합니다. 실제 Retargeting의 화면 효과나 엔진 실행을 재현한 영상은 아닙니다.

## 요청 예시

리타기팅을 게임에 적용하려고 합니다. 한 골격의 애니메이션을 다른 골격에 맞춰 전달합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.

## 참고 자료

https://docs.unity3d.com/6000.0/Documentation/Manual/AnimationOverview.html
분야별 참고 자료입니다. 메뉴·API·설정은 사용하는 엔진 버전의 상세 문서에서 확인해 주세요.

## 함께 볼 용어

가산 애니메이션 (Additive animation) · 애니메이션 이벤트 (Animation event) · 애니메이션 레이어 (Animation layer)


## 자료 대조에서 보강한 내용


