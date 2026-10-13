---
{
  "id": 87,
  "slug": "garbage-collection",
  "kind": "concept",
  "category": "optimization",
  "name": "가비지 컬렉션",
  "en": "Garbage collection",
  "desc": "관리되는 메모리에서 더 이상 접근하지 않는 객체를 회수합니다.",
  "ko": "가비지 컬렉션을 게임에 적용하려고 합니다. 관리되는 메모리에서 더 이상 접근하지 않는 객체를 회수합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
  "promptEn": "Explain Garbage collection with a minimal design, use case and limitations.",
  "visual": "garbage-collection",
  "tags": [
    "beginner"
  ],
  "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/performance-garbage-collector.html",
  "diagramSteps": [
    "객체 할당",
    "접근 불가",
    "메모리 회수"
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
  "reviewScope": "Unity의 관리 힙 회수 기능을 확인했습니다. 모든 네이티브 자원을 대신 정리하는 기능은 아닙니다.",
  "reviewSources": [
    {
      "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/performance-garbage-collector.html",
      "method": "원문 자료 대조"
    }
  ],
  "reviewHistory": [
    {
      "date": "2026-10-14",
      "action": "출처 및 설명 대조",
      "scope": "Unity의 관리 힙 회수 기능을 확인했습니다. 모든 네이티브 자원을 대신 정리하는 기능은 아닙니다."
    }
  ]
}
---

# 가비지 컬렉션

## 핵심 구조

객체 할당 → 접근 불가 → 메모리 회수

## 개념 설명

관리되는 메모리에서 더 이상 접근하지 않는 객체를 회수합니다.

## 활용 상황

할당량과 일시적인 프레임 지연을 분석합니다.

## 비교와 선택

네이티브 자원 수명과 구분하며 할당을 줄인 효과는 측정해야 합니다. 먼저 목적에 맞는지 판단하고, 비용과 결과는 대상 환경에서 확인합니다.

## 설계할 때 확인

입력값과 처리 결과를 구분하고, 실패하거나 범위를 벗어나는 상황을 정합니다. 네이티브 자원 수명과 구분하며 할당을 줄인 효과는 측정해야 합니다.

## 도식의 한계

이 카드는 처리 단계 안내를 반복 재생합니다. 실제 Garbage collection의 화면 효과나 엔진 실행을 재현한 영상은 아닙니다.

## 요청 예시

가비지 컬렉션을 게임에 적용하려고 합니다. 관리되는 메모리에서 더 이상 접근하지 않는 객체를 회수합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.

## 참고 자료

https://gameprogrammingpatterns.com/optimization-patterns.html
분야별 참고 자료입니다. 메뉴·API·설정은 사용하는 엔진 버전의 상세 문서에서 확인해 주세요.

## 함께 볼 용어

에셋 스트리밍 (Asset streaming) · 배칭 (Batching) · 드로 콜 (Draw call)


## 자료 대조에서 보강한 내용

Unity의 관리 힙 회수 기능을 확인했습니다. 모든 네이티브 자원을 대신 정리하는 기능은 아닙니다.

## 확인 기록

마지막 확인: 2026-10-14

Unity의 관리 힙 회수 기능을 확인했습니다. 모든 네이티브 자원을 대신 정리하는 기능은 아닙니다.


확인 자료: https://docs.unity3d.com/6000.0/Documentation/Manual/performance-garbage-collector.html
