---
{
  "id": 82,
  "slug": "occlusion-culling",
  "kind": "concept",
  "category": "optimization",
  "name": "오클루전 컬링",
  "en": "Occlusion culling",
  "desc": "다른 구조에 완전히 가려진 대상을 그리기에서 제외합니다.",
  "ko": "오클루전 컬링을 게임에 적용하려고 합니다. 다른 구조에 완전히 가려진 대상을 그리기에서 제외합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
  "promptEn": "Explain Occlusion culling with a minimal design, use case and limitations.",
  "visual": "occlusion-culling",
  "tags": [
    "beginner"
  ],
  "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html",
  "diagramSteps": [
    "가림 구조",
    "가시성 검사",
    "숨은 대상 제외"
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
  "reviewScope": "Unity 문서에서 가려진 렌더러를 제외하는 기능을 확인했습니다. 카메라·데이터·장면 구조의 제약을 검토합니다.",
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
      "scope": "Unity 문서에서 가려진 렌더러를 제외하는 기능을 확인했습니다. 카메라·데이터·장면 구조의 제약을 검토합니다."
    }
  ]
}
---

# 오클루전 컬링

## 핵심 구조

가림 구조 → 가시성 검사 → 숨은 대상 제외

## 개념 설명

다른 구조에 완전히 가려진 대상을 그리기에서 제외합니다.

## 활용 상황

실내의 벽 뒤 물체를 줄입니다.

## 비교와 선택

검사와 데이터 비용이 있으며 장면 구조에 따라 이득이 달라집니다. 먼저 목적에 맞는지 판단하고, 비용과 결과는 대상 환경에서 확인합니다.

## 설계할 때 확인

입력값과 처리 결과를 구분하고, 실패하거나 범위를 벗어나는 상황을 정합니다. 검사와 데이터 비용이 있으며 장면 구조에 따라 이득이 달라집니다.

## 도식의 한계

이 카드는 처리 단계 안내를 반복 재생합니다. 실제 Occlusion culling의 화면 효과나 엔진 실행을 재현한 영상은 아닙니다.

## 요청 예시

오클루전 컬링을 게임에 적용하려고 합니다. 다른 구조에 완전히 가려진 대상을 그리기에서 제외합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.

## 참고 자료

https://gameprogrammingpatterns.com/optimization-patterns.html
분야별 참고 자료입니다. 메뉴·API·설정은 사용하는 엔진 버전의 상세 문서에서 확인해 주세요.

## 함께 볼 용어

에셋 스트리밍 (Asset streaming) · 배칭 (Batching) · 드로 콜 (Draw call)


## 자료 대조에서 보강한 내용


