---
{
  "id": 80,
  "slug": "level-of-detail",
  "kind": "concept",
  "category": "optimization",
  "name": "디테일 단계",
  "en": "Level of detail",
  "desc": "화면 크기나 거리 등에 따라 표현 복잡도를 바꿉니다.",
  "ko": "디테일 단계을 게임에 적용하려고 합니다. 화면 크기나 거리 등에 따라 표현 복잡도를 바꿉니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
  "promptEn": "Explain Level of detail with a minimal design, use case and limitations.",
  "visual": "level-of-detail",
  "tags": [
    "beginner"
  ],
  "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/LevelOfDetail.html",
  "diagramSteps": [
    "가까운 상세",
    "거리 변화",
    "먼 단순화"
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
  "reviewScope": "화면 크기 등에 따라 디테일을 바꾸는 LOD를 확인했습니다. 메시 LOD와 셰이더 LOD는 같은 기능이 아닙니다.",
  "reviewSources": [
    {
      "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/LevelOfDetail.html",
      "method": "원문 자료 대조"
    }
  ],
  "reviewHistory": [
    {
      "date": "2026-10-14",
      "action": "출처 및 설명 대조",
      "scope": "화면 크기 등에 따라 디테일을 바꾸는 LOD를 확인했습니다. 메시 LOD와 셰이더 LOD는 같은 기능이 아닙니다."
    }
  ],
  "aliases": [
    "LOD"
  ]
}
---

# 디테일 단계

## 핵심 구조

가까운 상세 → 거리 변화 → 먼 단순화

## 개념 설명

화면 크기나 거리 등에 따라 표현 복잡도를 바꿉니다.

## 활용 상황

먼 물체의 메시 비용을 줄입니다.

## 비교와 선택

전환의 튐과 실루엣 차이를 검토합니다. 먼저 목적에 맞는지 판단하고, 비용과 결과는 대상 환경에서 확인합니다.

## 설계할 때 확인

입력값과 처리 결과를 구분하고, 실패하거나 범위를 벗어나는 상황을 정합니다. 전환의 튐과 실루엣 차이를 검토합니다.

## 도식의 한계

이 카드는 처리 단계 안내를 반복 재생합니다. 실제 Level of detail의 화면 효과나 엔진 실행을 재현한 영상은 아닙니다.

## 요청 예시

디테일 단계을 게임에 적용하려고 합니다. 화면 크기나 거리 등에 따라 표현 복잡도를 바꿉니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.

## 참고 자료

https://gameprogrammingpatterns.com/optimization-patterns.html
분야별 참고 자료입니다. 메뉴·API·설정은 사용하는 엔진 버전의 상세 문서에서 확인해 주세요.

## 함께 볼 용어

에셋 스트리밍 (Asset streaming) · 배칭 (Batching) · 드로 콜 (Draw call)


## 자료 대조에서 보강한 내용


