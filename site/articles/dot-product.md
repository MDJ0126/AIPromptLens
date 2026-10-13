---
{
  "id": 28,
  "slug": "dot-product",
  "kind": "concept",
  "category": "principles",
  "name": "내적으로 앞뒤 판단",
  "en": "Dot product for direction",
  "desc": "두 방향이 얼마나 같은 쪽인지 판단해요.",
  "source": "https://docs.unity3d.com/6000.0/Documentation/ScriptReference/Vector3.Dot.html",
  "ko": "내적으로 앞뒤 판단의 핵심 구조와 활용 상황, 한계를 설명해 주세요.",
  "promptEn": "Explain Dot product for direction and its use cases and limitations.",
  "visual": "dot-product",
  "tags": [
    "beginner"
  ],
  "genres": [
    "action",
    "shooter",
    "sports",
    "horror"
  ],
  "reviewedAt": "2026-10-14",
  "reviewStatus": "source-reviewed",
  "reviewType": "기능·개념",
  "reviewScope": "Unity 6.0 Vector3.Dot의 정규화 방향 내적과 코사인 관계를 확인했습니다.",
  "reviewVersion": "Unity 6.0 (6000.0)",
  "reviewSources": [
    {
      "url": "https://docs.unity3d.com/6000.0/Documentation/ScriptReference/Vector3.Dot.html",
      "method": "원문 자료 대조"
    }
  ],
  "reviewHistory": [
    {
      "date": "2026-10-14",
      "action": "출처 및 설명 대조",
      "scope": "Unity 6.0 Vector3.Dot의 정규화 방향 내적과 코사인 관계를 확인했습니다."
    }
  ]
}
---

# 내적으로 앞뒤 판단

## 핵심 구조

전방 정규화 → 대상 방향 정규화 → 내적 → 기준 비교

## 개념 설명

내적은 대응 성분의 곱을 더한 값입니다. 정규화한 두 방향의 내적은 각도의 코사인으로, 같은 방향은 1, 직각은 0, 반대 방향은 -1입니다.

## 비교와 선택

전방 방향과 대상 방향을 정규화해 비교합니다. 양수는 전방 반구이고 음수는 후방 반구입니다. 전체 시야각이 90도면 cos(45도)를 기준으로 비교합니다. 거리와 벽에 가려짐은 별도 검사합니다. 대상과 위치가 같으면 방향이 없으므로 예외 처리합니다.

## 도식의 한계

이 도식은 개념 설명용이며 실제 탐색이나 엔진 실행 결과가 아닙니다.

## 요청 예시

내적으로 앞뒤 판단의 핵심 구조와 활용 상황, 한계를 설명해 주세요.

## 참고 자료

https://docs.unity3d.com/6000.0/Documentation/ScriptReference/Vector3.Dot.html

