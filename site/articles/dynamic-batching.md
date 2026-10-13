---
{
  "id": 192,
  "slug": "dynamic-batching",
  "kind": "concept",
  "visualType": "dictionary",
  "category": "optimization",
  "name": "동적 배칭",
  "en": "dynamic batching",
  "desc": "조건에 맞는 메시의 정점을 CPU에서 처리하여 그리기 묶음을 구성하는 최적화입니다.",
  "ko": "동적 배칭의 의미를 설명하고 다음 조건을 구분해 주세요. CPU 변환 비용이 이득보다 클 수 있습니다. SRP Batcher나 GPU 인스턴싱과 별개의 방식입니다.",
  "promptEn": "Explain dynamic batching and distinguish its scope, prerequisites and limitations.",
  "visual": "dynamic-batching",
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
  "reviewScope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Introduction to batching meshes · Unity 6.0 (6000.0)",
  "reviewSources": [
    {
      "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/DrawCallBatching.html",
      "method": "공식·원저자 상세 문서의 관련 설명 대조",
      "version": "Unity 6.0 (6000.0)"
    }
  ],
  "reviewHistory": [
    {
      "date": "2026-10-14",
      "action": "사전 정의 등록",
      "scope": "기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Introduction to batching meshes · Unity 6.0 (6000.0)"
    }
  ],
  "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/DrawCallBatching.html"
}
---

# 동적 배칭

## 핵심 구조

동적 배칭 → 기본 정의 → 적용 범위와 비교

## 개념 설명

조건에 맞는 메시의 정점을 CPU에서 처리하여 그리기 묶음을 구성하는 최적화입니다.

## 비교와 선택

CPU 변환 비용이 이득보다 클 수 있습니다. SRP Batcher나 GPU 인스턴싱과 별개의 방식입니다.

## 적용 범위

Unity 6.0 (6000.0)을 참고한 설명입니다. 엔진마다 같은 이름이나 API를 제공한다고 가정하지 않습니다. 플랫폼·패키지·렌더 파이프라인 조건은 연결된 문서를 함께 확인하세요.

## 요청 예시

동적 배칭의 의미를 설명하고 다음 조건을 구분해 주세요. CPU 변환 비용이 이득보다 클 수 있습니다. SRP Batcher나 GPU 인스턴싱과 별개의 방식입니다.

## 참고 자료

https://docs.unity3d.com/6000.0/Documentation/Manual/DrawCallBatching.html

## 확인 기록

마지막 확인: 2026-10-14

기본 정의와 구분할 개념을 문서에 대조했습니다. 확인 자료: Introduction to batching meshes · Unity 6.0 (6000.0)

