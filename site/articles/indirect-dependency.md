---
{
  "id": 217,
  "slug": "indirect-dependency",
  "kind": "concept",
  "visualType": "dictionary",
  "category": "assets",
  "name": "간접 의존성",
  "en": "indirect dependency",
  "desc": "프로젝트가 요청한 패키지가 다시 요구하는 다른 패키지입니다.",
  "ko": "간접 의존성의 의미를 설명하고 다음 조건을 구분해 주세요. 직접 설치하지 않았더라도 제거하면 상위 패키지가 동작하지 않을 수 있습니다.",
  "promptEn": "Explain indirect dependency and distinguish its scope, prerequisites and limitations.",
  "visual": "indirect-dependency",
  "tags": [],
  "genres": [
    "action",
    "rpg",
    "shooter",
    "platformer",
    "strategy",
    "puzzle",
    "horror",
    "adventure",
    "simulation",
    "racing",
    "sports",
    "rhythm"
  ],
  "reviewedAt": "2026-10-14",
  "reviewStatus": "source-reviewed",
  "reviewVersion": "Unity 6.0 (6000.0)",
  "reviewType": "기본 용어 정의",
  "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Package dependency and resolution · Unity 6.0 (6000.0)",
  "reviewSources": [
    {
      "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/upm-dependencies.html",
      "method": "공식·원저자 상세 문서의 관련 설명 대조",
      "version": "Unity 6.0 (6000.0)"
    }
  ],
  "reviewHistory": [
    {
      "date": "2026-10-14",
      "action": "사전 정의 등록",
      "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Package dependency and resolution · Unity 6.0 (6000.0)"
    }
  ],
  "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/upm-dependencies.html"
}
---

# 간접 의존성

## 핵심 구조

간접 의존성 → 기본 정의 → 적용 범위와 비교

## 개념 설명

프로젝트가 요청한 패키지가 다시 요구하는 다른 패키지입니다.

## 비교와 선택

직접 설치하지 않았더라도 제거하면 상위 패키지가 동작하지 않을 수 있습니다.

## 적용 범위

Unity 6.0 (6000.0)을 참고한 설명입니다. 엔진마다 같은 이름이나 API를 제공한다고 가정하지 않습니다. 플랫폼·패키지·렌더 파이프라인 조건은 연결된 문서를 함께 확인하세요.

## 요청 예시

간접 의존성의 의미를 설명하고 다음 조건을 구분해 주세요. 직접 설치하지 않았더라도 제거하면 상위 패키지가 동작하지 않을 수 있습니다.

## 참고 자료

https://docs.unity3d.com/6000.0/Documentation/Manual/upm-dependencies.html

