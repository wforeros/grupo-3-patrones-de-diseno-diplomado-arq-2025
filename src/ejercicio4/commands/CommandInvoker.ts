import { Command } from "../interface/Command";

export class CommandInvoker {
  private command!: Command;

  setCommand(command: Command) {
    this.command = command;
  }

  executeCommand() {
    this.command.execute();
  }
}
