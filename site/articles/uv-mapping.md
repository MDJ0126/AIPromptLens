---
{
  "id": 45,
  "slug": "uv-mapping",
  "kind": "concept",
  "category": "rendering",
  "name": "UV 매핑",
  "en": "UV mapping",
  "desc": "메시 표면의 위치를 텍스처의 2차원 좌표에 대응시킵니다.",
  "ko": "UV 매핑을 게임에 적용하려고 합니다. 메시 표면의 위치를 텍스처의 2차원 좌표에 대응시킵니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
  "promptEn": "Explain UV mapping with a minimal design, use case and limitations.",
  "visual": "uv-mapping",
  "tags": [
    "beginner"
  ],
  "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html",
  "diagramSteps": [
    "메시 표면",
    "UV 좌표",
    "텍스처 배치"
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
  "reviewScope": "UV는 표면과 텍스처의 좌표 대응입니다. 일반 재질 UV와 라이트맵 UV의 요구 조건이 같다는 뜻은 아닙니다.",
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
      "scope": "UV는 표면과 텍스처의 좌표 대응입니다. 일반 재질 UV와 라이트맵 UV의 요구 조건이 같다는 뜻은 아닙니다."
    }
  ]
}
---

# UV 매핑

## 핵심 구조

메시 표면 → UV 좌표 → 텍스처 배치

## 개념 설명

메시 표면의 위치를 텍스처의 2차원 좌표에 대응시킵니다.

## 활용 상황

캐릭터와 소품에 이미지 재질을 배치합니다.

## 비교와 선택

이음새·겹침·늘어짐을 확인하고 라이트맵 UV와 구분합니다. 먼저 목적에 맞는지 판단하고, 비용과 결과는 대상 환경에서 확인합니다.

## 설계할 때 확인

입력값과 처리 결과를 구분하고, 실패하거나 범위를 벗어나는 상황을 정합니다. 이음새·겹침·늘어짐을 확인하고 라이트맵 UV와 구분합니다.

## 도식의 한계

이 카드는 처리 단계 안내를 반복 재생합니다. 실제 UV mapping의 화면 효과나 엔진 실행을 재현한 영상은 아닙니다.

## 요청 예시

UV 매핑을 게임에 적용하려고 합니다. 메시 표면의 위치를 텍스처의 2차원 좌표에 대응시킵니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.

## 참고 자료

https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html
분야별 참고 자료입니다. 메뉴·API·설정은 사용하는 엔진 버전의 상세 문서에서 확인해 주세요.

## 함께 볼 용어

앰비언트 오클루전 (Ambient occlusion) · 안티앨리어싱 (Anti-aliasing) · 블룸 (Bloom)


## 자료 대조에서 보강한 내용

UV는 표면과 텍스처의 좌표 대응입니다. 일반 재질 UV와 라이트맵 UV의 요구 조건이 같다는 뜻은 아닙니다.

## 확인 기록

마지막 확인: 2026-10-14

UV는 표면과 텍스처의 좌표 대응입니다. 일반 재질 UV와 라이트맵 UV의 요구 조건이 같다는 뜻은 아닙니다.


확인 자료: https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html
