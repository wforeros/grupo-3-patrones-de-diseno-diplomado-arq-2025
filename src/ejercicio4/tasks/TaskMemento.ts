import { TaskState } from "../types/Types";

export class TaskMemento {
  private name: string;
  private state: TaskState | null;

  constructor(name: string, state: TaskState | null) {
    this.name = name;
    this.state = state;
  }

  getName() {
    return this.name;
  }

  getState() {
    return this.state;
  }
}
