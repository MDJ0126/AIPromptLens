---
{
  "category": "movement",
  "name": "대시",
  "en": "Dash",
  "desc": "짧은 시간에 빠르게 거리를 좁혀요.",
  "ko": "입력 방향으로 짧게 빠르게 이동하는 대시를 만들고 거리와 재사용 시간을 조정 가능하게 해 주세요.",
  "promptEn": "Create a short directional dash with configurable distance and cooldown.",
  "visual": "dash",
  "tags": [
    "beginner",
    "action"
  ],
  "source": "https://raw.githubusercontent.com/NoelFB/Celeste/master/Source/Player/Player.cs",
  "slug": "dash",
  "id": 8,
  "genres": [
    "action",
    "platformer",
    "rpg"
  ],
  "reviewedAt": "2026-10-14",
  "reviewStatus": "source-reviewed",
  "reviewType": "구현·설계 패턴",
  "reviewScope": "Celeste 개발자 공개 Player.cs의 Dash 상태·속도 처리를 확인했습니다. 예제는 동일 게임 구현이 아닙니다.",
  "reviewVersion": "개발자 공개 Celeste 소스",
  "reviewSources": [
    {
      "url": "https://raw.githubusercontent.com/NoelFB/Celeste/master/Source/Player/Player.cs",
      "method": "원문 자료 대조"
    }
  ],
  "reviewHistory": [
    {
      "date": "2026-10-14",
      "action": "출처 및 설명 대조",
      "scope": "Celeste 개발자 공개 Player.cs의 Dash 상태·속도 처리를 확인했습니다. 예제는 동일 게임 구현이 아닙니다."
    }
  ]
}
---

# 대시

짧은 시간에 빠르게 거리를 좁혀요.

## 핵심 구조

입력 방향 저장 → 제한된 시간 동안 이동 → 종료

## Unity

```csharp
using UnityEngine;
using System.Collections;
public class DashExample : MonoBehaviour
{
    public CharacterController body;
    Vector3 direction;
    float remaining;
    public void StartDash(Vector3 input)
    {
        input.y = 0;
        direction = input.normalized;
        remaining = 0.15f;
    }
    void Update()
    {
        if (!body || remaining <= 0) return;
        float dt = Mathf.Min(Time.deltaTime, remaining);
        body.Move(direction * 14f * dt);
        remaining -= dt;
    }
}
```

## Unreal

```cpp
FVector DashDirection = FVector::ZeroVector;
float Remaining = 0;
void StartDash(FVector Input)
{
    Input.Z = 0;
    DashDirection = Input.GetSafeNormal();
    Remaining = 0.15f;
}
void UpdateDash(float DeltaTime)
{
    if (Remaining <= 0) return;
    float Step = FMath::Min(DeltaTime, Remaining);
    AddActorWorldOffset(DashDirection * 1400.f * Step, true);
    Remaining -= Step;
}
```

## 적용 방법

Unity에서는 body에 CharacterController를 연결해 주세요. Unreal에서는 Actor나 Character의 Tick에서 UpdateDash를 호출하면 됩니다. 정해진 시간 동안 입력 방향으로 이동하는 구조입니다.

대시 중에는 일반 이동이 동시에 적용되지 않도록 해 주세요. 중력과 재사용 대기 시간은 별도로 연결하고, CharacterMovement를 사용하는 경우 이동 처리가 서로 충돌하지 않도록 조정해 주세요.

## Unreal 의존성

GameFramework/Actor.h

## 요청 예시

입력 방향으로 짧게 빠르게 이동하는 대시를 만들고 거리와 재사용 시간을 조정 가능하게 해 주세요.

## 참고 자료

https://raw.githubusercontent.com/NoelFB/Celeste/master/Source/Player/Player.cs

