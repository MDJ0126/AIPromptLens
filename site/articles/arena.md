---
{
  "category": "level",
  "name": "전투 아레나",
  "en": "Combat arena",
  "desc": "전투를 위한 공간과 동선을 설계해요.",
  "ko": "중앙 전투 공간, 가장자리 엄폐물, 우회 동선이 있는 전투 아레나를 구성해 주세요.",
  "promptEn": "Design a combat arena with a central fighting space, cover at the edges, and flanking routes.",
  "visual": "arena",
  "tags": [
    "action"
  ],
  "source": "https://dev.epicgames.com/documentation/fortnite/tmnt-enemy-encounters-and-obstacles-in-unreal-editor-for-fortnite?lang=en-US",
  "slug": "arena",
  "id": 18,
  "genres": [
    "action",
    "rpg",
    "adventure",
    "horror",
    "puzzle"
  ],
  "reviewedAt": "2026-10-14",
  "reviewStatus": "source-reviewed",
  "reviewType": "구현·설계 패턴",
  "reviewScope": "Epic UEFN TMNT의 전투 공간·진입·종료 사례를 확인했습니다. 일반 Unity/Unreal 예제는 엄폐물 배치만 다룹니다.",
  "reviewVersion": "UEFN 공식 문서",
  "reviewSources": [
    {
      "url": "https://dev.epicgames.com/documentation/fortnite/tmnt-enemy-encounters-and-obstacles-in-unreal-editor-for-fortnite?lang=en-US",
      "method": "원문 자료 대조"
    }
  ],
  "reviewHistory": [
    {
      "date": "2026-10-14",
      "action": "출처 및 설명 대조",
      "scope": "Epic UEFN TMNT의 전투 공간·진입·종료 사례를 확인했습니다. 일반 Unity/Unreal 예제는 엄폐물 배치만 다룹니다."
    }
  ]
}
---

# 전투 아레나

전투를 위한 공간과 동선을 설계해요.

## 핵심 구조

중앙 전투 공간 기준 → 가장자리에 엄폐물 배치 → 우회할 간격 확보

## Unity

```csharp
using UnityEngine;
using System.Collections;
public class ArenaExample : MonoBehaviour
{
    public GameObject coverPrefab;
    public void BuildArena(Vector3 center)
    {
        for (int i = 0; i < 4; i++)
        {
            float angle = i * Mathf.PI * 0.5f;
            Vector3 offset = new Vector3(Mathf.Cos(angle), 0, Mathf.Sin(angle)) * 8f;
            Instantiate(coverPrefab, center + offset, Quaternion.identity);
        }
    }
}
```

## Unreal

```cpp
TSubclassOf<AActor> CoverClass;
void BuildArena(FVector Center)
{
    if (!CoverClass) return;
    for (int32 i = 0; i < 4; ++i)
    {
        float Angle = i * PI * 0.5f;
        FVector Offset(FMath::Cos(Angle) * 800, FMath::Sin(Angle) * 800, 0);
        GetWorld()->SpawnActor<AActor>(CoverClass, Center + Offset, FRotator::ZeroRotator);
    }
}
```

## 적용 방법

Unity에서는 coverPrefab에, Unreal에서는 CoverClass에 엄폐물 에셋을 지정해 주세요. BuildArena를 한 번 호출하면 전투 공간의 중앙 주변에 엄폐물이 배치됩니다.

반복 호출하면 엄폐물이 겹쳐 생성됩니다. 바닥과 출입구, 이동 경로는 따로 구성하고 엄폐물의 크기와 간격을 게임에 맞게 조정해 주세요.

## Unreal 의존성

GameFramework/Actor.h, Engine/World.h

## 요청 예시

중앙 전투 공간, 가장자리 엄폐물, 우회 동선이 있는 전투 아레나를 구성해 주세요.

## 참고 자료

https://dev.epicgames.com/documentation/fortnite/tmnt-enemy-encounters-and-obstacles-in-unreal-editor-for-fortnite?lang=en-US

