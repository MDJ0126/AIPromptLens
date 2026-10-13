---
{
  "id": 63,
  "slug": "joint-constraint",
  "kind": "concept",
  "category": "physics",
  "name": "Configurable Joint",
  "en": "Configurable Joint",
  "desc": "축별 이동·회전 제한과 드라이브를 조절할 수 있는 Unity 물리 조인트 컴포넌트입니다.",
  "ko": "Configurable Joint의 축별 이동·회전 제한과 드라이브를 구분해서 설명해 주세요.",
  "promptEn": "Explain Joint constraint with a minimal design, use case and limitations.",
  "visual": "joint-constraint",
  "tags": [
    "beginner"
  ],
  "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-ConfigurableJoint.html",
  "diagramSteps": [
    "연결 물체",
    "허용 범위",
    "제약 적용"
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
  "reviewScope": "Unity 6.0 Configurable Joint 상세 문서에서 축별 Motion과 Limit·Drive 설정을 대조했습니다. 일반 조인트 제약 원리와 컴포넌트를 구분합니다.",
  "reviewLimit": "개념·출처 대조입니다. 엔진 실행은 미검증입니다.",
  "reviewSources": [
    {
      "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-ConfigurableJoint.html",
      "method": "공식 상세 문서 대조",
      "version": "Unity 6.0"
    }
  ],
  "reviewHistory": [
    {
      "date": "2026-10-14",
      "action": "출처 및 설명 대조",
      "scope": "연결 물체의 운동 자유도를 제한하는 기능입니다. 지정한 조인트 종류·축·범위를 실제 장면에서 확인해야 합니다."
    },
    {
      "date": "2026-10-14",
      "action": "일반 원리와 실제 컴포넌트 이름 구분",
      "scope": "Unity 6.0 Configurable Joint 상세 문서에서 축별 Motion과 Limit·Drive 설정을 대조했습니다. 일반 조인트 제약 원리와 컴포넌트를 구분합니다."
    }
  ],
  "aliases": [
    "Configurable Joint"
  ]
}
---

# Configurable Joint

## 핵심 구조

연결 강체 → 축별 허용 운동 → 제한·드라이브

## 개념 설명

축별 이동·회전 제한과 드라이브를 조절할 수 있는 Unity 물리 조인트 컴포넌트입니다.

## 비교와 선택

물리 조인트는 강체의 연결을 뜻하고, 조인트 제약은 허용 운동의 규칙을 뜻합니다. Configurable Joint는 이들을 축별로 설정하는 Unity 컴포넌트입니다. Transform 부모 자식 관계와는 다릅니다.

## 활용 상황

축의 Motion을 Locked·Limited·Free 등으로 구분하고, Limit과 Drive를 함께 확인합니다. 목표 위치를 지정한다고 즉시 그 위치에 도달하는 것은 아닙니다.

## 도식의 한계

자동 도식은 설명을 읽는 순서를 안내합니다. 엔진에서 실제 조인트 운동을 재현한 결과가 아닙니다.

## 요청 예시

Configurable Joint의 축별 이동·회전 제한과 드라이브를 구분해서 설명해 주세요.

## 참고 자료

https://docs.unity3d.com/6000.0/Documentation/Manual/class-ConfigurableJoint.html

## 확인 기록

마지막 확인: 2026-10-14

Unity 6.0 Configurable Joint 상세 문서에서 축별 Motion과 Limit·Drive 설정을 대조했습니다. 일반 조인트 제약 원리와 컴포넌트를 구분합니다.

개념·출처 대조입니다. 엔진 실행은 미검증입니다.
