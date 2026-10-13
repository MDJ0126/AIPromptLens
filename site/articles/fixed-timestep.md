---
{
  "id": 32,
  "slug": "fixed-timestep",
  "kind": "concept",
  "category": "principles",
  "name": "고정 시간 간격과 보간",
  "en": "Fixed timestep and interpolation",
  "desc": "계산 간격과 화면 표시 간격을 구분해요.",
  "source": "https://gafferongames.com/post/fix_your_timestep/",
  "ko": "고정 시간 간격의 누적기와 렌더링 보간을 구분하고 과부하 처리 및 결정론의 한계를 설명해 주세요.",
  "promptEn": "Explain Fixed timestep and interpolation with its structure, use cases and limitations.",
  "visual": "fixed-timestep",
  "tags": [
    "beginner"
  ],
  "genres": [
    "simulation",
    "racing",
    "sports",
    "platformer",
    "action"
  ],
  "reviewedAt": "2026-10-14",
  "reviewStatus": "source-reviewed",
  "reviewType": "기능·개념",
  "reviewScope": "Gaffer 원문에서 누적 시간·고정 스텝·이전/현재 상태 보간을 확인했습니다. 고정 dt만으로 결정론이 보장되지 않습니다.",
  "reviewVersion": "원저자 자료",
  "reviewSources": [
    {
      "url": "https://gafferongames.com/post/fix_your_timestep/",
      "method": "원문 자료 대조"
    }
  ],
  "reviewHistory": [
    {
      "date": "2026-10-14",
      "action": "출처 및 설명 대조",
      "scope": "Gaffer 원문에서 누적 시간·고정 스텝·이전/현재 상태 보간을 확인했습니다. 고정 dt만으로 결정론이 보장되지 않습니다."
    }
  ],
  "aliases": [
    "fixed timestep"
  ]
}
---

# 고정 시간 간격과 보간

## 핵심 구조

프레임 시간 누적 → 고정 dt만큼 반복 계산 → 이전/현재 상태 보간 → 화면 표시

## 개념 설명

시뮬레이션을 일정한 시간 간격으로 진행하고 렌더링 간격과 분리합니다. 프레임 시간이 쌓인 누적기에 dt 이상이 남아 있으면 계산을 진행하고 dt를 뺍니다.

## 비교와 선택

변하는 프레임 시간을 그대로 물리 계산에 넣는 방식과 비교합니다. 이전과 현재 상태 사이를 남은 시간 비율로 보간하면 표시를 부드럽게 할 수 있지만 한 계산 간격 정도의 표시 지연이 생길 수 있습니다.

## 활용 상황

한 프레임에서 너무 많은 계산을 따라잡으면 부하가 더 커질 수 있습니다. 계산 횟수 상한과 느려짐 정책을 정합니다. 고정 dt만으로 플랫폼 간 결정론이 보장되지는 않으며 입력 순서와 수치 연산 등도 검토해야 합니다.

## 도식의 한계

자동 재생 도식은 개념 설명용입니다. 실제 엔진 코드 실행이나 성능 측정 화면은 아닙니다.

## 요청 예시

고정 시간 간격의 누적기와 렌더링 보간을 구분하고 과부하 처리 및 결정론의 한계를 설명해 주세요.

## 참고 자료

https://gafferongames.com/post/fix_your_timestep/


## 자료 대조에서 보강한 내용


