---
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
}
---

# 러프니스

## 핵심 구조

매끈한 표면 → 거칠기 증가 → 넓은 반사

## 개념 설명

표면의 미세한 거칠기를 반사 모델의 값으로 표현합니다.

## 활용 상황

금속·고무·도장 표면의 반사 폭을 구분합니다.

## 비교와 선택

같은 값도 사용한 셰이더 모델에 따라 결과가 달라집니다. 먼저 목적에 맞는지 판단하고, 비용과 결과는 대상 환경에서 확인합니다.

## 설계할 때 확인

입력값과 처리 결과를 구분하고, 실패하거나 범위를 벗어나는 상황을 정합니다. 같은 값도 사용한 셰이더 모델에 따라 결과가 달라집니다.

## 도식의 한계

이 카드는 처리 단계 안내를 반복 재생합니다. 실제 Roughness의 화면 효과나 엔진 실행을 재현한 영상은 아닙니다.

## 요청 예시

러프니스을 게임에 적용하려고 합니다. 표면의 미세한 거칠기를 반사 모델의 값으로 표현합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.

## 참고 자료

https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html
분야별 참고 자료입니다. 메뉴·API·설정은 사용하는 엔진 버전의 상세 문서에서 확인해 주세요.

## 함께 볼 용어

앰비언트 오클루전 (Ambient occlusion) · 안티앨리어싱 (Anti-aliasing) · 블룸 (Bloom)


## 자료 대조에서 보강한 내용

Unreal의 Roughness는 작은 값일수록 날카로운 반사를 만듭니다. Unity Standard Shader는 Smoothness를 사용하므로 값과 맵 채널을 그대로 옮기지 않습니다.

## 확인 기록

마지막 확인: 2026-10-14

Unreal 5.8 Roughness의 반사 폭 제어를 확인했습니다. Unity의 Smoothness와 이름·값 방향을 구분합니다.


확인 자료: https://dev.epicgames.com/documentation/en-us/unreal-engine/physically-based-materials-in-unreal-engine
