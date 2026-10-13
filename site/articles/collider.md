---
{
  "id": 57,
  "slug": "collider",
  "kind": "concept",
  "category": "physics",
  "name": "콜라이더",
  "en": "Collider",
  "desc": "충돌 검사에 사용할 공간 모양입니다.",
  "ko": "콜라이더을 게임에 적용하려고 합니다. 충돌 검사에 사용할 공간 모양입니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
  "promptEn": "Explain Collider with a minimal design, use case and limitations.",
  "visual": "collider",
  "tags": [
    "beginner"
  ],
  "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html",
  "diagramSteps": [
    "표시 메시",
    "충돌 모양",
    "접촉 검사"
  ],
  "related": [
    "collision-layer",
    "continuous-collision",
    "joint-constraint"
  ],
  "genres": [
    "action",
    "platformer",
    "simulation",
    "racing",
    "sports",
    "puzzle"
  ],
  "reviewedAt": "2026-10-14",
  "reviewStatus": "source-reviewed",
  "reviewType": "기능·개념",
  "reviewScope": "콜라이더는 충돌 모양이며 눈에 보이는 메시와 같을 필요가 없습니다. 복잡한 형태와 동적 강체의 지원 제약은 엔진별로 확인합니다.",
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
      "scope": "콜라이더는 충돌 모양이며 눈에 보이는 메시와 같을 필요가 없습니다. 복잡한 형태와 동적 강체의 지원 제약은 엔진별로 확인합니다."
    }
  ]
}
---

# 콜라이더

## 핵심 구조

표시 메시 → 충돌 모양 → 접촉 검사

## 개념 설명

충돌 검사에 사용할 공간 모양입니다.

## 활용 상황

보이는 메시와 별도로 접촉 범위를 정의합니다.

## 비교와 선택

복잡한 모양의 정밀도와 처리 비용을 비교합니다. 먼저 목적에 맞는지 판단하고, 비용과 결과는 대상 환경에서 확인합니다.

## 설계할 때 확인

입력값과 처리 결과를 구분하고, 실패하거나 범위를 벗어나는 상황을 정합니다. 복잡한 모양의 정밀도와 처리 비용을 비교합니다.

## 도식의 한계

이 카드는 처리 단계 안내를 반복 재생합니다. 실제 Collider의 화면 효과나 엔진 실행을 재현한 영상은 아닙니다.

## 요청 예시

콜라이더을 게임에 적용하려고 합니다. 충돌 검사에 사용할 공간 모양입니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.

## 참고 자료

https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html
확인 범위: 콜라이더는 충돌 모양이며 눈에 보이는 메시와 같을 필요가 없습니다. 복잡한 형태와 동적 강체의 지원 제약은 엔진별로 확인합니다.

## 함께 볼 용어

충돌 레이어 (Collision filtering) · 연속 충돌 검사 (Continuous collision detection) · 조인트와 제약 (Joint constraint)


## 자료 대조에서 보강한 내용

콜라이더는 충돌 모양이며 눈에 보이는 메시와 같을 필요가 없습니다. 복잡한 형태와 동적 강체의 지원 제약은 엔진별로 확인합니다.

## 확인 기록

마지막 확인: 2026-10-14

콜라이더는 충돌 모양이며 눈에 보이는 메시와 같을 필요가 없습니다. 복잡한 형태와 동적 강체의 지원 제약은 엔진별로 확인합니다.


확인 자료: https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html
