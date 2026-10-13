---
{
  "category": "movement",
  "name": "그래플 스윙",
  "en": "Grapple swing",
  "desc": "연결 지점을 중심으로 곡선을 그리며 이동해요.",
  "ko": "선택한 연결 지점을 기준으로 캐릭터가 스윙하도록 만들고 줄 길이와 이동 보정은 조정 가능하게 해 주세요.",
  "promptEn": "Create grapple swinging around a chosen anchor, with configurable rope length and movement assistance.",
  "visual": "swing",
  "tags": [
    "action"
  ],
  "source": "https://www.gdcvault.com/play/1026422",
  "slug": "swing",
  "id": 11,
  "genres": [
    "action",
    "platformer",
    "adventure"
  ],
  "reviewedAt": "2026-10-14",
  "reviewStatus": "source-reviewed",
  "reviewScope": "Insomniac 개발자의 GDC 2019 발표 소개에서 스윙 이동의 존재를 확인했습니다. 예제는 발표 구현이 아닌 별도 교육용 제약 모델입니다.",
  "reviewLimit": "구성 기능·소스 구조 대조입니다. Unity/Unreal 컴파일과 실행은 미검증입니다.",
  "reviewSources": [
    {
      "url": "https://www.gdcvault.com/play/1026422",
      "method": "검색에 노출된 원문 일부 대조"
    }
  ],
  "reviewHistory": [
    {
      "date": "2026-10-14",
      "action": "출처 및 설명 대조",
      "scope": "Insomniac 개발자의 GDC 2019 발표 소개에서 스윙 이동의 존재를 확인했습니다. 예제는 발표 구현이 아닌 별도 교육용 제약 모델입니다."
    }
  ]
}
---

# 그래플 스윙

연결 지점을 중심으로 곡선을 그리며 이동해요.

## 핵심 구조

중력으로 속도 변경 → 위치 적분 → 줄 길이 제한 → 바깥쪽 속도 제거

## Unity

```csharp
using UnityEngine;
using System.Collections;

public class SwingExample : MonoBehaviour {
    public Transform anchor;
    public float ropeLength = 5f;
    Vector3 velocity;
    void FixedUpdate() {
        if (!anchor) return;
        velocity += Physics.gravity * Time.fixedDeltaTime;
        Vector3 next = transform.position + velocity * Time.fixedDeltaTime;
        Vector3 radial = next - anchor.position;
        if (radial.magnitude > ropeLength) {
            Vector3 n = radial.normalized;
            next = anchor.position + n * ropeLength;
            velocity -= n * Mathf.Max(0, Vector3.Dot(velocity, n));
        }
        transform.position = next;
    }
}
```

## Unreal

```cpp
FVector Anchor = FVector::ZeroVector;
FVector Velocity = FVector::ZeroVector;
float RopeLength = 500;
void UpdateSwing(float Dt) {
    Velocity.Z += GetWorld()->GetGravityZ() * Dt;
    FVector Next = GetActorLocation() + Velocity * Dt;
    FVector Radial = Next - Anchor;
    if (Radial.Size() > RopeLength) {
        FVector N = Radial.GetSafeNormal();
        Next = Anchor + N * RopeLength;
        Velocity -= N * FMath::Max(0.f, FVector::DotProduct(Velocity, N));
    }
    SetActorLocation(Next);
}
```

## 연결 방법과 생략한 부분

줄이 팽팽할 때 바깥으로 늘어나지 않도록 제한하는 교육용 위치 보정입니다. 실제 물리 조인트가 아닙니다. Unity는 Rigidbody 없이, Unreal은 별도 AActor에서 실행합니다. 충돌·플레이어 입력·줄 렌더링·피벗 이동·CharacterMovement·네트워크는 생략했습니다. 고정 또는 충분히 작은 시간 간격이 필요합니다.

## 코드 범위

Unity 코드는 SwingExample.cs로 저장할 MonoBehaviour 예시입니다. 필요한 참조는 Inspector에서 연결하거나 호출 측에서 전달합니다. Unreal 코드는 해당 Actor/Character/CameraActor 클래스 내부에 넣는 멤버 예시이며, 완전한 .h/.cpp 파일은 아닙니다. 함수 선언·UPROPERTY·입력 바인딩·Tick 연결은 프로젝트에 맞게 작성해야 합니다. UObject 참조는 실제 프로젝트에서 UPROPERTY 또는 적절한 수명 관리가 필요합니다. 예제 수치들은 설명을 위한 값입니다.

## Unreal 의존성

GameFramework/Actor.h, Engine/World.h

## 검증 상태

미확인: 이 저장소에서는 Unity/Unreal 프로젝트 컴파일과 엔진 실행을 수행하지 않았습니다. 구조 학습을 위한 최소 예시이며 그대로 사용하기 전 해당 엔진 프로젝트에서 검증해야 합니다.

## 요청 예시

선택한 연결 지점을 기준으로 캐릭터가 스윙하도록 만들고 줄 길이와 이동 보정은 조정 가능하게 해 주세요.

## 참고 자료

https://docs.unity3d.com/6000.0/Documentation/ScriptReference/

https://dev.epicgames.com/documentation/en-us/unreal-engine/API


## 확인 기록

마지막 확인: 2026-10-14

Insomniac 개발자의 GDC 2019 발표 소개에서 스윙 이동의 존재를 확인했습니다. 예제는 발표 구현이 아닌 별도 교육용 제약 모델입니다.

구성 기능·소스 구조 대조입니다. Unity/Unreal 컴파일과 실행은 미검증입니다.

확인 자료: https://www.gdcvault.com/play/1026422
