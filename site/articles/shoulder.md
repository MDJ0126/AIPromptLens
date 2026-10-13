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
public class ShoulderExample : MonoBehaviour
{
    public Transform player;
    void LateUpdate()
    {
        if (!player) return;
        transform.position = player.TransformPoint(new Vector3(0.6f, 1.6f, -3f));
        transform.LookAt(player.position + player.forward * 10f + Vector3.up * 1.6f);
    }
}
```

## Unreal

```cpp
AActor* Player = nullptr;
void UpdateCamera()
{
    if (!Player) return;
    SetActorLocation(Player->GetActorTransform().TransformPosition(FVector(-300, 60, 160)));
    FVector Aim = Player->GetActorLocation() + Player->GetActorForwardVector() * 1000 + FVector(0, 0, 160);
    SetActorRotation((Aim - GetActorLocation()).Rotation());
}
```

## 적용 방법

Unity에서는 카메라에 스크립트를 붙이고 player에 캐릭터의 Transform을 연결해 주세요. Unreal에서는 ACameraActor를 상속한 클래스에서 Player를 지정하고 Tick에서 UpdateCamera를 호출합니다.

Unreal의 플레이어 컨트롤러가 이 카메라를 보도록 ViewTarget을 설정해 주세요. 벽에 가려지는 문제와 카메라 움직임을 부드럽게 만드는 처리는 필요에 따라 추가합니다.

## Unreal 의존성

Camera/CameraActor.h

## 요청 예시

캐릭터를 화면 한쪽에 배치하고 어깨 너머로 조준 방향이 보이는 3인칭 카메라를 만들어 주세요.

## 참고 자료

https://docs.unity3d.com/6000.0/Documentation/ScriptReference/

https://dev.epicgames.com/documentation/en-us/unreal-engine/API


## 확인 기록

마지막 확인: 2026-10-14

Unity 6.0 카메라와 좌표 변환을 이용한 오프셋 배치 예시입니다. Shoulder라는 내장 컴포넌트가 있다는 뜻은 아닙니다.


확인 자료: https://docs.unity3d.com/6000.0/Documentation/Manual/class-Camera.html
