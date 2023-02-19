// 제품(Product) 인터페이스
class Product {
  setPrice(price) {
    this.price = price;
  }
}

// 구체적인 제품(Concrete Product) 클래스
class Book extends Product {
  constructor() {
    super();
    this.type = "book";
  }
}

class DVD extends Product {
  constructor() {
    super();
    this.type = "dvd";
  }
}

// 팩토리(Factory) 클래스
class ProductFactory {
  static createProduct(type) {
    switch (type) {
      case "book":
        return new Book();
      case "dvd":
        return new DVD();
      default:
        throw new Error(`Invalid product type: ${type}`);
    }
  }
}

// 사용 예시
const book = ProductFactory.createProduct("book");
const dvd = ProductFactory.createProduct("dvd");
book.setPrice(10);
dvd.setPrice(20);
console.log(book.price); // 10
console.log(dvd.price); // 20
