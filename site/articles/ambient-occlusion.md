---
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
}
---

# 앰비언트 오클루전

## 핵심 구조

주변 구조 → 가려진 영역 → 접촉 음영

## 개념 설명

주변 구조에 막혀 빛이 들어오기 어려운 정도를 표현합니다.

## 활용 상황

틈새와 접촉부의 깊이감을 보완합니다.

## 비교와 선택

직접광의 그림자나 정확한 전역 조명 전체를 대체하지 않습니다. 먼저 목적에 맞는지 판단하고, 비용과 결과는 대상 환경에서 확인합니다.

## 설계할 때 확인

입력값과 처리 결과를 구분하고, 실패하거나 범위를 벗어나는 상황을 정합니다. 직접광의 그림자나 정확한 전역 조명 전체를 대체하지 않습니다.

## 도식의 한계

이 카드는 처리 단계 안내를 반복 재생합니다. 실제 Ambient occlusion의 화면 효과나 엔진 실행을 재현한 영상은 아닙니다.

## 요청 예시

앰비언트 오클루전을 게임에 적용하려고 합니다. 주변 구조에 막혀 빛이 들어오기 어려운 정도를 표현합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.

## 참고 자료

https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html
확인 범위: AO는 주변 가림에 대한 근사입니다. 화면 기반 SSAO와 사전 계산된 AO는 사용할 수 있는 장면 정보가 다릅니다.

## 함께 볼 용어

안티앨리어싱 (Anti-aliasing) · 블룸 (Bloom) · 깊이 버퍼 (Depth buffer)


## 자료 대조에서 보강한 내용

AO는 주변 가림에 대한 근사입니다. 화면 기반 SSAO와 사전 계산된 AO는 사용할 수 있는 장면 정보가 다릅니다.

## 확인 기록

마지막 확인: 2026-10-14

AO는 주변 가림에 대한 근사입니다. 화면 기반 SSAO와 사전 계산된 AO는 사용할 수 있는 장면 정보가 다릅니다.

개념·출처 대조입니다. 엔진 실행은 미검증입니다.

확인 자료: https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html
