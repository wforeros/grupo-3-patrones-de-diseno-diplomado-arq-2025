import { Command } from "../interface/Command";
import { Task } from "../tasks/Task";

export class CompleteCommand implements Command {
  private task: Task;

  constructor(task: Task) {
    this.task = task;
  }

  execute(): void {
    this.task.updateState("completed");
  }
}
