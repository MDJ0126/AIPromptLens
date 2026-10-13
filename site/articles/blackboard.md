---
{
  "id": 67,
  "slug": "blackboard",
  "kind": "concept",
  "category": "ai",
  "name": "블랙보드",
  "en": "Blackboard",
  "desc": "대상과 위치 같은 AI 의사결정 정보를 공유 저장합니다.",
  "ko": "블랙보드을 게임에 적용하려고 합니다. 대상과 위치 같은 AI 의사결정 정보를 공유 저장합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
  "promptEn": "Explain Blackboard with a minimal design, use case and limitations.",
  "visual": "blackboard",
  "tags": [
    "beginner"
  ],
  "source": "https://dev.epicgames.com/documentation/en-us/unreal-engine/behavior-tree-in-unreal-engine---user-guide",
  "diagramSteps": [
    "감지 정보",
    "키 값 저장",
    "행동에서 조회"
  ],
  "related": [
    "behavior-tree",
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
  "reviewScope": "Unreal Blackboard는 행동 판단에 사용할 키 값을 저장합니다. 저장만으로 지각이나 행동이 자동 실행되지는 않습니다.",
  "reviewVersion": "Unreal Engine 5.8 문서",
  "reviewSources": [
    {
      "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/behavior-tree-in-unreal-engine---user-guide",
      "method": "원문 자료 대조"
    }
  ],
  "reviewHistory": [
    {
      "date": "2026-10-14",
      "action": "출처 및 설명 대조",
      "scope": "Unreal Blackboard는 행동 판단에 사용할 키 값을 저장합니다. 저장만으로 지각이나 행동이 자동 실행되지는 않습니다."
    }
  ]
}
---

# 블랙보드

## 핵심 구조

감지 정보 → 키 값 저장 → 행동에서 조회

## 개념 설명

대상과 위치 같은 AI 의사결정 정보를 공유 저장합니다.

## 활용 상황

감지 시스템이 기록한 대상을 행동 트리에서 읽습니다.

## 비교와 선택

정보의 갱신 시점과 오래된 값의 무효화 정책이 필요합니다. 먼저 목적에 맞는지 판단하고, 비용과 결과는 대상 환경에서 확인합니다.

## 설계할 때 확인

입력값과 처리 결과를 구분하고, 실패하거나 범위를 벗어나는 상황을 정합니다. 정보의 갱신 시점과 오래된 값의 무효화 정책이 필요합니다.

## 도식의 한계

이 카드는 처리 단계 안내를 반복 재생합니다. 실제 Blackboard의 화면 효과나 엔진 실행을 재현한 영상은 아닙니다.

## 요청 예시

블랙보드을 게임에 적용하려고 합니다. 대상과 위치 같은 AI 의사결정 정보를 공유 저장합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.

## 참고 자료

https://dev.epicgames.com/documentation/en-us/unreal-engine/behavior-tree-in-unreal-engine---user-guide

## 함께 볼 용어

행동 트리 (Behavior tree) · 환경 질의 (Environment query) · 포메이션 (Formation)


## 자료 대조에서 보강한 내용


