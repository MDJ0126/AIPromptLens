---
{
  "id": 73,
  "slug": "rpc",
  "kind": "concept",
  "category": "network",
  "name": "원격 프로시저 호출",
  "en": "RPC",
  "desc": "네트워크를 통해 다른 실행 주체에 함수 호출 메시지를 보냅니다.",
  "ko": "원격 프로시저 호출을 게임에 적용하려고 합니다. 네트워크를 통해 다른 실행 주체에 함수 호출 메시지를 보냅니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
  "promptEn": "Explain RPC with a minimal design, use case and limitations.",
  "visual": "rpc",
  "tags": [
    "beginner"
  ],
  "source": "https://dev.epicgames.com/documentation/en-us/unreal-engine/remote-procedure-calls-in-unreal-engine",
  "diagramSteps": [
    "호출 요청",
    "네트워크 메시지",
    "원격 실행"
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
  "reviewScope": "Unreal RPC는 다른 머신에서 실행할 호출이며 일반 반환값이 없습니다. 다른 프레임워크의 RPC 의미와 구분합니다.",
  "reviewLimit": "개념·출처 대조입니다. 엔진 실행은 미검증입니다.",
  "reviewSources": [
    {
      "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/remote-procedure-calls-in-unreal-engine",
      "method": "원문 자료 대조"
    }
  ],
  "reviewHistory": [
    {
      "date": "2026-10-14",
      "action": "출처 및 설명 대조",
      "scope": "Unreal RPC는 다른 머신에서 실행할 호출이며 일반 반환값이 없습니다. 다른 프레임워크의 RPC 의미와 구분합니다."
    }
  ]
}
---

# 원격 프로시저 호출

## 핵심 구조

호출 요청 → 네트워크 메시지 → 원격 실행

## 개념 설명

네트워크를 통해 다른 실행 주체에 함수 호출 메시지를 보냅니다.

## 활용 상황

상호작용 요청과 일회성 이벤트를 전달합니다.

## 비교와 선택

지속 상태 복제와 구분하고 권한·신뢰성·빈도를 검토합니다. 먼저 목적에 맞는지 판단하고, 비용과 결과는 대상 환경에서 확인합니다.

## 설계할 때 확인

입력값과 처리 결과를 구분하고, 실패하거나 범위를 벗어나는 상황을 정합니다. 지속 상태 복제와 구분하고 권한·신뢰성·빈도를 검토합니다.

## 도식의 한계

이 카드는 처리 단계 안내를 반복 재생합니다. 실제 RPC의 화면 효과나 엔진 실행을 재현한 영상은 아닙니다.

## 요청 예시

원격 프로시저 호출을 게임에 적용하려고 합니다. 네트워크를 통해 다른 실행 주체에 함수 호출 메시지를 보냅니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.

## 참고 자료

https://gafferongames.com/post/snapshot_interpolation/
분야별 참고 자료입니다. 메뉴·API·설정은 사용하는 엔진 버전의 상세 문서에서 확인해 주세요.

## 함께 볼 용어

클라이언트 예측 (Client prediction) · 지연 보상 (Lag compensation) · 네트워크 지터 (Network jitter)


## 자료 대조에서 보강한 내용

Unreal RPC는 다른 머신에서 실행할 호출이며 일반 반환값이 없습니다. 다른 프레임워크의 RPC 의미와 구분합니다.

## 확인 기록

마지막 확인: 2026-10-14

Unreal RPC는 다른 머신에서 실행할 호출이며 일반 반환값이 없습니다. 다른 프레임워크의 RPC 의미와 구분합니다.

개념·출처 대조입니다. 엔진 실행은 미검증입니다.

확인 자료: https://dev.epicgames.com/documentation/en-us/unreal-engine/remote-procedure-calls-in-unreal-engine
