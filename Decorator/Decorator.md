# Decorator Pattern

### 정의

동일한 클래스의 다른 개체의 동작에 영향을 주지 않고 정적 또는 동적으로 동작을 개체🍎에 추가할 수 있다.
동일한 인터페이스의 데코레이터가 개체를 감싸서 동작을 추가할 수 있다. 감싸는 특성을 가지고 있기 때문에, **Wrapper Pattern**이라고도 한다.

### 사용 이유

데코레이터 패턴은 **런타임 시 동적으로 개체🍎에 요구에 대한 처리를 추가**해야하는 경우 사용된다.
새로운 행동이 필요해서 이를 구현한 정적 클래스를 추가로 생성하는 것은 유연하지 못한 설계이다.
필요한 시점에 새로운 행동을 동적으로 장식할 수 있다면 상부 클래스에 책임과 기능이 누적되는 것을 피할 수 있다.

case1. 알림 매체 추가 → 슬랙, 페이스북, SMS, 카카오
case2. 토큰 처리에 대한 요구 → 페이지 접근 권한, 댓글 작성, 구매목록 확인 등

### 특성

참조 필드를 통한 **합성🔥**, 필드에 있는 개체를 감싸서 작동시킨다.

🔲 wrapper - ▪️ wrappee

- 🔲 wrapper - 참조 필드를 갖고 있음
- ▪️ wrappee - 참조 필드에 들어가는 개체

### 왜?

클래스는 기본적으로 상속이라는 특성을 가지고 있다. 상속은 static하기 때문에 런타임에 행동을 바꿀 수 없다. (상속은 컴파일 시 이루어진다).
대부분 언어에서의 상속은 클래스가 동시에 여러 클래스의 행동을 상속하도록 허용하지 않는다.

### 구조

1️⃣ class Component {} //🔲,▪️의 공통적인 인터페이스🌔
2️⃣ class ConcreteComponent {} // ▪️, extends Component🌔

3️⃣ class BaseDecorator {} // extends 1️⃣ Component🌔, call super() and have constructor(+field🍀)
모든 4️⃣구상 데코레이터에 같은 동작을 하도록 할 때 사용, decorator 패턴에 필수적인 요소는 아님.
4️⃣ class ConcreteDecorator {} // 🔲, extends BaseDecorator, super.execute() & +α execution(추가적인 행동 추가)
5️⃣ client codes // 실질적으로 래핑이 이루어지는 위치, 데코레이터로 감싸진 스택 구조(🔲→▪️→🔲→▪️→🔲→▪️),
구조의 마지막 데코레이터는 직접적으로 클라이언트와 작업한다.

```javascript
 class 3️⃣BaseDecorator extends Component1️⃣🌔 {
        constructor(field🍀) {
        super(); //1️⃣
        this.alarm = alarm;
        }

        send() {
        this.alarm.send();
        }
    }
```

\*\*행동 추가시 2️⃣, 4️⃣로 행동 확장, 5️⃣에서 추가하는 것으로 대응 가능.

### JS - super()

"super" 키워드는 부모의 constructor을 호출할 때에 사용된다.
부모는 최초 interface Component🌔의 constructor이다.
JS에서는 부모가 런타임에 constructor를 가지게 된다.
