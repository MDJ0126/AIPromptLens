---
{
  "id": 86,
  "slug": "profiler",
  "kind": "concept",
  "category": "optimization",
  "name": "프로파일러",
  "en": "Profiler",
  "desc": "실행 시간과 메모리 등 측정값으로 병목을 분석합니다.",
  "ko": "프로파일러을 게임에 적용하려고 합니다. 실행 시간과 메모리 등 측정값으로 병목을 분석합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
  "promptEn": "Explain Profiler with a minimal design, use case and limitations.",
  "visual": "profiler",
  "tags": [
    "beginner"
  ],
  "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html",
  "diagramSteps": [
    "대표 상황",
    "구간 측정",
    "병목 판단"
  ],
  "related": [
    "asset-streaming",
    "batching",
    "draw-call"
  ],
  "genres": [
    "action",
    "rpg",
    "shooter",
    "strategy",
    "simulation",
    "racing",
    "sports",
    "rhythm",
    "puzzle",
    "platformer",
    "adventure",
    "horror"
  ],
  "reviewedAt": "2026-10-14",
  "reviewStatus": "source-reviewed",
  "reviewScope": "프로파일러에서 구간별 시간과 자원 사용량을 측정하는 기능을 확인했습니다. 실제 대상 기기의 대표 상황으로 검증합니다.",
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
      "scope": "프로파일러에서 구간별 시간과 자원 사용량을 측정하는 기능을 확인했습니다. 실제 대상 기기의 대표 상황으로 검증합니다."
    }
  ]
}
---

# 프로파일러

## 핵심 구조

대표 상황 → 구간 측정 → 병목 판단

## 개념 설명

실행 시간과 메모리 등 측정값으로 병목을 분석합니다.

## 활용 상황

느린 프레임의 CPU·GPU 구간을 찾습니다.

## 비교와 선택

개발 환경과 실제 기기 결과를 구분하고 대표 상황을 측정합니다. 먼저 목적에 맞는지 판단하고, 비용과 결과는 대상 환경에서 확인합니다.

## 설계할 때 확인

입력값과 처리 결과를 구분하고, 실패하거나 범위를 벗어나는 상황을 정합니다. 개발 환경과 실제 기기 결과를 구분하고 대표 상황을 측정합니다.

## 도식의 한계

이 카드는 처리 단계 안내를 반복 재생합니다. 실제 Profiler의 화면 효과나 엔진 실행을 재현한 영상은 아닙니다.

## 요청 예시

프로파일러을 게임에 적용하려고 합니다. 실행 시간과 메모리 등 측정값으로 병목을 분석합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.

## 참고 자료

https://gameprogrammingpatterns.com/optimization-patterns.html
분야별 참고 자료입니다. 메뉴·API·설정은 사용하는 엔진 버전의 상세 문서에서 확인해 주세요.

## 함께 볼 용어

에셋 스트리밍 (Asset streaming) · 배칭 (Batching) · 드로 콜 (Draw call)


## 자료 대조에서 보강한 내용


