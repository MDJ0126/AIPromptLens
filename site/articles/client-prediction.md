---
{
  "id": 75,
  "slug": "client-prediction",
  "kind": "concept",
  "category": "network",
  "name": "클라이언트 예측",
  "en": "Client prediction",
  "desc": "서버 응답을 기다리기 전에 로컬 입력의 결과를 계산합니다.",
  "ko": "클라이언트 예측을 게임에 적용하려고 합니다. 서버 응답을 기다리기 전에 로컬 입력의 결과를 계산합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
  "promptEn": "Explain Client prediction with a minimal design, use case and limitations.",
  "visual": "client-prediction",
  "tags": [
    "beginner"
  ],
  "source": "https://gafferongames.com/post/networked_physics_2004/",
  "diagramSteps": [
    "로컬 입력",
    "즉시 예상",
    "서버 확인"
  ],
  "related": [
    "lag-compensation",
    "network-jitter",
    "replication"
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
  "reviewType": "기능·개념",
  "reviewScope": "클라이언트에서 입력 결과를 먼저 계산하는 방식입니다. 보정 없이 예측만 사용하는 것으로 설명하지 않습니다.",
  "reviewVersion": "원저자 자료",
  "reviewSources": [
    {
      "url": "https://gafferongames.com/post/networked_physics_2004/",
      "method": "원문 자료 대조"
    }
  ],
  "reviewHistory": [
    {
      "date": "2026-10-14",
      "action": "출처 및 설명 대조",
      "scope": "클라이언트에서 입력 결과를 먼저 계산하는 방식입니다. 보정 없이 예측만 사용하는 것으로 설명하지 않습니다."
    }
  ]
}
---

# 클라이언트 예측

## 핵심 구조

로컬 입력 → 즉시 예상 → 서버 확인

## 개념 설명

서버 응답을 기다리기 전에 로컬 입력의 결과를 계산합니다.

## 활용 상황

조작 반응을 빠르게 보여 줍니다.

## 비교와 선택

서버 결과와 차이가 나면 보정과 입력 재처리가 필요할 수 있습니다. 먼저 목적에 맞는지 판단하고, 비용과 결과는 대상 환경에서 확인합니다.

## 설계할 때 확인

입력값과 처리 결과를 구분하고, 실패하거나 범위를 벗어나는 상황을 정합니다. 서버 결과와 차이가 나면 보정과 입력 재처리가 필요할 수 있습니다.

## 도식의 한계

이 카드는 처리 단계 안내를 반복 재생합니다. 실제 Client prediction의 화면 효과나 엔진 실행을 재현한 영상은 아닙니다.

## 요청 예시

클라이언트 예측을 게임에 적용하려고 합니다. 서버 응답을 기다리기 전에 로컬 입력의 결과를 계산합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.

## 참고 자료

https://gafferongames.com/post/networked_physics_2004/

## 함께 볼 용어

지연 보상 (Lag compensation) · 네트워크 지터 (Network jitter) · 상태 복제 (State replication)


## 자료 대조에서 보강한 내용


