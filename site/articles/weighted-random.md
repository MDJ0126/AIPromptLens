---
{
  "id": 92,
  "slug": "weighted-random",
  "kind": "concept",
  "category": "procedural",
  "name": "가중치 랜덤",
  "en": "Weighted random",
  "desc": "각 후보의 상대 가중치에 따라 선택 확률을 나눕니다.",
  "ko": "가중치 랜덤을 게임에 적용하려고 합니다. 각 후보의 상대 가중치에 따라 선택 확률을 나눕니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
  "promptEn": "Explain Weighted random with a minimal design, use case and limitations.",
  "visual": "weighted-random",
  "tags": [
    "beginner"
  ],
  "source": "https://docs.unity3d.com/2018.4/Documentation/Manual/RandomNumbers.html",
  "diagramSteps": [
    "후보 가중치",
    "누적 구간",
    "선택"
  ],
  "related": [
    "noise-field",
    "procedural-mesh",
    "random-seed"
  ],
  "genres": [
    "rpg",
    "puzzle",
    "strategy"
  ],
  "reviewedAt": "2026-10-14",
  "reviewStatus": "source-reviewed",
  "reviewScope": "Unity 2018.4의 서로 다른 확률 선택 설명을 확인했습니다. 확률 알고리즘 참고이며 최신 엔진 메뉴 안내가 아닙니다.",
  "reviewSources": [
    {
      "url": "https://docs.unity3d.com/2018.4/Documentation/Manual/RandomNumbers.html",
      "method": "원문 자료 대조"
    }
  ],
  "reviewHistory": [
    {
      "date": "2026-10-14",
      "action": "출처 및 설명 대조",
      "scope": "Unity 2018.4의 서로 다른 확률 선택 설명을 확인했습니다. 확률 알고리즘 참고이며 최신 엔진 메뉴 안내가 아닙니다."
    }
  ]
}
---

# 가중치 랜덤

## 핵심 구조

후보 가중치 → 누적 구간 → 선택

## 개념 설명

각 후보의 상대 가중치에 따라 선택 확률을 나눕니다.

## 활용 상황

아이템 드롭과 적 종류의 빈도를 조절합니다.

## 비교와 선택

음수 가중치와 전체 합이 0인 경우를 처리합니다. 먼저 목적에 맞는지 판단하고, 비용과 결과는 대상 환경에서 확인합니다.

## 설계할 때 확인

입력값과 처리 결과를 구분하고, 실패하거나 범위를 벗어나는 상황을 정합니다. 음수 가중치와 전체 합이 0인 경우를 처리합니다.

## 도식의 한계

이 카드는 처리 단계 안내를 반복 재생합니다. 실제 Weighted random의 화면 효과나 엔진 실행을 재현한 영상은 아닙니다.

## 요청 예시

가중치 랜덤을 게임에 적용하려고 합니다. 각 후보의 상대 가중치에 따라 선택 확률을 나눕니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.

## 참고 자료

https://catlikecoding.com/unity/tutorials/
분야별 참고 자료입니다. 메뉴·API·설정은 사용하는 엔진 버전의 상세 문서에서 확인해 주세요.

## 함께 볼 용어

노이즈 필드 (Noise field) · 절차적 메시 (Procedural mesh) · 랜덤 시드 (Random seed)


## 자료 대조에서 보강한 내용

확률을 누적 구간으로 나눠 선택하는 알고리즘을 확인했습니다. 참조 문서는 Unity 2018.4이며 최신 API 안내가 아닙니다.

