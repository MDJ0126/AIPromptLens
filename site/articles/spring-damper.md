---
{
  "id": 64,
  "slug": "spring-damper",
  "kind": "concept",
  "category": "physics",
  "name": "스프링과 댐퍼",
  "en": "Spring and damper",
  "desc": "변위에 따른 복원력과 속도에 따른 감쇠를 조합합니다.",
  "ko": "스프링과 댐퍼을 게임에 적용하려고 합니다. 변위에 따른 복원력과 속도에 따른 감쇠를 조합합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
  "promptEn": "Explain Spring and damper with a minimal design, use case and limitations.",
  "visual": "spring-damper",
  "tags": [
    "beginner"
  ],
  "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-SpringJoint.html",
  "diagramSteps": [
    "목표 변위",
    "복원과 감쇠",
    "진동 완화"
  ],
  "related": [
    "collider",
    "collision-layer",
    "continuous-collision"
  ],
  "genres": [
    "simulation",
    "racing",
    "sports"
  ],
  "reviewedAt": "2026-10-14",
  "reviewStatus": "source-reviewed",
  "reviewScope": "Unity 6.0 Spring Joint의 복원력과 상대 속도에 비례하는 Damper 설명을 확인했습니다.",
  "reviewLimit": "개념·출처 대조입니다. 엔진 실행은 미검증입니다.",
  "reviewSources": [
    {
      "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-SpringJoint.html",
      "method": "원문 자료 대조"
    }
  ],
  "reviewHistory": [
    {
      "date": "2026-10-14",
      "action": "출처 및 설명 대조",
      "scope": "Unity 6.0 Spring Joint의 복원력과 상대 속도에 비례하는 Damper 설명을 확인했습니다."
    }
  ]
}
---

# 스프링과 댐퍼

## 핵심 구조

목표 변위 → 복원과 감쇠 → 진동 완화

## 개념 설명

변위에 따른 복원력과 속도에 따른 감쇠를 조합합니다.

## 활용 상황

차량 서스펜션과 카메라 추종에 활용합니다.

## 비교와 선택

강성·감쇠·시간 간격의 조합을 검토해야 합니다. 먼저 목적에 맞는지 판단하고, 비용과 결과는 대상 환경에서 확인합니다.

## 설계할 때 확인

입력값과 처리 결과를 구분하고, 실패하거나 범위를 벗어나는 상황을 정합니다. 강성·감쇠·시간 간격의 조합을 검토해야 합니다.

## 도식의 한계

이 카드는 처리 단계 안내를 반복 재생합니다. 실제 Spring and damper의 화면 효과나 엔진 실행을 재현한 영상은 아닙니다.

## 요청 예시

스프링과 댐퍼을 게임에 적용하려고 합니다. 변위에 따른 복원력과 속도에 따른 감쇠를 조합합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.

## 참고 자료

https://docs.unity3d.com/6000.0/Documentation/Manual/PhysicsSection.html
분야별 참고 자료입니다. 메뉴·API·설정은 사용하는 엔진 버전의 상세 문서에서 확인해 주세요.

## 함께 볼 용어

콜라이더 (Collider) · 충돌 레이어 (Collision filtering) · 연속 충돌 검사 (Continuous collision detection)


## 자료 대조에서 보강한 내용

Unity Spring Joint 문서에서 Spring은 변위, Damper는 상대 속도에 비례한 처리를 확인했습니다.

## 확인 기록

마지막 확인: 2026-10-14

Unity 6.0 Spring Joint의 복원력과 상대 속도에 비례하는 Damper 설명을 확인했습니다.

개념·출처 대조입니다. 엔진 실행은 미검증입니다.

확인 자료: https://docs.unity3d.com/6000.0/Documentation/Manual/class-SpringJoint.html
