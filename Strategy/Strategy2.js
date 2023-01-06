const nums = [2, -13, 0, 42, 1999, 200, 1, 32];
const letters = ["z", "b", "m", "o", "hello", "zebra", "c", "0"];
const dates = [
  new Date(2001, 1, 14),
  new Date(2000, 1, 14),
  new Date(1985, 1, 14),
  new Date(2020, 1, 14),
  new Date(2022, 1, 14),
];

const sorterId = Symbol("_sorter_");

class Sort {
  constructor(name) {
    this[sorterId] = name;
  }

  execute(...args) {
    return this.fn(...args);
  }

  use(fn) {
    this.fn = fn;
    return this;
  }
}

class Sorter {
  sort(...args) {
    return this.sorter.execute.call(this.sorter, ...args);
  }

  use(sorter) {
    if (!(sorterId in sorter)) {
      throw new Error(`Please use Sort as a sorter`);
    }
    this.sorter = sorter;
    return this;
  }
}

const sorter = new Sorter();

const numberSorter = new Sort("number");
const letterSorter = new Sort("letter");
const dateSorter = new Sort("date");

numberSorter.use((item1, item2) => item1 - item2);
letterSorter.use((item1, item2) => item1.localeCompare(item2));
dateSorter.use((item1, item2) => item1.getTime() - item2.getTime());

function sort(items) {
  const type = typeof items[0];
  sorter.use(
    type === "number"
      ? numberSorter
      : type === "string"
      ? letterSorter
      : items[0] instanceof Date
      ? dateSorter
      : null
  );
  return [...items].sort(sorter.sort.bind(sorter));
}

console.log("Sorted numbers", sort(nums));
console.log("Sorted letters", sort(letters));
console.log("Sorted dates", sort(dates));

//node Strategy/Strategy2.js로 실행해보기
