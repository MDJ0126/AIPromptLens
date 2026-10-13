---
{
  "id": 97,
  "slug": "audio-mixer",
  "kind": "concept",
  "category": "audio",
  "name": "오디오 믹서",
  "en": "Audio mixer",
  "desc": "여러 소리 그룹의 음량과 효과를 조합합니다.",
  "ko": "오디오 믹서을 게임에 적용하려고 합니다. 여러 소리 그룹의 음량과 효과를 조합합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
  "promptEn": "Explain Audio mixer with a minimal design, use case and limitations.",
  "visual": "audio-mixer",
  "tags": [
    "beginner"
  ],
  "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/AudioMixer.html",
  "diagramSteps": [
    "소리 그룹",
    "음량과 효과",
    "최종 출력"
  ],
  "related": [
    "audio-attenuation",
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
  "reviewScope": "Unity Mixer Group의 신호 혼합·음량·효과 처리를 확인했습니다. 과도한 합산 출력은 별도로 점검합니다.",
  "reviewVersion": "Unity 6.0 (6000.0)",
  "reviewSources": [
    {
      "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/AudioMixer.html",
      "method": "원문 자료 대조"
    }
  ],
  "reviewHistory": [
    {
      "date": "2026-10-14",
      "action": "출처 및 설명 대조",
      "scope": "Unity Mixer Group의 신호 혼합·음량·효과 처리를 확인했습니다. 과도한 합산 출력은 별도로 점검합니다."
    }
  ]
}
---

# 오디오 믹서

## 핵심 구조

소리 그룹 → 음량과 효과 → 최종 출력

## 개념 설명

여러 소리 그룹의 음량과 효과를 조합합니다.

## 활용 상황

음악·효과·대사의 균형과 설정을 관리합니다.

## 비교와 선택

그룹별 합산으로 생기는 과도한 레벨과 클리핑을 확인합니다. 먼저 목적에 맞는지 판단하고, 비용과 결과는 대상 환경에서 확인합니다.

## 설계할 때 확인

입력값과 처리 결과를 구분하고, 실패하거나 범위를 벗어나는 상황을 정합니다. 그룹별 합산으로 생기는 과도한 레벨과 클리핑을 확인합니다.

## 도식의 한계

이 카드는 처리 단계 안내를 반복 재생합니다. 실제 Audio mixer의 화면 효과나 엔진 실행을 재현한 영상은 아닙니다.

## 요청 예시

오디오 믹서을 게임에 적용하려고 합니다. 여러 소리 그룹의 음량과 효과를 조합합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.

## 참고 자료

https://docs.unity3d.com/6000.0/Documentation/Manual/AudioMixer.html
확인 범위: Unity Mixer Group의 신호 혼합·음량·효과 처리를 확인했습니다. 과도한 합산 출력은 별도로 점검합니다.

## 함께 볼 용어

소리 감쇠 (Audio attenuation) · 공간 음향 (Spatialization) · 리버브 (Reverb)


## 자료 대조에서 보강한 내용

Unity Mixer Group의 신호 혼합·음량·효과 처리를 확인했습니다. 과도한 합산 출력은 별도로 점검합니다.

## 확인 기록

마지막 확인: 2026-10-14

Unity Mixer Group의 신호 혼합·음량·효과 처리를 확인했습니다. 과도한 합산 출력은 별도로 점검합니다.


확인 자료: https://docs.unity3d.com/6000.0/Documentation/Manual/AudioMixer.html
