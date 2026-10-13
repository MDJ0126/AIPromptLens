---
{
  "id": 51,
  "slug": "forward-kinematics",
  "kind": "concept",
  "category": "animation",
  "name": "순운동학",
  "en": "Forward kinematics",
  "desc": "부모에서 자식으로 관절 변환을 적용해 끝점 위치를 구합니다.",
  "ko": "순운동학을 게임에 적용하려고 합니다. 부모에서 자식으로 관절 변환을 적용해 끝점 위치를 구합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
  "promptEn": "Explain Forward kinematics with a minimal design, use case and limitations.",
  "visual": "forward-kinematics",
  "tags": [
    "beginner"
  ],
  "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html",
  "diagramSteps": [
    "관절 회전",
    "계층 합성",
    "끝점 위치"
  ],
  "related": [
    "additive-animation",
    "animation-event",
    "animation-layer"
  ],
  "genres": [
    "action",
    "rpg",
    "platformer",
    "simulation",
    "sports"
  ],
  "reviewedAt": "2026-10-14",
  "reviewStatus": "source-reviewed",
  "reviewScope": "관절 회전을 부모에서 자식으로 합성해 끝점 위치를 계산합니다. 목표 위치를 주고 관절을 푸는 IK와 방향이 반대입니다.",
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
      "scope": "관절 회전을 부모에서 자식으로 합성해 끝점 위치를 계산합니다. 목표 위치를 주고 관절을 푸는 IK와 방향이 반대입니다."
    }
  ]
}
---

# 순운동학

## 핵심 구조

관절 회전 → 계층 합성 → 끝점 위치

## 개념 설명

부모에서 자식으로 관절 변환을 적용해 끝점 위치를 구합니다.

## 활용 상황

작가가 정한 관절 회전으로 캐릭터 포즈를 만듭니다.

## 비교와 선택

끝점을 목표 위치에 맞추려면 별도 제어나 역운동학이 필요합니다. 먼저 목적에 맞는지 판단하고, 비용과 결과는 대상 환경에서 확인합니다.

## 설계할 때 확인

입력값과 처리 결과를 구분하고, 실패하거나 범위를 벗어나는 상황을 정합니다. 끝점을 목표 위치에 맞추려면 별도 제어나 역운동학이 필요합니다.

## 도식의 한계

이 카드는 처리 단계 안내를 반복 재생합니다. 실제 Forward kinematics의 화면 효과나 엔진 실행을 재현한 영상은 아닙니다.

## 요청 예시

순운동학을 게임에 적용하려고 합니다. 부모에서 자식으로 관절 변환을 적용해 끝점 위치를 구합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.

## 참고 자료

https://docs.unity3d.com/6000.0/Documentation/Manual/AnimationOverview.html
분야별 참고 자료입니다. 메뉴·API·설정은 사용하는 엔진 버전의 상세 문서에서 확인해 주세요.

## 함께 볼 용어

가산 애니메이션 (Additive animation) · 애니메이션 이벤트 (Animation event) · 애니메이션 레이어 (Animation layer)


## 자료 대조에서 보강한 내용

관절 회전을 부모에서 자식으로 합성해 끝점 위치를 계산합니다. 목표 위치를 주고 관절을 푸는 IK와 방향이 반대입니다.

## 확인 기록

마지막 확인: 2026-10-14

관절 회전을 부모에서 자식으로 합성해 끝점 위치를 계산합니다. 목표 위치를 주고 관절을 푸는 IK와 방향이 반대입니다.

개념·출처 대조입니다. 엔진 실행은 미검증입니다.

확인 자료: https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html
