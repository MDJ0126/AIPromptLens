---
{
  "id": 66,
  "slug": "behavior-tree",
  "kind": "concept",
  "category": "ai",
  "name": "행동 트리",
  "en": "Behavior tree",
  "desc": "조건과 작업을 트리 형태로 구성하여 행동을 선택·실행합니다.",
  "ko": "행동 트리을 게임에 적용하려고 합니다. 조건과 작업을 트리 형태로 구성하여 행동을 선택·실행합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
  "promptEn": "Explain Behavior tree with a minimal design, use case and limitations.",
  "visual": "behavior-tree",
  "tags": [
    "beginner"
  ],
  "source": "https://dev.epicgames.com/documentation/en-us/unreal-engine/behavior-trees-in-unreal-engine",
  "diagramSteps": [
    "조건 검사",
    "분기 선택",
    "작업 실행"
  ],
  "related": [
    "blackboard",
    "environment-query",
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
  "reviewScope": "Unreal Behavior Tree 기능을 확인했습니다. 성공·실패·진행 중 결과와 중단 정책은 실제 노드 구성을 따라야 합니다.",
  "reviewVersion": "Unreal Engine 5.8 문서",
  "reviewLimit": "개념·출처 대조입니다. 엔진 실행은 미검증입니다.",
  "reviewSources": [
    {
      "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/behavior-trees-in-unreal-engine",
      "method": "원문 자료 대조"
    }
  ],
  "reviewHistory": [
    {
      "date": "2026-10-14",
      "action": "출처 및 설명 대조",
      "scope": "Unreal Behavior Tree 기능을 확인했습니다. 성공·실패·진행 중 결과와 중단 정책은 실제 노드 구성을 따라야 합니다."
    }
  ]
}
---

# 행동 트리

## 핵심 구조

조건 검사 → 분기 선택 → 작업 실행

## 개념 설명

조건과 작업을 트리 형태로 구성하여 행동을 선택·실행합니다.

## 활용 상황

순찰·추적·공격 같은 NPC 의사결정을 정리합니다.

## 비교와 선택

작업의 성공·실패·진행 상태와 중단 조건을 명시해야 합니다. 먼저 목적에 맞는지 판단하고, 비용과 결과는 대상 환경에서 확인합니다.

## 설계할 때 확인

입력값과 처리 결과를 구분하고, 실패하거나 범위를 벗어나는 상황을 정합니다. 작업의 성공·실패·진행 상태와 중단 조건을 명시해야 합니다.

## 도식의 한계

이 카드는 처리 단계 안내를 반복 재생합니다. 실제 Behavior tree의 화면 효과나 엔진 실행을 재현한 영상은 아닙니다.

## 요청 예시

행동 트리을 게임에 적용하려고 합니다. 조건과 작업을 트리 형태로 구성하여 행동을 선택·실행합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.

## 참고 자료

https://dev.epicgames.com/documentation/en-us/unreal-engine/behavior-trees-in-unreal-engine
확인 범위: Unreal Behavior Tree 기능을 확인했습니다. 성공·실패·진행 중 결과와 중단 정책은 실제 노드 구성을 따라야 합니다.

## 함께 볼 용어

블랙보드 (Blackboard) · 환경 질의 (Environment query) · 포메이션 (Formation)


## 자료 대조에서 보강한 내용

Unreal Behavior Tree 기능을 확인했습니다. 성공·실패·진행 중 결과와 중단 정책은 실제 노드 구성을 따라야 합니다.

## 확인 기록

마지막 확인: 2026-10-14

Unreal Behavior Tree 기능을 확인했습니다. 성공·실패·진행 중 결과와 중단 정책은 실제 노드 구성을 따라야 합니다.

개념·출처 대조입니다. 엔진 실행은 미검증입니다.

확인 자료: https://dev.epicgames.com/documentation/en-us/unreal-engine/behavior-trees-in-unreal-engine
