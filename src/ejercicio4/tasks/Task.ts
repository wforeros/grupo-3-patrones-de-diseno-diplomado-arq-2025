import { TaskMemento } from "./TaskMemento";
import { TaskState } from "../types/Types";

export class Task {
  private name: string;
  private state: TaskState | null;

  constructor(name: string) {
    this.name = name;
    this.state = null;
  }

  updateState(state: TaskState) {
    this.state = state;
  }

  editName(name: string) {
    this.name = name;
    this.updateState("edited");
  }

  getState() {
    return this.state;
  }

  getName() {
    return this.name;
  }

  createMemento() {
    return new TaskMemento(this.name, this.state);
  }

  restoreMemento(memento: TaskMemento) {
    this.name = memento.getName();
    this.state = memento.getState();
  }
}
