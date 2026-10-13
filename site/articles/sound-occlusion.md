---
{
  "id": 26,
  "slug": "sound-occlusion",
  "kind": "concept",
  "category": "principles",
  "name": "소리 차폐",
  "en": "Sound occlusion",
  "desc": "벽이 소리를 가리는 정도를 어떻게 근사할지 정해요.",
  "source": "https://valvesoftware.github.io/steam-audio/doc/capi/simulation.html",
  "ko": "벽과 문이 있는 공간에서 소리 차폐를 표현하고 싶습니다. 레이 한 줄과 여러 샘플 방식의 차이, 급격한 전환을 줄이는 방법을 설명해 주세요.",
  "promptEn": "Explain sound occlusion in spaces with walls and doors, comparing single-ray and sampled approaches and ways to smooth transitions.",
  "visual": "sound-occlusion",
  "tags": [
    "beginner"
  ],
  "genres": [
    "horror",
    "shooter",
    "adventure"
  ],
  "reviewedAt": "2026-10-14",
  "reviewStatus": "source-reviewed",
  "reviewScope": "Steam Audio C API 문서에서 직접 경로의 차폐 검사를 확인했습니다. Unity/Unreal 기본 오디오와 동일한 내장 기능으로 소개하지 않습니다.",
  "reviewSources": [
    {
      "url": "https://valvesoftware.github.io/steam-audio/doc/capi/simulation.html",
      "method": "원문 자료 대조"
    }
  ],
  "reviewHistory": [
    {
      "date": "2026-10-14",
      "action": "출처 및 설명 대조",
      "scope": "Steam Audio C API 문서에서 직접 경로의 차폐 검사를 확인했습니다. Unity/Unreal 기본 오디오와 동일한 내장 기능으로 소개하지 않습니다."
    }
  ]
}
---

# 소리 차폐

## 핵심 구조

음원과 듣는 위치 → 장애물 검사 → 소리 처리 값 결정

## 개념 설명

차폐는 장애물이 음원과 듣는 위치 사이를 가리는 문제입니다. 레이 한 줄은 단순한 차단 판단을 제공하고, 여러 샘플은 일부만 가려지는 상태를 표현하는 데 사용할 수 있습니다.

## 비교와 선택

한 줄 검사: 구조가 단순하지만 작은 장애물에도 갑자기 상태가 바뀔 수 있습니다.
여러 샘플: 부분적인 가림과 부드러운 전환을 다룰 수 있지만 더 많은 검사가 필요합니다.

## 활용 상황

얇은 기둥과 넓은 벽을 비교하고, 문 주변을 이동하며 전환을 들어 봅니다. 소리 차폐와 문·모서리를 돌아오는 전파는 별개의 문제로 구분합니다.

## 확인할 질문

작은 장애물 때문에 소리가 갑자기 끊기나요?
검사 결과를 시간에 따라 부드럽게 바꾸나요?
음원 크기와 샘플 수는 어떤 기준으로 정하나요?

## 도식의 한계

도식은 가림 검사를 보여주며 실제 음향 파동이나 소리를 재생하지 않습니다. 벽을 투과하는 소리, 회절, 잔향은 별도로 다뤄야 합니다.

## 요청 예시

벽과 문이 있는 공간에서 소리 차폐를 표현하고 싶습니다. 레이 한 줄과 여러 샘플 방식의 차이, 급격한 전환을 줄이는 방법을 설명해 주세요.

## 참고 자료

https://valvesoftware.github.io/steam-audio/doc/capi/simulation.html


## 자료 대조에서 보강한 내용

Steam Audio C API 문서에서 직접 경로의 차폐 검사를 확인했습니다. Unity/Unreal 기본 오디오와 동일한 내장 기능으로 소개하지 않습니다.

## 확인 기록

마지막 확인: 2026-10-14

Steam Audio C API 문서에서 직접 경로의 차폐 검사를 확인했습니다. Unity/Unreal 기본 오디오와 동일한 내장 기능으로 소개하지 않습니다.


확인 자료: https://valvesoftware.github.io/steam-audio/doc/capi/simulation.html
