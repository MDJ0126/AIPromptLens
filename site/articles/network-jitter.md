---
{
  "id": 79,
  "slug": "network-jitter",
  "kind": "concept",
  "category": "network",
  "name": "네트워크 지터",
  "en": "Network jitter",
  "desc": "패킷이 도착하는 시간 간격의 변동입니다.",
  "ko": "네트워크 지터을 게임에 적용하려고 합니다. 패킷이 도착하는 시간 간격의 변동입니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
  "promptEn": "Explain Network jitter with a minimal design, use case and limitations.",
  "visual": "network-jitter",
  "tags": [
    "beginner"
  ],
  "source": "https://gafferongames.com/post/snapshot_interpolation/",
  "diagramSteps": [
    "불규칙 도착",
    "간격 변동",
    "버퍼 검토"
  ],
  "related": [
    "client-prediction",
    "lag-compensation",
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
  "reviewScope": "Gaffer의 스냅샷 보간 설명에서 불규칙한 패킷 도착과 버퍼의 필요성을 확인했습니다. 평균 지연과 구분합니다.",
  "reviewLimit": "개념·출처 대조입니다. 엔진 실행은 미검증입니다.",
  "reviewSources": [
    {
      "url": "https://gafferongames.com/post/snapshot_interpolation/",
      "method": "원문 자료 대조"
    }
  ],
  "reviewHistory": [
    {
      "date": "2026-10-14",
      "action": "출처 및 설명 대조",
      "scope": "Gaffer의 스냅샷 보간 설명에서 불규칙한 패킷 도착과 버퍼의 필요성을 확인했습니다. 평균 지연과 구분합니다."
    }
  ]
}
---

# 네트워크 지터

## 핵심 구조

불규칙 도착 → 간격 변동 → 버퍼 검토

## 개념 설명

패킷이 도착하는 시간 간격의 변동입니다.

## 활용 상황

원격 이동 버퍼와 통신 상태를 평가합니다.

## 비교와 선택

평균 지연만으로 지터나 유실을 설명할 수 없습니다. 먼저 목적에 맞는지 판단하고, 비용과 결과는 대상 환경에서 확인합니다.

## 설계할 때 확인

입력값과 처리 결과를 구분하고, 실패하거나 범위를 벗어나는 상황을 정합니다. 평균 지연만으로 지터나 유실을 설명할 수 없습니다.

## 도식의 한계

이 카드는 처리 단계 안내를 반복 재생합니다. 실제 Network jitter의 화면 효과나 엔진 실행을 재현한 영상은 아닙니다.

## 요청 예시

네트워크 지터을 게임에 적용하려고 합니다. 패킷이 도착하는 시간 간격의 변동입니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.

## 참고 자료

https://gafferongames.com/post/snapshot_interpolation/
분야별 참고 자료입니다. 메뉴·API·설정은 사용하는 엔진 버전의 상세 문서에서 확인해 주세요.

## 함께 볼 용어

클라이언트 예측 (Client prediction) · 지연 보상 (Lag compensation) · 상태 복제 (State replication)


## 자료 대조에서 보강한 내용

Gaffer의 스냅샷 보간 설명에서 불규칙한 패킷 도착과 버퍼의 필요성을 확인했습니다. 평균 지연과 구분합니다.

## 확인 기록

마지막 확인: 2026-10-14

Gaffer의 스냅샷 보간 설명에서 불규칙한 패킷 도착과 버퍼의 필요성을 확인했습니다. 평균 지연과 구분합니다.

개념·출처 대조입니다. 엔진 실행은 미검증입니다.

확인 자료: https://gafferongames.com/post/snapshot_interpolation/
