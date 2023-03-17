// Command(명령)
class Command {
  execute() {}
}

// Concrete Command(구체적인 명령)
class LightOnCommand extends Command {
  constructor(light) {
    super();
    this.light = light;
  }

  execute() {
    this.light.turnOn();
  }
}

class LightOffCommand extends Command {
  constructor(light) {
    super();
    this.light = light;
  }

  execute() {
    this.light.turnOff();
  }
}

// Receiver(수신자)
class Light {
  constructor() {
    this.isOn = false;
  }

  turnOn() {
    this.isOn = true;
    console.log("Light On.");
  }

  turnOff() {
    this.isOn = false;
    console.log("Light Off.");
  }
}

// Invoker(발송자)
class RemoteControl {
  setCommand(command) {
    this.command = command;
  }

  buttonPressed() {
    this.command.execute();
  }
}

const light = new Light();

const lightOnCommand = new LightOnCommand(light);
const lightOffCommand = new LightOffCommand(light);

const remoteControl = new RemoteControl();

remoteControl.setCommand(lightOnCommand);
remoteControl.buttonPressed();

remoteControl.setCommand(lightOffCommand);
remoteControl.buttonPressed();
