---
{
  "id": 72,
  "slug": "replication",
  "kind": "concept",
  "category": "network",
  "name": "상태 복제",
  "en": "State replication",
  "desc": "권한을 가진 쪽의 상태를 다른 참여자에게 전달합니다.",
  "ko": "상태 복제을 게임에 적용하려고 합니다. 권한을 가진 쪽의 상태를 다른 참여자에게 전달합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
  "promptEn": "Explain State replication with a minimal design, use case and limitations.",
  "visual": "replication",
  "tags": [
    "beginner"
  ],
  "source": "https://dev.epicgames.com/documentation/en-us/unreal-engine/networking-overview-for-unreal-engine",
  "diagramSteps": [
    "권한 상태",
    "변경 전송",
    "원격 반영"
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
  "reviewScope": "상태 복제는 여러 머신의 상태 공유입니다. 전송 빈도·관심 대상·권한을 설계해야 합니다.",
  "reviewSources": [
    {
      "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/networking-overview-for-unreal-engine",
      "method": "원문 자료 대조"
    }
  ],
  "reviewHistory": [
    {
      "date": "2026-10-14",
      "action": "출처 및 설명 대조",
      "scope": "상태 복제는 여러 머신의 상태 공유입니다. 전송 빈도·관심 대상·권한을 설계해야 합니다."
    }
  ]
}
---

# 상태 복제

## 핵심 구조

권한 상태 → 변경 전송 → 원격 반영

## 개념 설명

권한을 가진 쪽의 상태를 다른 참여자에게 전달합니다.

## 활용 상황

플레이어 위치와 체력 정보를 동기화합니다.

## 비교와 선택

모든 상태를 매 프레임 보내기보다 중요도와 갱신 빈도를 정합니다. 먼저 목적에 맞는지 판단하고, 비용과 결과는 대상 환경에서 확인합니다.

## 설계할 때 확인

입력값과 처리 결과를 구분하고, 실패하거나 범위를 벗어나는 상황을 정합니다. 모든 상태를 매 프레임 보내기보다 중요도와 갱신 빈도를 정합니다.

## 도식의 한계

이 카드는 처리 단계 안내를 반복 재생합니다. 실제 State replication의 화면 효과나 엔진 실행을 재현한 영상은 아닙니다.

## 요청 예시

상태 복제을 게임에 적용하려고 합니다. 권한을 가진 쪽의 상태를 다른 참여자에게 전달합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.

## 참고 자료

https://gafferongames.com/post/snapshot_interpolation/
분야별 참고 자료입니다. 메뉴·API·설정은 사용하는 엔진 버전의 상세 문서에서 확인해 주세요.

## 함께 볼 용어

클라이언트 예측 (Client prediction) · 지연 보상 (Lag compensation) · 네트워크 지터 (Network jitter)


## 자료 대조에서 보강한 내용

상태 복제는 여러 머신의 상태 공유입니다. 전송 빈도·관심 대상·권한을 설계해야 합니다.

## 확인 기록

마지막 확인: 2026-10-14

상태 복제는 여러 머신의 상태 공유입니다. 전송 빈도·관심 대상·권한을 설계해야 합니다.


확인 자료: https://dev.epicgames.com/documentation/en-us/unreal-engine/networking-overview-for-unreal-engine
