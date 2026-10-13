---
{
  "id": 74,
  "slug": "server-authority",
  "kind": "concept",
  "category": "network",
  "name": "서버 권한",
  "en": "Server authority",
  "desc": "최종 게임 상태의 판단 권한을 서버에 둡니다.",
  "ko": "서버 권한을 게임에 적용하려고 합니다. 최종 게임 상태의 판단 권한을 서버에 둡니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
  "promptEn": "Explain Server authority with a minimal design, use case and limitations.",
  "visual": "server-authority",
  "tags": [
    "beginner"
  ],
  "source": "https://gafferongames.com/post/what_every_programmer_needs_to_know_about_game_networking/",
  "diagramSteps": [
    "클라이언트 요청",
    "서버 검증",
    "결과 반영"
  ],
  "related": [
    "client-prediction",
    "lag-compensation",
    "network-jitter"
  ],
  "genres": [
    "action",
    "rpg",
    "shooter",
    "strategy",
    "racing",
    "sports",
    "simulation"
  ],
  "reviewedAt": "2026-10-14",
  "reviewStatus": "source-reviewed",
  "reviewScope": "서버가 최종 판단하는 모델입니다. 검증 로직이 없으면 서버 권한이라는 이름만으로 잘못된 요청을 막지 못합니다.",
  "reviewSources": [
    {
      "url": "https://gafferongames.com/post/what_every_programmer_needs_to_know_about_game_networking/",
      "method": "원문 자료 대조"
    }
  ],
  "reviewHistory": [
    {
      "date": "2026-10-14",
      "action": "출처 및 설명 대조",
      "scope": "서버가 최종 판단하는 모델입니다. 검증 로직이 없으면 서버 권한이라는 이름만으로 잘못된 요청을 막지 못합니다."
    }
  ]
}
---

# 서버 권한

## 핵심 구조

클라이언트 요청 → 서버 검증 → 결과 반영

## 개념 설명

최종 게임 상태의 판단 권한을 서버에 둡니다.

## 활용 상황

체력과 보상 등 중요한 상태를 검증합니다.

## 비교와 선택

서버 권한만으로 모든 부정행위가 방지되는 것은 아닙니다. 먼저 목적에 맞는지 판단하고, 비용과 결과는 대상 환경에서 확인합니다.

## 설계할 때 확인

입력값과 처리 결과를 구분하고, 실패하거나 범위를 벗어나는 상황을 정합니다. 서버 권한만으로 모든 부정행위가 방지되는 것은 아닙니다.

## 도식의 한계

이 카드는 처리 단계 안내를 반복 재생합니다. 실제 Server authority의 화면 효과나 엔진 실행을 재현한 영상은 아닙니다.

## 요청 예시

서버 권한을 게임에 적용하려고 합니다. 최종 게임 상태의 판단 권한을 서버에 둡니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.

## 참고 자료

https://gafferongames.com/post/snapshot_interpolation/
분야별 참고 자료입니다. 메뉴·API·설정은 사용하는 엔진 버전의 상세 문서에서 확인해 주세요.

## 함께 볼 용어

클라이언트 예측 (Client prediction) · 지연 보상 (Lag compensation) · 네트워크 지터 (Network jitter)


## 자료 대조에서 보강한 내용

서버가 최종 판단하는 모델입니다. 검증 로직이 없으면 서버 권한이라는 이름만으로 잘못된 요청을 막지 못합니다.

## 확인 기록

마지막 확인: 2026-10-14

서버가 최종 판단하는 모델입니다. 검증 로직이 없으면 서버 권한이라는 이름만으로 잘못된 요청을 막지 못합니다.


확인 자료: https://gafferongames.com/post/what_every_programmer_needs_to_know_about_game_networking/
