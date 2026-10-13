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
  "reviewLimit": "구성 기능·소스 구조 대조입니다. Unity/Unreal 컴파일과 실행은 미검증입니다.",
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

public class TrailExample : MonoBehaviour {
    public TrailRenderer trail;
    public void BeginSwing() {
        if (!trail) return;
        trail.Clear();
        trail.time = 0.15f;
        trail.emitting = true;
    }
    public void EndSwing() {
        if (trail) trail.emitting = false;
    }
}
```

## Unreal

```cpp
USplineComponent* TrailPath = nullptr;
TArray<FVector> Points;
void SampleTrail(FVector TipPosition) {
    if (!TrailPath) return;
    Points.Add(TipPosition);
    if (Points.Num() > 12) Points.RemoveAt(0);
    TrailPath->ClearSplinePoints(false);
    for (FVector Point : Points)
        TrailPath->AddSplinePoint(Point, ESplineCoordinateSpace::World, false);
    TrailPath->UpdateSpline();
}
```

## 연결 방법과 생략한 부분

Unity: 무기 끝에 TrailRenderer를 붙이고 머티리얼과 폭을 설정합니다. Unreal: Tick에서 무기 끝 위치를 SampleTrail에 전달합니다. SplineComponent는 경로 데이터만 보관하고 게임에서 선을 렌더링하지 않으므로 SplineMesh 또는 Niagara 리본 렌더링을 별도로 연결해야 합니다. Unreal은 시간 대신 최근 12개 샘플만 유지하는 구조 예시입니다.

## 코드 범위

Unity 코드는 TrailExample.cs로 저장할 MonoBehaviour 예시입니다. 필요한 참조는 Inspector에서 연결하거나 호출 측에서 전달합니다. Unreal 코드는 해당 Actor/Character/CameraActor 클래스 내부에 넣는 멤버 예시이며, 완전한 .h/.cpp 파일은 아닙니다. 함수 선언·UPROPERTY·입력 바인딩·Tick 연결은 프로젝트에 맞게 작성해야 합니다. UObject 참조는 실제 프로젝트에서 UPROPERTY 또는 적절한 수명 관리가 필요합니다. 예제 수치들은 설명을 위한 값입니다.

## Unreal 의존성

Components/SplineComponent.h

## 검증 상태

미확인: 이 저장소에서는 Unity/Unreal 프로젝트 컴파일과 엔진 실행을 수행하지 않았습니다. 구조 학습을 위한 최소 예시이며 그대로 사용하기 전 해당 엔진 프로젝트에서 검증해야 합니다.

## 요청 예시

빠른 이동이나 무기 휘두르기에 짧게 사라지는 모션 트레일을 추가해 주세요.

## 참고 자료

https://docs.unity3d.com/6000.0/Documentation/ScriptReference/

https://dev.epicgames.com/documentation/en-us/unreal-engine/API


## 확인 기록

마지막 확인: 2026-10-14

Unity 6 용어집의 Trail Renderer 개념을 대조했습니다. Unreal 예제의 Spline 데이터만으로 트레일이 렌더링되지는 않습니다.

구성 기능·소스 구조 대조입니다. Unity/Unreal 컴파일과 실행은 미검증입니다.

확인 자료: https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html
