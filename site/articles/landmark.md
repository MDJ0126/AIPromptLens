---
{
  "category": "level",
  "name": "랜드마크",
  "en": "Landmark",
  "desc": "눈에 띄는 지형으로 방향을 기억해요.",
  "ko": "멀리서도 구별되는 랜드마크를 배치해 플레이어가 방향과 위치를 파악하도록 해 주세요.",
  "promptEn": "Place a recognizable distant landmark to help the player understand orientation and position.",
  "visual": "landmark",
  "tags": [
    "beginner"
  ],
  "source": "https://media.gdcvault.com/gdc2018/presentations/DShaver_Invisible_Intuition_GDC2018.pdf",
  "slug": "landmark",
  "id": 17,
  "genres": [
    "action",
    "rpg",
    "adventure",
    "horror",
    "puzzle"
  ],
  "reviewedAt": "2026-10-14",
  "reviewStatus": "source-reviewed",
  "reviewScope": "David Shaver의 GDC 2018 원저자 자료 검색 본문에서 랜드마크를 통한 안내를 확인했습니다. 전체 PDF는 크기 제한으로 열지 못했습니다.",
  "reviewSources": [
    {
      "url": "https://media.gdcvault.com/gdc2018/presentations/DShaver_Invisible_Intuition_GDC2018.pdf",
      "method": "검색에 노출된 원문 일부 대조"
    }
  ],
  "reviewHistory": [
    {
      "date": "2026-10-14",
      "action": "출처 및 설명 대조",
      "scope": "David Shaver의 GDC 2018 원저자 자료 검색 본문에서 랜드마크를 통한 안내를 확인했습니다. 전체 PDF는 크기 제한으로 열지 못했습니다."
    }
  ]
}
---

# 랜드마크

눈에 띄는 지형으로 방향을 기억해요.

## 핵심 구조

식별할 수 있는 오브젝트 배치 → 멀리서 구분되는 크기와 형태 유지

## Unity

```csharp
using UnityEngine;
using System.Collections;
public class LandmarkExample : MonoBehaviour
{
    public Transform landmark;
    public void PlaceLandmark(Vector3 position)
    {
        if (!landmark) return;
        landmark.position = position;
        landmark.localScale = Vector3.one * 3f;
    }
}
```

## Unreal

```cpp
AActor* Landmark = nullptr;
void PlaceLandmark(FVector Position)
{
    if (!Landmark) return;
    Landmark->SetActorLocation(Position);
    Landmark->SetActorScale3D(FVector(3.f));
}
```

## 적용 방법

멀리서도 형태가 구분되는 타워 같은 에셋을 landmark 또는 Landmark에 연결해 주세요. 같은 배치는 에디터에서 직접 만들어도 됩니다.

예제는 눈에 띄는 물체를 배치하는 구조를 보여줍니다. 에셋마다 원래 크기가 다르므로 크기를 조정하고, 플레이어가 이동하는 위치에서 실제로 보이는지 확인해 주세요.

## Unreal 의존성

GameFramework/Actor.h

## 요청 예시

멀리서도 구별되는 랜드마크를 배치해 플레이어가 방향과 위치를 파악하도록 해 주세요.

## 참고 자료

https://docs.unity3d.com/6000.0/Documentation/ScriptReference/

https://dev.epicgames.com/documentation/en-us/unreal-engine/API


