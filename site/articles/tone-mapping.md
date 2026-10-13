---
{
  "id": 42,
  "slug": "tone-mapping",
  "kind": "concept",
  "category": "rendering",
  "name": "톤 매핑",
  "en": "Tone mapping",
  "desc": "넓은 밝기 범위의 렌더 결과를 표시 가능한 범위로 변환합니다.",
  "ko": "톤 매핑을 게임에 적용하려고 합니다. 넓은 밝기 범위의 렌더 결과를 표시 가능한 범위로 변환합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
  "promptEn": "Explain Tone mapping with a minimal design, use case and limitations.",
  "visual": "tone-mapping",
  "tags": [
    "beginner"
  ],
  "source": "https://docs.unity3d.com/Packages/com.unity.render-pipelines.universal@17.0/manual/post-processing-tonemapping.html",
  "diagramSteps": [
    "HDR 값",
    "범위 변환",
    "화면 출력"
  ],
  "related": [
    "ambient-occlusion",
    "anti-aliasing",
    "bloom"
  ],
  "genres": [
    "action",
    "rpg",
    "shooter",
    "adventure",
    "horror",
    "simulation",
    "racing",
    "sports"
  ],
  "reviewedAt": "2026-10-14",
  "reviewStatus": "source-reviewed",
  "reviewScope": "Unity 6.0/URP 17의 Tonemapping 문서에서 HDR 값의 범위 변환을 확인했습니다.",
  "reviewSources": [
    {
      "url": "https://docs.unity3d.com/Packages/com.unity.render-pipelines.universal@17.0/manual/post-processing-tonemapping.html",
      "method": "원문 자료 대조"
    }
  ],
  "reviewHistory": [
    {
      "date": "2026-10-14",
      "action": "출처 및 설명 대조",
      "scope": "Unity 6.0/URP 17의 Tonemapping 문서에서 HDR 값의 범위 변환을 확인했습니다."
    }
  ],
  "aliases": [
    "tonemapping"
  ]
}
---

# 톤 매핑

## 핵심 구조

HDR 값 → 범위 변환 → 화면 출력

## 개념 설명

넓은 밝기 범위의 렌더 결과를 표시 가능한 범위로 변환합니다.

## 활용 상황

HDR 장면을 디스플레이에 출력할 때 사용합니다.

## 비교와 선택

노출과 색 보정의 역할을 구분해서 조절해야 합니다. 먼저 목적에 맞는지 판단하고, 비용과 결과는 대상 환경에서 확인합니다.

## 설계할 때 확인

입력값과 처리 결과를 구분하고, 실패하거나 범위를 벗어나는 상황을 정합니다. 노출과 색 보정의 역할을 구분해서 조절해야 합니다.

## 도식의 한계

이 카드는 처리 단계 안내를 반복 재생합니다. 실제 Tone mapping의 화면 효과나 엔진 실행을 재현한 영상은 아닙니다.

## 요청 예시

톤 매핑을 게임에 적용하려고 합니다. 넓은 밝기 범위의 렌더 결과를 표시 가능한 범위로 변환합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.

## 참고 자료

https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html
분야별 참고 자료입니다. 메뉴·API·설정은 사용하는 엔진 버전의 상세 문서에서 확인해 주세요.

## 함께 볼 용어

앰비언트 오클루전 (Ambient occlusion) · 안티앨리어싱 (Anti-aliasing) · 블룸 (Bloom)


## 자료 대조에서 보강한 내용

확인한 적용 예시는 Unity 6.0의 URP 17 Tonemapping Volume Override입니다. 다른 파이프라인의 메뉴와 옵션까지 같다고 안내하지 않습니다.

