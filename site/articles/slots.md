---
{
  "category": "ai",
  "name": "공격 슬롯",
  "en": "Attack slots",
  "desc": "적마다 설 자리를 나눠 겹침을 줄여요.",
  "ko": "플레이어 주변에 공격 슬롯을 놓고 적이 빈 슬롯을 예약하도록 만들어 주세요. 슬롯을 못 받은 적은 대기하게 해 주세요.",
  "promptEn": "Assign enemies to reserved attack slots around the player and make unassigned enemies wait.",
  "visual": "slots",
  "tags": [
    "action",
    "strategy"
  ],
  "source": "https://www.gameaipro.com/GameAIPro/GameAIPro_Chapter28_Beyond_the_Kung-Fu_Circle_A_Flexible_System_for_Managing_NPC_Attacks.pdf",
  "slug": "slots",
  "id": 12,
  "genres": [
    "action",
    "rpg"
  ],
  "reviewedAt": "2026-10-14",
  "reviewStatus": "source-reviewed",
  "reviewScope": "Game AI Pro 28장의 NPC 공격 관리와 위치·용량 배분 설명을 확인했습니다. 예제는 단순 예약 배열입니다.",
  "reviewSources": [
    {
      "url": "https://www.gameaipro.com/GameAIPro/GameAIPro_Chapter28_Beyond_the_Kung-Fu_Circle_A_Flexible_System_for_Managing_NPC_Attacks.pdf",
      "method": "원문 자료 대조"
    }
  ],
  "reviewHistory": [
    {
      "date": "2026-10-14",
      "action": "출처 및 설명 대조",
      "scope": "Game AI Pro 28장의 NPC 공격 관리와 위치·용량 배분 설명을 확인했습니다. 예제는 단순 예약 배열입니다."
    }
  ]
}
---

# 공격 슬롯

적마다 설 자리를 나눠 겹침을 줄여요.

## 핵심 구조

빈 슬롯 찾기 → 예약 → 해당 자리 반환 → 퇴장 시 해제

## Unity

```csharp
using UnityEngine;
using System.Collections;

public class SlotsExample : MonoBehaviour {
    bool[] occupied = new bool[8];
    public int ReserveSlot() {
        for (int i = 0; i < occupied.Length; i++) {
            if (occupied[i]) continue;
            occupied[i] = true;
            return i;
        }
        return -1; // 빈 자리가 없으면 대기합니다.
    }
    public void ReleaseSlot(int index) {
        if (index >= 0 && index < occupied.Length) occupied[index] = false;
    }
}
```

## Unreal

```cpp
TArray<bool> Occupied = { false, false, false, false, false, false, false, false };
int32 ReserveSlot() {
    for (int32 i = 0; i < Occupied.Num(); ++i) {
        if (Occupied[i]) continue;
        Occupied[i] = true;
        return i;
    }
    return INDEX_NONE;
}
void ReleaseSlot(int32 Index) {
    if (Occupied.IsValidIndex(Index)) Occupied[Index] = false;
}
```

## 연결 방법과 생략한 부분

중앙 관리자 하나가 예약 상태를 소유합니다. 반환한 번호를 적이 보관하고 사망·대기 전환 시 해제합니다. 슬롯 위치는 중심 + 원주 방향 × 반지름으로 계산하고 이동 기능에 전달합니다. 거리 최적화·슬롯 접근 가능성·동시에 공격할 수 있는 수의 제한은 생략했습니다.

## 코드 범위

Unity 코드는 SlotsExample.cs로 저장할 MonoBehaviour 예시입니다. 필요한 참조는 Inspector에서 연결하거나 호출 측에서 전달합니다. Unreal 코드는 해당 Actor/Character/CameraActor 클래스 내부에 넣는 멤버 예시이며, 완전한 .h/.cpp 파일은 아닙니다. 함수 선언·UPROPERTY·입력 바인딩·Tick 연결은 프로젝트에 맞게 작성해야 합니다. UObject 참조는 실제 프로젝트에서 UPROPERTY 또는 적절한 수명 관리가 필요합니다. 예제 수치들은 설명을 위한 값입니다.

## Unreal 의존성

CoreMinimal.h

## 검증 상태

미확인: 이 저장소에서는 Unity/Unreal 프로젝트 컴파일과 엔진 실행을 수행하지 않았습니다. 구조 학습을 위한 최소 예시이며 그대로 사용하기 전 해당 엔진 프로젝트에서 검증해야 합니다.

## 요청 예시

플레이어 주변에 공격 슬롯을 놓고 적이 빈 슬롯을 예약하도록 만들어 주세요. 슬롯을 못 받은 적은 대기하게 해 주세요.

## 참고 자료

https://docs.unity3d.com/6000.0/Documentation/ScriptReference/

https://dev.epicgames.com/documentation/en-us/unreal-engine/API

https://www.gameaipro.com/GameAIPro/GameAIPro_Chapter28_Beyond_the_Kung-Fu_Circle_A_Flexible_System_for_Managing_NPC_Attacks.pdf


## 확인 기록

마지막 확인: 2026-10-14

Game AI Pro 28장의 NPC 공격 관리와 위치·용량 배분 설명을 확인했습니다. 예제는 단순 예약 배열입니다.


확인 자료: https://www.gameaipro.com/GameAIPro/GameAIPro_Chapter28_Beyond_the_Kung-Fu_Circle_A_Flexible_System_for_Managing_NPC_Attacks.pdf
