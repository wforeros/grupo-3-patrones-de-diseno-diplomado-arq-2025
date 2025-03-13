import { Command } from "../interface/Command";
import { Task } from "../tasks/Task";

export class EditCommand implements Command {
  private task: Task;
  private params: { taskName: string };

  constructor(task: Task, params: { taskName: string }) {
    this.task = task;
    this.params = params;
  }

  execute(): void {
    this.task.updateState("edited");
    this.task.editName(this.params.taskName);
  }
}
