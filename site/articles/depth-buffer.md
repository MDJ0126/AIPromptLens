---
{
  "id": 37,
  "slug": "depth-buffer",
  "kind": "concept",
  "category": "rendering",
  "name": "깊이 버퍼",
  "en": "Depth buffer",
  "desc": "픽셀 위치별 깊이를 보관하여 앞뒤 관계를 판단합니다.",
  "ko": "깊이 버퍼을 게임에 적용하려고 합니다. 픽셀 위치별 깊이를 보관하여 앞뒤 관계를 판단합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
  "promptEn": "Explain Depth buffer with a minimal design, use case and limitations.",
  "visual": "depth-buffer",
  "tags": [
    "beginner"
  ],
  "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html",
  "diagramSteps": [
    "표면 깊이",
    "깊이 비교",
    "앞쪽 표시"
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
  "reviewType": "기능·개념",
  "reviewScope": "여기서 깊이는 렌더링의 깊이 값이며 월드에서 카메라까지의 거리와 항상 같은 수치는 아닙니다. 투영과 깊이 정밀도에 따라 표현이 달라집니다.",
  "reviewVersion": "Unity 6.0 (6000.0)",
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
      "scope": "여기서 깊이는 렌더링의 깊이 값이며 월드에서 카메라까지의 거리와 항상 같은 수치는 아닙니다. 투영과 깊이 정밀도에 따라 표현이 달라집니다."
    }
  ]
}
---

# 깊이 버퍼

## 핵심 구조

표면 깊이 → 깊이 비교 → 앞쪽 표시

## 개념 설명

픽셀 위치별 깊이를 보관하여 앞뒤 관계를 판단합니다.

## 활용 상황

가까운 표면 뒤의 표면을 가리는 데 사용합니다.

## 비교와 선택

깊이 표현 정밀도가 부족하면 겹치는 표면이 깜빡일 수 있습니다. 먼저 목적에 맞는지 판단하고, 비용과 결과는 대상 환경에서 확인합니다.

## 설계할 때 확인

입력값과 처리 결과를 구분하고, 실패하거나 범위를 벗어나는 상황을 정합니다. 깊이 표현 정밀도가 부족하면 겹치는 표면이 깜빡일 수 있습니다.

## 도식의 한계

이 카드는 처리 단계 안내를 반복 재생합니다. 실제 Depth buffer의 화면 효과나 엔진 실행을 재현한 영상은 아닙니다.

## 요청 예시

깊이 버퍼을 게임에 적용하려고 합니다. 픽셀 위치별 깊이를 보관하여 앞뒤 관계를 판단합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.

## 참고 자료

https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html
확인 범위: 여기서 깊이는 렌더링의 깊이 값이며 월드에서 카메라까지의 거리와 항상 같은 수치는 아닙니다. 투영과 깊이 정밀도에 따라 표현이 달라집니다.

## 함께 볼 용어

앰비언트 오클루전 (Ambient occlusion) · 안티앨리어싱 (Anti-aliasing) · 블룸 (Bloom)


## 자료 대조에서 보강한 내용

여기서 깊이는 렌더링의 깊이 값이며 월드에서 카메라까지의 거리와 항상 같은 수치는 아닙니다. 투영과 깊이 정밀도에 따라 표현이 달라집니다.

## 확인 기록

마지막 확인: 2026-10-14

여기서 깊이는 렌더링의 깊이 값이며 월드에서 카메라까지의 거리와 항상 같은 수치는 아닙니다. 투영과 깊이 정밀도에 따라 표현이 달라집니다.


확인 자료: https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html
