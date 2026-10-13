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
public class SlotsExample : MonoBehaviour
{
    bool[] occupied = new bool[8];
    public int ReserveSlot()
    {
        for (int i = 0; i < occupied.Length; i++)
        {
            if (occupied[i]) continue;
            occupied[i] = true;
            return i;
        }
        return -1; // 빈 자리가 없으면 대기합니다.
    }
    public void ReleaseSlot(int index)
    {
        if (index >= 0 && index < occupied.Length) occupied[index] = false;
    }
}
```

## Unreal

```cpp
TArray<bool> Occupied =
{
    false, false, false, false, false, false, false, false
}
;
int32 ReserveSlot()
{
    for (int32 i = 0; i < Occupied.Num(); ++i)
    {
        if (Occupied[i]) continue;
        Occupied[i] = true;
        return i;
    }
    return INDEX_NONE;
}
void ReleaseSlot(int32 Index)
{
    if (Occupied.IsValidIndex(Index)) Occupied[Index] = false;
}
```

## 적용 방법

중앙 관리자 한 곳에서 공격 자리의 사용 여부를 관리합니다. 적은 배정받은 번호를 보관하고, 죽거나 공격 대기를 끝낼 때 그 자리를 반환해 주세요.

자리의 위치는 대상의 중심에서 원을 따라 일정 거리 떨어진 점으로 계산해 이동 기능에 전달합니다. 접근할 수 없는 자리의 처리나 동시 공격 인원 제한은 게임 규칙에 맞춰 추가합니다.

## Unreal 의존성

CoreMinimal.h

## 요청 예시

플레이어 주변에 공격 슬롯을 놓고 적이 빈 슬롯을 예약하도록 만들어 주세요. 슬롯을 못 받은 적은 대기하게 해 주세요.

## 참고 자료

https://docs.unity3d.com/6000.0/Documentation/ScriptReference/

https://dev.epicgames.com/documentation/en-us/unreal-engine/API

https://www.gameaipro.com/GameAIPro/GameAIPro_Chapter28_Beyond_the_Kung-Fu_Circle_A_Flexible_System_for_Managing_NPC_Attacks.pdf


