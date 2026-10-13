---
{
  "id": 55,
  "slug": "animation-event",
  "kind": "concept",
  "category": "animation",
  "name": "애니메이션 이벤트",
  "en": "Animation event",
  "desc": "클립 재생의 지정 지점에서 이벤트를 발생시킵니다.",
  "ko": "애니메이션 이벤트을 게임에 적용하려고 합니다. 클립 재생의 지정 지점에서 이벤트를 발생시킵니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
  "promptEn": "Explain Animation event with a minimal design, use case and limitations.",
  "visual": "animation-event",
  "tags": [
    "beginner"
  ],
  "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html",
  "diagramSteps": [
    "클립 재생",
    "지정 시점",
    "이벤트 호출"
  ],
  "related": [
    "additive-animation",
    "animation-layer",
    "blend-tree"
  ],
  "genres": [
    "action",
    "rpg",
    "rhythm",
    "sports"
  ],
  "reviewedAt": "2026-10-14",
  "reviewStatus": "source-reviewed",
  "reviewType": "기능·개념",
  "reviewScope": "클립의 지정 시점 이벤트 호출을 확인했습니다. 공격 판정의 서버 권한과 중복 방지까지 제공하는 기능은 아닙니다.",
  "reviewVersion": "Unity 6.0 (6000.0)",
  "reviewLimit": "개념·출처 대조입니다. 엔진 실행은 미검증입니다.",
  "reviewSources": [
    {
      "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html",
      "method": "공식 용어집 정의 대조"
    }
  ],
  "reviewHistory": [
    {
      "date": "2026-10-14",
      "action": "출처 및 설명 대조",
      "scope": "클립의 지정 시점 이벤트 호출을 확인했습니다. 공격 판정의 서버 권한과 중복 방지까지 제공하는 기능은 아닙니다."
    }
  ]
}
---

# 애니메이션 이벤트

## 핵심 구조

클립 재생 → 지정 시점 → 이벤트 호출

## 개념 설명

클립 재생의 지정 지점에서 이벤트를 발생시킵니다.

## 활용 상황

발소리와 효과를 동작 시점에 맞춥니다.

## 비교와 선택

혼합·중단·반복 재생 때 중복 또는 누락 정책을 검토합니다. 먼저 목적에 맞는지 판단하고, 비용과 결과는 대상 환경에서 확인합니다.

## 설계할 때 확인

입력값과 처리 결과를 구분하고, 실패하거나 범위를 벗어나는 상황을 정합니다. 혼합·중단·반복 재생 때 중복 또는 누락 정책을 검토합니다.

## 도식의 한계

이 카드는 처리 단계 안내를 반복 재생합니다. 실제 Animation event의 화면 효과나 엔진 실행을 재현한 영상은 아닙니다.

## 요청 예시

애니메이션 이벤트을 게임에 적용하려고 합니다. 클립 재생의 지정 지점에서 이벤트를 발생시킵니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.

## 참고 자료

https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html
확인 범위: 클립의 지정 시점 이벤트 호출을 확인했습니다. 공격 판정의 서버 권한과 중복 방지까지 제공하는 기능은 아닙니다.

## 함께 볼 용어

가산 애니메이션 (Additive animation) · 애니메이션 레이어 (Animation layer) · 블렌드 트리 (Blend tree)


## 자료 대조에서 보강한 내용

클립의 지정 시점 이벤트 호출을 확인했습니다. 공격 판정의 서버 권한과 중복 방지까지 제공하는 기능은 아닙니다.

## 확인 기록

마지막 확인: 2026-10-14

클립의 지정 시점 이벤트 호출을 확인했습니다. 공격 판정의 서버 권한과 중복 방지까지 제공하는 기능은 아닙니다.

개념·출처 대조입니다. 엔진 실행은 미검증입니다.

확인 자료: https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html
