---
{
  "category": "camera",
  "name": "락온 카메라",
  "en": "Lock-on camera",
  "desc": "대상을 시야에 유지하며 주변을 돌아요.",
  "ko": "플레이어와 선택한 적을 화면에 유지하고 대상 주변을 회전할 수 있는 락온 카메라를 만들어 주세요.",
  "promptEn": "Create a lock-on camera that keeps the player and selected enemy in view while allowing orbiting around the target.",
  "visual": "lock",
  "tags": [
    "action"
  ],
  "source": "https://docs.unity3d.com/6000.0/Documentation/ScriptReference/Transform.LookAt.html",
  "slug": "lock",
  "id": 3,
  "genres": [
    "action",
    "rpg",
    "shooter",
    "adventure",
    "horror"
  ],
  "reviewedAt": "2026-10-14",
  "reviewStatus": "source-reviewed",
  "reviewScope": "Unity 6.0 Transform.LookAt의 목표 방향 회전을 확인했습니다. 락온 선택·해제·가시성 관리는 직접 구현합니다.",
  "reviewSources": [
    {
      "url": "https://docs.unity3d.com/6000.0/Documentation/ScriptReference/Transform.LookAt.html",
      "method": "원문 자료 대조"
    }
  ],
  "reviewHistory": [
    {
      "date": "2026-10-14",
      "action": "출처 및 설명 대조",
      "scope": "Unity 6.0 Transform.LookAt의 목표 방향 회전을 확인했습니다. 락온 선택·해제·가시성 관리는 직접 구현합니다."
    }
  ]
}
---

# 락온 카메라

대상을 시야에 유지하며 주변을 돌아요.

## 핵심 구조

플레이어와 표적의 중간점 계산 → 카메라 배치 → 표적 방향으로 회전

## Unity

```csharp
using UnityEngine;
using System.Collections;
public class LockExample : MonoBehaviour
{
    public Transform player, target;
    void LateUpdate()
    {
        if (!player || !target) return;
        Vector3 center = (player.position + target.position) * 0.5f;
        Vector3 direction = (target.position - player.position).normalized;
        transform.position = player.position - direction * 5f + Vector3.up * 2f;
        transform.LookAt(center + Vector3.up);
    }
}
```

## Unreal

```cpp
AActor* Player = nullptr;
AActor* Target = nullptr;
void UpdateLockOn()
{
    if (!Player || !Target) return;
    FVector P = Player->GetActorLocation(), T = Target->GetActorLocation();
    FVector Center = (P + T) * 0.5f;
    SetActorLocation(P - (T - P).GetSafeNormal() * 500 + FVector(0, 0, 200));
    SetActorRotation((Center + FVector(0, 0, 100) - GetActorLocation()).Rotation());
}
```

## 적용 방법

Unity에서는 카메라에 스크립트를 붙이고 player와 target을 연결해 주세요. Unreal에서는 ACameraActor를 상속한 클래스에서 Player와 Target을 지정하고 Tick에서 호출합니다.

두 대상이 화면에 들어오도록 거리와 시야각을 조정해 주세요. 벽과의 충돌이나 부드러운 회전이 필요하다면 카메라 이동 처리에 추가하면 됩니다.

## Unreal 의존성

Camera/CameraActor.h

## 요청 예시

플레이어와 선택한 적을 화면에 유지하고 대상 주변을 회전할 수 있는 락온 카메라를 만들어 주세요.

## 참고 자료

https://docs.unity3d.com/6000.0/Documentation/ScriptReference/

https://dev.epicgames.com/documentation/en-us/unreal-engine/API


## 확인 기록

마지막 확인: 2026-10-14

Unity 6.0 Transform.LookAt의 목표 방향 회전을 확인했습니다. 락온 선택·해제·가시성 관리는 직접 구현합니다.


확인 자료: https://docs.unity3d.com/6000.0/Documentation/ScriptReference/Transform.LookAt.html
