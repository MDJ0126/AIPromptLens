---
{
  "category": "movement",
  "name": "점프 입력 버퍼",
  "en": "Jump buffer",
  "desc": "착지 직전 누른 점프를 기억해요.",
  "ko": "착지 직전의 점프 입력을 잠깐 저장하고 착지할 때 점프를 실행하는 입력 버퍼를 추가해 주세요.",
  "promptEn": "Buffer jump input shortly before landing and execute the jump upon landing.",
  "visual": "jump",
  "tags": [
    "action"
  ],
  "source": "https://raw.githubusercontent.com/NoelFB/Celeste/master/Source/Player/Player.cs",
  "slug": "jump",
  "id": 10,
  "genres": [
    "action",
    "rpg",
    "platformer",
    "adventure"
  ],
  "reviewedAt": "2026-10-14",
  "reviewStatus": "source-reviewed",
  "reviewScope": "Celeste 개발자 공개 Player.cs의 Jump 입력 검사와 ConsumeBuffer 호출을 확인했습니다.",
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
      "scope": "Celeste 개발자 공개 Player.cs의 Jump 입력 검사와 ConsumeBuffer 호출을 확인했습니다."
    }
  ]
}
---

# 점프 입력 버퍼

착지 직전 누른 점프를 기억해요.

## 핵심 구조

점프 입력 시각 저장 → 착지 후 유효 시간 검사 → 입력 소비

## Unity

```csharp
using UnityEngine;
using System.Collections;
public class JumpExample : MonoBehaviour
{
    float requested = float.NegativeInfinity;
    public bool TryBufferedJump(bool pressed, bool grounded)
    {
        if (pressed) requested = Time.time;
        if (!grounded || Time.time - requested > 0.15f) return false;
        requested = float.NegativeInfinity;
        return true; // 이동 처리에서 점프를 실행합니다.
    }
}
```

## Unreal

```cpp
double Requested = -1e9;
bool TryBufferedJump(bool bPressed, bool bGrounded)
{
    double Now = GetWorld()->GetTimeSeconds();
    if (bPressed) Requested = Now;
    if (!bGrounded || Now - Requested > 0.15) return false;
    Requested = -1e9;
    Jump();
    return true;
}
```

## 적용 방법

점프 버튼을 방금 눌렀는지를 매 프레임 전달해 주세요. 버튼을 계속 누르고 있는 상태가 아니라 누른 순간을 저장합니다. Unity에서는 함수가 true를 반환할 때 이동 코드에서 점프하면 됩니다.

Unreal에서는 ACharacter의 접지 상태를 갱신한 뒤 Tick에서 호출해 주세요. 중력과 바닥 판정은 캐릭터 이동 기능에서 처리합니다.

## Unreal 의존성

GameFramework/Character.h, Engine/World.h

## 요청 예시

착지 직전의 점프 입력을 잠깐 저장하고 착지할 때 점프를 실행하는 입력 버퍼를 추가해 주세요.

## 참고 자료

https://docs.unity3d.com/6000.0/Documentation/ScriptReference/

https://dev.epicgames.com/documentation/en-us/unreal-engine/API


