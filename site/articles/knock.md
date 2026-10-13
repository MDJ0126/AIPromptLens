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
  "reviewLimit": "구성 기능·소스 구조 대조입니다. Unity/Unreal 컴파일과 실행은 미검증입니다.",
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

public class KnockExample : MonoBehaviour {
    public CharacterController body;
    Vector3 knockVelocity;
    public void Knockback(Vector3 direction) {
        direction.y = 0f;
        knockVelocity = direction.normalized * 6f;
    }
    void Update() {
        if (!body) return;
        body.Move(knockVelocity * Time.deltaTime);
        knockVelocity = Vector3.MoveTowards(knockVelocity, Vector3.zero, 12f * Time.deltaTime);
    }
}
```

## Unreal

```cpp
void Knockback(ACharacter* Victim, FVector Direction) {
    if (!Victim) return;
    Direction.Z = 0;
    Victim->LaunchCharacter(Direction.GetSafeNormal() * 600.f, true, false);
}
```

## 연결 방법과 생략한 부분

Unity는 CharacterController를 지정하고 일반 이동과 넉백 이동을 함께 처리하도록 연결합니다. Unreal은 LaunchCharacter로 대상의 수평 속도를 덮어쓰고 수직 속도를 유지합니다. 두 예제의 감속·복귀 처리는 동일하지 않습니다. Rigidbody 또는 물리 Actor에는 별도의 힘 적용이 필요합니다.

## 코드 범위

Unity 코드는 KnockExample.cs로 저장할 MonoBehaviour 예시입니다. 필요한 참조는 Inspector에서 연결하거나 호출 측에서 전달합니다. Unreal 코드는 해당 Actor/Character/CameraActor 클래스 내부에 넣는 멤버 예시이며, 완전한 .h/.cpp 파일은 아닙니다. 함수 선언·UPROPERTY·입력 바인딩·Tick 연결은 프로젝트에 맞게 작성해야 합니다. UObject 참조는 실제 프로젝트에서 UPROPERTY 또는 적절한 수명 관리가 필요합니다. 예제 수치들은 설명을 위한 값입니다.

## Unreal 의존성

GameFramework/Character.h

## 검증 상태

미확인: 이 저장소에서는 Unity/Unreal 프로젝트 컴파일과 엔진 실행을 수행하지 않았습니다. 구조 학습을 위한 최소 예시이며 그대로 사용하기 전 해당 엔진 프로젝트에서 검증해야 합니다.

## 요청 예시

공격을 맞은 대상이 타격 방향으로 밀려나는 넉백을 적용하고 거리는 조정 가능하게 해 주세요.

## 참고 자료

https://docs.unity3d.com/6000.0/Documentation/ScriptReference/

https://dev.epicgames.com/documentation/en-us/unreal-engine/API


## 확인 기록

마지막 확인: 2026-10-14

Unity 6.0 힘 적용과 이동 제어가 가능함을 확인했습니다. 현재 Unity 코드는 물리 힘 대신 CharacterController 이동입니다.

구성 기능·소스 구조 대조입니다. Unity/Unreal 컴파일과 실행은 미검증입니다.

확인 자료: https://docs.unity3d.com/6000.0/Documentation/ScriptReference/Rigidbody.AddForce.html
