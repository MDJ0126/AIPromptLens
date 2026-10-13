---
{
  "id": 76,
  "slug": "server-reconciliation",
  "kind": "concept",
  "category": "network",
  "name": "서버 보정",
  "en": "Server reconciliation",
  "desc": "서버의 확인 결과와 클라이언트 예측을 맞춥니다.",
  "ko": "서버 보정을 게임에 적용하려고 합니다. 서버의 확인 결과와 클라이언트 예측을 맞춥니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
  "promptEn": "Explain Server reconciliation with a minimal design, use case and limitations.",
  "visual": "server-reconciliation",
  "tags": [
    "beginner"
  ],
  "source": "https://gafferongames.com/post/what_every_programmer_needs_to_know_about_game_networking/",
  "diagramSteps": [
    "서버 확인",
    "예측 오차",
    "입력 재적용"
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
  "reviewScope": "Gaffer On Games의 입력 기록을 되감아 재적용하는 보정 설명을 확인했습니다.",
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
      "scope": "Gaffer On Games의 입력 기록을 되감아 재적용하는 보정 설명을 확인했습니다."
    }
  ]
}
---

# 서버 보정

## 핵심 구조

서버 확인 → 예측 오차 → 입력 재적용

## 개념 설명

서버의 확인 결과와 클라이언트 예측을 맞춥니다.

## 활용 상황

예측 이동의 누적 오차를 바로잡습니다.

## 비교와 선택

순서 번호와 미확인 입력 관리가 필요하며 단순 위치 이동과 구분합니다. 먼저 목적에 맞는지 판단하고, 비용과 결과는 대상 환경에서 확인합니다.

## 설계할 때 확인

입력값과 처리 결과를 구분하고, 실패하거나 범위를 벗어나는 상황을 정합니다. 순서 번호와 미확인 입력 관리가 필요하며 단순 위치 이동과 구분합니다.

## 도식의 한계

이 카드는 처리 단계 안내를 반복 재생합니다. 실제 Server reconciliation의 화면 효과나 엔진 실행을 재현한 영상은 아닙니다.

## 요청 예시

서버 보정을 게임에 적용하려고 합니다. 서버의 확인 결과와 클라이언트 예측을 맞춥니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.

## 참고 자료

https://gafferongames.com/post/snapshot_interpolation/
분야별 참고 자료입니다. 메뉴·API·설정은 사용하는 엔진 버전의 상세 문서에서 확인해 주세요.

## 함께 볼 용어

클라이언트 예측 (Client prediction) · 지연 보상 (Lag compensation) · 네트워크 지터 (Network jitter)


## 자료 대조에서 보강한 내용

확인된 상태와 입력 기록을 기준으로 다시 계산하는 보정입니다. 모든 게임이 같은 재처리 구조를 사용한다는 뜻은 아닙니다.

