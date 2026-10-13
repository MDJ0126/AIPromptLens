---
{
  "id": 30,
  "slug": "object-pool",
  "kind": "concept",
  "category": "principles",
  "name": "오브젝트 풀",
  "en": "Object pool",
  "desc": "반복 생성하는 객체를 반환하고 재사용해요.",
  "source": "https://gameprogrammingpatterns.com/object-pool.html",
  "ko": "반복 생성되는 총알의 풀 구조를 설명하고 초기화, 반환, 최대 용량 정책을 구분해 주세요.",
  "promptEn": "Explain Object pool with its structure, use cases and limitations.",
  "visual": "object-pool",
  "tags": [
    "beginner"
  ],
  "genres": [
    "action",
    "shooter",
    "rhythm",
    "platformer"
  ],
  "reviewedAt": "2026-10-14",
  "reviewStatus": "source-reviewed",
  "reviewScope": "원저자 문서에서 객체 재사용·풀 용량·초기화 문제를 확인했습니다. 풀 사용의 성능 이득은 대상 환경에서 측정해야 합니다.",
  "reviewSources": [
    {
      "url": "https://gameprogrammingpatterns.com/object-pool.html",
      "method": "원문 자료 대조"
    }
  ],
  "reviewHistory": [
    {
      "date": "2026-10-14",
      "action": "출처 및 설명 대조",
      "scope": "원저자 문서에서 객체 재사용·풀 용량·초기화 문제를 확인했습니다. 풀 사용의 성능 이득은 대상 환경에서 측정해야 합니다."
    }
  ]
}
---

# 오브젝트 풀

## 핵심 구조

미리 준비 → 대여 → 상태 초기화 → 사용 → 정리 → 반환

## 개념 설명

총알이나 효과를 매번 생성·파괴하는 대신, 사용하지 않는 객체를 다시 꺼내 쓰는 구조입니다. 사용 중과 대기 중 객체를 구분해야 합니다.

## 비교와 선택

생성 비용이 측정된 병목일 때 검토합니다. 풀은 대기 객체도 메모리에 보관하므로 무조건 빠르거나 저렴하지 않습니다. 용량을 넘으면 확장·거절·교체 중 정책을 정합니다.

## 활용 상황

반환할 때 타이머, 이벤트 구독, 대상 참조를 정리하고 재대여할 때 수명·속도·위치를 초기화합니다. 이전 사용자의 상태가 남는 문제와 중복 반환을 점검합니다.

## 도식의 한계

자동 재생 도식은 개념 설명용입니다. 실제 엔진 코드 실행이나 성능 측정 화면은 아닙니다.

## 요청 예시

반복 생성되는 총알의 풀 구조를 설명하고 초기화, 반환, 최대 용량 정책을 구분해 주세요.

## 참고 자료

https://gameprogrammingpatterns.com/object-pool.html


## 자료 대조에서 보강한 내용


