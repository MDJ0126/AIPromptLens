---
{
  "id": 59,
  "slug": "raycast",
  "kind": "concept",
  "category": "physics",
  "name": "레이캐스트",
  "en": "Raycast",
  "desc": "시작점에서 방향과 거리로 직선을 검사합니다.",
  "ko": "레이캐스트을 게임에 적용하려고 합니다. 시작점에서 방향과 거리로 직선을 검사합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
  "promptEn": "Explain Raycast with a minimal design, use case and limitations.",
  "visual": "raycast",
  "tags": [
    "beginner"
  ],
  "source": "https://docs.unity3d.com/6000.0/Documentation/ScriptReference/Physics.Raycast.html",
  "diagramSteps": [
    "시작과 방향",
    "직선 검사",
    "충돌 결과"
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
  "reviewScope": "Unity Raycast의 시작점이 콜라이더 내부인 경우 그 콜라이더를 감지하지 않는 제한이 문서에 있습니다.",
  "reviewSources": [
    {
      "url": "https://docs.unity3d.com/6000.0/Documentation/ScriptReference/Physics.Raycast.html",
      "method": "원문 자료 대조"
    }
  ],
  "reviewHistory": [
    {
      "date": "2026-10-14",
      "action": "출처 및 설명 대조",
      "scope": "Unity Raycast의 시작점이 콜라이더 내부인 경우 그 콜라이더를 감지하지 않는 제한이 문서에 있습니다."
    }
  ]
}
---

# 레이캐스트

## 핵심 구조

시작과 방향 → 직선 검사 → 충돌 결과

## 개념 설명

시작점에서 방향과 거리로 직선을 검사합니다.

## 활용 상황

조준·바닥·가림 여부를 확인합니다.

## 비교와 선택

두께가 없는 검사이므로 넓은 물체 이동은 형상 스윕과 비교합니다. 먼저 목적에 맞는지 판단하고, 비용과 결과는 대상 환경에서 확인합니다.

## 설계할 때 확인

입력값과 처리 결과를 구분하고, 실패하거나 범위를 벗어나는 상황을 정합니다. 두께가 없는 검사이므로 넓은 물체 이동은 형상 스윕과 비교합니다.

## 도식의 한계

이 카드는 처리 단계 안내를 반복 재생합니다. 실제 Raycast의 화면 효과나 엔진 실행을 재현한 영상은 아닙니다.

## 요청 예시

레이캐스트을 게임에 적용하려고 합니다. 시작점에서 방향과 거리로 직선을 검사합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.

## 참고 자료

https://docs.unity3d.com/6000.0/Documentation/Manual/PhysicsSection.html
분야별 참고 자료입니다. 메뉴·API·설정은 사용하는 엔진 버전의 상세 문서에서 확인해 주세요.

## 함께 볼 용어

콜라이더 (Collider) · 충돌 레이어 (Collision filtering) · 연속 충돌 검사 (Continuous collision detection)


## 자료 대조에서 보강한 내용


