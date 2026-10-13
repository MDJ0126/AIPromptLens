---
{
  "id": 29,
  "slug": "coordinate-spaces",
  "kind": "concept",
  "category": "principles",
  "name": "로컬 좌표와 월드 좌표",
  "en": "Local and world coordinates",
  "desc": "기준에 따라 달라지는 좌표를 구분해요.",
  "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-Transform.html",
  "ko": "로컬 좌표와 월드 좌표의 핵심 구조와 활용 상황, 한계를 설명해 주세요.",
  "promptEn": "Explain Local and world coordinates and its use cases and limitations.",
  "visual": "coordinate-spaces",
  "tags": [
    "beginner"
  ],
  "genres": [
    "action",
    "platformer",
    "simulation",
    "racing",
    "sports"
  ],
  "reviewedAt": "2026-10-14",
  "reviewStatus": "source-reviewed",
  "reviewType": "기능·개념",
  "reviewScope": "Unity 6.0 Transform 문서의 부모 기준 좌표와 월드 좌표 설명을 확인했습니다.",
  "reviewVersion": "Unity 6.0 (6000.0)",
  "reviewLimit": "개념·출처 대조입니다. 엔진 실행은 미검증입니다.",
  "reviewSources": [
    {
      "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/class-Transform.html",
      "method": "원문 자료 대조"
    }
  ],
  "reviewHistory": [
    {
      "date": "2026-10-14",
      "action": "출처 및 설명 대조",
      "scope": "Unity 6.0 Transform 문서의 부모 기준 좌표와 월드 좌표 설명을 확인했습니다."
    }
  ]
}
---

# 로컬 좌표와 월드 좌표

## 핵심 구조

로컬 위치 → 부모 변환 → 월드 위치

## 개념 설명

월드 좌표는 장면의 공통 기준이고 로컬 좌표는 부모 또는 물체의 기준입니다. 부모 변환을 적용하면 로컬 위치가 월드 위치로 변환됩니다.

## 비교와 선택

손에 붙인 장비는 로컬 위치로 관리하기 편하고, 장면의 고정 지점으로 이동할 때는 월드 기준이 편합니다. 위치 변환은 이동 성분을 포함하지만 방향에는 이동을 더하지 않습니다. 비균등 스케일과 엔진 API 차이는 사용 버전 문서에서 확인합니다.

## 도식의 한계

이 도식은 개념 설명용이며 실제 탐색이나 엔진 실행 결과가 아닙니다.

## 요청 예시

로컬 좌표와 월드 좌표의 핵심 구조와 활용 상황, 한계를 설명해 주세요.

## 참고 자료

https://docs.unity3d.com/6000.0/Documentation/Manual/class-Transform.html
확인 범위: Unity 6.0 Transform 문서의 부모 기준 좌표와 월드 좌표 설명을 확인했습니다.

## 확인 기록

마지막 확인: 2026-10-14

Unity 6.0 Transform 문서의 부모 기준 좌표와 월드 좌표 설명을 확인했습니다.

개념·출처 대조입니다. 엔진 실행은 미검증입니다.

확인 자료: https://docs.unity3d.com/6000.0/Documentation/Manual/class-Transform.html
