---
{
  "id": 89,
  "slug": "asset-streaming",
  "kind": "concept",
  "category": "optimization",
  "name": "텍스처 밉 스트리밍",
  "en": "Mipmap streaming",
  "desc": "필요한 텍스처 밉 레벨을 로드해 GPU 메모리를 관리합니다.",
  "ko": "텍스처 밉 스트리밍으로 GPU 메모리를 관리하고, 일반 에셋 로딩과 구분해서 예산·화질 저하·로드 지연을 검토해 주세요.",
  "promptEn": "Explain Asset streaming with a minimal design, use case and limitations.",
  "visual": "asset-streaming",
  "tags": [
    "beginner"
  ],
  "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/TextureStreaming.html",
  "diagramSteps": [
    "필요 영역",
    "로드 요청",
    "사용과 해제"
  ],
  "related": [
    "batching",
    "draw-call",
    "frustum-culling"
  ],
  "genres": [
    "action",
    "rpg",
    "shooter",
    "strategy",
    "simulation",
    "racing",
    "sports",
    "rhythm",
    "puzzle",
    "platformer",
    "adventure",
    "horror"
  ],
  "reviewedAt": "2026-10-14",
  "reviewStatus": "source-reviewed",
  "reviewType": "기능·개념",
  "reviewScope": "Unity 6.0의 mipmap streaming 문서를 확인했습니다. 근거 범위에 맞춰 텍스처 밉 스트리밍으로 좁혔습니다.",
  "reviewVersion": "Unity 6.0 (6000.0)",
  "reviewSources": [
    {
      "url": "https://docs.unity3d.com/6000.0/Documentation/Manual/TextureStreaming.html",
      "method": "원문 자료 대조"
    }
  ],
  "reviewHistory": [
    {
      "date": "2026-10-14",
      "action": "출처 및 설명 대조",
      "scope": "Unity 6.0의 mipmap streaming 문서를 확인했습니다. 근거 범위에 맞춰 텍스처 밉 스트리밍으로 좁혔습니다."
    }
  ]
}
---

# 텍스처 밉 스트리밍

## 핵심 구조

필요 영역 → 로드 요청 → 사용과 해제

## 개념 설명

필요한 텍스처 밉 레벨을 로드하여 GPU 메모리를 관리합니다. 이 게시물은 Unity의 mipmap streaming에 한정하며 임의 에셋이나 월드 스트리밍 전체를 설명하지 않습니다.

## 활용 상황

넓은 월드의 메모리 사용과 로딩을 관리합니다.

## 비교와 선택

입출력 지연과 화면 팝인, 참조 수명을 고려합니다. 먼저 목적에 맞는지 판단하고, 비용과 결과는 대상 환경에서 확인합니다.

## 설계할 때 확인

입력값과 처리 결과를 구분하고, 실패하거나 범위를 벗어나는 상황을 정합니다. 입출력 지연과 화면 팝인, 참조 수명을 고려합니다.

## 도식의 한계

이 카드는 처리 단계 안내를 반복 재생합니다. 실제 Asset streaming의 화면 효과나 엔진 실행을 재현한 영상은 아닙니다.

## 요청 예시

텍스처 밉 스트리밍으로 GPU 메모리를 관리하고, 일반 에셋 로딩과 구분해서 예산·화질 저하·로드 지연을 검토해 주세요.

## 참고 자료

https://docs.unity3d.com/6000.0/Documentation/Manual/TextureStreaming.html

## 함께 볼 용어

배칭 (Batching) · 드로 콜 (Draw call) · 시야 절두체 컬링 (Frustum culling)


## 자료 대조에서 보강한 내용

확인한 문서는 GPU 메모리의 텍스처 밉 레벨 로딩입니다. 월드·사운드·임의 에셋 스트리밍 전체 기능으로 확대 해석하지 않습니다.

