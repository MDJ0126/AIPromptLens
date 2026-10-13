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

public class CoyoteExample : MonoBehaviour {
    float lastGrounded = float.NegativeInfinity;
    bool used;
    public bool TryJump(bool grounded, bool pressed) {
        if (grounded) { lastGrounded = Time.time; used = false; }
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
bool TryCoyoteJump(bool bGrounded, bool bPressed) {
    double Now = GetWorld()->GetTimeSeconds();
    if (bGrounded) { LastGrounded = Now; bUsed = false; }
    if (!bPressed || bUsed || Now - LastGrounded > 0.12) return false;
    bUsed = true;
    LaunchCharacter(FVector(0, 0, 500), false, true);
    return true;
}
```

## 연결 방법과 생략한 부분

Unity: 매 프레임 바닥 상태와 이번 프레임에 누른 점프 입력을 넘깁니다. true를 반환하면 이동 코드에서 점프 수직 속도를 적용합니다. Unreal: ACharacter 멤버로 넣고 매 Tick 호출합니다. 일반 Jump는 공중에서 거부될 수 있어 이 예시는 LaunchCharacter를 사용합니다. 입력 소비와 접지 상태는 이동 루프에 연결해야 합니다.

## 코드 범위

Unity 코드는 CoyoteExample.cs로 저장할 MonoBehaviour 예시입니다. 필요한 참조는 Inspector에서 연결하거나 호출 측에서 전달합니다. Unreal 코드는 해당 Actor/Character/CameraActor 클래스 내부에 넣는 멤버 예시이며, 완전한 .h/.cpp 파일은 아닙니다. 함수 선언·UPROPERTY·입력 바인딩·Tick 연결은 프로젝트에 맞게 작성해야 합니다. UObject 참조는 실제 프로젝트에서 UPROPERTY 또는 적절한 수명 관리가 필요합니다. 예제 수치들은 설명을 위한 값입니다.

## Unreal 의존성

GameFramework/Character.h, Engine/World.h

## 검증 상태

미확인: 이 저장소에서는 Unity/Unreal 프로젝트 컴파일과 엔진 실행을 수행하지 않았습니다. 구조 학습을 위한 최소 예시이며 그대로 사용하기 전 해당 엔진 프로젝트에서 검증해야 합니다.

## 요청 예시

발판에서 떨어진 직후 짧은 시간 동안 점프 입력을 허용하는 코요테 타임을 추가해 주세요.

## 참고 자료

https://raw.githubusercontent.com/NoelFB/Celeste/master/Source/Player/Player.cs
확인 범위: Celeste 개발자 공개 Player.cs의 jumpGraceTimer 갱신과 점프 허용 분기를 확인했습니다.

## 확인 기록

마지막 확인: 2026-10-14

Celeste 개발자 공개 Player.cs의 jumpGraceTimer 갱신과 점프 허용 분기를 확인했습니다.


확인 자료: https://raw.githubusercontent.com/NoelFB/Celeste/master/Source/Player/Player.cs
