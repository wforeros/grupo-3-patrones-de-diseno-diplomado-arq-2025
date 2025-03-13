import { Task } from "./Task";
import { TaskMemento } from "./TaskMemento";

export class TaskManager {
  private taskMementos: Map<Task, TaskMemento[]>;

  constructor() {
    this.taskMementos = new Map();
  }

  saveTaskState(task: Task): void {
    if (!this.taskMementos.has(task)) this.taskMementos.set(task, []);
    this.taskMementos.get(task)!.push(task.createMemento());
  }

  undoTask(task: Task) {
    const mementos = this.taskMementos.get(task);
    if (mementos && mementos.length > 0) {
      const memento = mementos.pop();
      if (memento) task.restoreMemento(memento);
    }
  }
}
