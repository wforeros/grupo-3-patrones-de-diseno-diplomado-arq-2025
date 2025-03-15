import { DeleteCommand } from "./commands/DeleteCommand";
import { CommandInvoker } from "./commands/CommandInvoker";
import { CompleteCommand } from "./commands/CompleteCommand";
import { Task } from "./tasks/Task";
import { TaskManager } from "./tasks/TaskManager";

const taskManager = new TaskManager();
const commandInvoker = new CommandInvoker();

const task = new Task("Make dinner");

console.log(`Task ${task.getName()} has state: ${task.getState()}`);

taskManager.saveTaskState(task);
commandInvoker.setCommand(new CompleteCommand(task));
commandInvoker.executeCommand();

console.log(`Task ${task.getName()} has state: ${task.getState()}`);

taskManager.saveTaskState(task);
commandInvoker.setCommand(new DeleteCommand(task));
commandInvoker.executeCommand();

console.log(`Task ${task.getName()} has state: ${task.getState()}`);

taskManager.undoTask(task);

console.log(`Task ${task.getName()} has state: ${task.getState()}`);
