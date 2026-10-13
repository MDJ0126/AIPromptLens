---
{
  "id": 84,
  "slug": "batching",
  "kind": "concept",
  "category": "optimization",
  "name": "배칭",
  "en": "Batching",
  "desc": "조건이 맞는 그리기 작업을 묶어 제출 비용을 줄입니다.",
  "ko": "배칭을 게임에 적용하려고 합니다. 조건이 맞는 그리기 작업을 묶어 제출 비용을 줄입니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
  "promptEn": "Explain Batching with a minimal design, use case and limitations.",
  "visual": "batching",
  "tags": [
    "beginner"
  ],
  "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/DrawCallBatching.html",
  "diagramSteps": [
    "개별 작업",
    "조건별 묶기",
    "제출 감소"
  ],
  "related": [
    "asset-streaming",
    "draw-call",
    "frustum-culling"
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
  "reviewType": "기능·개념",
  "reviewScope": "Unity 문서는 같은 재질의 메시 묶기를 설명합니다. 배칭 종류와 렌더러 지원 제약을 함께 확인합니다.",
  "reviewVersion": "Unity 6.0 (6000.0)",
  "reviewSources": [
    {
      "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/DrawCallBatching.html",
      "method": "원문 자료 대조"
    }
  ],
  "reviewHistory": [
    {
      "date": "2026-10-14",
      "action": "출처 및 설명 대조",
      "scope": "Unity 문서는 같은 재질의 메시 묶기를 설명합니다. 배칭 종류와 렌더러 지원 제약을 함께 확인합니다."
    }
  ]
}
---

# 배칭

## 핵심 구조

개별 작업 → 조건별 묶기 → 제출 감소

## 개념 설명

조건이 맞는 그리기 작업을 묶어 제출 비용을 줄입니다.

## 활용 상황

작은 물체가 많은 장면의 렌더링을 최적화합니다.

## 비교와 선택

재질과 상태 제약이 있으며 결합 방식에 따른 메모리 비용도 확인합니다. 먼저 목적에 맞는지 판단하고, 비용과 결과는 대상 환경에서 확인합니다.

## 설계할 때 확인

입력값과 처리 결과를 구분하고, 실패하거나 범위를 벗어나는 상황을 정합니다. 재질과 상태 제약이 있으며 결합 방식에 따른 메모리 비용도 확인합니다.

## 도식의 한계

이 카드는 처리 단계 안내를 반복 재생합니다. 실제 Batching의 화면 효과나 엔진 실행을 재현한 영상은 아닙니다.

## 요청 예시

배칭을 게임에 적용하려고 합니다. 조건이 맞는 그리기 작업을 묶어 제출 비용을 줄입니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.

## 참고 자료

https://docs.unity3d.com/6000.0/Documentation/Manual/DrawCallBatching.html

## 함께 볼 용어

에셋 스트리밍 (Asset streaming) · 드로 콜 (Draw call) · 시야 절두체 컬링 (Frustum culling)


## 자료 대조에서 보강한 내용


