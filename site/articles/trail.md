---
{
  "category": "effects",
  "name": "모션 트레일",
  "en": "Motion trail",
  "desc": "움직임의 궤적을 남겨 속도를 보여줘요.",
  "ko": "빠른 이동이나 무기 휘두르기에 짧게 사라지는 모션 트레일을 추가해 주세요.",
  "promptEn": "Add short-lived motion trails to fast movement or weapon swings.",
  "visual": "trail",
  "tags": [
    "action"
  ],
  "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html",
  "slug": "trail",
  "id": 21,
  "genres": [
    "action",
    "rpg",
    "shooter",
    "adventure",
    "horror"
  ],
  "reviewedAt": "2026-10-14",
  "reviewStatus": "source-reviewed",
  "reviewScope": "Unity 6 용어집의 Trail Renderer 개념을 대조했습니다. Unreal 예제의 Spline 데이터만으로 트레일이 렌더링되지는 않습니다.",
  "reviewSources": [
    {
      "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html",
      "method": "공식 용어집 정의 대조"
    }
  ],
  "reviewHistory": [
    {
      "date": "2026-10-14",
      "action": "출처 및 설명 대조",
      "scope": "Unity 6 용어집의 Trail Renderer 개념을 대조했습니다. Unreal 예제의 Spline 데이터만으로 트레일이 렌더링되지는 않습니다."
    }
  ],
  "aliases": [
    "Trail Renderer"
  ]
}
---

# 모션 트레일

움직임의 궤적을 남겨 속도를 보여줘요.

## 핵심 구조

이동하는 끝점 위치 수집 → 최근 궤적만 유지 → 선 또는 리본 렌더링

## Unity

```csharp
using UnityEngine;
using System.Collections;
public class TrailExample : MonoBehaviour
{
    public TrailRenderer trail;
    public void BeginSwing()
    {
        if (!trail) return;
        trail.Clear();
        trail.time = 0.15f;
        trail.emitting = true;
    }
    public void EndSwing()
    {
        if (trail) trail.emitting = false;
    }
}
```

## Unreal

```cpp
USplineComponent* TrailPath = nullptr;
TArray<FVector> Points;
void SampleTrail(FVector TipPosition)
{
    if (!TrailPath) return;
    Points.Add(TipPosition);
    if (Points.Num() > 12) Points.RemoveAt(0);
    TrailPath->ClearSplinePoints(false);
    for (FVector Point : Points)
    TrailPath->AddSplinePoint(Point, ESplineCoordinateSpace::World, false);
    TrailPath->UpdateSpline();
}
```

## 적용 방법

Unity에서는 무기 끝에 TrailRenderer를 붙이고 머티리얼과 폭을 설정해 주세요. Unreal에서는 Tick마다 무기 끝의 위치를 SampleTrail에 전달합니다.

Unreal의 SplineComponent는 경로만 저장하므로, 선이 보이게 하려면 SplineMesh나 Niagara 리본을 연결해야 합니다. Unreal 예제는 시간 대신 최근 위치 12개를 유지합니다.

## Unreal 의존성

Components/SplineComponent.h

## 요청 예시

빠른 이동이나 무기 휘두르기에 짧게 사라지는 모션 트레일을 추가해 주세요.

## 참고 자료

https://docs.unity3d.com/6000.0/Documentation/ScriptReference/

https://dev.epicgames.com/documentation/en-us/unreal-engine/API


## 확인 기록

마지막 확인: 2026-10-14

Unity 6 용어집의 Trail Renderer 개념을 대조했습니다. Unreal 예제의 Spline 데이터만으로 트레일이 렌더링되지는 않습니다.


확인 자료: https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html
