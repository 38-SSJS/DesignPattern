# Strategy

# 정의

**동일 계열의 알고리즘들을 정의**하고 **캡슐화**하여 해당 계열 안에서 **상호 교체가 가능**하도록 만들어 알고리즘을 사용하는 클라이언트와 상관없이 **독립적**으로 **알고리즘을 변경**할 수 있게 하는 패턴.

→ 하나의 클래스가 많은 행동들을 정의하고, 이런 행동들이 그 클래스의 연산 안에서 복잡한 **다중 조건문의 모습을 취할 때**, 행동 각각을 **전략(Strategy)클래스**로 만들고, 동적으로 행동의 변경이 필요한 경우 **전략(Strategy)**을 바꾸어 주는 것으로 알고리즘을 다양하게 변경할 수 있게 해주는 패턴

→ **알고리즘 변형이 빈번하게 필요한 경우**에 적합한 패턴

# 구조

![Strategy_%E1%84%80%E1%85%AE%E1%84%8C%E1%85%A9 001](https://user-images.githubusercontent.com/106805946/210948743-1be572a9-1c8f-4944-8e2b-f1799a77c921.jpeg)

## **컨텍스트(Context)**

- 사용중인 현재 전략에 대한 참조 또는 포인터가 있어야 한다.
- 클라이언트에게 인터페이스를 제공한다.
- 클라이언트는 자신의 업무를 수행하기 위해 어떤 전략이든 사용할 수 있고, 필요에 따라 언제든지 현재의 전략을 다른 전략으로 변경할 수 있다.

## **전략(Strategy)**

- 모든 전략 구현체에 대한 공용 인터페이스

## 전략 알고리즘 객체(Concrete Strategy)

- 알고리즘, 행위, 동작을 객체로 정의한 구현체

# 사용하는 이유

## OCP(Open-Closed Principle) : 개방 폐쇄 원칙

- 소프트웨어 구성 요소(컴포넌트, 클래스, 모듈, 함수 등)는 확장에 대해서는 개방되어 있어야 하며 변경에 대해서는 폐쇄되어야 한다.
  → 기존의 코드는 변경하지 않으면서 기능을 추가할 수 있도록 설계되어야 한다.

## DIP(Dependency Inversion Principle) : 의존 역전 원칙

- 객체에서 어떤 Class를 참조해서 사용해야 하는 상황이 생긴다면, 그 Class를 직접 참조하는 것이 아닌 그 대상의 상위 요소(추상 클래스 or 인터페이스)로 참조해야 한다.
- why? 상속 관계로 이루어진 모듈을 사용할 때, 하위 모듈의 인스턴스를 직접 가져다 쓰게 되면 하위 모듈의 구체적인 내용에 의존성이 생겨 하위 모듈에 변화가 생길때마다 클라이언트나 상위 모듈의 코드 수정해야 한다.
- 즉, 상위의 인터페이스 타입의 객체로 통신하라는 원칙

## 다중 조건문( if - else )

- 변경 또는 확장이 될수록 코드가 복잡해짐
- 리팩토링 시 리팩토링 할 부분을 찾는데에 점점 더 오랜 시간을 소모하게 됨
- 실수로 추가하지 않고 누락하는 부분이 생길 가능성이 있음

⇒ 유지보수가 점점 어려워진다.

# 적용방법 및 특징

## 상속(Inheritance)

- 서브클래스에서 코드가 중복된다.(슈퍼크래스로부터 상속받기때문에)
- 슈퍼클래스에서 코드 변경시, 다른 서브클래스들에게 원치 않은 영향을 끼칠 수 있다.

## 합성(Composition)

- 바뀌는 부분은 따로 뽑아서 캡슐화 ⇒ 나중에 바뀌지 않는 부분에는 영향을 끼치지 않음
  - 변경될 것과 변하지 않을 부분을 구분 → 변경될 부분을 인터페이스로 추출
  - 모듈이 만나는 지점에 인터페이스를 정의
  - 인터페이스에 의존하도록 코드를 작성

→ 가능하면 상속보다는 합성을 사용하는것이 좋다.

# 장점

- **동일 계열의 관련 알고리즘이 생김**
  - Strategy 클래스 계층은 동일 계열의 알고리즘군을 정의하고, 알고리즘 자체의 재사용도 가능하게 함
- **Strategy를 사용하는 Composition 클래스에 서브 클래싱을 하지 않아도 됨**
- **조건문을 없앨 수 있음**
  - 서로 다른 행동이 하나로 묶이면 조건문을 사용하여 정확한 행동을 선택해야 하지만, 서로 다른 Strategy 클래스의 행동을 캡슐화 하면 조건문을 없앨 수 있다.
- **사용자가 원하는 만큼 전략을 정의할 수 있고, 기존 코드의 동작에 영향을 주지 않으면서 원하는 시점에 원하는 것으로 변경(On-Demand)할 수 있다.**

### > Reference

- https://velog.io/@lky5697/the-power-of-strategy-design-pattern-in-javascript
- https://refactoring.guru/ko/design-patterns/strategy
- https://techblog.wclub.co.kr/posts/0014.design-pattern-with-javascript/Design%20Patterns%20with%20Javascript
- https://inpa.tistory.com/entry/GOF-%F0%9F%92%A0-%EC%A0%84%EB%9E%B5Strategy-%ED%8C%A8%ED%84%B4-%EC%A0%9C%EB%8C%80%EB%A1%9C-%EB%B0%B0%EC%9B%8C%EB%B3%B4%EC%9E%90#Strategy_vs_Temaplate_Method
