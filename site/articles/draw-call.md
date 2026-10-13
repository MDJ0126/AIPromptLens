---
{
  "id": 83,
  "slug": "draw-call",
  "kind": "concept",
  "category": "optimization",
  "name": "드로 콜",
  "en": "Draw call",
  "desc": "그래픽 API에 그리기 작업을 요청하는 호출입니다.",
  "ko": "드로 콜을 게임에 적용하려고 합니다. 그래픽 API에 그리기 작업을 요청하는 호출입니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
  "promptEn": "Explain Draw call with a minimal design, use case and limitations.",
  "visual": "draw-call",
  "tags": [
    "beginner"
  ],
  "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/DrawCallBatching.html",
  "diagramSteps": [
    "그릴 데이터",
    "그리기 요청",
    "GPU 처리"
  ],
  "related": [
    "asset-streaming",
    "batching",
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
  "reviewScope": "드로 콜은 제출 단위입니다. 수만 줄여도 모든 장면의 총 처리 비용이 줄어드는 것은 아닙니다.",
  "reviewVersion": "Unity 6.0 (6000.0)",
  "reviewLimit": "개념·출처 대조입니다. 엔진 실행은 미검증입니다.",
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
      "scope": "드로 콜은 제출 단위입니다. 수만 줄여도 모든 장면의 총 처리 비용이 줄어드는 것은 아닙니다."
    }
  ]
}
---

# 드로 콜

## 핵심 구조

그릴 데이터 → 그리기 요청 → GPU 처리

## 개념 설명

그래픽 API에 그리기 작업을 요청하는 호출입니다.

## 활용 상황

CPU의 렌더 제출 비용을 분석합니다.

## 비교와 선택

호출 수만으로 GPU 비용이나 전체 성능을 판단할 수 없습니다. 먼저 목적에 맞는지 판단하고, 비용과 결과는 대상 환경에서 확인합니다.

## 설계할 때 확인

입력값과 처리 결과를 구분하고, 실패하거나 범위를 벗어나는 상황을 정합니다. 호출 수만으로 GPU 비용이나 전체 성능을 판단할 수 없습니다.

## 도식의 한계

이 카드는 처리 단계 안내를 반복 재생합니다. 실제 Draw call의 화면 효과나 엔진 실행을 재현한 영상은 아닙니다.

## 요청 예시

드로 콜을 게임에 적용하려고 합니다. 그래픽 API에 그리기 작업을 요청하는 호출입니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.

## 참고 자료

https://docs.unity3d.com/6000.0/Documentation/Manual/DrawCallBatching.html
확인 범위: 드로 콜은 제출 단위입니다. 수만 줄여도 모든 장면의 총 처리 비용이 줄어드는 것은 아닙니다.

## 함께 볼 용어

에셋 스트리밍 (Asset streaming) · 배칭 (Batching) · 시야 절두체 컬링 (Frustum culling)


## 자료 대조에서 보강한 내용

드로 콜은 제출 단위입니다. 수만 줄여도 모든 장면의 총 처리 비용이 줄어드는 것은 아닙니다.

## 확인 기록

마지막 확인: 2026-10-14

드로 콜은 제출 단위입니다. 수만 줄여도 모든 장면의 총 처리 비용이 줄어드는 것은 아닙니다.

개념·출처 대조입니다. 엔진 실행은 미검증입니다.

확인 자료: https://docs.unity3d.com/6000.0/Documentation/Manual/DrawCallBatching.html
