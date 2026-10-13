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
public class SwingExample : MonoBehaviour
{
    public Transform anchor;
    public float ropeLength = 5f;
    Vector3 velocity;
    void FixedUpdate()
    {
        if (!anchor) return;
        velocity += Physics.gravity * Time.fixedDeltaTime;
        Vector3 next = transform.position + velocity * Time.fixedDeltaTime;
        Vector3 radial = next - anchor.position;
        if (radial.magnitude > ropeLength)
        {
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
void UpdateSwing(float Dt)
{
    Velocity.Z += GetWorld()->GetGravityZ() * Dt;
    FVector Next = GetActorLocation() + Velocity * Dt;
    FVector Radial = Next - Anchor;
    if (Radial.Size() > RopeLength)
    {
        FVector N = Radial.GetSafeNormal();
        Next = Anchor + N * RopeLength;
        Velocity -= N * FMath::Max(0.f, FVector::DotProduct(Velocity, N));
    }
    SetActorLocation(Next);
}
```

## 적용 방법

줄이 팽팽해졌을 때 캐릭터가 줄 길이 바깥으로 나가지 않도록 위치를 보정합니다. Unity에서는 Rigidbody 없이, Unreal에서는 별도의 Actor에서 실행하는 예제입니다.

고정된 시간 간격이나 충분히 작은 간격으로 갱신해 주세요. 물리 조인트를 사용하는 방식과는 다르며, 입력과 충돌, 줄의 모습은 따로 연결해야 합니다.

## Unreal 의존성

GameFramework/Actor.h, Engine/World.h

## 요청 예시

선택한 연결 지점을 기준으로 캐릭터가 스윙하도록 만들고 줄 길이와 이동 보정은 조정 가능하게 해 주세요.

## 참고 자료

https://docs.unity3d.com/6000.0/Documentation/ScriptReference/

https://dev.epicgames.com/documentation/en-us/unreal-engine/API


