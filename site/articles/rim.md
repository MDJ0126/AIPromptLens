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
public class RimExample : MonoBehaviour
{
    public float RimFactor(Vector3 normal, Vector3 viewDirection)
    {
        float facing = Mathf.Clamp01(Vector3.Dot(normal.normalized, viewDirection.normalized));
        return Mathf.Pow(1f - facing, 3f);
    }
}
```

## Unreal

```cpp
float RimFactor(FVector Normal, FVector ViewDirection)
{
    float Facing = FMath::Clamp(FVector::DotProduct(Normal.GetSafeNormal(), ViewDirection.GetSafeNormal()), 0.f, 1.f);
    return FMath::Pow(1.f - Facing, 3.f);
}
```

## 적용 방법

표면의 방향과 카메라를 향하는 방향을 비교해 가장자리를 밝게 만드는 계산입니다. 두 벡터는 같은 좌표계를 사용하고, viewDirection은 표면에서 카메라 쪽을 향하게 해 주세요.

화면에 적용하려면 Unity Shader Graph나 HLSL, Unreal 머티리얼에서 픽셀마다 같은 계산을 사용합니다. 실제 뒤쪽 조명을 배치하는 대신 재질 계산으로 가장자리 밝기를 흉내 내는 방식입니다.

## Unreal 의존성

CoreMinimal.h

## 요청 예시

배경과 캐릭터가 구분되도록 실루엣 가장자리에 림 라이트를 적용해 주세요.

## 참고 자료

https://docs.unity3d.com/6000.0/Documentation/ScriptReference/

https://dev.epicgames.com/documentation/en-us/unreal-engine/API


