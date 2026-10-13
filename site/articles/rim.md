---
{
  "category": "effects",
  "name": "림 라이트",
  "en": "Rim light",
  "desc": "가장자리를 밝혀 실루엣을 구분해요.",
  "ko": "배경과 캐릭터가 구분되도록 실루엣 가장자리에 림 라이트를 적용해 주세요.",
  "promptEn": "Add rim lighting along the character silhouette to separate it from the background.",
  "visual": "rim",
  "tags": [
    "beginner"
  ],
  "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/StandardShaderFresnel.html",
  "slug": "rim",
  "id": 20,
  "genres": [
    "action",
    "rpg",
    "shooter",
    "adventure",
    "horror"
  ],
  "reviewedAt": "2026-10-14",
  "reviewStatus": "source-reviewed",
  "reviewScope": "Unity 6.0 Standard Shader의 Fresnel 가장자리 반사 설명을 확인했습니다. 실제 후방 광원 조명과 구분하여 명칭을 수정했습니다.",
  "reviewLimit": "구성 기능·소스 구조 대조입니다. Unity/Unreal 컴파일과 실행은 미검증입니다.",
  "reviewSources": [
    {
      "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/StandardShaderFresnel.html",
      "method": "원문 자료 대조"
    }
  ],
  "reviewHistory": [
    {
      "date": "2026-10-14",
      "action": "출처 및 설명 대조",
      "scope": "Unity 6.0 Standard Shader의 Fresnel 가장자리 반사 설명을 확인했습니다. 실제 후방 광원 조명과 구분하여 명칭을 수정했습니다."
    }
  ]
}
---

# 림 라이트

가장자리를 밝혀 실루엣을 구분해요.

## 핵심 구조

표면 법선과 시선 비교 → 가장자리에 가까울수록 강한 값 → 재질에 전달

## Unity

```csharp
using UnityEngine;
using System.Collections;

public class RimExample : MonoBehaviour {
    public float RimFactor(Vector3 normal, Vector3 viewDirection) {
        float facing = Mathf.Clamp01(Vector3.Dot(normal.normalized, viewDirection.normalized));
        return Mathf.Pow(1f - facing, 3f);
    }
}
```

## Unreal

```cpp
float RimFactor(FVector Normal, FVector ViewDirection) {
    float Facing = FMath::Clamp(FVector::DotProduct(Normal.GetSafeNormal(), ViewDirection.GetSafeNormal()), 0.f, 1.f);
    return FMath::Pow(1.f - Facing, 3.f);
}
```

## 연결 방법과 생략한 부분

두 벡터는 같은 좌표계이며 viewDirection은 표면에서 카메라를 향합니다. 가장자리 밝기 계산을 CPU 함수로 보여줍니다. 최종 렌더링은 Unity Shader Graph/HLSL 또는 Unreal 머티리얼에서 픽셀별로 같은 계산을 적용해야 합니다. 이 함수만 호출해도 캐릭터에 효과가 나타나는 것은 아닙니다. 실제 후방 조명에 의한 림 라이트와도 구분되는 재질 기반 근사입니다.

## 코드 범위

Unity 코드는 RimExample.cs로 저장할 MonoBehaviour 예시입니다. 필요한 참조는 Inspector에서 연결하거나 호출 측에서 전달합니다. Unreal 코드는 해당 Actor/Character/CameraActor 클래스 내부에 넣는 멤버 예시이며, 완전한 .h/.cpp 파일은 아닙니다. 함수 선언·UPROPERTY·입력 바인딩·Tick 연결은 프로젝트에 맞게 작성해야 합니다. UObject 참조는 실제 프로젝트에서 UPROPERTY 또는 적절한 수명 관리가 필요합니다. 예제 수치들은 설명을 위한 값입니다.

## Unreal 의존성

CoreMinimal.h

## 검증 상태

미확인: 이 저장소에서는 Unity/Unreal 프로젝트 컴파일과 엔진 실행을 수행하지 않았습니다. 구조 학습을 위한 최소 예시이며 그대로 사용하기 전 해당 엔진 프로젝트에서 검증해야 합니다.

## 요청 예시

배경과 캐릭터가 구분되도록 실루엣 가장자리에 림 라이트를 적용해 주세요.

## 참고 자료

https://docs.unity3d.com/6000.0/Documentation/ScriptReference/

https://dev.epicgames.com/documentation/en-us/unreal-engine/API


## 확인 기록

마지막 확인: 2026-10-14

Unity 6.0 Standard Shader의 Fresnel 가장자리 반사 설명을 확인했습니다. 실제 후방 광원 조명과 구분하여 명칭을 수정했습니다.

구성 기능·소스 구조 대조입니다. Unity/Unreal 컴파일과 실행은 미검증입니다.

확인 자료: https://docs.unity3d.com/6000.0/Documentation/Manual/StandardShaderFresnel.html
