---
{
  "category": "camera",
  "name": "숄더 뷰",
  "en": "Over-the-shoulder",
  "desc": "캐릭터의 어깨 너머로 바라보는 시점.",
  "ko": "캐릭터를 화면 한쪽에 배치하고 어깨 너머로 조준 방향이 보이는 3인칭 카메라를 만들어 주세요.",
  "promptEn": "Use an over-the-shoulder third-person camera, keeping the character to one side and the aiming direction visible.",
  "visual": "shoulder",
  "tags": [
    "beginner",
    "action"
  ],
  "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-Camera.html",
  "slug": "shoulder",
  "id": 0,
  "genres": [
    "action",
    "shooter",
    "rpg",
    "horror"
  ],
  "reviewedAt": "2026-10-14",
  "reviewStatus": "source-reviewed",
  "reviewScope": "Unity 6.0 카메라와 좌표 변환을 이용한 오프셋 배치 예시입니다. Shoulder라는 내장 컴포넌트가 있다는 뜻은 아닙니다.",
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
      "scope": "Unity 6.0 카메라와 좌표 변환을 이용한 오프셋 배치 예시입니다. Shoulder라는 내장 컴포넌트가 있다는 뜻은 아닙니다."
    }
  ]
}
---

# 숄더 뷰

캐릭터의 어깨 너머로 바라보는 시점.

## 핵심 구조

캐릭터 기준 위치 계산 → 어깨 옆에 카메라 배치 → 앞쪽을 바라보기

## Unity

```csharp
using UnityEngine;
using System.Collections;

public class ShoulderExample : MonoBehaviour {
    public Transform player;
    void LateUpdate() {
        if (!player) return;
        transform.position = player.TransformPoint(new Vector3(0.6f, 1.6f, -3f));
        transform.LookAt(player.position + player.forward * 10f + Vector3.up * 1.6f);
    }
}
```

## Unreal

```cpp
AActor* Player = nullptr;
void UpdateCamera() {
    if (!Player) return;
    SetActorLocation(Player->GetActorTransform().TransformPosition(FVector(-300, 60, 160)));
    FVector Aim = Player->GetActorLocation() + Player->GetActorForwardVector() * 1000 + FVector(0, 0, 160);
    SetActorRotation((Aim - GetActorLocation()).Rotation());
}
```

## 연결 방법과 생략한 부분

Unity: 카메라에 스크립트를 붙이고 player에 캐릭터 Transform을 지정합니다. Unreal: ACameraActor 파생 클래스에 두고 Tick에서 UpdateCamera를 호출합니다. Player를 지정하고 플레이어 컨트롤러의 ViewTarget을 이 카메라로 설정합니다. 카메라 벽 충돌과 보간은 생략했습니다.

## 코드 범위

Unity 코드는 ShoulderExample.cs로 저장할 MonoBehaviour 예시입니다. 필요한 참조는 Inspector에서 연결하거나 호출 측에서 전달합니다. Unreal 코드는 해당 Actor/Character/CameraActor 클래스 내부에 넣는 멤버 예시이며, 완전한 .h/.cpp 파일은 아닙니다. 함수 선언·UPROPERTY·입력 바인딩·Tick 연결은 프로젝트에 맞게 작성해야 합니다. UObject 참조는 실제 프로젝트에서 UPROPERTY 또는 적절한 수명 관리가 필요합니다. 예제 수치들은 설명을 위한 값입니다.

## Unreal 의존성

Camera/CameraActor.h

## 검증 상태

미확인: 이 저장소에서는 Unity/Unreal 프로젝트 컴파일과 엔진 실행을 수행하지 않았습니다. 구조 학습을 위한 최소 예시이며 그대로 사용하기 전 해당 엔진 프로젝트에서 검증해야 합니다.

## 요청 예시

캐릭터를 화면 한쪽에 배치하고 어깨 너머로 조준 방향이 보이는 3인칭 카메라를 만들어 주세요.

## 참고 자료

https://docs.unity3d.com/6000.0/Documentation/ScriptReference/

https://dev.epicgames.com/documentation/en-us/unreal-engine/API


## 확인 기록

마지막 확인: 2026-10-14

Unity 6.0 카메라와 좌표 변환을 이용한 오프셋 배치 예시입니다. Shoulder라는 내장 컴포넌트가 있다는 뜻은 아닙니다.

구성 기능·소스 구조 대조입니다. Unity/Unreal 컴파일과 실행은 미검증입니다.

확인 자료: https://docs.unity3d.com/6000.0/Documentation/Manual/class-Camera.html
