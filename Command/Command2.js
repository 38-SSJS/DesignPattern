// Command
class Command {
  execute() {}
}

// Concrete Command
class AddCommand extends Command {
  constructor(calculator, value) {
    super();
    this.calculator = calculator;
    this.value = value;
  }

  execute() {
    this.calculator.add(this.value);
  }

  undo() {
    this.calculator.subtract(this.value);
  }
}

class SubtractCommand extends Command {
  constructor(calculator, value) {
    super();
    this.calculator = calculator;
    this.value = value;
  }

  execute() {
    this.calculator.subtract(this.value);
  }

  undo() {
    this.calculator.add(this.value);
  }
}

class MultiplyCommand extends Command {
  constructor(calculator, value) {
    super();
    this.calculator = calculator;
    this.value = value;
  }

  execute() {
    this.calculator.multiply(this.value);
  }

  undo() {
    this.calculator.divide(this.value);
  }
}

class DivideCommand extends Command {
  constructor(calculator, value) {
    super();
    this.calculator = calculator;
    this.value = value;
  }

  execute() {
    this.calculator.divide(this.value);
  }

  undo() {
    this.calculator.multiply(this.value);
  }
}

// Receiver
class Calculator {
  constructor() {
    this.value = 0;
  }

  add(value) {
    this.value += value;
    console.log(`현재 값: ${this.value}`);
  }

  subtract(value) {
    this.value -= value;
    console.log(`현재 값: ${this.value}`);
  }

  multiply(value) {
    this.value *= value;
    console.log(`현재 값: ${this.value}`);
  }

  divide(value) {
    this.value /= value;
    console.log(`현재 값: ${this.value}`);
  }
}

// Invoker
class CalculatorController {
  constructor() {
    this.calculator = new Calculator();
    this.currentCommand = null;
    this.history = [];
    this.undoHistory = [];
  }

  add(value) {
    const command = new AddCommand(this.calculator, value);
    this.currentCommand = command;
    this.currentCommand.execute();
    this.history.push(command);
  }

  subtract(value) {
    const command = new SubtractCommand(this.calculator, value);
    this.currentCommand = command;
    this.currentCommand.execute();
    this.history.push(command);
  }

  multiply(value) {
    const command = new MultiplyCommand(this.calculator, value);
    this.currentCommand = command;
    this.currentCommand.execute();
    this.history.push(command);
  }

  divide(value) {
    const command = new DivideCommand(this.calculator, value);
    this.currentCommand = command;
    this.currentCommand.execute();
    this.history.push(command);
  }

  undo() {
    const command = this.history.pop();
    if (command) {
      this.currentCommand = command;
      this.currentCommand.undo();
      this.undoHistory.push(command);
    }
  }

  redo() {
    const command = this.undoHistory.pop();
    if (command) {
      this.currentCommand = command;
      this.currentCommand.execute();
      this.history.push(command);
    }
  }
}

const calculatorController = new CalculatorController();

calculatorController.add(10); // 현재 값: 10
calculatorController.add(5); // 현재 값: 15
calculatorController.subtract(3); // 현재 값: 12
calculatorController.multiply(2); // 현재 값: 24
calculatorController.divide(4); // 현재 값: 6
calculatorController.undo(); // 현재 값: 24
calculatorController.undo(); // 현재 값: 12
calculatorController.redo(); // 현재 값: 24
calculatorController.multiply(5); // 현재 값: 120
