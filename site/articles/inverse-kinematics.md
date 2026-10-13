---
{
  "id": 50,
  "slug": "inverse-kinematics",
  "kind": "concept",
  "category": "animation",
  "name": "역운동학",
  "en": "Inverse kinematics",
  "desc": "손이나 발 같은 끝점 목표를 맞추도록 관절 자세를 구합니다.",
  "ko": "역운동학을 게임에 적용하려고 합니다. 손이나 발 같은 끝점 목표를 맞추도록 관절 자세를 구합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
  "promptEn": "Explain Inverse kinematics with a minimal design, use case and limitations.",
  "visual": "inverse-kinematics",
  "tags": [
    "beginner"
  ],
  "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html",
  "diagramSteps": [
    "끝점 목표",
    "관절 계산",
    "자세 보정"
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
  "reviewScope": "끝점 목표로 관절 자세를 계산하는 개념을 확인했습니다. 사용한 IK 솔버에 따라 관절 제한과 도달 불가능 목표 처리가 다릅니다.",
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
      "scope": "끝점 목표로 관절 자세를 계산하는 개념을 확인했습니다. 사용한 IK 솔버에 따라 관절 제한과 도달 불가능 목표 처리가 다릅니다."
    }
  ],
  "aliases": [
    "inverse kinematics (IK)"
  ]
}
---

# 역운동학

## 핵심 구조

끝점 목표 → 관절 계산 → 자세 보정

## 개념 설명

손이나 발 같은 끝점 목표를 맞추도록 관절 자세를 구합니다.

## 활용 상황

발을 경사면에 놓거나 손으로 물건을 잡게 합니다.

## 비교와 선택

도달 불가능한 목표와 관절 제한을 처리해야 합니다. 먼저 목적에 맞는지 판단하고, 비용과 결과는 대상 환경에서 확인합니다.

## 설계할 때 확인

입력값과 처리 결과를 구분하고, 실패하거나 범위를 벗어나는 상황을 정합니다. 도달 불가능한 목표와 관절 제한을 처리해야 합니다.

## 도식의 한계

이 카드는 처리 단계 안내를 반복 재생합니다. 실제 Inverse kinematics의 화면 효과나 엔진 실행을 재현한 영상은 아닙니다.

## 요청 예시

역운동학을 게임에 적용하려고 합니다. 손이나 발 같은 끝점 목표를 맞추도록 관절 자세를 구합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.

## 참고 자료

https://docs.unity3d.com/6000.0/Documentation/Manual/AnimationOverview.html
분야별 참고 자료입니다. 메뉴·API·설정은 사용하는 엔진 버전의 상세 문서에서 확인해 주세요.

## 함께 볼 용어

가산 애니메이션 (Additive animation) · 애니메이션 이벤트 (Animation event) · 애니메이션 레이어 (Animation layer)


## 자료 대조에서 보강한 내용

끝점 목표로 관절 자세를 계산하는 개념을 확인했습니다. 사용한 IK 솔버에 따라 관절 제한과 도달 불가능 목표 처리가 다릅니다.

## 확인 기록

마지막 확인: 2026-10-14

끝점 목표로 관절 자세를 계산하는 개념을 확인했습니다. 사용한 IK 솔버에 따라 관절 제한과 도달 불가능 목표 처리가 다릅니다.

개념·출처 대조입니다. 엔진 실행은 미검증입니다.

확인 자료: https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html
