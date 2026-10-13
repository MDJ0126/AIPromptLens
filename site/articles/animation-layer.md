---
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
}
---

# 애니메이션 레이어

## 핵심 구조

기본 포즈 → 부위 마스크 → 레이어 합성

## 개념 설명

신체 영역이나 기능별로 애니메이션을 나누어 합성합니다.

## 활용 상황

걷는 동안 상체로 조준하게 합니다.

## 비교와 선택

마스크와 레이어 순서·가중치가 최종 포즈에 영향을 줍니다. 먼저 목적에 맞는지 판단하고, 비용과 결과는 대상 환경에서 확인합니다.

## 설계할 때 확인

입력값과 처리 결과를 구분하고, 실패하거나 범위를 벗어나는 상황을 정합니다. 마스크와 레이어 순서·가중치가 최종 포즈에 영향을 줍니다.

## 도식의 한계

이 카드는 처리 단계 안내를 반복 재생합니다. 실제 Animation layer의 화면 효과나 엔진 실행을 재현한 영상은 아닙니다.

## 요청 예시

애니메이션 레이어을 게임에 적용하려고 합니다. 신체 영역이나 기능별로 애니메이션을 나누어 합성합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.

## 참고 자료

https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html
확인 범위: 레이어·마스크·혼합 방식이 포즈를 구성합니다. 별도 신체 기능을 처리하더라도 최종 포즈의 영향 순서는 확인해야 합니다.

## 함께 볼 용어

가산 애니메이션 (Additive animation) · 애니메이션 이벤트 (Animation event) · 블렌드 트리 (Blend tree)


## 자료 대조에서 보강한 내용

레이어·마스크·혼합 방식이 포즈를 구성합니다. 별도 신체 기능을 처리하더라도 최종 포즈의 영향 순서는 확인해야 합니다.

## 확인 기록

마지막 확인: 2026-10-14

레이어·마스크·혼합 방식이 포즈를 구성합니다. 별도 신체 기능을 처리하더라도 최종 포즈의 영향 순서는 확인해야 합니다.

개념·출처 대조입니다. 엔진 실행은 미검증입니다.

확인 자료: https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html
