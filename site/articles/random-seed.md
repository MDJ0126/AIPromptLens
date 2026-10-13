---
{
  "id": 90,
  "slug": "random-seed",
  "kind": "concept",
  "category": "procedural",
  "name": "랜덤 시드",
  "en": "Random seed",
  "desc": "의사난수 생성기의 시작 상태를 정하는 값입니다.",
  "ko": "랜덤 시드을 게임에 적용하려고 합니다. 의사난수 생성기의 시작 상태를 정하는 값입니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
  "promptEn": "Explain Random seed with a minimal design, use case and limitations.",
  "visual": "random-seed",
  "tags": [
    "beginner"
  ],
  "source": "https://docs.unity3d.com/6000.0/Documentation/ScriptReference/Random.InitState.html",
  "diagramSteps": [
    "시드 설정",
    "난수 순서",
    "생성 결과"
  ],
  "related": [
    "noise-field",
    "procedural-mesh",
    "weighted-random"
  ],
  "genres": [
    "rpg",
    "adventure",
    "strategy",
    "simulation",
    "puzzle"
  ],
  "reviewedAt": "2026-10-14",
  "reviewStatus": "source-reviewed",
  "reviewScope": "Unity InitState는 생성기 시작 상태를 정합니다. 재현에는 호출 순서·생성기·버전도 일치해야 합니다.",
  "reviewLimit": "개념·출처 대조입니다. 엔진 실행은 미검증입니다.",
  "reviewSources": [
    {
      "url": "https://docs.unity3d.com/6000.0/Documentation/ScriptReference/Random.InitState.html",
      "method": "원문 자료 대조"
    }
  ],
  "reviewHistory": [
    {
      "date": "2026-10-14",
      "action": "출처 및 설명 대조",
      "scope": "Unity InitState는 생성기 시작 상태를 정합니다. 재현에는 호출 순서·생성기·버전도 일치해야 합니다."
    }
  ]
}
---

# 랜덤 시드

## 핵심 구조

시드 설정 → 난수 순서 → 생성 결과

## 개념 설명

의사난수 생성기의 시작 상태를 정하는 값입니다.

## 활용 상황

맵과 보상 생성 결과를 재현합니다.

## 비교와 선택

시드뿐 아니라 생성기·호출 순서·버전도 같아야 결과가 유지됩니다. 먼저 목적에 맞는지 판단하고, 비용과 결과는 대상 환경에서 확인합니다.

## 설계할 때 확인

입력값과 처리 결과를 구분하고, 실패하거나 범위를 벗어나는 상황을 정합니다. 시드뿐 아니라 생성기·호출 순서·버전도 같아야 결과가 유지됩니다.

## 도식의 한계

이 카드는 처리 단계 안내를 반복 재생합니다. 실제 Random seed의 화면 효과나 엔진 실행을 재현한 영상은 아닙니다.

## 요청 예시

랜덤 시드을 게임에 적용하려고 합니다. 의사난수 생성기의 시작 상태를 정하는 값입니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.

## 참고 자료

https://catlikecoding.com/unity/tutorials/
분야별 참고 자료입니다. 메뉴·API·설정은 사용하는 엔진 버전의 상세 문서에서 확인해 주세요.

## 함께 볼 용어

노이즈 필드 (Noise field) · 절차적 메시 (Procedural mesh) · 가중치 랜덤 (Weighted random)


## 자료 대조에서 보강한 내용

Unity InitState는 생성기 시작 상태를 정합니다. 재현에는 호출 순서·생성기·버전도 일치해야 합니다.

## 확인 기록

마지막 확인: 2026-10-14

Unity InitState는 생성기 시작 상태를 정합니다. 재현에는 호출 순서·생성기·버전도 일치해야 합니다.

개념·출처 대조입니다. 엔진 실행은 미검증입니다.

확인 자료: https://docs.unity3d.com/6000.0/Documentation/ScriptReference/Random.InitState.html
