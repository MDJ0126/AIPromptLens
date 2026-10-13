---
{
  "category": "camera",
  "name": "아이소메트릭 뷰",
  "en": "Isometric view",
  "desc": "비스듬한 평행 시점으로 깊이를 표현해요.",
  "ko": "원근에 따른 크기 변화 없이 공간의 높이와 깊이가 보이는 아이소메트릭 시점으로 구성해 주세요.",
  "promptEn": "Use an isometric view with parallel projection to reveal height and depth without perspective scaling.",
  "visual": "iso",
  "tags": [
    "strategy"
  ],
  "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html",
  "slug": "iso",
  "id": 2,
  "genres": [
    "action",
    "rpg",
    "shooter",
    "adventure",
    "horror"
  ],
  "reviewedAt": "2026-10-14",
  "reviewStatus": "source-reviewed",
  "reviewScope": "Unity 6 용어집의 등각 투영 정의를 대조했습니다. 카메라 구성 예제의 엔진 실행은 미확인입니다.",
  "reviewSources": [
    {
      "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html",
      "method": "공식 용어집 정의 대조"
    }
  ],
  "reviewHistory": [
    {
      "date": "2026-10-14",
      "action": "출처 및 설명 대조",
      "scope": "Unity 6 용어집의 등각 투영 정의를 대조했습니다. 카메라 구성 예제의 엔진 실행은 미확인입니다."
    }
  ],
  "aliases": [
    "isometric projection"
  ]
}
---

# 아이소메트릭 뷰

비스듬한 평행 시점으로 깊이를 표현해요.

## 핵심 구조

직교 투영 → 고정된 대각 회전 → 플레이어를 따라 위치만 이동

## Unity

```csharp
using UnityEngine;
using System.Collections;
public class IsoExample : MonoBehaviour
{
    public Transform player;
    void LateUpdate()
    {
        if (!player) return;
        Camera cam = GetComponent<Camera>();
        cam.orthographic = true;
        cam.orthographicSize = 8f;
        transform.rotation = Quaternion.Euler(35.264f, 45f, 0f);
        transform.position = player.position - transform.forward * 15f;
    }
}
```

## Unreal

```cpp
UCameraComponent* Camera = nullptr;
AActor* Player = nullptr;
void UpdateCamera()
{
    if (!Camera || !Player) return;
    Camera->SetProjectionMode(ECameraProjectionMode::Orthographic);
    Camera->SetOrthoWidth(1600.f);
    SetActorRotation(FRotator(-35.264f, 45.f, 0));
    SetActorLocation(Player->GetActorLocation() - GetActorForwardVector() * 1500.f);
}
```

## 적용 방법

Unity에서는 카메라 오브젝트에 스크립트를 붙이고 player에 캐릭터를 연결해 주세요. Unreal에서는 ACameraActor를 상속한 클래스에 Camera와 Player를 지정하고 Tick에서 호출합니다.

평행 투영 카메라를 대각선으로 배치하는 예제입니다. 게임에서 원하는 화면에 맞춰 카메라 각도와 보이는 범위를 조정해 주세요.

## Unreal 의존성

Camera/CameraActor.h, Camera/CameraComponent.h

## 요청 예시

원근에 따른 크기 변화 없이 공간의 높이와 깊이가 보이는 아이소메트릭 시점으로 구성해 주세요.

## 참고 자료

https://docs.unity3d.com/6000.0/Documentation/ScriptReference/

https://dev.epicgames.com/documentation/en-us/unreal-engine/API


