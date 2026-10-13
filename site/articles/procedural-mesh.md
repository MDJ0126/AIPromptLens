---
{
  "id": 93,
  "slug": "procedural-mesh",
  "kind": "concept",
  "category": "procedural",
  "name": "절차적 메시",
  "en": "Procedural mesh",
  "desc": "정점과 인덱스 등을 계산해 메시를 생성합니다.",
  "ko": "절차적 메시을 게임에 적용하려고 합니다. 정점과 인덱스 등을 계산해 메시를 생성합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.",
  "promptEn": "Explain Procedural mesh with a minimal design, use case and limitations.",
  "visual": "procedural-mesh",
  "tags": [
    "beginner"
  ],
  "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/GeneratingMeshGeometryProcedurally.html",
  "diagramSteps": [
    "정점 계산",
    "삼각형 연결",
    "메시 생성"
  ],
  "related": [
    "noise-field",
    "random-seed",
    "weighted-random"
  ],
  "genres": [
    "rpg",
    "adventure",
    "strategy",
    "simulation",
    "puzzle"
  ],
  "reviewedAt": "2026-10-14",
  "reviewStatus": "source-reviewed",
  "reviewScope": "Unity Mesh API를 통한 정점·삼각형 생성 기능을 확인했습니다. 충돌 데이터 갱신과 렌더 메시 생성은 구분합니다.",
  "reviewSources": [
    {
      "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/GeneratingMeshGeometryProcedurally.html",
      "method": "원문 자료 대조"
    }
  ],
  "reviewHistory": [
    {
      "date": "2026-10-14",
      "action": "출처 및 설명 대조",
      "scope": "Unity Mesh API를 통한 정점·삼각형 생성 기능을 확인했습니다. 충돌 데이터 갱신과 렌더 메시 생성은 구분합니다."
    }
  ]
}
---

# 절차적 메시

## 핵심 구조

정점 계산 → 삼각형 연결 → 메시 생성

## 개념 설명

정점과 인덱스 등을 계산해 메시를 생성합니다.

## 활용 상황

지형과 동적으로 변하는 구조물을 만듭니다.

## 비교와 선택

법선·UV·삼각형 방향과 충돌 갱신을 따로 검토합니다. 먼저 목적에 맞는지 판단하고, 비용과 결과는 대상 환경에서 확인합니다.

## 설계할 때 확인

입력값과 처리 결과를 구분하고, 실패하거나 범위를 벗어나는 상황을 정합니다. 법선·UV·삼각형 방향과 충돌 갱신을 따로 검토합니다.

## 도식의 한계

이 카드는 처리 단계 안내를 반복 재생합니다. 실제 Procedural mesh의 화면 효과나 엔진 실행을 재현한 영상은 아닙니다.

## 요청 예시

절차적 메시을 게임에 적용하려고 합니다. 정점과 인덱스 등을 계산해 메시를 생성합니다. 사용 상황과 핵심 구조를 설명하고, 주요 설정값과 한계도 제안해 주세요.

## 참고 자료

https://catlikecoding.com/unity/tutorials/
분야별 참고 자료입니다. 메뉴·API·설정은 사용하는 엔진 버전의 상세 문서에서 확인해 주세요.

## 함께 볼 용어

노이즈 필드 (Noise field) · 랜덤 시드 (Random seed) · 가중치 랜덤 (Weighted random)


## 자료 대조에서 보강한 내용


