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
  "reviewLimit": "구성 기능·소스 구조 대조입니다. Unity/Unreal 컴파일과 실행은 미검증입니다.",
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

public class TopdownExample : MonoBehaviour {
    public Transform player;
    void LateUpdate() {
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
void UpdateCamera() {
    if (!Camera || !Player) return;
    Camera->SetProjectionMode(ECameraProjectionMode::Orthographic);
    Camera->SetOrthoWidth(1600.f);
    SetActorLocation(Player->GetActorLocation() + FVector(0, 0, 1500));
    SetActorRotation(FRotator(-90, 0, 0));
}
```

## 연결 방법과 생략한 부분

Unity: Camera가 있는 오브젝트에 붙입니다. Unreal: ACameraActor에서 Camera를 GetCameraComponent()로 설정하고 Player를 지정합니다. Tick에서 호출하고 ViewTarget으로 사용합니다. Unity orthographicSize는 화면 세로의 절반, Unreal OrthoWidth는 화면 가로 전체이므로 숫자를 그대로 옮기면 같은 화면이 되지 않습니다.

## 코드 범위

Unity 코드는 TopdownExample.cs로 저장할 MonoBehaviour 예시입니다. 필요한 참조는 Inspector에서 연결하거나 호출 측에서 전달합니다. Unreal 코드는 해당 Actor/Character/CameraActor 클래스 내부에 넣는 멤버 예시이며, 완전한 .h/.cpp 파일은 아닙니다. 함수 선언·UPROPERTY·입력 바인딩·Tick 연결은 프로젝트에 맞게 작성해야 합니다. UObject 참조는 실제 프로젝트에서 UPROPERTY 또는 적절한 수명 관리가 필요합니다. 예제 수치들은 설명을 위한 값입니다.

## Unreal 의존성

Camera/CameraActor.h, Camera/CameraComponent.h

## 검증 상태

미확인: 이 저장소에서는 Unity/Unreal 프로젝트 컴파일과 엔진 실행을 수행하지 않았습니다. 구조 학습을 위한 최소 예시이며 그대로 사용하기 전 해당 엔진 프로젝트에서 검증해야 합니다.

## 요청 예시

플레이어와 주변 장애물을 위에서 내려다보는 탑다운 카메라를 만들어 주세요.

## 참고 자료

https://docs.unity3d.com/6000.0/Documentation/ScriptReference/

https://dev.epicgames.com/documentation/en-us/unreal-engine/API


## 확인 기록

마지막 확인: 2026-10-14

Unity 6.0 카메라의 직교 투영을 확인했습니다. 위에서 보는 시점은 직접 배치하는 카메라 구성입니다.

구성 기능·소스 구조 대조입니다. Unity/Unreal 컴파일과 실행은 미검증입니다.

확인 자료: https://docs.unity3d.com/6000.0/Documentation/Manual/class-Camera.html
