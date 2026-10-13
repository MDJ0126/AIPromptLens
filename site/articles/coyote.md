---
{
  "category": "movement",
  "name": "코요테 타임",
  "en": "Coyote time",
  "desc": "발판을 벗어난 직후에도 점프할 수 있어요.",
  "ko": "발판에서 떨어진 직후 짧은 시간 동안 점프 입력을 허용하는 코요테 타임을 추가해 주세요.",
  "promptEn": "Add coyote time so a jump input is accepted briefly after leaving a ledge.",
  "visual": "coyote",
  "tags": [
    "beginner",
    "action"
  ],
  "source": "https://raw.githubusercontent.com/NoelFB/Celeste/master/Source/Player/Player.cs",
  "slug": "coyote",
  "id": 9,
  "genres": [
    "platformer",
    "action"
  ],
  "reviewedAt": "2026-10-14",
  "reviewStatus": "source-reviewed",
  "reviewType": "구현·설계 패턴",
  "reviewScope": "Celeste 개발자 공개 Player.cs의 jumpGraceTimer 갱신과 점프 허용 분기를 확인했습니다.",
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
      "scope": "Celeste 개발자 공개 Player.cs의 jumpGraceTimer 갱신과 점프 허용 분기를 확인했습니다."
    }
  ]
}
---

# 코요테 타임

발판을 벗어난 직후에도 점프할 수 있어요.

## 핵심 구조

바닥에 있던 마지막 시간 기록 → 이탈 후 허용 시간 검사 → 한 번만 점프

## Unity

```csharp
using UnityEngine;
using System.Collections;
public class CoyoteExample : MonoBehaviour
{
    float lastGrounded = float.NegativeInfinity;
    bool used;
    public bool TryJump(bool grounded, bool pressed)
    {
        if (grounded)
        {
            lastGrounded = Time.time; used = false;
        }
        if (!pressed || used || Time.time - lastGrounded > 0.12f) return false;
        used = true;
        return true; // 호출 측에서 수직 속도를 설정합니다.
    }
}
```

## Unreal

```cpp
double LastGrounded = -1e9;
bool bUsed = false;
bool TryCoyoteJump(bool bGrounded, bool bPressed)
{
    double Now = GetWorld()->GetTimeSeconds();
    if (bGrounded)
    {
        LastGrounded = Now; bUsed = false;
    }
    if (!bPressed || bUsed || Now - LastGrounded > 0.12) return false;
    bUsed = true;
    LaunchCharacter(FVector(0, 0, 500), false, true);
    return true;
}
```

## 적용 방법

매 프레임 캐릭터가 바닥에 닿아 있는지와 점프 버튼을 방금 눌렀는지를 전달해 주세요. Unity에서는 함수가 true를 반환할 때 이동 코드에서 점프 속도를 적용하면 됩니다.

Unreal에서는 ACharacter의 Tick에서 호출합니다. 공중에서는 일반 Jump가 실행되지 않을 수 있어 예제는 LaunchCharacter를 사용합니다. 점프 입력을 한 번 사용한 뒤 다시 소비하지 않도록 이동 처리와 연결해 주세요.

## Unreal 의존성

GameFramework/Character.h, Engine/World.h

## 요청 예시

발판에서 떨어진 직후 짧은 시간 동안 점프 입력을 허용하는 코요테 타임을 추가해 주세요.

## 참고 자료

https://raw.githubusercontent.com/NoelFB/Celeste/master/Source/Player/Player.cs
확인 범위: Celeste 개발자 공개 Player.cs의 jumpGraceTimer 갱신과 점프 허용 분기를 확인했습니다.

## 확인 기록

마지막 확인: 2026-10-14

Celeste 개발자 공개 Player.cs의 jumpGraceTimer 갱신과 점프 허용 분기를 확인했습니다.


확인 자료: https://raw.githubusercontent.com/NoelFB/Celeste/master/Source/Player/Player.cs
