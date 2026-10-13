---
{
  "id": 43,
  "slug": "anti-aliasing",
  "kind": "concept",
  "category": "rendering",
  "name": "안티앨리어싱",
  "en": "Anti-aliasing",
  "desc": "샘플링으로 생기는 경계의 계단과 깜빡임을 줄입니다.",
  "ko": "안티앨리어싱을 게임에 적용하려고 합니다. 샘플링으로 생기는 경계의 계단과 깜빡임을 줄입니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
  "promptEn": "Explain Anti-aliasing with a minimal design, use case and limitations.",
  "visual": "anti-aliasing",
  "tags": [
    "beginner"
  ],
  "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html",
  "diagramSteps": [
    "계단 경계",
    "샘플 처리",
    "경계 완화"
  ],
  "related": [
    "ambient-occlusion",
    "bloom",
    "depth-buffer"
  ],
  "genres": [
    "action",
    "rpg",
    "shooter",
    "adventure",
    "horror",
    "simulation",
    "racing",
    "sports"
  ],
  "reviewedAt": "2026-10-14",
  "reviewStatus": "source-reviewed",
  "reviewType": "기능·개념",
  "reviewScope": "기술 자체는 확인했습니다. MSAA·FXAA·TAA 등 구체적 방식의 지원 여부와 잔상·비용은 파이프라인별로 확인해야 합니다.",
  "reviewVersion": "Unity 6.0 (6000.0)",
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
      "scope": "기술 자체는 확인했습니다. MSAA·FXAA·TAA 등 구체적 방식의 지원 여부와 잔상·비용은 파이프라인별로 확인해야 합니다."
    }
  ]
}
---

# 안티앨리어싱

## 핵심 구조

계단 경계 → 샘플 처리 → 경계 완화

## 개념 설명

샘플링으로 생기는 경계의 계단과 깜빡임을 줄입니다.

## 활용 상황

얇은 선과 대각선 경계를 안정적으로 보여 줍니다.

## 비교와 선택

방식에 따라 흐려짐·잔상·메모리 비용이 다릅니다. 먼저 목적에 맞는지 판단하고, 비용과 결과는 대상 환경에서 확인합니다.

## 설계할 때 확인

입력값과 처리 결과를 구분하고, 실패하거나 범위를 벗어나는 상황을 정합니다. 방식에 따라 흐려짐·잔상·메모리 비용이 다릅니다.

## 도식의 한계

이 카드는 처리 단계 안내를 반복 재생합니다. 실제 Anti-aliasing의 화면 효과나 엔진 실행을 재현한 영상은 아닙니다.

## 요청 예시

안티앨리어싱을 게임에 적용하려고 합니다. 샘플링으로 생기는 경계의 계단과 깜빡임을 줄입니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.

## 참고 자료

https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html
확인 범위: 기술 자체는 확인했습니다. MSAA·FXAA·TAA 등 구체적 방식의 지원 여부와 잔상·비용은 파이프라인별로 확인해야 합니다.

## 함께 볼 용어

앰비언트 오클루전 (Ambient occlusion) · 블룸 (Bloom) · 깊이 버퍼 (Depth buffer)


## 자료 대조에서 보강한 내용

기술 자체는 확인했습니다. MSAA·FXAA·TAA 등 구체적 방식의 지원 여부와 잔상·비용은 파이프라인별로 확인해야 합니다.

## 확인 기록

마지막 확인: 2026-10-14

기술 자체는 확인했습니다. MSAA·FXAA·TAA 등 구체적 방식의 지원 여부와 잔상·비용은 파이프라인별로 확인해야 합니다.


확인 자료: https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html
