---
{
  "category": "combat",
  "name": "넉백",
  "en": "Knockback",
  "desc": "맞은 방향에 따라 대상을 밀어내요.",
  "ko": "공격을 맞은 대상이 타격 방향으로 밀려나는 넉백을 적용하고 거리는 조정 가능하게 해 주세요.",
  "promptEn": "Apply directional knockback on hit, with configurable displacement.",
  "visual": "knock",
  "tags": [
    "action"
  ],
  "source": "https://docs.unity3d.com/6000.0/Documentation/ScriptReference/Rigidbody.AddForce.html",
  "slug": "knock",
  "id": 7,
  "genres": [
    "action",
    "rpg",
    "shooter"
  ],
  "reviewedAt": "2026-10-14",
  "reviewStatus": "source-reviewed",
  "reviewScope": "Unity 6.0 힘 적용과 이동 제어가 가능함을 확인했습니다. 현재 Unity 코드는 물리 힘 대신 CharacterController 이동입니다.",
  "reviewSources": [
    {
      "url": "https://docs.unity3d.com/6000.0/Documentation/ScriptReference/Rigidbody.AddForce.html",
      "method": "원문 자료 대조"
    }
  ],
  "reviewHistory": [
    {
      "date": "2026-10-14",
      "action": "출처 및 설명 대조",
      "scope": "Unity 6.0 힘 적용과 이동 제어가 가능함을 확인했습니다. 현재 Unity 코드는 물리 힘 대신 CharacterController 이동입니다."
    }
  ]
}
---

# 넉백

맞은 방향에 따라 대상을 밀어내요.

## 핵심 구조

공격 방향 입력 → 수평 방향 정규화 → 대상에 속도 적용

## Unity

```csharp
using UnityEngine;
using System.Collections;
public class KnockExample : MonoBehaviour
{
    public CharacterController body;
    Vector3 knockVelocity;
    public void Knockback(Vector3 direction)
    {
        direction.y = 0f;
        knockVelocity = direction.normalized * 6f;
    }
    void Update()
    {
        if (!body) return;
        body.Move(knockVelocity * Time.deltaTime);
        knockVelocity = Vector3.MoveTowards(knockVelocity, Vector3.zero, 12f * Time.deltaTime);
    }
}
```

## Unreal

```cpp
void Knockback(ACharacter* Victim, FVector Direction)
{
    if (!Victim) return;
    Direction.Z = 0;
    Victim->LaunchCharacter(Direction.GetSafeNormal() * 600.f, true, false);
}
```

## 적용 방법

Unity에서는 body에 CharacterController를 연결하고, 평소 이동에 넉백 이동을 함께 반영해 주세요. Unreal에서는 LaunchCharacter로 타격 방향의 수평 속도를 적용하며 기존 수직 속도는 유지합니다.

Unity 예제와 Unreal 예제는 밀린 뒤 감속하는 방식이 다릅니다. Rigidbody나 물리 시뮬레이션 중인 Actor에 적용할 때는 해당 물리 기능의 힘 적용 방식을 사용해 주세요.

## Unreal 의존성

GameFramework/Character.h

## 요청 예시

공격을 맞은 대상이 타격 방향으로 밀려나는 넉백을 적용하고 거리는 조정 가능하게 해 주세요.

## 참고 자료

https://docs.unity3d.com/6000.0/Documentation/ScriptReference/

https://dev.epicgames.com/documentation/en-us/unreal-engine/API


## 확인 기록

마지막 확인: 2026-10-14

Unity 6.0 힘 적용과 이동 제어가 가능함을 확인했습니다. 현재 Unity 코드는 물리 힘 대신 CharacterController 이동입니다.


확인 자료: https://docs.unity3d.com/6000.0/Documentation/ScriptReference/Rigidbody.AddForce.html
