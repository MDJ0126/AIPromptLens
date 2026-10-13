---
{
  "category": "combat",
  "name": "애니메이션 일시 정지",
  "en": "Animation pause",
  "desc": "짧게 애니메이션 재생을 멈추어 동작의 순간을 강조하는 구성입니다. 게임 전체의 히트 스톱과는 범위가 다릅니다.",
  "ko": "공격이 적중하는 순간 공격자와 대상의 동작을 짧게 멈추는 히트 스톱을 적용해 주세요.",
  "promptEn": "Apply a brief hit stop to the attacker and target when a strike connects.",
  "visual": "hit",
  "tags": [
    "beginner",
    "action"
  ],
  "source": "https://docs.unity3d.com/6000.0/Documentation/ScriptReference/Animator-speed.html",
  "slug": "hit",
  "id": 4,
  "genres": [
    "action",
    "rpg",
    "shooter"
  ],
  "reviewedAt": "2026-10-14",
  "reviewStatus": "source-reviewed",
  "reviewScope": "Unity 6.0 Animator.speed로 애니메이션 속도 제어가 가능함을 확인했습니다. 물리와 게임 전체 정지를 구현한 코드가 아니므로 명칭을 좁혔습니다.",
  "reviewLimit": "구성 기능·소스 구조 대조입니다. Unity/Unreal 컴파일과 실행은 미검증입니다.",
  "reviewSources": [
    {
      "url": "https://docs.unity3d.com/6000.0/Documentation/ScriptReference/Animator-speed.html",
      "method": "원문 자료 대조"
    }
  ],
  "reviewHistory": [
    {
      "date": "2026-10-14",
      "action": "출처 및 설명 대조",
      "scope": "Unity 6.0 Animator.speed로 애니메이션 속도 제어가 가능함을 확인했습니다. 물리와 게임 전체 정지를 구현한 코드가 아니므로 명칭을 좁혔습니다."
    }
  ]
}
---

# 애니메이션 일시 정지

타격 순간 잠깐 멈춰 충격을 강조해요.

## 핵심 구조

공격 적중 이벤트 → 두 캐릭터의 애니메이션 정지 → 짧은 실제 시간 후 복구

## Unity

```csharp
using UnityEngine;
using System.Collections;

public class HitExample : MonoBehaviour {
    public Animator attacker, victim;
    IEnumerator HitStop() {
        if (!attacker || !victim) yield break;
        float a = attacker.speed, v = victim.speed;
        attacker.speed = victim.speed = 0f;
        yield return new WaitForSecondsRealtime(0.06f);
        attacker.speed = a;
        victim.speed = v;
    }
}
```

## Unreal

```cpp
USkeletalMeshComponent* AttackerMesh = nullptr;
USkeletalMeshComponent* VictimMesh = nullptr;
FTimerHandle ResumeTimer;
void StartHitStop() {
    if (!AttackerMesh || !VictimMesh || GetWorldTimerManager().IsTimerActive(ResumeTimer)) return;
    AttackerMesh->bPauseAnims = VictimMesh->bPauseAnims = true;
    GetWorldTimerManager().SetTimer(ResumeTimer, this, &AMyActor::EndHitStop, 0.06f, false);
}
void EndHitStop() {
    if (AttackerMesh) AttackerMesh->bPauseAnims = false;
    if (VictimMesh) VictimMesh->bPauseAnims = false;
}
```

## 연결 방법과 생략한 부분

Unity: 두 Animator를 지정하고 중복 실행을 막은 뒤 StartCoroutine(HitStop())을 호출합니다. Unreal: AMyActor를 실제 소유 Actor 클래스명으로 바꾸고 적중 시 StartHitStop을 호출합니다. 이 예시는 애니메이션만 잠깐 멈추며 이동·물리·판정 정지는 별도로 구현해야 합니다. Unreal 타이머는 게임 시간이고 Unity 예시는 실제 시간이라 시간 축이 다릅니다. 다른 시스템이 이미 정지한 상태를 복원하는 처리는 생략했습니다.

## 코드 범위

Unity 코드는 HitExample.cs로 저장할 MonoBehaviour 예시입니다. 필요한 참조는 Inspector에서 연결하거나 호출 측에서 전달합니다. Unreal 코드는 해당 Actor/Character/CameraActor 클래스 내부에 넣는 멤버 예시이며, 완전한 .h/.cpp 파일은 아닙니다. 함수 선언·UPROPERTY·입력 바인딩·Tick 연결은 프로젝트에 맞게 작성해야 합니다. UObject 참조는 실제 프로젝트에서 UPROPERTY 또는 적절한 수명 관리가 필요합니다. 예제 수치들은 설명을 위한 값입니다.

## Unreal 의존성

Components/SkeletalMeshComponent.h, TimerManager.h

## 검증 상태

미확인: 이 저장소에서는 Unity/Unreal 프로젝트 컴파일과 엔진 실행을 수행하지 않았습니다. 구조 학습을 위한 최소 예시이며 그대로 사용하기 전 해당 엔진 프로젝트에서 검증해야 합니다.

## 요청 예시

공격이 적중하는 순간 공격자와 대상의 동작을 짧게 멈추는 히트 스톱을 적용해 주세요.

## 참고 자료

https://docs.unity3d.com/6000.0/Documentation/ScriptReference/

https://dev.epicgames.com/documentation/en-us/unreal-engine/API


## 확인 기록

마지막 확인: 2026-10-14

Unity 6.0 Animator.speed로 애니메이션 속도 제어가 가능함을 확인했습니다. 물리와 게임 전체 정지를 구현한 코드가 아니므로 명칭을 좁혔습니다.

구성 기능·소스 구조 대조입니다. Unity/Unreal 컴파일과 실행은 미검증입니다.

확인 자료: https://docs.unity3d.com/6000.0/Documentation/ScriptReference/Animator-speed.html
