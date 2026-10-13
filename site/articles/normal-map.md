---
{
  "id": 34,
  "slug": "normal-map",
  "kind": "concept",
  "category": "rendering",
  "name": "노멀 맵",
  "en": "Normal map",
  "desc": "텍스처에 저장한 방향으로 표면의 조명 계산을 바꿉니다.",
  "ko": "노멀 맵을 게임에 적용하려고 합니다. 텍스처에 저장한 방향으로 표면의 조명 계산을 바꿉니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
  "promptEn": "Explain Normal map with a minimal design, use case and limitations.",
  "visual": "normal-map",
  "tags": [
    "beginner"
  ],
  "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html",
  "diagramSteps": [
    "평평한 표면",
    "법선 방향",
    "음영 변화"
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
  "reviewScope": "노멀 맵은 조명에 사용할 법선 방향을 바꾸며 메시 정점과 실루엣은 바꾸지 않습니다. 탠전트 공간·월드 공간 등 저장 기준도 확인합니다.",
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
      "scope": "노멀 맵은 조명에 사용할 법선 방향을 바꾸며 메시 정점과 실루엣은 바꾸지 않습니다. 탠전트 공간·월드 공간 등 저장 기준도 확인합니다."
    }
  ]
}
---

# 노멀 맵

## 핵심 구조

평평한 표면 → 법선 방향 → 음영 변화

## 개념 설명

텍스처에 저장한 방향으로 표면의 조명 계산을 바꿉니다.

## 활용 상황

적은 폴리곤으로 작은 홈과 돌기의 음영을 표현합니다.

## 비교와 선택

실루엣과 실제 충돌 모양은 바뀌지 않습니다. 먼저 목적에 맞는지 판단하고, 비용과 결과는 대상 환경에서 확인합니다.

## 설계할 때 확인

입력값과 처리 결과를 구분하고, 실패하거나 범위를 벗어나는 상황을 정합니다. 실루엣과 실제 충돌 모양은 바뀌지 않습니다.

## 도식의 한계

이 카드는 처리 단계 안내를 반복 재생합니다. 실제 Normal map의 화면 효과나 엔진 실행을 재현한 영상은 아닙니다.

## 요청 예시

노멀 맵을 게임에 적용하려고 합니다. 텍스처에 저장한 방향으로 표면의 조명 계산을 바꿉니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.

## 참고 자료

https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html
분야별 참고 자료입니다. 메뉴·API·설정은 사용하는 엔진 버전의 상세 문서에서 확인해 주세요.

## 함께 볼 용어

앰비언트 오클루전 (Ambient occlusion) · 안티앨리어싱 (Anti-aliasing) · 블룸 (Bloom)


## 자료 대조에서 보강한 내용

노멀 맵은 조명에 사용할 법선 방향을 바꾸며 메시 정점과 실루엣은 바꾸지 않습니다. 탠전트 공간·월드 공간 등 저장 기준도 확인합니다.

## 확인 기록

마지막 확인: 2026-10-14

노멀 맵은 조명에 사용할 법선 방향을 바꾸며 메시 정점과 실루엣은 바꾸지 않습니다. 탠전트 공간·월드 공간 등 저장 기준도 확인합니다.


확인 자료: https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html
