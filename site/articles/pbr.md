---
{
  "id": 33,
  "slug": "pbr",
  "kind": "concept",
  "category": "rendering",
  "name": "물리 기반 렌더링",
  "en": "PBR",
  "desc": "재질의 반사 특성을 일관된 조명 모델로 표현합니다.",
  "ko": "물리 기반 렌더링을 게임에 적용하려고 합니다. 재질의 반사 특성을 일관된 조명 모델로 표현합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
  "promptEn": "Explain PBR with a minimal design, use case and limitations.",
  "visual": "pbr",
  "tags": [
    "beginner"
  ],
  "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html",
  "diagramSteps": [
    "재질 값",
    "조명 반응",
    "표면 색"
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
  "reviewScope": "PBR은 모델과 재질 입력의 일관성을 목표로 합니다. 모든 셰이더나 엔진이 같은 입력값과 결과를 보장하는 것은 아닙니다.",
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
      "scope": "PBR은 모델과 재질 입력의 일관성을 목표로 합니다. 모든 셰이더나 엔진이 같은 입력값과 결과를 보장하는 것은 아닙니다."
    }
  ],
  "aliases": [
    "physically based shading"
  ]
}
---

# 물리 기반 렌더링

## 핵심 구조

재질 값 → 조명 반응 → 표면 색

## 개념 설명

재질의 반사 특성을 일관된 조명 모델로 표현합니다.

## 활용 상황

금속·비금속 재질을 같은 조명 아래 비교할 때 사용합니다.

## 비교와 선택

물리 기반이라는 이름만으로 사진처럼 보이는 결과가 보장되지는 않습니다. 먼저 목적에 맞는지 판단하고, 비용과 결과는 대상 환경에서 확인합니다.

## 설계할 때 확인

입력값과 처리 결과를 구분하고, 실패하거나 범위를 벗어나는 상황을 정합니다. 물리 기반이라는 이름만으로 사진처럼 보이는 결과가 보장되지는 않습니다.

## 도식의 한계

이 카드는 처리 단계 안내를 반복 재생합니다. 실제 PBR의 화면 효과나 엔진 실행을 재현한 영상은 아닙니다.

## 요청 예시

물리 기반 렌더링을 게임에 적용하려고 합니다. 재질의 반사 특성을 일관된 조명 모델로 표현합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.

## 참고 자료

https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html
분야별 참고 자료입니다. 메뉴·API·설정은 사용하는 엔진 버전의 상세 문서에서 확인해 주세요.

## 함께 볼 용어

앰비언트 오클루전 (Ambient occlusion) · 안티앨리어싱 (Anti-aliasing) · 블룸 (Bloom)


## 자료 대조에서 보강한 내용


