---
{
  "id": 61,
  "slug": "continuous-collision",
  "kind": "concept",
  "category": "physics",
  "name": "연속 충돌 검사",
  "en": "Continuous collision detection",
  "desc": "시간 단계 사이의 이동을 고려해 빠른 물체의 충돌 누락을 줄입니다.",
  "ko": "연속 충돌 검사을 게임에 적용하려고 합니다. 시간 단계 사이의 이동을 고려해 빠른 물체의 충돌 누락을 줄입니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
  "promptEn": "Explain Continuous collision detection with a minimal design, use case and limitations.",
  "visual": "continuous-collision",
  "tags": [
    "beginner"
  ],
  "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html",
  "diagramSteps": [
    "빠른 이동",
    "경로 고려",
    "충돌 누락 완화"
  ],
  "related": [
    "collider",
    "collision-layer",
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
  "reviewScope": "CCD는 이동 사이의 충돌 누락을 줄이는 기능입니다. 모든 충돌 쌍·회전·모드에 동일한 보장을 주지는 않습니다.",
  "reviewVersion": "Unity 6.0 (6000.0)",
  "reviewLimit": "개념·출처 대조입니다. 엔진 실행은 미검증입니다.",
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
      "scope": "CCD는 이동 사이의 충돌 누락을 줄이는 기능입니다. 모든 충돌 쌍·회전·모드에 동일한 보장을 주지는 않습니다."
    }
  ]
}
---

# 연속 충돌 검사

## 핵심 구조

빠른 이동 → 경로 고려 → 충돌 누락 완화

## 개념 설명

시간 단계 사이의 이동을 고려해 빠른 물체의 충돌 누락을 줄입니다.

## 활용 상황

고속 투사체가 얇은 벽을 통과하는 문제에 활용합니다.

## 비교와 선택

모든 물체 조합과 회전에 같은 보장이 적용되는 것은 아닙니다. 먼저 목적에 맞는지 판단하고, 비용과 결과는 대상 환경에서 확인합니다.

## 설계할 때 확인

입력값과 처리 결과를 구분하고, 실패하거나 범위를 벗어나는 상황을 정합니다. 모든 물체 조합과 회전에 같은 보장이 적용되는 것은 아닙니다.

## 도식의 한계

이 카드는 처리 단계 안내를 반복 재생합니다. 실제 Continuous collision detection의 화면 효과나 엔진 실행을 재현한 영상은 아닙니다.

## 요청 예시

연속 충돌 검사을 게임에 적용하려고 합니다. 시간 단계 사이의 이동을 고려해 빠른 물체의 충돌 누락을 줄입니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.

## 참고 자료

https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html
확인 범위: CCD는 이동 사이의 충돌 누락을 줄이는 기능입니다. 모든 충돌 쌍·회전·모드에 동일한 보장을 주지는 않습니다.

## 함께 볼 용어

콜라이더 (Collider) · 충돌 레이어 (Collision filtering) · 조인트와 제약 (Joint constraint)


## 자료 대조에서 보강한 내용

CCD는 이동 사이의 충돌 누락을 줄이는 기능입니다. 모든 충돌 쌍·회전·모드에 동일한 보장을 주지는 않습니다.

## 확인 기록

마지막 확인: 2026-10-14

CCD는 이동 사이의 충돌 누락을 줄이는 기능입니다. 모든 충돌 쌍·회전·모드에 동일한 보장을 주지는 않습니다.

개념·출처 대조입니다. 엔진 실행은 미검증입니다.

확인 자료: https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html
