---
{
  "id": 47,
  "slug": "fragment-shader",
  "kind": "concept",
  "category": "rendering",
  "name": "픽셀 셰이더",
  "en": "Fragment shader",
  "desc": "래스터화된 프래그먼트의 색 등 출력값을 계산합니다.",
  "ko": "픽셀 셰이더을 게임에 적용하려고 합니다. 래스터화된 프래그먼트의 색 등 출력값을 계산합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
  "promptEn": "Explain Fragment shader with a minimal design, use case and limitations.",
  "visual": "fragment-shader",
  "tags": [
    "beginner"
  ],
  "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/writing-shader-writing-shader-programs-hlsl.html",
  "diagramSteps": [
    "표면 샘플",
    "재질 계산",
    "색 출력"
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
  "reviewScope": "프래그먼트는 항상 최종 화면 픽셀과 일대일로 대응하지 않습니다. 가림과 샘플 처리 등으로 결과가 달라질 수 있습니다.",
  "reviewLimit": "개념·출처 대조입니다. 엔진 실행은 미검증입니다.",
  "reviewSources": [
    {
      "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/writing-shader-writing-shader-programs-hlsl.html",
      "method": "원문 자료 대조"
    }
  ],
  "reviewHistory": [
    {
      "date": "2026-10-14",
      "action": "출처 및 설명 대조",
      "scope": "프래그먼트는 항상 최종 화면 픽셀과 일대일로 대응하지 않습니다. 가림과 샘플 처리 등으로 결과가 달라질 수 있습니다."
    }
  ]
}
---

# 픽셀 셰이더

## 핵심 구조

표면 샘플 → 재질 계산 → 색 출력

## 개념 설명

래스터화된 프래그먼트의 색 등 출력값을 계산합니다.

## 활용 상황

재질의 색과 조명 반응을 계산합니다.

## 비교와 선택

투명 효과가 겹치면 같은 화면 위치에서 많은 계산이 발생할 수 있습니다. 먼저 목적에 맞는지 판단하고, 비용과 결과는 대상 환경에서 확인합니다.

## 설계할 때 확인

입력값과 처리 결과를 구분하고, 실패하거나 범위를 벗어나는 상황을 정합니다. 투명 효과가 겹치면 같은 화면 위치에서 많은 계산이 발생할 수 있습니다.

## 도식의 한계

이 카드는 처리 단계 안내를 반복 재생합니다. 실제 Fragment shader의 화면 효과나 엔진 실행을 재현한 영상은 아닙니다.

## 요청 예시

픽셀 셰이더을 게임에 적용하려고 합니다. 래스터화된 프래그먼트의 색 등 출력값을 계산합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.

## 참고 자료

https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html
분야별 참고 자료입니다. 메뉴·API·설정은 사용하는 엔진 버전의 상세 문서에서 확인해 주세요.

## 함께 볼 용어

앰비언트 오클루전 (Ambient occlusion) · 안티앨리어싱 (Anti-aliasing) · 블룸 (Bloom)


## 자료 대조에서 보강한 내용

프래그먼트는 항상 최종 화면 픽셀과 일대일로 대응하지 않습니다. 가림과 샘플 처리 등으로 결과가 달라질 수 있습니다.

## 확인 기록

마지막 확인: 2026-10-14

프래그먼트는 항상 최종 화면 픽셀과 일대일로 대응하지 않습니다. 가림과 샘플 처리 등으로 결과가 달라질 수 있습니다.

개념·출처 대조입니다. 엔진 실행은 미검증입니다.

확인 자료: https://docs.unity3d.com/6000.0/Documentation/Manual/writing-shader-writing-shader-programs-hlsl.html
