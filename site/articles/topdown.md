---
{
  "category": "camera",
  "name": "탑다운 뷰",
  "en": "Top-down view",
  "desc": "위에서 내려다보며 공간 전체를 읽는 시점.",
  "ko": "플레이어와 주변 장애물을 위에서 내려다보는 탑다운 카메라를 만들어 주세요.",
  "promptEn": "Use a top-down camera that shows the player and surrounding obstacles from above.",
  "visual": "topdown",
  "tags": [
    "beginner",
    "strategy"
  ],
  "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-Camera.html",
  "slug": "topdown",
  "id": 1,
  "genres": [
    "strategy",
    "rpg",
    "action",
    "puzzle",
    "simulation"
  ],
  "reviewedAt": "2026-10-14",
  "reviewStatus": "source-reviewed",
  "reviewScope": "Unity 6.0 카메라의 직교 투영을 확인했습니다. 위에서 보는 시점은 직접 배치하는 카메라 구성입니다.",
  "reviewSources": [
    {
      "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-Camera.html",
      "method": "원문 자료 대조"
    }
  ],
  "reviewHistory": [
    {
      "date": "2026-10-14",
      "action": "출처 및 설명 대조",
      "scope": "Unity 6.0 카메라의 직교 투영을 확인했습니다. 위에서 보는 시점은 직접 배치하는 카메라 구성입니다."
    }
  ]
}
---

# 탑다운 뷰

위에서 내려다보며 공간 전체를 읽는 시점.

## 핵심 구조

직교 카메라 설정 → 플레이어 위로 이동 → 수직으로 내려다보기

## Unity

```csharp
using UnityEngine;
using System.Collections;
public class TopdownExample : MonoBehaviour
{
    public Transform player;
    void LateUpdate()
    {
        if (!player) return;
        Camera cam = GetComponent<Camera>();
        cam.orthographic = true;
        cam.orthographicSize = 8f;
        transform.position = player.position + Vector3.up * 15f;
        transform.rotation = Quaternion.Euler(90f, 0f, 0f);
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
    SetActorLocation(Player->GetActorLocation() + FVector(0, 0, 1500));
    SetActorRotation(FRotator(-90, 0, 0));
}
```

## 적용 방법

Unity에서는 Camera가 있는 오브젝트에 스크립트를 붙여 주세요. Unreal에서는 ACameraActor에서 GetCameraComponent()로 Camera를 지정하고 Player를 연결합니다. Tick에서 갱신하고 플레이어의 ViewTarget으로 사용하면 됩니다.

Unity의 orthographicSize는 화면 세로 범위의 절반이고, Unreal의 OrthoWidth는 화면 가로 범위 전체입니다. 같은 숫자를 쓰기보다 캐릭터와 주변 공간이 원하는 만큼 보이도록 조정해 주세요.

## Unreal 의존성

Camera/CameraActor.h, Camera/CameraComponent.h

## 요청 예시

플레이어와 주변 장애물을 위에서 내려다보는 탑다운 카메라를 만들어 주세요.

## 참고 자료

https://docs.unity3d.com/6000.0/Documentation/ScriptReference/

https://dev.epicgames.com/documentation/en-us/unreal-engine/API


