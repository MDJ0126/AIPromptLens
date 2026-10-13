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

public class IsoExample : MonoBehaviour {
    public Transform player;
    void LateUpdate() {
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
void UpdateCamera() {
    if (!Camera || !Player) return;
    Camera->SetProjectionMode(ECameraProjectionMode::Orthographic);
    Camera->SetOrthoWidth(1600.f);
    SetActorRotation(FRotator(-35.264f, 45.f, 0));
    SetActorLocation(Player->GetActorLocation() - GetActorForwardVector() * 1500.f);
}
```

## 연결 방법과 생략한 부분

Unity: Camera 오브젝트에 붙이고 player를 지정합니다. Unreal: ACameraActor 파생 클래스에서 Camera와 Player를 지정하고 Tick에서 호출합니다. 실제 게임의 쿼터뷰는 이 각도와 다를 수 있습니다. 여기서는 평행 투영과 대각 시점의 구조만 보여줍니다.

## 코드 범위

Unity 코드는 IsoExample.cs로 저장할 MonoBehaviour 예시입니다. 필요한 참조는 Inspector에서 연결하거나 호출 측에서 전달합니다. Unreal 코드는 해당 Actor/Character/CameraActor 클래스 내부에 넣는 멤버 예시이며, 완전한 .h/.cpp 파일은 아닙니다. 함수 선언·UPROPERTY·입력 바인딩·Tick 연결은 프로젝트에 맞게 작성해야 합니다. UObject 참조는 실제 프로젝트에서 UPROPERTY 또는 적절한 수명 관리가 필요합니다. 예제 수치들은 설명을 위한 값입니다.

## Unreal 의존성

Camera/CameraActor.h, Camera/CameraComponent.h

## 검증 상태

미확인: 이 저장소에서는 Unity/Unreal 프로젝트 컴파일과 엔진 실행을 수행하지 않았습니다. 구조 학습을 위한 최소 예시이며 그대로 사용하기 전 해당 엔진 프로젝트에서 검증해야 합니다.

## 요청 예시

원근에 따른 크기 변화 없이 공간의 높이와 깊이가 보이는 아이소메트릭 시점으로 구성해 주세요.

## 참고 자료

https://docs.unity3d.com/6000.0/Documentation/ScriptReference/

https://dev.epicgames.com/documentation/en-us/unreal-engine/API


## 확인 기록

마지막 확인: 2026-10-14

Unity 6 용어집의 등각 투영 정의를 대조했습니다. 카메라 구성 예제의 엔진 실행은 미확인입니다.


확인 자료: https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html
