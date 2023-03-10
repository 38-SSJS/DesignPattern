## Observer, 옵저버패턴

### 정의
여러 객체에 자신이 관찰 중인 객체에 발생하는 모든 이벤트에 대하여 알리는 구독 메커니즘을 정의할 수 있도록 하는 행동 디자인 패턴

쉽게 말하면  구독하고 구독한 대상에 변화를 감지하여 특정 동작을 수행함
(리액트의 리듀서(?), 자바스크립트의 이벤트리스너(?))

관찰대상의 주제객체, 관찰을 하는 구독객체

### 사용이유
폴링을 줄이기 위해,,
옵저버 패턴을 사용하지 않을 경우 생기는 문제중 하나가
사건을 감지하기 위해 객체들이 사건을 수시로 확인해야함 (polling)


객체간의 결합도를 낮추기 위해!
(구독하지 않은 고객들에게 알림을 보내면 고객들은 스팸이라 생각함,, 과도한 상호의존성)

### 옵저버의 구조

1. 구독과 구독취소가 가능한 주제객체

2. 알림 메서드

3. 구독자 class

4. 구독자 선언

5. 알림을 올바르게 처리할 인수 (contexte데이터)

6. 클라이언트 (구독과정)

### Reference
- https://refactoring.guru/ko/design-patterns/observer
- https://lihano.tistory.com/19
