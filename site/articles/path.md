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

public class PathExample : MonoBehaviour {
    public UnityEngine.AI.NavMeshAgent agent;
    public bool MoveTo(Vector3 goal) {
        if (!agent || !agent.isOnNavMesh) return false;
        return agent.SetDestination(goal);
    }
}
```

## Unreal

```cpp
void MoveTo(AAIController* AI, FVector Goal) {
    if (!AI) return;
    AI->MoveToLocation(Goal, 50.f);
}
```

## 연결 방법과 생략한 부분

Unity: AI Navigation으로 NavMesh를 구운 뒤 NavMeshAgent를 지정합니다. SetDestination의 true는 요청 수락이지 도착 완료가 아닙니다. Unreal: 이동 가능한 Pawn을 소유한 AIController와 NavMeshBoundsVolume이 필요합니다. Build.cs에 AIModule을 추가합니다. AI가 Pawn을 소유하도록 배치/설정해야 합니다. 이 예제는 내비게이션을 호출하며 A* 자체를 구현하지 않습니다. 도착/실패 응답과 재경로 요청은 생략했습니다.

## 코드 범위

Unity 코드는 PathExample.cs로 저장할 MonoBehaviour 예시입니다. 필요한 참조는 Inspector에서 연결하거나 호출 측에서 전달합니다. Unreal 코드는 해당 Actor/Character/CameraActor 클래스 내부에 넣는 멤버 예시이며, 완전한 .h/.cpp 파일은 아닙니다. 함수 선언·UPROPERTY·입력 바인딩·Tick 연결은 프로젝트에 맞게 작성해야 합니다. UObject 참조는 실제 프로젝트에서 UPROPERTY 또는 적절한 수명 관리가 필요합니다. 예제 수치들은 설명을 위한 값입니다.

## Unreal 의존성

AIController.h

## 검증 상태

미확인: 이 저장소에서는 Unity/Unreal 프로젝트 컴파일과 엔진 실행을 수행하지 않았습니다. 구조 학습을 위한 최소 예시이며 그대로 사용하기 전 해당 엔진 프로젝트에서 검증해야 합니다.

## 요청 예시

이동 가능한 공간에서 장애물을 피하는 경로를 계산하고 목표 위치까지 따라가도록 만들어 주세요.

## 참고 자료

https://docs.unity3d.com/6000.0/Documentation/ScriptReference/

https://dev.epicgames.com/documentation/en-us/unreal-engine/API


## 확인 기록

마지막 확인: 2026-10-14

Unity 6.0 NavMeshAgent.SetDestination의 요청 API를 확인했습니다. 반환 성공은 도착 완료가 아닙니다.


확인 자료: https://docs.unity3d.com/6000.0/Documentation/ScriptReference/AI.NavMeshAgent.SetDestination.html
