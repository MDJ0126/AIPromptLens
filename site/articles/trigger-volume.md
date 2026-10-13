---
{
  "id": 58,
  "slug": "trigger-volume",
  "kind": "concept",
  "category": "physics",
  "name": "트리거 볼륨",
  "en": "Trigger volume",
  "desc": "물리적으로 막기보다 영역 진입·이탈을 감지합니다.",
  "ko": "트리거 볼륨을 게임에 적용하려고 합니다. 물리적으로 막기보다 영역 진입·이탈을 감지합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
  "promptEn": "Explain Trigger volume with a minimal design, use case and limitations.",
  "visual": "trigger-volume",
  "tags": [
    "beginner"
  ],
  "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/collider-interactions-ontrigger.html",
  "diagramSteps": [
    "감지 영역",
    "겹침 발생",
    "진입 알림"
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
  "reviewScope": "Unity OnTrigger 이벤트는 겹침을 감지하는 기능입니다. 설정한 콜라이더·강체 조건이 맞아야 이벤트가 발생합니다.",
  "reviewLimit": "개념·출처 대조입니다. 엔진 실행은 미검증입니다.",
  "reviewSources": [
    {
      "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/collider-interactions-ontrigger.html",
      "method": "원문 자료 대조"
    }
  ],
  "reviewHistory": [
    {
      "date": "2026-10-14",
      "action": "출처 및 설명 대조",
      "scope": "Unity OnTrigger 이벤트는 겹침을 감지하는 기능입니다. 설정한 콜라이더·강체 조건이 맞아야 이벤트가 발생합니다."
    }
  ]
}
---

# 트리거 볼륨

## 핵심 구조

감지 영역 → 겹침 발생 → 진입 알림

## 개념 설명

물리적으로 막기보다 영역 진입·이탈을 감지합니다.

## 활용 상황

체크포인트와 상호작용 범위를 만듭니다.

## 비교와 선택

충돌 채널과 이벤트 발생 조건은 엔진 설정에 따릅니다. 먼저 목적에 맞는지 판단하고, 비용과 결과는 대상 환경에서 확인합니다.

## 설계할 때 확인

입력값과 처리 결과를 구분하고, 실패하거나 범위를 벗어나는 상황을 정합니다. 충돌 채널과 이벤트 발생 조건은 엔진 설정에 따릅니다.

## 도식의 한계

이 카드는 처리 단계 안내를 반복 재생합니다. 실제 Trigger volume의 화면 효과나 엔진 실행을 재현한 영상은 아닙니다.

## 요청 예시

트리거 볼륨을 게임에 적용하려고 합니다. 물리적으로 막기보다 영역 진입·이탈을 감지합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.

## 참고 자료

https://docs.unity3d.com/6000.0/Documentation/Manual/PhysicsSection.html
분야별 참고 자료입니다. 메뉴·API·설정은 사용하는 엔진 버전의 상세 문서에서 확인해 주세요.

## 함께 볼 용어

콜라이더 (Collider) · 충돌 레이어 (Collision filtering) · 연속 충돌 검사 (Continuous collision detection)


## 자료 대조에서 보강한 내용

Unity OnTrigger 이벤트는 겹침을 감지하는 기능입니다. 설정한 콜라이더·강체 조건이 맞아야 이벤트가 발생합니다.

## 확인 기록

마지막 확인: 2026-10-14

Unity OnTrigger 이벤트는 겹침을 감지하는 기능입니다. 설정한 콜라이더·강체 조건이 맞아야 이벤트가 발생합니다.

개념·출처 대조입니다. 엔진 실행은 미검증입니다.

확인 자료: https://docs.unity3d.com/6000.0/Documentation/Manual/collider-interactions-ontrigger.html
