---
{
  "id": 78,
  "slug": "lag-compensation",
  "kind": "concept",
  "category": "network",
  "name": "지연 보상",
  "en": "Lag compensation",
  "desc": "통신 지연을 고려하여 과거 상태 등으로 판정을 보완합니다.",
  "ko": "지연 보상을 게임에 적용하려고 합니다. 통신 지연을 고려하여 과거 상태 등으로 판정을 보완합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
  "promptEn": "Explain Lag compensation with a minimal design, use case and limitations.",
  "visual": "lag-compensation",
  "tags": [
    "beginner"
  ],
  "source": "https://developer.valvesoftware.com/w/index.php?title=Latency_Compensating_Methods_in_Client%2FServer_In-game_Protocol_Design_and_Optimization&uselang=en",
  "diagramSteps": [
    "요청 시간",
    "과거 상태 조회",
    "판정 보완"
  ],
  "related": [
    "client-prediction",
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
  "reviewScope": "Valve 개발자 원문 검색 본문에서 과거 상태 되감기 판정을 확인했습니다. 직접 페이지 접근은 차단되었습니다.",
  "reviewSources": [
    {
      "url": "https://developer.valvesoftware.com/w/index.php?title=Latency_Compensating_Methods_in_Client%2FServer_In-game_Protocol_Design_and_Optimization&uselang=en",
      "method": "검색에 노출된 원문 일부 대조"
    }
  ],
  "reviewHistory": [
    {
      "date": "2026-10-14",
      "action": "출처 및 설명 대조",
      "scope": "Valve 개발자 원문 검색 본문에서 과거 상태 되감기 판정을 확인했습니다. 직접 페이지 접근은 차단되었습니다."
    }
  ]
}
---

# 지연 보상

## 핵심 구조

요청 시간 → 과거 상태 조회 → 판정 보완

## 개념 설명

통신 지연을 고려하여 과거 상태 등으로 판정을 보완합니다.

## 활용 상황

온라인 사격 판정에 활용합니다.

## 비교와 선택

되감기 범위와 공정성 기준을 정해야 하며 모든 게임에 같은 정책이 맞지 않습니다. 먼저 목적에 맞는지 판단하고, 비용과 결과는 대상 환경에서 확인합니다.

## 설계할 때 확인

입력값과 처리 결과를 구분하고, 실패하거나 범위를 벗어나는 상황을 정합니다. 되감기 범위와 공정성 기준을 정해야 하며 모든 게임에 같은 정책이 맞지 않습니다.

## 도식의 한계

이 카드는 처리 단계 안내를 반복 재생합니다. 실제 Lag compensation의 화면 효과나 엔진 실행을 재현한 영상은 아닙니다.

## 요청 예시

지연 보상을 게임에 적용하려고 합니다. 통신 지연을 고려하여 과거 상태 등으로 판정을 보완합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.

## 참고 자료

https://gafferongames.com/post/snapshot_interpolation/
분야별 참고 자료입니다. 메뉴·API·설정은 사용하는 엔진 버전의 상세 문서에서 확인해 주세요.

## 함께 볼 용어

클라이언트 예측 (Client prediction) · 네트워크 지터 (Network jitter) · 상태 복제 (State replication)


## 자료 대조에서 보강한 내용

Valve 원문은 서버가 과거 상태로 판정을 수행한 뒤 현재 상태로 복원하는 방식을 설명합니다. 되감기 범위와 공정성 정책은 게임별입니다.

## 확인 기록

마지막 확인: 2026-10-14

Valve 개발자 원문 검색 본문에서 과거 상태 되감기 판정을 확인했습니다. 직접 페이지 접근은 차단되었습니다.


확인 자료: https://developer.valvesoftware.com/w/index.php?title=Latency_Compensating_Methods_in_Client%2FServer_In-game_Protocol_Design_and_Optimization&uselang=en
