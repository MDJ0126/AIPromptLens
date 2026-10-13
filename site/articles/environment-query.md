---
{
  "id": 71,
  "slug": "environment-query",
  "kind": "concept",
  "category": "ai",
  "name": "환경 질의",
  "en": "Environment query",
  "desc": "주변 위치 후보를 생성하고 조건과 점수로 평가합니다.",
  "ko": "환경 질의을 게임에 적용하려고 합니다. 주변 위치 후보를 생성하고 조건과 점수로 평가합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
  "promptEn": "Explain Environment query with a minimal design, use case and limitations.",
  "visual": "environment-query",
  "tags": [
    "beginner"
  ],
  "source": "https://dev.epicgames.com/documentation/en-us/unreal-engine/environment-query-system-in-unreal-engine",
  "diagramSteps": [
    "후보 생성",
    "조건과 점수",
    "위치 선택"
  ],
  "related": [
    "behavior-tree",
    "blackboard",
    "formation"
  ],
  "genres": [
    "action",
    "rpg",
    "strategy",
    "shooter",
    "simulation"
  ],
  "reviewedAt": "2026-10-14",
  "reviewStatus": "source-reviewed",
  "reviewType": "기능·개념",
  "reviewScope": "Unreal EQS는 후보 데이터를 생성하고 검사·점수화하는 기능입니다. 질의 결과를 행동에 적용하는 코드는 별도입니다.",
  "reviewVersion": "Unreal Engine 5.8 문서",
  "reviewLimit": "개념·출처 대조입니다. 엔진 실행은 미검증입니다.",
  "reviewSources": [
    {
      "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/environment-query-system-in-unreal-engine",
      "method": "원문 자료 대조"
    }
  ],
  "reviewHistory": [
    {
      "date": "2026-10-14",
      "action": "출처 및 설명 대조",
      "scope": "Unreal EQS는 후보 데이터를 생성하고 검사·점수화하는 기능입니다. 질의 결과를 행동에 적용하는 코드는 별도입니다."
    }
  ]
}
---

# 환경 질의

## 핵심 구조

후보 생성 → 조건과 점수 → 위치 선택

## 개념 설명

주변 위치 후보를 생성하고 조건과 점수로 평가합니다.

## 활용 상황

엄폐 지점과 공격 위치를 선택합니다.

## 비교와 선택

후보 수와 평가 비용을 측정하고 결과의 유효 기간을 정합니다. 먼저 목적에 맞는지 판단하고, 비용과 결과는 대상 환경에서 확인합니다.

## 설계할 때 확인

입력값과 처리 결과를 구분하고, 실패하거나 범위를 벗어나는 상황을 정합니다. 후보 수와 평가 비용을 측정하고 결과의 유효 기간을 정합니다.

## 도식의 한계

이 카드는 처리 단계 안내를 반복 재생합니다. 실제 Environment query의 화면 효과나 엔진 실행을 재현한 영상은 아닙니다.

## 요청 예시

환경 질의을 게임에 적용하려고 합니다. 주변 위치 후보를 생성하고 조건과 점수로 평가합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.

## 참고 자료

https://dev.epicgames.com/documentation/en-us/unreal-engine/environment-query-system-in-unreal-engine
확인 범위: Unreal EQS는 후보 데이터를 생성하고 검사·점수화하는 기능입니다. 질의 결과를 행동에 적용하는 코드는 별도입니다.

## 함께 볼 용어

행동 트리 (Behavior tree) · 블랙보드 (Blackboard) · 포메이션 (Formation)


## 자료 대조에서 보강한 내용

Unreal EQS는 후보 데이터를 생성하고 검사·점수화하는 기능입니다. 질의 결과를 행동에 적용하는 코드는 별도입니다.

## 확인 기록

마지막 확인: 2026-10-14

Unreal EQS는 후보 데이터를 생성하고 검사·점수화하는 기능입니다. 질의 결과를 행동에 적용하는 코드는 별도입니다.

개념·출처 대조입니다. 엔진 실행은 미검증입니다.

확인 자료: https://dev.epicgames.com/documentation/en-us/unreal-engine/environment-query-system-in-unreal-engine
