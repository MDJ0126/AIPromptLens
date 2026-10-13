---
{
  "id": 27,
  "slug": "pathfinding-choice",
  "kind": "concept",
  "category": "principles",
  "name": "A*와 플로 필드 선택",
  "en": "A* and flow fields",
  "desc": "개별 경로와 공통 목적지 방향장을 비교해요.",
  "source": "https://www.redblobgames.com/pathfinding/tower-defense/",
  "ko": "A*와 플로 필드 선택의 핵심 구조와 활용 상황, 한계를 설명해 주세요.",
  "promptEn": "Explain A* and flow fields and its use cases and limitations.",
  "visual": "pathfinding-choice",
  "tags": [
    "beginner"
  ],
  "genres": [
    "strategy",
    "simulation",
    "rpg"
  ],
  "reviewedAt": "2026-10-14",
  "reviewStatus": "source-reviewed",
  "reviewScope": "Red Blob 원문에서 개별 탐색과 공통 목표의 거리장 공유를 확인했습니다. BFS는 동일 비용일 때 사용하는 예시입니다.",
  "reviewSources": [
    {
      "url": "https://www.redblobgames.com/pathfinding/tower-defense/",
      "method": "원문 자료 대조"
    }
  ],
  "reviewHistory": [
    {
      "date": "2026-10-14",
      "action": "출처 및 설명 대조",
      "scope": "Red Blob 원문에서 개별 탐색과 공통 목표의 거리장 공유를 확인했습니다. BFS는 동일 비용일 때 사용하는 예시입니다."
    }
  ]
}
---

# A*와 플로 필드 선택

## 핵심 구조

개별 경로 탐색 / 공통 목표의 거리장 → 이동 방향 공유

## 개념 설명

A*는 개별 시작점과 목적지의 경로를 탐색합니다. 플로 필드는 공통 목적지에서 거리장을 계산하고, 여러 유닛이 거리 감소 방향을 공유합니다.

## 비교와 선택

목적지가 서로 다르면 개별 경로를, 많은 유닛이 같은 목표로 향하면 공유 방향장을 검토합니다. 동일 이동 비용은 BFS, 다른 비용은 Dijkstra 등으로 거리장을 계산합니다. 장애물이 바뀌면 갱신이 필요하며 유닛 간 회피는 별도 처리합니다.

## 도식의 한계

이 도식은 개념 설명용이며 실제 탐색이나 엔진 실행 결과가 아닙니다.

## 요청 예시

A*와 플로 필드 선택의 핵심 구조와 활용 상황, 한계를 설명해 주세요.

## 참고 자료

https://www.redblobgames.com/pathfinding/tower-defense/


## 자료 대조에서 보강한 내용


