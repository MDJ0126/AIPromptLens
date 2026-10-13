---
{
  "id": 95,
  "slug": "audio-spatialization",
  "kind": "concept",
  "category": "audio",
  "name": "공간 음향",
  "en": "Spatialization",
  "desc": "음원의 방향과 위치를 청취 출력에 반영합니다.",
  "ko": "공간 음향을 게임에 적용하려고 합니다. 음원의 방향과 위치를 청취 출력에 반영합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
  "promptEn": "Explain Spatialization with a minimal design, use case and limitations.",
  "visual": "audio-spatialization",
  "tags": [
    "beginner"
  ],
  "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html",
  "diagramSteps": [
    "음원 위치",
    "방향 처리",
    "청취 출력"
  ],
  "related": [
    "audio-attenuation",
    "audio-mixer",
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
  "reviewScope": "위치에 따른 청취 출력과 Unity Spatializer 개념을 확인했습니다. 모든 출력 장치에서 같은 방향 인지를 보장하지 않습니다.",
  "reviewVersion": "Unity 6.0 (6000.0)",
  "reviewLimit": "개념·출처 대조입니다. 엔진 실행은 미검증입니다.",
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
      "scope": "위치에 따른 청취 출력과 Unity Spatializer 개념을 확인했습니다. 모든 출력 장치에서 같은 방향 인지를 보장하지 않습니다."
    }
  ]
}
---

# 공간 음향

## 핵심 구조

음원 위치 → 방향 처리 → 청취 출력

## 개념 설명

음원의 방향과 위치를 청취 출력에 반영합니다.

## 활용 상황

적의 위치를 소리로 파악하게 합니다.

## 비교와 선택

스피커와 헤드폰 환경 및 개인차를 고려합니다. 먼저 목적에 맞는지 판단하고, 비용과 결과는 대상 환경에서 확인합니다.

## 설계할 때 확인

입력값과 처리 결과를 구분하고, 실패하거나 범위를 벗어나는 상황을 정합니다. 스피커와 헤드폰 환경 및 개인차를 고려합니다.

## 도식의 한계

이 카드는 처리 단계 안내를 반복 재생합니다. 실제 Spatialization의 화면 효과나 엔진 실행을 재현한 영상은 아닙니다.

## 요청 예시

공간 음향을 게임에 적용하려고 합니다. 음원의 방향과 위치를 청취 출력에 반영합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.

## 참고 자료

https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html
확인 범위: 위치에 따른 청취 출력과 Unity Spatializer 개념을 확인했습니다. 모든 출력 장치에서 같은 방향 인지를 보장하지 않습니다.

## 함께 볼 용어

소리 감쇠 (Audio attenuation) · 오디오 믹서 (Audio mixer) · 리버브 (Reverb)


## 자료 대조에서 보강한 내용

위치에 따른 청취 출력과 Unity Spatializer 개념을 확인했습니다. 모든 출력 장치에서 같은 방향 인지를 보장하지 않습니다.

## 확인 기록

마지막 확인: 2026-10-14

위치에 따른 청취 출력과 Unity Spatializer 개념을 확인했습니다. 모든 출력 장치에서 같은 방향 인지를 보장하지 않습니다.

개념·출처 대조입니다. 엔진 실행은 미검증입니다.

확인 자료: https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html
