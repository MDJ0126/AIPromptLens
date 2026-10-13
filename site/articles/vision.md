---
{
  "category": "ai",
  "name": "시야 감지",
  "en": "Field-of-view detection",
  "desc": "시야 안에 들어온 대상을 감지해요.",
  "ko": "적의 시야 각도와 거리를 설정하고 장애물에 가려지지 않은 플레이어만 감지하도록 만들어 주세요.",
  "promptEn": "Detect the player within a configurable view cone and distance, checking for occluding obstacles.",
  "visual": "vision",
  "tags": [
    "action",
    "strategy"
  ],
  "source": "https://docs.unity3d.com/6000.0/Documentation/ScriptReference/Physics.Raycast.html",
  "slug": "vision",
  "id": 15,
  "genres": [
    "action",
    "horror",
    "adventure",
    "strategy"
  ],
  "reviewedAt": "2026-10-14",
  "reviewStatus": "source-reviewed",
  "reviewScope": "Unity 6.0 직선 충돌 검사로 가림을 판정할 수 있음을 확인했습니다. 거리·시야각과 조합한 직접 구현 예시입니다.",
  "reviewSources": [
    {
      "url": "https://docs.unity3d.com/6000.0/Documentation/ScriptReference/Physics.Raycast.html",
      "method": "원문 자료 대조"
    }
  ],
  "reviewHistory": [
    {
      "date": "2026-10-14",
      "action": "출처 및 설명 대조",
      "scope": "Unity 6.0 직선 충돌 검사로 가림을 판정할 수 있음을 확인했습니다. 거리·시야각과 조합한 직접 구현 예시입니다."
    }
  ]
}
---

# 시야 감지

시야 안에 들어온 대상을 감지해요.

## 핵심 구조

거리 검사 → 전방과의 각도 검사 → 장애물 검사 → 감지 결과

## Unity

```csharp
using UnityEngine;
using System.Collections;
public class VisionExample : MonoBehaviour
{
    public bool CanSee(Transform eye, Transform target, LayerMask walls)
    {
        Vector3 delta = target.position - eye.position;
        if (delta.sqrMagnitude > 100f) return false;
        if (Vector3.Angle(eye.forward, delta) > 45f) return false;
        return !Physics.Linecast(eye.position, target.position, walls);
    }
}
```

## Unreal

```cpp
bool CanSee(AActor* Target)
{
    if (!Target) return false;
    FVector Eye = GetActorLocation() + FVector(0, 0, 160);
    FVector Delta = Target->GetActorLocation() - Eye;
    if (Delta.SizeSquared() > FMath::Square(1000.f)) return false;
    if (FVector::DotProduct(GetActorForwardVector(), Delta.GetSafeNormal()) < 0.7071f) return false;
    FHitResult Hit;
    FCollisionQueryParams Query;
    Query.AddIgnoredActor(this);
    Query.AddIgnoredActor(Target);
    return !GetWorld()->LineTraceSingleByChannel(Hit, Eye, Target->GetActorLocation(), ECC_Visibility, Query);
}
```

## 연결 방법과 생략한 부분

Unity의 walls는 장애물만 포함하는 레이어입니다. Unreal은 Visibility를 막는 장애물을 검사하고 자신과 목표 Actor를 무시합니다. 시야 전체 각도는 약 90도이며 감지 거리·눈 위치·목표 위치를 조정해야 합니다. 청각·감지 기억·복수 검사 지점은 생략했습니다.

## 코드 범위

Unity 코드는 VisionExample.cs로 저장할 MonoBehaviour 예시입니다. 필요한 참조는 Inspector에서 연결하거나 호출 측에서 전달합니다. Unreal 코드는 해당 Actor/Character/CameraActor 클래스 내부에 넣는 멤버 예시이며, 완전한 .h/.cpp 파일은 아닙니다. 함수 선언·UPROPERTY·입력 바인딩·Tick 연결은 프로젝트에 맞게 작성해야 합니다. UObject 참조는 실제 프로젝트에서 UPROPERTY 또는 적절한 수명 관리가 필요합니다. 예제 수치들은 설명을 위한 값입니다.

## Unreal 의존성

Engine/World.h, CollisionQueryParams.h

## 검증 상태

미확인: 이 저장소에서는 Unity/Unreal 프로젝트 컴파일과 엔진 실행을 수행하지 않았습니다. 구조 학습을 위한 최소 예시이며 그대로 사용하기 전 해당 엔진 프로젝트에서 검증해야 합니다.

## 요청 예시

적의 시야 각도와 거리를 설정하고 장애물에 가려지지 않은 플레이어만 감지하도록 만들어 주세요.

## 참고 자료

https://docs.unity3d.com/6000.0/Documentation/ScriptReference/

https://dev.epicgames.com/documentation/en-us/unreal-engine/API


## 확인 기록

마지막 확인: 2026-10-14

Unity 6.0 직선 충돌 검사로 가림을 판정할 수 있음을 확인했습니다. 거리·시야각과 조합한 직접 구현 예시입니다.


확인 자료: https://docs.unity3d.com/6000.0/Documentation/ScriptReference/Physics.Raycast.html
