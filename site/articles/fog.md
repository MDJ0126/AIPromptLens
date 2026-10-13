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

## 연결 방법과 생략한 부분

거리 기반 색 혼합의 구조입니다. Unity 예시는 m, Unreal 예시는 cm를 가정합니다. 실제 화면 효과는 셰이더/머티리얼 또는 엔진의 안개 시스템에 연결해야 합니다. 이 CPU 함수는 자체로 화면 전체의 픽셀을 처리하지 않습니다. 실제 대기 산란과 높이 기반 안개는 포함하지 않습니다.

## 코드 범위

Unity 코드는 FogExample.cs로 저장할 MonoBehaviour 예시입니다. 필요한 참조는 Inspector에서 연결하거나 호출 측에서 전달합니다. Unreal 코드는 해당 Actor/Character/CameraActor 클래스 내부에 넣는 멤버 예시이며, 완전한 .h/.cpp 파일은 아닙니다. 함수 선언·UPROPERTY·입력 바인딩·Tick 연결은 프로젝트에 맞게 작성해야 합니다. UObject 참조는 실제 프로젝트에서 UPROPERTY 또는 적절한 수명 관리가 필요합니다. 예제 수치들은 설명을 위한 값입니다.

## Unreal 의존성

CoreMinimal.h

## 검증 상태

미확인: 이 저장소에서는 Unity/Unreal 프로젝트 컴파일과 엔진 실행을 수행하지 않았습니다. 구조 학습을 위한 최소 예시이며 그대로 사용하기 전 해당 엔진 프로젝트에서 검증해야 합니다.

## 요청 예시

거리가 멀수록 대비와 채도가 낮아지는 안개로 공간의 깊이를 표현해 주세요.

## 참고 자료

https://docs.unity3d.com/6000.0/Documentation/ScriptReference/

https://dev.epicgames.com/documentation/en-us/unreal-engine/API


## 확인 기록

마지막 확인: 2026-10-14

Unity 6 용어집의 거리 기반 안개 개념을 대조했습니다. 예제의 색상 보간은 실제 렌더링 안개 적용을 검증한 결과가 아닙니다.


확인 자료: https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html
