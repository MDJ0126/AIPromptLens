---
{
  "category": "effects",
  "name": "안개 · 깊이감",
  "en": "Atmospheric fog",
  "desc": "먼 풍경의 대비를 낮춰 거리감을 줘요.",
  "ko": "거리가 멀수록 대비와 채도가 낮아지는 안개로 공간의 깊이를 표현해 주세요.",
  "promptEn": "Use distance-based fog to reduce contrast and saturation in distant scenery and convey depth.",
  "visual": "fog",
  "tags": [
    "beginner"
  ],
  "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html",
  "slug": "fog",
  "id": 22,
  "genres": [
    "action",
    "rpg",
    "shooter",
    "adventure",
    "horror"
  ],
  "reviewedAt": "2026-10-14",
  "reviewStatus": "source-reviewed",
  "reviewScope": "Unity 6 용어집의 거리 기반 안개 개념을 대조했습니다. 예제의 색상 보간은 실제 렌더링 안개 적용을 검증한 결과가 아닙니다.",
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
      "scope": "Unity 6 용어집의 거리 기반 안개 개념을 대조했습니다. 예제의 색상 보간은 실제 렌더링 안개 적용을 검증한 결과가 아닙니다."
    }
  ],
  "aliases": [
    "fog"
  ]
}
---

# 안개 · 깊이감

먼 풍경의 대비를 낮춰 거리감을 줘요.

## 핵심 구조

거리로 안개 비율 계산 → 가까운 색과 안개 색 혼합

## Unity

```csharp
using UnityEngine;
using System.Collections;
public class FogExample : MonoBehaviour
{
    public Color ApplyFog(Color surface, Color fog, float distance)
    {
        float factor = Mathf.InverseLerp(10f, 80f, distance);
        return Color.Lerp(surface, fog, factor);
    }
}
```

## Unreal

```cpp
FLinearColor ApplyFog(FLinearColor Surface, FLinearColor Fog, float Distance)
{
    float Factor = FMath::Clamp((Distance - 1000.f) / 7000.f, 0.f, 1.f);
    return FMath::Lerp(Surface, Fog, Factor);
}
```

## 적용 방법

카메라에서 멀어질수록 물체의 색을 안개 색에 가깝게 섞는 계산입니다. 거리 단위는 Unity에서 미터, Unreal에서 센티미터로 가정했습니다.

화면에 보이게 하려면 이 계산을 셰이더나 머티리얼에 옮기거나 엔진의 안개 기능을 사용해 주세요. 여기서는 높이에 따른 변화나 빛의 대기 산란까지 다루지는 않습니다.

## Unreal 의존성

CoreMinimal.h

## 요청 예시

거리가 멀수록 대비와 채도가 낮아지는 안개로 공간의 깊이를 표현해 주세요.

## 참고 자료

https://docs.unity3d.com/6000.0/Documentation/ScriptReference/

https://dev.epicgames.com/documentation/en-us/unreal-engine/API


## 확인 기록

마지막 확인: 2026-10-14

Unity 6 용어집의 거리 기반 안개 개념을 대조했습니다. 예제의 색상 보간은 실제 렌더링 안개 적용을 검증한 결과가 아닙니다.


확인 자료: https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html
