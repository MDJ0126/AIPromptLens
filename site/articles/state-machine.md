---
{
  "id": 31,
  "slug": "state-machine",
  "kind": "concept",
  "category": "principles",
  "name": "상태 머신",
  "en": "Finite state machine",
  "desc": "현재 상태와 허용된 전이로 행동을 정리해요.",
  "source": "https://gameprogrammingpatterns.com/state.html",
  "ko": "NPC의 대기·추적·공격 상태와 전이 조건, 진입 및 종료 작업을 간단히 정리해 주세요.",
  "promptEn": "Explain Finite state machine with its structure, use cases and limitations.",
  "visual": "state-machine",
  "tags": [
    "beginner"
  ],
  "genres": [
    "action",
    "rpg",
    "platformer",
    "horror",
    "simulation"
  ],
  "reviewedAt": "2026-10-14",
  "reviewStatus": "source-reviewed",
  "reviewScope": "원저자 문서의 상태·입력·전이·진입/종료 작업을 확인했습니다. 단순 머신 하나는 현재 상태 하나를 갖습니다.",
  "reviewLimit": "개념·출처 대조입니다. 엔진 실행은 미검증입니다.",
  "reviewSources": [
    {
      "url": "https://gameprogrammingpatterns.com/state.html",
      "method": "원문 자료 대조"
    }
  ],
  "reviewHistory": [
    {
      "date": "2026-10-14",
      "action": "출처 및 설명 대조",
      "scope": "원저자 문서의 상태·입력·전이·진입/종료 작업을 확인했습니다. 단순 머신 하나는 현재 상태 하나를 갖습니다."
    }
  ]
}
---

# 상태 머신

## 핵심 구조

입력/이벤트 → 현재 상태의 전이 검사 → 종료 작업 → 상태 교체 → 진입 작업

## 개념 설명

대기·추적·공격처럼 유한한 상태와 그 사이의 전이 조건을 정의합니다. 하나의 단순 상태 머신은 한 번에 하나의 현재 상태를 갖습니다.

## 비교와 선택

단순 행동이나 조작 단계에 적합합니다. 이동과 장비처럼 독립적인 기능을 모두 조합하면 상태 수가 커질 수 있으므로 별도 머신이나 계층 구조를 검토합니다.

## 활용 상황

공격 상태 진입 시 타이머를 시작하고 종료 시 정리합니다. 공격 완료 이벤트는 대기로, 대상 발견은 추적으로 연결합니다. 서로 충돌하는 전이에는 우선순위를 정하고 자기 전이 처리도 명시합니다.

## 도식의 한계

자동 재생 도식은 개념 설명용입니다. 실제 엔진 코드 실행이나 성능 측정 화면은 아닙니다.

## 요청 예시

NPC의 대기·추적·공격 상태와 전이 조건, 진입 및 종료 작업을 간단히 정리해 주세요.

## 참고 자료

https://gameprogrammingpatterns.com/state.html


## 자료 대조에서 보강한 내용

원저자 문서의 상태·입력·전이·진입/종료 작업을 확인했습니다. 단순 머신 하나는 현재 상태 하나를 갖습니다.

## 확인 기록

마지막 확인: 2026-10-14

원저자 문서의 상태·입력·전이·진입/종료 작업을 확인했습니다. 단순 머신 하나는 현재 상태 하나를 갖습니다.

개념·출처 대조입니다. 엔진 실행은 미검증입니다.

확인 자료: https://gameprogrammingpatterns.com/state.html
