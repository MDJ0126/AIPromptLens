---
{
  "category": "ai",
  "name": "경로 탐색",
  "en": "Pathfinding",
  "desc": "장애물을 돌아 목표 위치로 이동해요.",
  "ko": "이동 가능한 공간에서 장애물을 피하는 경로를 계산하고 목표 위치까지 따라가도록 만들어 주세요.",
  "promptEn": "Compute a path around obstacles through traversable space and follow it to the target.",
  "visual": "path",
  "tags": [
    "beginner",
    "strategy"
  ],
  "source": "https://docs.unity3d.com/6000.0/Documentation/ScriptReference/AI.NavMeshAgent.SetDestination.html",
  "slug": "path",
  "id": 14,
  "genres": [
    "strategy",
    "rpg",
    "simulation",
    "adventure"
  ],
  "reviewedAt": "2026-10-14",
  "reviewStatus": "source-reviewed",
  "reviewScope": "Unity 6.0 NavMeshAgent.SetDestination의 요청 API를 확인했습니다. 반환 성공은 도착 완료가 아닙니다.",
  "reviewSources": [
    {
      "url": "https://docs.unity3d.com/6000.0/Documentation/ScriptReference/AI.NavMeshAgent.SetDestination.html",
      "method": "원문 자료 대조"
    }
  ],
  "reviewHistory": [
    {
      "date": "2026-10-14",
      "action": "출처 및 설명 대조",
      "scope": "Unity 6.0 NavMeshAgent.SetDestination의 요청 API를 확인했습니다. 반환 성공은 도착 완료가 아닙니다."
    }
  ]
}
---

# 경로 탐색

장애물을 돌아 목표 위치로 이동해요.

## 핵심 구조

목표 좌표 입력 → 내비게이션 이동 요청 → 엔진이 경로를 따라 이동

## Unity

```csharp
using UnityEngine;
using System.Collections;
public class PathExample : MonoBehaviour
{
    public UnityEngine.AI.NavMeshAgent agent;
    public bool MoveTo(Vector3 goal)
    {
        if (!agent || !agent.isOnNavMesh) return false;
        return agent.SetDestination(goal);
    }
}
```

## Unreal

```cpp
void MoveTo(AAIController* AI, FVector Goal)
{
    if (!AI) return;
    AI->MoveToLocation(Goal, 50.f);
}
```

## 적용 방법

Unity에서는 AI Navigation으로 NavMesh를 만든 뒤 NavMeshAgent를 연결해 주세요. SetDestination이 true를 반환하면 이동 요청이 받아들여졌다는 뜻이며, 목적지 도착을 뜻하지는 않습니다.

Unreal에서는 이동할 Pawn을 AIController가 제어하도록 설정하고 NavMeshBoundsVolume으로 이동 영역을 지정합니다. Build.cs에는 AIModule을 추가해 주세요. 도착하거나 이동에 실패했을 때의 처리는 별도로 연결합니다.

## Unreal 의존성

AIController.h

## 요청 예시

이동 가능한 공간에서 장애물을 피하는 경로를 계산하고 목표 위치까지 따라가도록 만들어 주세요.

## 참고 자료

https://docs.unity3d.com/6000.0/Documentation/ScriptReference/

https://dev.epicgames.com/documentation/en-us/unreal-engine/API


## 확인 기록

마지막 확인: 2026-10-14

Unity 6.0 NavMeshAgent.SetDestination의 요청 API를 확인했습니다. 반환 성공은 도착 완료가 아닙니다.


확인 자료: https://docs.unity3d.com/6000.0/Documentation/ScriptReference/AI.NavMeshAgent.SetDestination.html
