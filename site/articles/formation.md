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

public class FormationExample : MonoBehaviour {
    public Vector3 FormationPosition(int index, Transform center) {
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
FVector FormationPosition(int32 Index, const FTransform& Center) {
    int32 Columns = 4;
    float Spacing = 200.f;
    int32 Row = Index / Columns, Column = Index % Columns;
    FVector Local(-Row * Spacing, (Column - 1.5f) * Spacing, 0);
    return Center.TransformPosition(Local);
}
```

## 연결 방법과 생략한 부분

index는 0 이상의 유닛 번호입니다. 이 함수는 이동 목적지만 계산합니다. Unity Transform과 Unreal FTransform은 스케일 1을 사용합니다. 실제 경로 탐색과 슬롯-유닛 매칭은 따로 연결합니다. Unity는 Z 방향, Unreal은 X 방향을 전방으로 사용했습니다.

## 코드 범위

Unity 코드는 FormationExample.cs로 저장할 MonoBehaviour 예시입니다. 필요한 참조는 Inspector에서 연결하거나 호출 측에서 전달합니다. Unreal 코드는 해당 Actor/Character/CameraActor 클래스 내부에 넣는 멤버 예시이며, 완전한 .h/.cpp 파일은 아닙니다. 함수 선언·UPROPERTY·입력 바인딩·Tick 연결은 프로젝트에 맞게 작성해야 합니다. UObject 참조는 실제 프로젝트에서 UPROPERTY 또는 적절한 수명 관리가 필요합니다. 예제 수치들은 설명을 위한 값입니다.

## Unreal 의존성

CoreMinimal.h

## 검증 상태

미확인: 이 저장소에서는 Unity/Unreal 프로젝트 컴파일과 엔진 실행을 수행하지 않았습니다. 구조 학습을 위한 최소 예시이며 그대로 사용하기 전 해당 엔진 프로젝트에서 검증해야 합니다.

## 요청 예시

유닛마다 대형 안의 위치를 배정하고 이동 중에도 간격을 유지하도록 만들어 주세요.

## 참고 자료

https://docs.unity3d.com/6000.0/Documentation/ScriptReference/

https://dev.epicgames.com/documentation/en-us/unreal-engine/API

https://www.gameaipro.com/GameAIPro2/GameAIPro2_Chapter20_Hierarchical_Architecture_for_Group_Navigation_Behaviors.pdf


## 확인 기록

마지막 확인: 2026-10-14

Game AI Pro 2 20장의 그룹 내비게이션·포메이션 설명을 확인했습니다. 예제는 그 시스템 전체를 재현하지 않습니다.


확인 자료: https://www.gameaipro.com/GameAIPro2/GameAIPro2_Chapter20_Hierarchical_Architecture_for_Group_Navigation_Behaviors.pdf
