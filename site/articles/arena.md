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

## 연결 방법과 생략한 부분

Unity의 coverPrefab과 Unreal의 CoverClass를 지정합니다. 중앙 주변에 엄폐물을 배치하는 예시입니다. 바닥·입구·내비게이션·엄폐물 크기와 전투 밸런스 검증은 생략했습니다. BuildArena는 한 번만 호출하며 반복 호출하면 중복 생성됩니다.

## 코드 범위

Unity 코드는 ArenaExample.cs로 저장할 MonoBehaviour 예시입니다. 필요한 참조는 Inspector에서 연결하거나 호출 측에서 전달합니다. Unreal 코드는 해당 Actor/Character/CameraActor 클래스 내부에 넣는 멤버 예시이며, 완전한 .h/.cpp 파일은 아닙니다. 함수 선언·UPROPERTY·입력 바인딩·Tick 연결은 프로젝트에 맞게 작성해야 합니다. UObject 참조는 실제 프로젝트에서 UPROPERTY 또는 적절한 수명 관리가 필요합니다. 예제 수치들은 설명을 위한 값입니다.

## Unreal 의존성

GameFramework/Actor.h, Engine/World.h

## 검증 상태

미확인: 이 저장소에서는 Unity/Unreal 프로젝트 컴파일과 엔진 실행을 수행하지 않았습니다. 구조 학습을 위한 최소 예시이며 그대로 사용하기 전 해당 엔진 프로젝트에서 검증해야 합니다.

## 요청 예시

중앙 전투 공간, 가장자리 엄폐물, 우회 동선이 있는 전투 아레나를 구성해 주세요.

## 참고 자료

https://dev.epicgames.com/documentation/fortnite/tmnt-enemy-encounters-and-obstacles-in-unreal-editor-for-fortnite?lang=en-US
확인 범위: Epic UEFN TMNT의 전투 공간·진입·종료 사례를 확인했습니다. 일반 Unity/Unreal 예제는 엄폐물 배치만 다룹니다.

## 확인 기록

마지막 확인: 2026-10-14

Epic UEFN TMNT의 전투 공간·진입·종료 사례를 확인했습니다. 일반 Unity/Unreal 예제는 엄폐물 배치만 다룹니다.


확인 자료: https://dev.epicgames.com/documentation/fortnite/tmnt-enemy-encounters-and-obstacles-in-unreal-editor-for-fortnite?lang=en-US
