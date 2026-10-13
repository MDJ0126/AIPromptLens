---
{
  "id": 49,
  "slug": "root-motion",
  "kind": "concept",
  "category": "animation",
  "name": "루트 모션",
  "en": "Root motion",
  "desc": "애니메이션 루트의 이동을 캐릭터 이동에 활용합니다.",
  "ko": "루트 모션을 게임에 적용하려고 합니다. 애니메이션 루트의 이동을 캐릭터 이동에 활용합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
  "promptEn": "Explain Root motion with a minimal design, use case and limitations.",
  "visual": "root-motion",
  "tags": [
    "beginner"
  ],
  "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/RootMotion.html",
  "diagramSteps": [
    "루트 궤적",
    "이동 추출",
    "캐릭터 이동"
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
  "reviewScope": "Unity 6.0 Root Motion 문서의 루트 변환과 이동 적용 설명을 확인했습니다.",
  "reviewSources": [
    {
      "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/RootMotion.html",
      "method": "원문 자료 대조"
    }
  ],
  "reviewHistory": [
    {
      "date": "2026-10-14",
      "action": "출처 및 설명 대조",
      "scope": "Unity 6.0 Root Motion 문서의 루트 변환과 이동 적용 설명을 확인했습니다."
    }
  ]
}
---

# 루트 모션

## 핵심 구조

루트 궤적 → 이동 추출 → 캐릭터 이동

## 개념 설명

애니메이션 루트의 이동을 캐릭터 이동에 활용합니다.

## 활용 상황

공격 돌진과 구르기의 동작·이동을 맞춥니다.

## 비교와 선택

충돌과 네트워크 권한 처리까지 자동으로 해결되는 것은 아닙니다. 먼저 목적에 맞는지 판단하고, 비용과 결과는 대상 환경에서 확인합니다.

## 설계할 때 확인

입력값과 처리 결과를 구분하고, 실패하거나 범위를 벗어나는 상황을 정합니다. 충돌과 네트워크 권한 처리까지 자동으로 해결되는 것은 아닙니다.

## 도식의 한계

이 카드는 처리 단계 안내를 반복 재생합니다. 실제 Root motion의 화면 효과나 엔진 실행을 재현한 영상은 아닙니다.

## 요청 예시

루트 모션을 게임에 적용하려고 합니다. 애니메이션 루트의 이동을 캐릭터 이동에 활용합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.

## 참고 자료

https://docs.unity3d.com/6000.0/Documentation/Manual/AnimationOverview.html
분야별 참고 자료입니다. 메뉴·API·설정은 사용하는 엔진 버전의 상세 문서에서 확인해 주세요.

## 함께 볼 용어

가산 애니메이션 (Additive animation) · 애니메이션 이벤트 (Animation event) · 애니메이션 레이어 (Animation layer)


## 자료 대조에서 보강한 내용

루트 이동을 추출해 캐릭터 이동에 적용하는 구성입니다. 물리 충돌·이동 권한·네트워크 처리는 별도 연결이 필요합니다.

## 확인 기록

마지막 확인: 2026-10-14

Unity 6.0 Root Motion 문서의 루트 변환과 이동 적용 설명을 확인했습니다.


확인 자료: https://docs.unity3d.com/6000.0/Documentation/Manual/RootMotion.html
