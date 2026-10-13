---
{
  "id": 96,
  "slug": "reverb",
  "kind": "concept",
  "category": "audio",
  "name": "리버브",
  "en": "Reverb",
  "desc": "공간에서 반복 반사되는 소리의 잔향을 표현합니다.",
  "ko": "리버브을 게임에 적용하려고 합니다. 공간에서 반복 반사되는 소리의 잔향을 표현합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
  "promptEn": "Explain Reverb with a minimal design, use case and limitations.",
  "visual": "reverb",
  "tags": [
    "beginner"
  ],
  "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-AudioReverbFilter.html",
  "diagramSteps": [
    "원음",
    "반사와 감쇠",
    "잔향"
  ],
  "related": [
    "audio-attenuation",
    "audio-mixer",
    "audio-spatialization"
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
  "reviewScope": "Unity Reverb Filter의 감쇠 시간과 초기 반사·잔향 설정을 확인했습니다. 원음의 음량 조절과 구분합니다.",
  "reviewSources": [
    {
      "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-AudioReverbFilter.html",
      "method": "원문 자료 대조"
    }
  ],
  "reviewHistory": [
    {
      "date": "2026-10-14",
      "action": "출처 및 설명 대조",
      "scope": "Unity Reverb Filter의 감쇠 시간과 초기 반사·잔향 설정을 확인했습니다. 원음의 음량 조절과 구분합니다."
    }
  ]
}
---

# 리버브

## 핵심 구조

원음 → 반사와 감쇠 → 잔향

## 개념 설명

공간에서 반복 반사되는 소리의 잔향을 표현합니다.

## 활용 상황

방과 동굴의 공간감을 구분합니다.

## 비교와 선택

잔향 시간과 초기 반사를 구분하고 대사 명료도를 점검합니다. 먼저 목적에 맞는지 판단하고, 비용과 결과는 대상 환경에서 확인합니다.

## 설계할 때 확인

입력값과 처리 결과를 구분하고, 실패하거나 범위를 벗어나는 상황을 정합니다. 잔향 시간과 초기 반사를 구분하고 대사 명료도를 점검합니다.

## 도식의 한계

이 카드는 처리 단계 안내를 반복 재생합니다. 실제 Reverb의 화면 효과나 엔진 실행을 재현한 영상은 아닙니다.

## 요청 예시

리버브을 게임에 적용하려고 합니다. 공간에서 반복 반사되는 소리의 잔향을 표현합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.

## 참고 자료

https://docs.unity3d.com/6000.0/Documentation/Manual/Audio.html
분야별 참고 자료입니다. 메뉴·API·설정은 사용하는 엔진 버전의 상세 문서에서 확인해 주세요.

## 함께 볼 용어

소리 감쇠 (Audio attenuation) · 오디오 믹서 (Audio mixer) · 공간 음향 (Spatialization)


## 자료 대조에서 보강한 내용

Unity Reverb Filter의 감쇠 시간과 초기 반사·잔향 설정을 확인했습니다. 원음의 음량 조절과 구분합니다.

## 확인 기록

마지막 확인: 2026-10-14

Unity Reverb Filter의 감쇠 시간과 초기 반사·잔향 설정을 확인했습니다. 원음의 음량 조절과 구분합니다.


확인 자료: https://docs.unity3d.com/6000.0/Documentation/Manual/class-AudioReverbFilter.html
