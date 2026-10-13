---
{
  "id": 98,
  "slug": "component-system",
  "kind": "concept",
  "category": "architecture",
  "name": "컴포넌트 구조",
  "en": "Component architecture",
  "desc": "객체 기능을 분리된 구성 요소로 조합합니다.",
  "ko": "컴포넌트 구조을 게임에 적용하려고 합니다. 객체 기능을 분리된 구성 요소로 조합합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
  "promptEn": "Explain Component architecture with a minimal design, use case and limitations.",
  "visual": "component-system",
  "tags": [
    "beginner"
  ],
  "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html",
  "diagramSteps": [
    "분리된 기능",
    "객체에 조합",
    "상호작용"
  ],
  "related": [
    "event-queue"
  ],
  "genres": [
    "action",
    "rpg",
    "shooter",
    "strategy",
    "simulation",
    "racing",
    "sports",
    "rhythm",
    "puzzle",
    "platformer",
    "adventure",
    "horror"
  ],
  "reviewedAt": "2026-10-14",
  "reviewStatus": "source-reviewed",
  "reviewType": "기능·개념",
  "reviewScope": "Unity GameObject의 컴포넌트 구성을 확인했습니다. 이 설명은 ECS나 모든 엔진의 객체 모델과 같다는 뜻이 아닙니다.",
  "reviewVersion": "Unity 6.0 (6000.0)",
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
      "scope": "Unity GameObject의 컴포넌트 구성을 확인했습니다. 이 설명은 ECS나 모든 엔진의 객체 모델과 같다는 뜻이 아닙니다."
    }
  ]
}
---

# 컴포넌트 구조

## 핵심 구조

분리된 기능 → 객체에 조합 → 상호작용

## 개념 설명

객체 기능을 분리된 구성 요소로 조합합니다.

## 활용 상황

체력과 이동 같은 기능을 여러 객체에 재사용합니다.

## 비교와 선택

컴포넌트 간 의존성과 실행 순서를 명시해야 합니다. 먼저 목적에 맞는지 판단하고, 비용과 결과는 대상 환경에서 확인합니다.

## 설계할 때 확인

입력값과 처리 결과를 구분하고, 실패하거나 범위를 벗어나는 상황을 정합니다. 컴포넌트 간 의존성과 실행 순서를 명시해야 합니다.

## 도식의 한계

이 카드는 처리 단계 안내를 반복 재생합니다. 실제 Component architecture의 화면 효과나 엔진 실행을 재현한 영상은 아닙니다.

## 요청 예시

컴포넌트 구조을 게임에 적용하려고 합니다. 객체 기능을 분리된 구성 요소로 조합합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.

## 참고 자료

https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html
확인 범위: Unity GameObject의 컴포넌트 구성을 확인했습니다. 이 설명은 ECS나 모든 엔진의 객체 모델과 같다는 뜻이 아닙니다.

## 함께 볼 용어

이벤트 큐 (Event queue)


## 자료 대조에서 보강한 내용

Unity GameObject의 컴포넌트 구성을 확인했습니다. 이 설명은 ECS나 모든 엔진의 객체 모델과 같다는 뜻이 아닙니다.

## 확인 기록

마지막 확인: 2026-10-14

Unity GameObject의 컴포넌트 구성을 확인했습니다. 이 설명은 ECS나 모든 엔진의 객체 모델과 같다는 뜻이 아닙니다.


확인 자료: https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html
