---
{
  "id": 25,
  "slug": "screen-space",
  "kind": "concept",
  "category": "principles",
  "name": "스크린 스페이스 반사의 한계",
  "en": "Screen-space reflections",
  "desc": "현재 화면에 보이는 정보로 반사를 만들어요.",
  "source": "https://dev.epicgames.com/documentation/en-us/unreal-engine/screen-space-reflections-in-unreal-engine",
  "ko": "화면 밖 오브젝트의 반사가 필요한지 검토하고, 스크린 스페이스 반사의 한계와 보완 방식을 설명해 주세요.",
  "promptEn": "Explain the limitations of screen-space reflections and discuss alternatives when off-screen objects need to appear in reflections.",
  "visual": "screen-space",
  "tags": [
    "beginner"
  ],
  "genres": [
    "action",
    "racing",
    "simulation",
    "adventure"
  ],
  "reviewedAt": "2026-10-14",
  "reviewStatus": "source-reviewed",
  "reviewScope": "Epic SSR 문서에서 화면 정보로 반사를 만드는 기능을 확인했습니다. 가려지거나 화면 밖인 정보의 보완은 시스템 구성에 따릅니다.",
  "reviewLimit": "개념·출처 대조입니다. 엔진 실행은 미검증입니다.",
  "reviewSources": [
    {
      "url": "https://dev.epicgames.com/documentation/en-us/unreal-engine/screen-space-reflections-in-unreal-engine",
      "method": "원문 자료 대조"
    }
  ],
  "reviewHistory": [
    {
      "date": "2026-10-14",
      "action": "출처 및 설명 대조",
      "scope": "Epic SSR 문서에서 화면 정보로 반사를 만드는 기능을 확인했습니다. 가려지거나 화면 밖인 정보의 보완은 시스템 구성에 따릅니다."
    }
  ]
}
---

# 스크린 스페이스 반사의 한계

## 핵심 구조

화면에 있는 깊이·색 정보 → 반사 탐색 → 화면 밖 정보는 부족

## 개념 설명

스크린 스페이스 반사는 이미 그린 화면의 정보를 사용합니다. 카메라가 돌아서 물체가 화면 밖으로 나가면 해당 물체의 반사를 유지할 정보가 부족해질 수 있습니다.

## 비교와 선택

화면 기반 반사: 현재 보이는 정보를 활용하지만 화면 밖과 가려진 부분에 한계가 있습니다.
다른 반사 방식: 캡처 또는 장면 정보를 사용하는 방식을 검토할 수 있습니다. 각각 갱신 방식과 비용이 다릅니다.

## 활용 상황

반사 품질을 판단할 때 정지 화면만 보지 말고 카메라를 회전해 확인합니다. 반사에서 반드시 보여야 하는 대상이 있는지 먼저 정합니다.

## 확인할 질문

주요 반사 대상이 화면 밖으로 나가도 보여야 하나요?
정적인 주변 환경인가요, 움직이는 대상인가요?
대체 반사와 혼합할 때 전환이 자연스러운가요?

## 도식의 한계

도식은 정보 누락을 설명하며 실제 SSR 렌더링이 아닙니다. 모든 엔진에서 동일하게 반사가 사라진다는 뜻은 아닙니다. 대체 방식과 설정에 따라 화면 결과가 달라집니다.

## 요청 예시

화면 밖 오브젝트의 반사가 필요한지 검토하고, 스크린 스페이스 반사의 한계와 보완 방식을 설명해 주세요.

## 참고 자료

https://dev.epicgames.com/documentation/unreal-engine/reflections-environment-in-unreal-engine


## 자료 대조에서 보강한 내용

Epic SSR 문서에서 화면 정보로 반사를 만드는 기능을 확인했습니다. 가려지거나 화면 밖인 정보의 보완은 시스템 구성에 따릅니다.

## 확인 기록

마지막 확인: 2026-10-14

Epic SSR 문서에서 화면 정보로 반사를 만드는 기능을 확인했습니다. 가려지거나 화면 밖인 정보의 보완은 시스템 구성에 따릅니다.

개념·출처 대조입니다. 엔진 실행은 미검증입니다.

확인 자료: https://dev.epicgames.com/documentation/en-us/unreal-engine/screen-space-reflections-in-unreal-engine
