---
{
  "category": "level",
  "name": "시선 유도",
  "en": "Visual guidance",
  "desc": "빛과 형태로 다음 목적지를 알려줘요.",
  "ko": "밝은 출입구와 대비되는 형태로 플레이어의 시선을 다음 목표 방향으로 유도해 주세요.",
  "promptEn": "Guide the player toward the next objective using a lit doorway and contrasting shapes.",
  "visual": "guidance",
  "tags": [
    "beginner",
    "action"
  ],
  "source": "https://media.gdcvault.com/gdc2018/presentations/DShaver_Invisible_Intuition_GDC2018.pdf",
  "slug": "guidance",
  "id": 16,
  "genres": [
    "action",
    "rpg",
    "adventure",
    "horror",
    "puzzle"
  ],
  "reviewedAt": "2026-10-14",
  "reviewStatus": "source-reviewed",
  "reviewScope": "David Shaver의 GDC 2018 원저자 자료 검색 본문에서 빛·형태를 이용한 안내를 확인했습니다. 전체 PDF는 크기 제한으로 열지 못했습니다.",
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
      "scope": "David Shaver의 GDC 2018 원저자 자료 검색 본문에서 빛·형태를 이용한 안내를 확인했습니다. 전체 PDF는 크기 제한으로 열지 못했습니다."
    }
  ]
}
---

# 시선 유도

빛과 형태로 다음 목적지를 알려줘요.

## 핵심 구조

목표 출입구 위치 → 안내 조명을 켬 → 주변보다 밝게 설정

## Unity

```csharp
using UnityEngine;
using System.Collections;
public class GuidanceExample : MonoBehaviour
{
    public Light doorwayLight;
    public void HighlightDoor()
    {
        if (!doorwayLight) return;
        doorwayLight.enabled = true;
        doorwayLight.color = new Color(1f, 0.8f, 0.45f);
        doorwayLight.intensity = 3f;
    }
}
```

## Unreal

```cpp
UPointLightComponent* DoorLight = nullptr;
void HighlightDoor()
{
    if (!DoorLight) return;
    DoorLight->SetVisibility(true);
    DoorLight->SetLightColor(FLinearColor(1.f, 0.8f, 0.45f));
    DoorLight->SetIntensity(3000.f);
}
```

## 적용 방법

출입구 주변에 배치한 조명을 Light 또는 PointLight에 연결해 주세요. 목표 위치를 밝게 만들어 플레이어의 시선을 유도하는 예제입니다.

조명 강도는 엔진마다 단위가 다릅니다. 숫자를 그대로 옮기기보다 배경 밝기와 노출, 조명이 가려지는 위치를 살펴보며 출입구가 잘 보이도록 조정해 주세요.

## Unreal 의존성

Components/PointLightComponent.h

## 요청 예시

밝은 출입구와 대비되는 형태로 플레이어의 시선을 다음 목표 방향으로 유도해 주세요.

## 참고 자료

https://docs.unity3d.com/6000.0/Documentation/ScriptReference/

https://dev.epicgames.com/documentation/en-us/unreal-engine/API


