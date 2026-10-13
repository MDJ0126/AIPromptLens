---
{
  "id": 77,
  "slug": "snapshot-interpolation",
  "kind": "concept",
  "category": "network",
  "name": "스냅샷 보간",
  "en": "Snapshot interpolation",
  "desc": "수신한 과거 상태 사이를 보간해 원격 움직임을 표시합니다.",
  "ko": "스냅샷 보간을 게임에 적용하려고 합니다. 수신한 과거 상태 사이를 보간해 원격 움직임을 표시합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
  "promptEn": "Explain Snapshot interpolation with a minimal design, use case and limitations.",
  "visual": "snapshot-interpolation",
  "tags": [
    "beginner"
  ],
  "source": "https://gafferongames.com/post/snapshot_interpolation/",
  "diagramSteps": [
    "상태 수신",
    "시간 버퍼",
    "중간 상태 표시"
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
  "reviewScope": "수신한 상태를 버퍼에 보관하고 사이를 보간합니다. 지터 완화와 표시 지연 사이 절충을 확인했습니다.",
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
      "scope": "수신한 상태를 버퍼에 보관하고 사이를 보간합니다. 지터 완화와 표시 지연 사이 절충을 확인했습니다."
    }
  ]
}
---

# 스냅샷 보간

## 핵심 구조

상태 수신 → 시간 버퍼 → 중간 상태 표시

## 개념 설명

수신한 과거 상태 사이를 보간해 원격 움직임을 표시합니다.

## 활용 상황

통신 간격과 지터로 인한 끊김을 완화합니다.

## 비교와 선택

표시 지연이 늘며 패킷 유실과 버퍼 부족 정책이 필요합니다. 먼저 목적에 맞는지 판단하고, 비용과 결과는 대상 환경에서 확인합니다.

## 설계할 때 확인

입력값과 처리 결과를 구분하고, 실패하거나 범위를 벗어나는 상황을 정합니다. 표시 지연이 늘며 패킷 유실과 버퍼 부족 정책이 필요합니다.

## 도식의 한계

이 카드는 처리 단계 안내를 반복 재생합니다. 실제 Snapshot interpolation의 화면 효과나 엔진 실행을 재현한 영상은 아닙니다.

## 요청 예시

스냅샷 보간을 게임에 적용하려고 합니다. 수신한 과거 상태 사이를 보간해 원격 움직임을 표시합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.

## 참고 자료

https://gafferongames.com/post/snapshot_interpolation/
분야별 참고 자료입니다. 메뉴·API·설정은 사용하는 엔진 버전의 상세 문서에서 확인해 주세요.

## 함께 볼 용어

클라이언트 예측 (Client prediction) · 지연 보상 (Lag compensation) · 네트워크 지터 (Network jitter)


## 자료 대조에서 보강한 내용

수신한 상태를 버퍼에 보관하고 사이를 보간합니다. 지터 완화와 표시 지연 사이 절충을 확인했습니다.

## 확인 기록

마지막 확인: 2026-10-14

수신한 상태를 버퍼에 보관하고 사이를 보간합니다. 지터 완화와 표시 지연 사이 절충을 확인했습니다.


확인 자료: https://gafferongames.com/post/snapshot_interpolation/
