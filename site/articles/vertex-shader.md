---
{
  "id": 46,
  "slug": "vertex-shader",
  "kind": "concept",
  "category": "rendering",
  "name": "버텍스 셰이더",
  "en": "Vertex shader",
  "desc": "정점 단위의 위치와 속성을 처리하는 GPU 단계입니다.",
  "ko": "버텍스 셰이더을 게임에 적용하려고 합니다. 정점 단위의 위치와 속성을 처리하는 GPU 단계입니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
  "promptEn": "Explain Vertex shader with a minimal design, use case and limitations.",
  "visual": "vertex-shader",
  "tags": [
    "beginner"
  ],
  "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html",
  "diagramSteps": [
    "정점 입력",
    "좌표 변환",
    "정점 출력"
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
  "reviewScope": "정점별 계산을 수행하는 셰이더 단계입니다. GPU 전체 작업이나 픽셀별 계산과 구분합니다.",
  "reviewLimit": "개념·출처 대조입니다. 엔진 실행은 미검증입니다.",
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
      "scope": "정점별 계산을 수행하는 셰이더 단계입니다. GPU 전체 작업이나 픽셀별 계산과 구분합니다."
    }
  ]
}
---

# 버텍스 셰이더

## 핵심 구조

정점 입력 → 좌표 변환 → 정점 출력

## 개념 설명

정점 단위의 위치와 속성을 처리하는 GPU 단계입니다.

## 활용 상황

좌표 변환과 바람에 흔들리는 풀의 정점 변형에 사용합니다.

## 비교와 선택

픽셀별 색 계산과는 처리 단위가 다릅니다. 먼저 목적에 맞는지 판단하고, 비용과 결과는 대상 환경에서 확인합니다.

## 설계할 때 확인

입력값과 처리 결과를 구분하고, 실패하거나 범위를 벗어나는 상황을 정합니다. 픽셀별 색 계산과는 처리 단위가 다릅니다.

## 도식의 한계

이 카드는 처리 단계 안내를 반복 재생합니다. 실제 Vertex shader의 화면 효과나 엔진 실행을 재현한 영상은 아닙니다.

## 요청 예시

버텍스 셰이더을 게임에 적용하려고 합니다. 정점 단위의 위치와 속성을 처리하는 GPU 단계입니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.

## 참고 자료

https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html
분야별 참고 자료입니다. 메뉴·API·설정은 사용하는 엔진 버전의 상세 문서에서 확인해 주세요.

## 함께 볼 용어

앰비언트 오클루전 (Ambient occlusion) · 안티앨리어싱 (Anti-aliasing) · 블룸 (Bloom)


## 자료 대조에서 보강한 내용

정점별 계산을 수행하는 셰이더 단계입니다. GPU 전체 작업이나 픽셀별 계산과 구분합니다.

## 확인 기록

마지막 확인: 2026-10-14

정점별 계산을 수행하는 셰이더 단계입니다. GPU 전체 작업이나 픽셀별 계산과 구분합니다.

개념·출처 대조입니다. 엔진 실행은 미검증입니다.

확인 자료: https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html
