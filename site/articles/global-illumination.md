---
{
  "id": 40,
  "slug": "global-illumination",
  "kind": "concept",
  "category": "rendering",
  "name": "전역 조명",
  "en": "Global illumination",
  "desc": "직접 도달한 빛뿐 아니라 표면 사이의 간접광을 고려합니다.",
  "ko": "전역 조명을 게임에 적용하려고 합니다. 직접 도달한 빛뿐 아니라 표면 사이의 간접광을 고려합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
  "promptEn": "Explain Global illumination with a minimal design, use case and limitations.",
  "visual": "global-illumination",
  "tags": [
    "beginner"
  ],
  "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html",
  "diagramSteps": [
    "직접광",
    "표면 반사",
    "간접광"
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
  "reviewScope": "전역 조명은 직접광·간접광을 다루는 기법의 범주입니다. 베이크 여부와 동적 장면 반영은 선택한 시스템에 따라 다릅니다.",
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
      "scope": "전역 조명은 직접광·간접광을 다루는 기법의 범주입니다. 베이크 여부와 동적 장면 반영은 선택한 시스템에 따라 다릅니다."
    }
  ]
}
---

# 전역 조명

## 핵심 구조

직접광 → 표면 반사 → 간접광

## 개념 설명

직접 도달한 빛뿐 아니라 표면 사이의 간접광을 고려합니다.

## 활용 상황

벽의 색이 주변에 비치거나 실내가 간접광으로 밝아지는 장면에 사용합니다.

## 비교와 선택

계산 방식에 따라 움직이는 광원과 물체 반영 범위가 다릅니다. 먼저 목적에 맞는지 판단하고, 비용과 결과는 대상 환경에서 확인합니다.

## 설계할 때 확인

입력값과 처리 결과를 구분하고, 실패하거나 범위를 벗어나는 상황을 정합니다. 계산 방식에 따라 움직이는 광원과 물체 반영 범위가 다릅니다.

## 도식의 한계

이 카드는 처리 단계 안내를 반복 재생합니다. 실제 Global illumination의 화면 효과나 엔진 실행을 재현한 영상은 아닙니다.

## 요청 예시

전역 조명을 게임에 적용하려고 합니다. 직접 도달한 빛뿐 아니라 표면 사이의 간접광을 고려합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.

## 참고 자료

https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html
분야별 참고 자료입니다. 메뉴·API·설정은 사용하는 엔진 버전의 상세 문서에서 확인해 주세요.

## 함께 볼 용어

앰비언트 오클루전 (Ambient occlusion) · 안티앨리어싱 (Anti-aliasing) · 블룸 (Bloom)


## 자료 대조에서 보강한 내용

전역 조명은 직접광·간접광을 다루는 기법의 범주입니다. 베이크 여부와 동적 장면 반영은 선택한 시스템에 따라 다릅니다.

## 확인 기록

마지막 확인: 2026-10-14

전역 조명은 직접광·간접광을 다루는 기법의 범주입니다. 베이크 여부와 동적 장면 반영은 선택한 시스템에 따라 다릅니다.

개념·출처 대조입니다. 엔진 실행은 미검증입니다.

확인 자료: https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html
