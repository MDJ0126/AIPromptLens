---
{
  "id": 85,
  "slug": "gpu-instancing",
  "kind": "concept",
  "category": "optimization",
  "name": "GPU 인스턴싱",
  "en": "GPU instancing",
  "desc": "같은 메시 등을 여러 변환과 함께 묶어 그립니다.",
  "ko": "GPU 인스턴싱을 게임에 적용하려고 합니다. 같은 메시 등을 여러 변환과 함께 묶어 그립니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
  "promptEn": "Explain GPU instancing with a minimal design, use case and limitations.",
  "visual": "gpu-instancing",
  "tags": [
    "beginner"
  ],
  "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/GPUInstancing.html",
  "diagramSteps": [
    "공유 메시",
    "인스턴스 값",
    "묶음 렌더링"
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
  "reviewScope": "같은 메시·재질의 여러 객체를 한 그리기 요청으로 처리하는 기능을 확인했습니다. 인스턴스별 값에 지원 제약이 있습니다.",
  "reviewLimit": "개념·출처 대조입니다. 엔진 실행은 미검증입니다.",
  "reviewSources": [
    {
      "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/GPUInstancing.html",
      "method": "원문 자료 대조"
    }
  ],
  "reviewHistory": [
    {
      "date": "2026-10-14",
      "action": "출처 및 설명 대조",
      "scope": "같은 메시·재질의 여러 객체를 한 그리기 요청으로 처리하는 기능을 확인했습니다. 인스턴스별 값에 지원 제약이 있습니다."
    }
  ]
}
---

# GPU 인스턴싱

## 핵심 구조

공유 메시 → 인스턴스 값 → 묶음 렌더링

## 개념 설명

같은 메시 등을 여러 변환과 함께 묶어 그립니다.

## 활용 상황

풀과 반복 소품을 대량으로 배치합니다.

## 비교와 선택

재질 지원과 객체별 값의 전달 방식에 제약이 있습니다. 먼저 목적에 맞는지 판단하고, 비용과 결과는 대상 환경에서 확인합니다.

## 설계할 때 확인

입력값과 처리 결과를 구분하고, 실패하거나 범위를 벗어나는 상황을 정합니다. 재질 지원과 객체별 값의 전달 방식에 제약이 있습니다.

## 도식의 한계

이 카드는 처리 단계 안내를 반복 재생합니다. 실제 GPU instancing의 화면 효과나 엔진 실행을 재현한 영상은 아닙니다.

## 요청 예시

GPU 인스턴싱을 게임에 적용하려고 합니다. 같은 메시 등을 여러 변환과 함께 묶어 그립니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.

## 참고 자료

https://gameprogrammingpatterns.com/optimization-patterns.html
분야별 참고 자료입니다. 메뉴·API·설정은 사용하는 엔진 버전의 상세 문서에서 확인해 주세요.

## 함께 볼 용어

에셋 스트리밍 (Asset streaming) · 배칭 (Batching) · 드로 콜 (Draw call)


## 자료 대조에서 보강한 내용

같은 메시·재질의 여러 객체를 한 그리기 요청으로 처리하는 기능을 확인했습니다. 인스턴스별 값에 지원 제약이 있습니다.

## 확인 기록

마지막 확인: 2026-10-14

같은 메시·재질의 여러 객체를 한 그리기 요청으로 처리하는 기능을 확인했습니다. 인스턴스별 값에 지원 제약이 있습니다.

개념·출처 대조입니다. 엔진 실행은 미검증입니다.

확인 자료: https://docs.unity3d.com/6000.0/Documentation/Manual/GPUInstancing.html
