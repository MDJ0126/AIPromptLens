---
{
  "id": 41,
  "slug": "bloom",
  "kind": "concept",
  "category": "rendering",
  "name": "블룸",
  "en": "Bloom",
  "desc": "밝은 영역을 주변으로 퍼뜨리는 화면 효과입니다.",
  "ko": "블룸을 게임에 적용하려고 합니다. 밝은 영역을 주변으로 퍼뜨리는 화면 효과입니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
  "promptEn": "Explain Bloom with a minimal design, use case and limitations.",
  "visual": "bloom",
  "tags": [
    "beginner"
  ],
  "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html",
  "diagramSteps": [
    "밝은 영역",
    "주변 확산",
    "빛 번짐"
  ],
  "related": [
    "ambient-occlusion",
    "anti-aliasing",
    "depth-buffer"
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
  "reviewScope": "밝은 영역 주변의 번짐을 만드는 후처리이며 장면의 실제 간접광 계산을 대신하지 않습니다.",
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
      "scope": "밝은 영역 주변의 번짐을 만드는 후처리이며 장면의 실제 간접광 계산을 대신하지 않습니다."
    }
  ]
}
---

# 블룸

## 핵심 구조

밝은 영역 → 주변 확산 → 빛 번짐

## 개념 설명

밝은 영역을 주변으로 퍼뜨리는 화면 효과입니다.

## 활용 상황

네온과 강한 발광의 인상을 강조합니다.

## 비교와 선택

과하게 사용하면 윤곽과 UI 가독성을 떨어뜨립니다. 먼저 목적에 맞는지 판단하고, 비용과 결과는 대상 환경에서 확인합니다.

## 설계할 때 확인

입력값과 처리 결과를 구분하고, 실패하거나 범위를 벗어나는 상황을 정합니다. 과하게 사용하면 윤곽과 UI 가독성을 떨어뜨립니다.

## 도식의 한계

이 카드는 처리 단계 안내를 반복 재생합니다. 실제 Bloom의 화면 효과나 엔진 실행을 재현한 영상은 아닙니다.

## 요청 예시

블룸을 게임에 적용하려고 합니다. 밝은 영역을 주변으로 퍼뜨리는 화면 효과입니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.

## 참고 자료

https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html
확인 범위: 밝은 영역 주변의 번짐을 만드는 후처리이며 장면의 실제 간접광 계산을 대신하지 않습니다.

## 함께 볼 용어

앰비언트 오클루전 (Ambient occlusion) · 안티앨리어싱 (Anti-aliasing) · 깊이 버퍼 (Depth buffer)


## 자료 대조에서 보강한 내용

밝은 영역 주변의 번짐을 만드는 후처리이며 장면의 실제 간접광 계산을 대신하지 않습니다.

## 확인 기록

마지막 확인: 2026-10-14

밝은 영역 주변의 번짐을 만드는 후처리이며 장면의 실제 간접광 계산을 대신하지 않습니다.


확인 자료: https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html
