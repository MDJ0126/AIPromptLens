---
{
  "id": 56,
  "slug": "rigid-body",
  "kind": "concept",
  "category": "physics",
  "name": "강체",
  "en": "Rigid body",
  "desc": "변형하지 않는 물체의 위치·회전·운동을 모델링합니다.",
  "ko": "강체을 게임에 적용하려고 합니다. 변형하지 않는 물체의 위치·회전·운동을 모델링합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
  "promptEn": "Explain Rigid body with a minimal design, use case and limitations.",
  "visual": "rigid-body",
  "tags": [
    "beginner"
  ],
  "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html",
  "diagramSteps": [
    "물체 속성",
    "힘과 충돌",
    "운동 갱신"
  ],
  "related": [
    "collider",
    "collision-layer",
    "continuous-collision"
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
  "reviewScope": "강체는 변형을 계산하지 않는 물체 모델입니다. 렌더 메시와 충돌 형태, 질량·관성은 독립적으로 지정될 수 있습니다.",
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
      "scope": "강체는 변형을 계산하지 않는 물체 모델입니다. 렌더 메시와 충돌 형태, 질량·관성은 독립적으로 지정될 수 있습니다."
    }
  ],
  "aliases": [
    "Rigidbody"
  ]
}
---

# 강체

## 핵심 구조

물체 속성 → 힘과 충돌 → 운동 갱신

## 개념 설명

변형하지 않는 물체의 위치·회전·운동을 모델링합니다.

## 활용 상황

상자와 공의 충돌 및 움직임을 시뮬레이션합니다.

## 비교와 선택

충돌 모양과 질량·관성이 결과에 영향을 줍니다. 먼저 목적에 맞는지 판단하고, 비용과 결과는 대상 환경에서 확인합니다.

## 설계할 때 확인

입력값과 처리 결과를 구분하고, 실패하거나 범위를 벗어나는 상황을 정합니다. 충돌 모양과 질량·관성이 결과에 영향을 줍니다.

## 도식의 한계

이 카드는 처리 단계 안내를 반복 재생합니다. 실제 Rigid body의 화면 효과나 엔진 실행을 재현한 영상은 아닙니다.

## 요청 예시

강체을 게임에 적용하려고 합니다. 변형하지 않는 물체의 위치·회전·운동을 모델링합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.

## 참고 자료

https://docs.unity3d.com/6000.0/Documentation/Manual/PhysicsSection.html
분야별 참고 자료입니다. 메뉴·API·설정은 사용하는 엔진 버전의 상세 문서에서 확인해 주세요.

## 함께 볼 용어

콜라이더 (Collider) · 충돌 레이어 (Collision filtering) · 연속 충돌 검사 (Continuous collision detection)


## 자료 대조에서 보강한 내용


