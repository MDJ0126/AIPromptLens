---
{
  "category": "ai",
  "name": "포메이션",
  "en": "Formation",
  "desc": "여러 유닛이 정해진 대형으로 이동해요.",
  "ko": "유닛마다 대형 안의 위치를 배정하고 이동 중에도 간격을 유지하도록 만들어 주세요.",
  "promptEn": "Assign each unit a position in a formation and maintain spacing during movement.",
  "visual": "formation",
  "tags": [
    "strategy"
  ],
  "source": "https://www.gameaipro.com/GameAIPro2/GameAIPro2_Chapter20_Hierarchical_Architecture_for_Group_Navigation_Behaviors.pdf",
  "slug": "formation",
  "id": 13,
  "genres": [
    "strategy",
    "simulation"
  ],
  "reviewedAt": "2026-10-14",
  "reviewStatus": "source-reviewed",
  "reviewScope": "Game AI Pro 2 20장의 그룹 내비게이션·포메이션 설명을 확인했습니다. 예제는 그 시스템 전체를 재현하지 않습니다.",
  "reviewSources": [
    {
      "url": "https://www.gameaipro.com/GameAIPro2/GameAIPro2_Chapter20_Hierarchical_Architecture_for_Group_Navigation_Behaviors.pdf",
      "method": "원문 자료 대조"
    }
  ],
  "reviewHistory": [
    {
      "date": "2026-10-14",
      "action": "출처 및 설명 대조",
      "scope": "Game AI Pro 2 20장의 그룹 내비게이션·포메이션 설명을 확인했습니다. 예제는 그 시스템 전체를 재현하지 않습니다."
    }
  ]
}
---

# 포메이션

여러 유닛이 정해진 대형으로 이동해요.

## 핵심 구조

유닛 번호 → 행과 열 계산 → 대형 중심의 로컬 좌표를 월드로 변환

## Unity

```csharp
using UnityEngine;
using System.Collections;
public class FormationExample : MonoBehaviour
{
    public Vector3 FormationPosition(int index, Transform center)
    {
        int columns = 4;
        float spacing = 2f;
        int row = index / columns, column = index % columns;
        Vector3 local = new Vector3((column - 1.5f) * spacing, 0, -row * spacing);
        return center.TransformPoint(local);
    }
}
```

## Unreal

```cpp
FVector FormationPosition(int32 Index, const FTransform& Center)
{
    int32 Columns = 4;
    float Spacing = 200.f;
    int32 Row = Index / Columns, Column = Index % Columns;
    FVector Local(-Row * Spacing, (Column - 1.5f) * Spacing, 0);
    return Center.TransformPosition(Local);
}
```

## 적용 방법

각 유닛에 0부터 시작하는 번호를 주면 대형 안에서 이동할 목표 위치를 계산합니다. Unity에서는 Z축, Unreal에서는 X축을 앞쪽으로 사용하며 기준 Transform의 스케일은 1로 둡니다.

계산한 위치를 유닛의 이동 기능에 전달해 주세요. 장애물을 피하는 경로 탐색과 유닛별 자리 배정은 이동 시스템에서 따로 처리합니다.

## Unreal 의존성

CoreMinimal.h

## 요청 예시

유닛마다 대형 안의 위치를 배정하고 이동 중에도 간격을 유지하도록 만들어 주세요.

## 참고 자료

https://docs.unity3d.com/6000.0/Documentation/ScriptReference/

https://dev.epicgames.com/documentation/en-us/unreal-engine/API

https://www.gameaipro.com/GameAIPro2/GameAIPro2_Chapter20_Hierarchical_Architecture_for_Group_Navigation_Behaviors.pdf


