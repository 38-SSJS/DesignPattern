function CGV() {
  this.getTicketPrice = function (quantity) {
    return quantity * 12000 + "원";
  };
}

function Megabox() {
  this.getTicketPrice = function (quantity) {
    return quantity * 11000 + "원";
  };
}

function LotteCinema() {
  this.getTicketPrice = function (quantity) {
    return quantity * 10000 + "원";
  };
}

function TicketPrice() {
  this.theaterChain;

  this.setTheaterChain = function (chain) {
    this.theaterChain = chain;
  };

  this.calculate = function (quantity) {
    return this.theaterChain.getTicketPrice(quantity);
  };
}

const cgv = new CGV();
const megabox = new Megabox();
const lottecinema = new LotteCinema();

const ticketPrice = new TicketPrice();

ticketPrice.setTheaterChain(cgv);
console.log(ticketPrice.calculate(2)); // 24000원

ticketPrice.setTheaterChain(megabox);
console.log(ticketPrice.calculate(3)); // 33000원

ticketPrice.setTheaterChain(lottecinema);
console.log(ticketPrice.calculate(4)); // 40000원

//node Strategy/Strategy1.js로 실행해보기
