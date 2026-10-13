---
{
  "id": 60,
  "slug": "shape-sweep",
  "kind": "concept",
  "category": "physics",
  "name": "형상 스윕",
  "en": "Shape sweep",
  "desc": "구나 캡슐 같은 모양을 경로를 따라 움직이며 충돌을 검사합니다.",
  "ko": "형상 스윕을 게임에 적용하려고 합니다. 구나 캡슐 같은 모양을 경로를 따라 움직이며 충돌을 검사합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
  "promptEn": "Explain Shape sweep with a minimal design, use case and limitations.",
  "visual": "shape-sweep",
  "tags": [
    "beginner"
  ],
  "source": "https://docs.unity3d.com/6000.0/Documentation/ScriptReference/Physics.SphereCast.html",
  "diagramSteps": [
    "검사 모양",
    "이동 경로",
    "접촉 위치"
  ],
  "related": [
    "collider",
    "collision-layer",
    "continuous-collision"
  ],
  "genres": [
    "action",
    "platformer",
    "simulation",
    "racing",
    "sports",
    "puzzle"
  ],
  "reviewedAt": "2026-10-14",
  "reviewStatus": "source-reviewed",
  "reviewScope": "Unity SphereCast는 시작부터 겹쳐 있는 콜라이더를 감지하지 않습니다. 초기 겹침은 별도 Overlap 검사로 구분합니다.",
  "reviewSources": [
    {
      "url": "https://docs.unity3d.com/6000.0/Documentation/ScriptReference/Physics.SphereCast.html",
      "method": "원문 자료 대조"
    }
  ],
  "reviewHistory": [
    {
      "date": "2026-10-14",
      "action": "출처 및 설명 대조",
      "scope": "Unity SphereCast는 시작부터 겹쳐 있는 콜라이더를 감지하지 않습니다. 초기 겹침은 별도 Overlap 검사로 구분합니다."
    }
  ]
}
---

# 형상 스윕

## 핵심 구조

검사 모양 → 이동 경로 → 접촉 위치

## 개념 설명

구나 캡슐 같은 모양을 경로를 따라 움직이며 충돌을 검사합니다.

## 활용 상황

캐릭터 이동과 근접 무기의 공간 범위를 검사합니다.

## 비교와 선택

시작부터 겹쳐 있는 경우와 회전 처리는 API 조건을 확인합니다. 먼저 목적에 맞는지 판단하고, 비용과 결과는 대상 환경에서 확인합니다.

## 설계할 때 확인

입력값과 처리 결과를 구분하고, 실패하거나 범위를 벗어나는 상황을 정합니다. 시작부터 겹쳐 있는 경우와 회전 처리는 API 조건을 확인합니다.

## 도식의 한계

이 카드는 처리 단계 안내를 반복 재생합니다. 실제 Shape sweep의 화면 효과나 엔진 실행을 재현한 영상은 아닙니다.

## 요청 예시

형상 스윕을 게임에 적용하려고 합니다. 구나 캡슐 같은 모양을 경로를 따라 움직이며 충돌을 검사합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.

## 참고 자료

https://docs.unity3d.com/6000.0/Documentation/Manual/PhysicsSection.html
분야별 참고 자료입니다. 메뉴·API·설정은 사용하는 엔진 버전의 상세 문서에서 확인해 주세요.

## 함께 볼 용어

콜라이더 (Collider) · 충돌 레이어 (Collision filtering) · 연속 충돌 검사 (Continuous collision detection)


## 자료 대조에서 보강한 내용

Unity SphereCast는 시작부터 겹쳐 있는 콜라이더를 감지하지 않습니다. 초기 겹침은 별도 Overlap 검사로 구분합니다.

## 확인 기록

마지막 확인: 2026-10-14

Unity SphereCast는 시작부터 겹쳐 있는 콜라이더를 감지하지 않습니다. 초기 겹침은 별도 Overlap 검사로 구분합니다.


확인 자료: https://docs.unity3d.com/6000.0/Documentation/ScriptReference/Physics.SphereCast.html
