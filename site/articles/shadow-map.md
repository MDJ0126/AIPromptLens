---
{
  "id": 38,
  "slug": "shadow-map",
  "kind": "concept",
  "category": "rendering",
  "name": "섀도 맵",
  "en": "Shadow map",
  "desc": "광원 시점의 깊이 정보로 표면이 빛에 가려졌는지 판단합니다.",
  "ko": "섀도 맵을 게임에 적용하려고 합니다. 광원 시점의 깊이 정보로 표면이 빛에 가려졌는지 판단합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
  "promptEn": "Explain Shadow map with a minimal design, use case and limitations.",
  "visual": "shadow-map",
  "tags": [
    "beginner"
  ],
  "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/ShadowPerformance.html",
  "diagramSteps": [
    "광원 시점",
    "깊이 기록",
    "가림 판단"
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
  "reviewScope": "Unity 6.0 그림자 성능 문서의 섀도 맵 생성·사용 단계를 확인했습니다.",
  "reviewSources": [
    {
      "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/ShadowPerformance.html",
      "method": "원문 자료 대조"
    }
  ],
  "reviewHistory": [
    {
      "date": "2026-10-14",
      "action": "출처 및 설명 대조",
      "scope": "Unity 6.0 그림자 성능 문서의 섀도 맵 생성·사용 단계를 확인했습니다."
    }
  ]
}
---

# 섀도 맵

## 핵심 구조

광원 시점 → 깊이 기록 → 가림 판단

## 개념 설명

광원 시점의 깊이 정보로 표면이 빛에 가려졌는지 판단합니다.

## 활용 상황

실시간 움직이는 물체의 그림자를 계산합니다.

## 비교와 선택

해상도·바이어스·필터에 따라 계단이나 떨어진 그림자가 생깁니다. 먼저 목적에 맞는지 판단하고, 비용과 결과는 대상 환경에서 확인합니다.

## 설계할 때 확인

입력값과 처리 결과를 구분하고, 실패하거나 범위를 벗어나는 상황을 정합니다. 해상도·바이어스·필터에 따라 계단이나 떨어진 그림자가 생깁니다.

## 도식의 한계

이 카드는 처리 단계 안내를 반복 재생합니다. 실제 Shadow map의 화면 효과나 엔진 실행을 재현한 영상은 아닙니다.

## 요청 예시

섀도 맵을 게임에 적용하려고 합니다. 광원 시점의 깊이 정보로 표면이 빛에 가려졌는지 판단합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.

## 참고 자료

https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html
분야별 참고 자료입니다. 메뉴·API·설정은 사용하는 엔진 버전의 상세 문서에서 확인해 주세요.

## 함께 볼 용어

앰비언트 오클루전 (Ambient occlusion) · 안티앨리어싱 (Anti-aliasing) · 블룸 (Bloom)


## 자료 대조에서 보강한 내용

광원 관점의 가림 정보를 기록하는 방식입니다. 해상도와 바이어스는 품질·비용의 절충이며 단순히 올린다고 모든 문제가 해결되지는 않습니다.

