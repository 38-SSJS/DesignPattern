const price = 1370000;
const object = { key: "value" };
const date = new Date();

const stringMakerId = Symbol("_maker_");

class String {
  constructor(name) {
    this[stringMakerId] = name;
  }

  execute(...args) {
    return this.fn(...args);
  }

  use(fn) {
    this.fn = fn;
    return fn;
  }
}

class StringMaker {
  makeString(...args) {
    return this.stringMaker.execute.call(this.stringMaker, ...args);
  }

  use(stringMaker) {
    if (!(stringMakerId in stringMaker)) {
      throw new Error("음 이거 아닌듯?");
    }
    this.stringMaker = stringMaker;
    return this;
  }
}

const stringMaker = new StringMaker();

const priceToString = new String("price");
const dateToString = new String("date");
const objectToString = new String("object");

priceToString.use(price => price.toLocaleString() + "원");

dateToString.use(date => {
  const dates = date
    .toLocaleDateString()
    .split(".")
    .map(el => el.trim());
  return dates[0] + "년 " + dates[1] + "월 " + dates[2] + "일 ";
});

objectToString.use(
  obj =>
    "key는 " +
    Object.keys(obj) +
    "이고, value는 " +
    Object.values(obj) +
    "이다."
);

function makeString(item) {
  const type = typeof item;
  stringMaker.use(
    type === "number"
      ? priceToString
      : item instanceof Date
      ? dateToString
      : type === "object"
      ? objectToString
      : null
  );
  return stringMaker.makeString.bind(stringMaker)(item);
}

console.log("price : ", makeString(price));
console.log("date : ", makeString(date));
console.log("object : ", makeString(object));
