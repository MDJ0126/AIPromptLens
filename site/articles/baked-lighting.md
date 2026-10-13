---
{
  "id": 24,
  "slug": "baked-lighting",
  "kind": "concept",
  "category": "principles",
  "name": "베이크 조명과 실시간 조명",
  "en": "Baked vs realtime lighting",
  "desc": "빛을 미리 저장할지, 실행 중 계산할지 선택해요.",
  "source": "https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html",
  "ko": "배경과 조명이 바뀌는 정도를 기준으로 베이크 조명과 실시간 조명의 장단점을 비교하고, 적합한 조합을 제안해 주세요.",
  "promptEn": "Compare baked and realtime lighting based on how the environment and lights change, and suggest a suitable combination.",
  "visual": "baked-lighting",
  "tags": [
    "beginner"
  ],
  "genres": [
    "adventure",
    "horror",
    "rpg",
    "puzzle"
  ],
  "reviewedAt": "2026-10-14",
  "reviewStatus": "source-reviewed",
  "reviewType": "기능·개념",
  "reviewScope": "Unity 용어집에서 Baked와 Realtime의 계산 시점 차이를 확인했습니다. 움직이는 물체에 저장된 광 정보를 적용하는 방식은 별도입니다.",
  "reviewVersion": "Unity 6.0 (6000.0)",
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
      "scope": "Unity 용어집에서 Baked와 Realtime의 계산 시점 차이를 확인했습니다. 움직이는 물체에 저장된 광 정보를 적용하는 방식은 별도입니다."
    }
  ],
  "aliases": [
    "baked lights"
  ]
}
---

# 베이크 조명과 실시간 조명

## 핵심 구조

미리 계산 → 저장 → 실행 중 읽기 / 실행 중 계산 → 변화에 반응

## 개념 설명

베이크는 조명의 결과를 미리 계산해 저장하는 방식입니다. 실시간 조명은 실행 중 빛을 평가합니다. 혼합 방식은 두 처리를 함께 사용하지만, 어떤 부분을 저장하는지는 엔진과 설정에 따라 달라집니다.

## 비교와 선택

베이크: 고정된 배경 조명을 미리 저장합니다. 저장 공간과 다시 계산하는 시간이 필요합니다.
실시간: 움직이는 조명과 변화하는 장면을 다룹니다. 실행 중 계산 비용을 고려해야 합니다.

## 활용 상황

고정된 실내와 변하지 않는 조명이라면 미리 계산하는 방식을 검토합니다. 시간대 변화와 움직이는 조명이 중요하다면 실시간 또는 혼합 방식을 검토합니다.

## 확인할 질문

빛이나 벽이 실행 중 움직이나요?
움직이는 캐릭터는 어떤 조명 데이터를 사용하나요?
목표 기기의 성능과 저장 공간은 충분한가요?

## 도식의 한계

도식은 계산 시점의 차이를 설명합니다. 실제 라이트맵 생성이나 품질 비교 결과가 아닙니다. 구체적인 설정은 Unity 버전·렌더 파이프라인과 Unreal 버전을 지정한 뒤 확인해야 합니다.

## 요청 예시

배경과 조명이 바뀌는 정도를 기준으로 베이크 조명과 실시간 조명의 장단점을 비교하고, 적합한 조합을 제안해 주세요.

## 참고 자료

https://docs.unity3d.com/6000.0/Documentation/Manual/Glossary.html


## 자료 대조에서 보강한 내용


