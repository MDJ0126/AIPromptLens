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

## 연결 방법과 생략한 부분

고유한 실루엣의 타워 같은 에셋을 landmark/Landmark에 지정합니다. 런타임 코드 없이 에디터에서 같은 배치를 해도 됩니다. 배치 구조를 보여주는 예시이며, 이 코드만으로 길찾기나 가시성을 보장하지 않습니다. 로컬 스케일의 기준 크기는 에셋에 따라 다릅니다.

## 코드 범위

Unity 코드는 LandmarkExample.cs로 저장할 MonoBehaviour 예시입니다. 필요한 참조는 Inspector에서 연결하거나 호출 측에서 전달합니다. Unreal 코드는 해당 Actor/Character/CameraActor 클래스 내부에 넣는 멤버 예시이며, 완전한 .h/.cpp 파일은 아닙니다. 함수 선언·UPROPERTY·입력 바인딩·Tick 연결은 프로젝트에 맞게 작성해야 합니다. UObject 참조는 실제 프로젝트에서 UPROPERTY 또는 적절한 수명 관리가 필요합니다. 예제 수치들은 설명을 위한 값입니다.

## Unreal 의존성

GameFramework/Actor.h

## 검증 상태

미확인: 이 저장소에서는 Unity/Unreal 프로젝트 컴파일과 엔진 실행을 수행하지 않았습니다. 구조 학습을 위한 최소 예시이며 그대로 사용하기 전 해당 엔진 프로젝트에서 검증해야 합니다.

## 요청 예시

멀리서도 구별되는 랜드마크를 배치해 플레이어가 방향과 위치를 파악하도록 해 주세요.

## 참고 자료

https://docs.unity3d.com/6000.0/Documentation/ScriptReference/

https://dev.epicgames.com/documentation/en-us/unreal-engine/API


## 확인 기록

마지막 확인: 2026-10-14

David Shaver의 GDC 2018 원저자 자료 검색 본문에서 랜드마크를 통한 안내를 확인했습니다. 전체 PDF는 크기 제한으로 열지 못했습니다.


확인 자료: https://media.gdcvault.com/gdc2018/presentations/DShaver_Invisible_Intuition_GDC2018.pdf
