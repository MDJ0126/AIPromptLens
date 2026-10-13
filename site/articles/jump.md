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

public class JumpExample : MonoBehaviour {
    float requested = float.NegativeInfinity;
    public bool TryBufferedJump(bool pressed, bool grounded) {
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
bool TryBufferedJump(bool bPressed, bool bGrounded) {
    double Now = GetWorld()->GetTimeSeconds();
    if (bPressed) Requested = Now;
    if (!bGrounded || Now - Requested > 0.15) return false;
    Requested = -1e9;
    Jump();
    return true;
}
```

## 연결 방법과 생략한 부분

Unity: 매 프레임 호출하고 true일 때 이동 코드에서 점프합니다. Unreal: ACharacter 멤버로 넣고 접지 판정 갱신 후 매 Tick 호출합니다. 입력은 계속 누르고 있는 상태가 아니라 누른 순간을 넘깁니다. 중력과 접지 판정은 생략했습니다.

## 코드 범위

Unity 코드는 JumpExample.cs로 저장할 MonoBehaviour 예시입니다. 필요한 참조는 Inspector에서 연결하거나 호출 측에서 전달합니다. Unreal 코드는 해당 Actor/Character/CameraActor 클래스 내부에 넣는 멤버 예시이며, 완전한 .h/.cpp 파일은 아닙니다. 함수 선언·UPROPERTY·입력 바인딩·Tick 연결은 프로젝트에 맞게 작성해야 합니다. UObject 참조는 실제 프로젝트에서 UPROPERTY 또는 적절한 수명 관리가 필요합니다. 예제 수치들은 설명을 위한 값입니다.

## Unreal 의존성

GameFramework/Character.h, Engine/World.h

## 검증 상태

미확인: 이 저장소에서는 Unity/Unreal 프로젝트 컴파일과 엔진 실행을 수행하지 않았습니다. 구조 학습을 위한 최소 예시이며 그대로 사용하기 전 해당 엔진 프로젝트에서 검증해야 합니다.

## 요청 예시

착지 직전의 점프 입력을 잠깐 저장하고 착지할 때 점프를 실행하는 입력 버퍼를 추가해 주세요.

## 참고 자료

https://docs.unity3d.com/6000.0/Documentation/ScriptReference/

https://dev.epicgames.com/documentation/en-us/unreal-engine/API


## 확인 기록

마지막 확인: 2026-10-14

Celeste 개발자 공개 Player.cs의 Jump 입력 검사와 ConsumeBuffer 호출을 확인했습니다.


확인 자료: https://raw.githubusercontent.com/NoelFB/Celeste/master/Source/Player/Player.cs
