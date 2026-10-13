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

## 연결 방법과 생략한 부분

Unity: 카메라에 붙이고 player와 target을 지정합니다. Unreal: ACameraActor 파생 클래스에서 Player/Target을 지정하고 Tick에서 호출합니다. 두 대상이 화면에 모두 들어오도록 거리와 FOV를 조정하는 처리, 벽 충돌, 부드러운 회전은 생략했습니다.

## 코드 범위

Unity 코드는 LockExample.cs로 저장할 MonoBehaviour 예시입니다. 필요한 참조는 Inspector에서 연결하거나 호출 측에서 전달합니다. Unreal 코드는 해당 Actor/Character/CameraActor 클래스 내부에 넣는 멤버 예시이며, 완전한 .h/.cpp 파일은 아닙니다. 함수 선언·UPROPERTY·입력 바인딩·Tick 연결은 프로젝트에 맞게 작성해야 합니다. UObject 참조는 실제 프로젝트에서 UPROPERTY 또는 적절한 수명 관리가 필요합니다. 예제 수치들은 설명을 위한 값입니다.

## Unreal 의존성

Camera/CameraActor.h

## 검증 상태

미확인: 이 저장소에서는 Unity/Unreal 프로젝트 컴파일과 엔진 실행을 수행하지 않았습니다. 구조 학습을 위한 최소 예시이며 그대로 사용하기 전 해당 엔진 프로젝트에서 검증해야 합니다.

## 요청 예시

플레이어와 선택한 적을 화면에 유지하고 대상 주변을 회전할 수 있는 락온 카메라를 만들어 주세요.

## 참고 자료

https://docs.unity3d.com/6000.0/Documentation/ScriptReference/

https://dev.epicgames.com/documentation/en-us/unreal-engine/API


## 확인 기록

마지막 확인: 2026-10-14

Unity 6.0 Transform.LookAt의 목표 방향 회전을 확인했습니다. 락온 선택·해제·가시성 관리는 직접 구현합니다.


확인 자료: https://docs.unity3d.com/6000.0/Documentation/ScriptReference/Transform.LookAt.html
