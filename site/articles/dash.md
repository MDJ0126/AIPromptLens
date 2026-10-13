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

## 연결 방법과 생략한 부분

Unity는 CharacterController를 지정합니다. Unreal은 AActor 또는 ACharacter의 Tick에서 UpdateDash를 호출합니다. 충돌 검사를 켠 위치 이동의 간단한 예시입니다. CharacterMovement와의 경쟁, 네트워크 예측, 중력, 재사용 시간은 생략했습니다. 대시 동안 일반 이동이 동시에 적용되지 않도록 연결해야 합니다.

## 코드 범위

Unity 코드는 DashExample.cs로 저장할 MonoBehaviour 예시입니다. 필요한 참조는 Inspector에서 연결하거나 호출 측에서 전달합니다. Unreal 코드는 해당 Actor/Character/CameraActor 클래스 내부에 넣는 멤버 예시이며, 완전한 .h/.cpp 파일은 아닙니다. 함수 선언·UPROPERTY·입력 바인딩·Tick 연결은 프로젝트에 맞게 작성해야 합니다. UObject 참조는 실제 프로젝트에서 UPROPERTY 또는 적절한 수명 관리가 필요합니다. 예제 수치들은 설명을 위한 값입니다.

## Unreal 의존성

GameFramework/Actor.h

## 검증 상태

미확인: 이 저장소에서는 Unity/Unreal 프로젝트 컴파일과 엔진 실행을 수행하지 않았습니다. 구조 학습을 위한 최소 예시이며 그대로 사용하기 전 해당 엔진 프로젝트에서 검증해야 합니다.

## 요청 예시

입력 방향으로 짧게 빠르게 이동하는 대시를 만들고 거리와 재사용 시간을 조정 가능하게 해 주세요.

## 참고 자료

https://raw.githubusercontent.com/NoelFB/Celeste/master/Source/Player/Player.cs
확인 범위: Celeste 개발자 공개 Player.cs의 Dash 상태·속도 처리를 확인했습니다. 예제는 동일 게임 구현이 아닙니다.

## 확인 기록

마지막 확인: 2026-10-14

Celeste 개발자 공개 Player.cs의 Dash 상태·속도 처리를 확인했습니다. 예제는 동일 게임 구현이 아닙니다.


확인 자료: https://raw.githubusercontent.com/NoelFB/Celeste/master/Source/Player/Player.cs
