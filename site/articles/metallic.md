---
{
  "id": 36,
  "slug": "metallic",
  "kind": "concept",
  "category": "rendering",
  "name": "메탈릭",
  "en": "Metallic",
  "desc": "금속과 비금속의 반사 특성을 구분하는 재질 입력입니다.",
  "ko": "메탈릭을 게임에 적용하려고 합니다. 금속과 비금속의 반사 특성을 구분하는 재질 입력입니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
  "promptEn": "Explain Metallic with a minimal design, use case and limitations.",
  "visual": "metallic",
  "tags": [
    "beginner"
  ],
  "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/StandardShaderMaterialParameterMetallic.html",
  "diagramSteps": [
    "비금속",
    "금속 선택",
    "반사 성질"
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
  "reviewScope": "금속과 비금속은 반사 모델의 재질 분류입니다. 경계 혼합이나 텍스처 필터링에서는 중간값이 생길 수 있습니다.",
  "reviewSources": [
    {
      "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/StandardShaderMaterialParameterMetallic.html",
      "method": "원문 자료 대조"
    }
  ],
  "reviewHistory": [
    {
      "date": "2026-10-14",
      "action": "출처 및 설명 대조",
      "scope": "금속과 비금속은 반사 모델의 재질 분류입니다. 경계 혼합이나 텍스처 필터링에서는 중간값이 생길 수 있습니다."
    }
  ]
}
---

# 메탈릭

## 핵심 구조

비금속 → 금속 선택 → 반사 성질

## 개념 설명

금속과 비금속의 반사 특성을 구분하는 재질 입력입니다.

## 활용 상황

금속 장비와 플라스틱 손잡이를 분리합니다.

## 비교와 선택

금속처럼 보이게 하는 단순 밝기 조절 값이 아닙니다. 먼저 목적에 맞는지 판단하고, 비용과 결과는 대상 환경에서 확인합니다.

## 설계할 때 확인

입력값과 처리 결과를 구분하고, 실패하거나 범위를 벗어나는 상황을 정합니다. 금속처럼 보이게 하는 단순 밝기 조절 값이 아닙니다.

## 도식의 한계

이 카드는 처리 단계 안내를 반복 재생합니다. 실제 Metallic의 화면 효과나 엔진 실행을 재현한 영상은 아닙니다.

## 요청 예시

메탈릭을 게임에 적용하려고 합니다. 금속과 비금속의 반사 특성을 구분하는 재질 입력입니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.

## 참고 자료

https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html
분야별 참고 자료입니다. 메뉴·API·설정은 사용하는 엔진 버전의 상세 문서에서 확인해 주세요.

## 함께 볼 용어

앰비언트 오클루전 (Ambient occlusion) · 안티앨리어싱 (Anti-aliasing) · 블룸 (Bloom)


## 자료 대조에서 보강한 내용


