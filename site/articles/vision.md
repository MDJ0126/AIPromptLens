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

## 적용 방법

Unity에서는 walls에 장애물 레이어를 지정해 주세요. Unreal에서는 Visibility 채널을 막는 장애물을 검사하며 감지하는 자신과 목표 Actor는 검사에서 제외합니다.

시야 전체 각도는 약 90도입니다. 게임에 맞춰 거리와 눈높이, 목표 지점을 조정해 주세요. 소리 감지나 한 번 본 대상을 기억하는 기능이 필요하면 추가할 수 있습니다.

## Unreal 의존성

Engine/World.h, CollisionQueryParams.h

## 요청 예시

적의 시야 각도와 거리를 설정하고 장애물에 가려지지 않은 플레이어만 감지하도록 만들어 주세요.

## 참고 자료

https://docs.unity3d.com/6000.0/Documentation/ScriptReference/

https://dev.epicgames.com/documentation/en-us/unreal-engine/API


## 확인 기록

마지막 확인: 2026-10-14

Unity 6.0 직선 충돌 검사로 가림을 판정할 수 있음을 확인했습니다. 거리·시야각과 조합한 직접 구현 예시입니다.


확인 자료: https://docs.unity3d.com/6000.0/Documentation/ScriptReference/Physics.Raycast.html
