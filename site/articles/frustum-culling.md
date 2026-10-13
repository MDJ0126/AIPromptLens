---
{
  "id": 81,
  "slug": "frustum-culling",
  "kind": "concept",
  "category": "optimization",
  "name": "시야 절두체 컬링",
  "en": "Frustum culling",
  "desc": "카메라의 시야 범위 밖에 있는 대상을 렌더링 후보에서 제외합니다.",
  "ko": "시야 절두체 컬링을 게임에 적용하려고 합니다. 카메라의 시야 범위 밖에 있는 대상을 렌더링 후보에서 제외합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
  "promptEn": "Explain Frustum culling with a minimal design, use case and limitations.",
  "visual": "frustum-culling",
  "tags": [
    "beginner"
  ],
  "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/OcclusionCulling.html",
  "diagramSteps": [
    "카메라 범위",
    "경계 검사",
    "밖의 대상 제외"
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
  "reviewScope": "Unity 6.0 컬링 문서에서 기본 시야 범위 검사와 가림 컬링의 차이를 확인했습니다.",
  "reviewSources": [
    {
      "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/OcclusionCulling.html",
      "method": "원문 자료 대조"
    }
  ],
  "reviewHistory": [
    {
      "date": "2026-10-14",
      "action": "출처 및 설명 대조",
      "scope": "Unity 6.0 컬링 문서에서 기본 시야 범위 검사와 가림 컬링의 차이를 확인했습니다."
    }
  ]
}
---

# 시야 절두체 컬링

## 핵심 구조

카메라 범위 → 경계 검사 → 밖의 대상 제외

## 개념 설명

카메라의 시야 범위 밖에 있는 대상을 렌더링 후보에서 제외합니다.

## 활용 상황

보이지 않는 물체의 그리기 작업을 줄입니다.

## 비교와 선택

시야 안에서 다른 물체에 가려진 경우는 별도 가림 판단입니다. 먼저 목적에 맞는지 판단하고, 비용과 결과는 대상 환경에서 확인합니다.

## 설계할 때 확인

입력값과 처리 결과를 구분하고, 실패하거나 범위를 벗어나는 상황을 정합니다. 시야 안에서 다른 물체에 가려진 경우는 별도 가림 판단입니다.

## 도식의 한계

이 카드는 처리 단계 안내를 반복 재생합니다. 실제 Frustum culling의 화면 효과나 엔진 실행을 재현한 영상은 아닙니다.

## 요청 예시

시야 절두체 컬링을 게임에 적용하려고 합니다. 카메라의 시야 범위 밖에 있는 대상을 렌더링 후보에서 제외합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.

## 참고 자료

https://gameprogrammingpatterns.com/optimization-patterns.html
분야별 참고 자료입니다. 메뉴·API·설정은 사용하는 엔진 버전의 상세 문서에서 확인해 주세요.

## 함께 볼 용어

에셋 스트리밍 (Asset streaming) · 배칭 (Batching) · 드로 콜 (Draw call)


## 자료 대조에서 보강한 내용

시야 범위 밖 제외는 기본 컬링이고, 범위 안의 가림 제외는 오클루전 컬링입니다.

