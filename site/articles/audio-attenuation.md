---
{
  "id": 94,
  "slug": "audio-attenuation",
  "kind": "concept",
  "category": "audio",
  "name": "소리 감쇠",
  "en": "Audio attenuation",
  "desc": "거리 등 조건에 따라 음량을 줄입니다.",
  "ko": "소리 감쇠을 게임에 적용하려고 합니다. 거리 등 조건에 따라 음량을 줄입니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
  "promptEn": "Explain Audio attenuation with a minimal design, use case and limitations.",
  "visual": "audio-attenuation",
  "tags": [
    "beginner"
  ],
  "source": "https://docs.unity3d.com/6000.0/Documentation/ScriptReference/AudioRolloffMode.html",
  "diagramSteps": [
    "음원 거리",
    "감쇠 곡선",
    "출력 음량"
  ],
  "related": [
    "audio-mixer",
    "audio-spatialization",
    "reverb"
  ],
  "genres": [
    "action",
    "rpg",
    "shooter",
    "adventure",
    "horror",
    "rhythm",
    "racing",
    "sports"
  ],
  "reviewedAt": "2026-10-14",
  "reviewStatus": "source-reviewed",
  "reviewType": "기능·개념",
  "reviewScope": "Unity 6.0 AudioRolloffMode의 거리 기반 음량 감쇠 모드를 확인했습니다.",
  "reviewVersion": "Unity 6.0 (6000.0)",
  "reviewSources": [
    {
      "url": "https://docs.unity3d.com/6000.0/Documentation/ScriptReference/AudioRolloffMode.html",
      "method": "원문 자료 대조"
    }
  ],
  "reviewHistory": [
    {
      "date": "2026-10-14",
      "action": "출처 및 설명 대조",
      "scope": "Unity 6.0 AudioRolloffMode의 거리 기반 음량 감쇠 모드를 확인했습니다."
    }
  ]
}
---

# 소리 감쇠

## 핵심 구조

음원 거리 → 감쇠 곡선 → 출력 음량

## 개념 설명

거리 등 조건에 따라 음량을 줄입니다.

## 활용 상황

가까운 소리와 먼 소리를 구분합니다.

## 비교와 선택

벽의 차폐와 방향성은 거리 감쇠와 별도 개념입니다. 먼저 목적에 맞는지 판단하고, 비용과 결과는 대상 환경에서 확인합니다.

## 설계할 때 확인

입력값과 처리 결과를 구분하고, 실패하거나 범위를 벗어나는 상황을 정합니다. 벽의 차폐와 방향성은 거리 감쇠와 별도 개념입니다.

## 도식의 한계

이 카드는 처리 단계 안내를 반복 재생합니다. 실제 Audio attenuation의 화면 효과나 엔진 실행을 재현한 영상은 아닙니다.

## 요청 예시

소리 감쇠을 게임에 적용하려고 합니다. 거리 등 조건에 따라 음량을 줄입니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.

## 참고 자료

https://docs.unity3d.com/6000.0/Documentation/ScriptReference/AudioRolloffMode.html

## 함께 볼 용어

오디오 믹서 (Audio mixer) · 공간 음향 (Spatialization) · 리버브 (Reverb)


## 자료 대조에서 보강한 내용

거리 기반 음량 변화를 확인했습니다. 벽에 막히는 차폐와는 다른 기능입니다.

