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
  "reviewLimit": "구성 기능·소스 구조 대조입니다. Unity/Unreal 컴파일과 실행은 미검증입니다.",
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

public class GuidanceExample : MonoBehaviour {
    public Light doorwayLight;
    public void HighlightDoor() {
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
void HighlightDoor() {
    if (!DoorLight) return;
    DoorLight->SetVisibility(true);
    DoorLight->SetLightColor(FLinearColor(1.f, 0.8f, 0.45f));
    DoorLight->SetIntensity(3000.f);
}
```

## 연결 방법과 생략한 부분

출입구 부근에 배치한 Light/PointLight를 지정합니다. 조명 강도 숫자는 엔진 간 동등한 단위가 아닙니다. 노출·배경 밝기·가려짐과 실제 플레이 테스트로 읽기 쉬운 대비를 조정합니다. 이동 경로를 자동으로 찾는 코드가 아니라 목표를 강조하는 코드입니다.

## 코드 범위

Unity 코드는 GuidanceExample.cs로 저장할 MonoBehaviour 예시입니다. 필요한 참조는 Inspector에서 연결하거나 호출 측에서 전달합니다. Unreal 코드는 해당 Actor/Character/CameraActor 클래스 내부에 넣는 멤버 예시이며, 완전한 .h/.cpp 파일은 아닙니다. 함수 선언·UPROPERTY·입력 바인딩·Tick 연결은 프로젝트에 맞게 작성해야 합니다. UObject 참조는 실제 프로젝트에서 UPROPERTY 또는 적절한 수명 관리가 필요합니다. 예제 수치들은 설명을 위한 값입니다.

## Unreal 의존성

Components/PointLightComponent.h

## 검증 상태

미확인: 이 저장소에서는 Unity/Unreal 프로젝트 컴파일과 엔진 실행을 수행하지 않았습니다. 구조 학습을 위한 최소 예시이며 그대로 사용하기 전 해당 엔진 프로젝트에서 검증해야 합니다.

## 요청 예시

밝은 출입구와 대비되는 형태로 플레이어의 시선을 다음 목표 방향으로 유도해 주세요.

## 참고 자료

https://docs.unity3d.com/6000.0/Documentation/ScriptReference/

https://dev.epicgames.com/documentation/en-us/unreal-engine/API


## 확인 기록

마지막 확인: 2026-10-14

David Shaver의 GDC 2018 원저자 자료 검색 본문에서 빛·형태를 이용한 안내를 확인했습니다. 전체 PDF는 크기 제한으로 열지 못했습니다.

구성 기능·소스 구조 대조입니다. Unity/Unreal 컴파일과 실행은 미검증입니다.

확인 자료: https://media.gdcvault.com/gdc2018/presentations/DShaver_Invisible_Intuition_GDC2018.pdf
