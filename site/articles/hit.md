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
public class HitExample : MonoBehaviour
{
    public Animator attacker, victim;
    IEnumerator HitStop()
    {
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
void StartHitStop()
{
    if (!AttackerMesh || !VictimMesh || GetWorldTimerManager().IsTimerActive(ResumeTimer)) return;
    AttackerMesh->bPauseAnims = VictimMesh->bPauseAnims = true;
    GetWorldTimerManager().SetTimer(ResumeTimer, this, &AMyActor::EndHitStop, 0.06f, false);
}
void EndHitStop()
{
    if (AttackerMesh) AttackerMesh->bPauseAnims = false;
    if (VictimMesh) VictimMesh->bPauseAnims = false;
}
```

## 적용 방법

Unity에서는 공격자와 대상의 Animator를 연결한 뒤, 공격이 맞았을 때 StartCoroutine(HitStop())을 호출해 주세요. Unreal에서는 AMyActor를 사용 중인 Actor 클래스 이름으로 바꾸고 StartHitStop을 호출합니다.

이 예제는 애니메이션을 잠깐 멈춥니다. 이동과 물리도 함께 멈추고 싶다면 해당 처리까지 연결해 주세요. Unity 예제는 실제 시간, Unreal 타이머는 게임 시간을 기준으로 하므로 슬로 모션과 함께 쓸 때 차이가 있습니다.

## Unreal 의존성

Components/SkeletalMeshComponent.h, TimerManager.h

## 요청 예시

공격이 적중하는 순간 공격자와 대상의 동작을 짧게 멈추는 히트 스톱을 적용해 주세요.

## 참고 자료

https://docs.unity3d.com/6000.0/Documentation/ScriptReference/

https://dev.epicgames.com/documentation/en-us/unreal-engine/API


## 확인 기록

마지막 확인: 2026-10-14

Unity 6.0 Animator.speed로 애니메이션 속도 제어가 가능함을 확인했습니다. 물리와 게임 전체 정지를 구현한 코드가 아니므로 명칭을 좁혔습니다.


확인 자료: https://docs.unity3d.com/6000.0/Documentation/ScriptReference/Animator-speed.html
