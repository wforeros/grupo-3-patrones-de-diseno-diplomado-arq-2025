// src/index.ts
import * as readline from 'readline';
import { program5 } from './ejercicio5/main';
/*import { executeOption2 } from './ejercicio5/main';
import { executeOption3 } from './ejercicio5/main';
import { executeOption4 } from'./ejercicio5/main';
import { executeOption5 } from './ejercicio5/main';*/

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function clearScreen() {
    console.clear();
}

function showMenu() {
  console.log("");
  console.log("====================================================================");
  console.log("                     PATRONES DE DISEÑO");
  console.log("====================================================================");
  console.log("1. Clonación de Personajes en un Videojuego");
  console.log("2. Aplicación de Mensajería");
  console.log("3. Integración de un Sistema de Pago Externo");
  console.log("4. Sistema de Gestión de Tareas");
  console.log("5. Decoración de Habitaciones en un Hotel");
  console.log("6. Decoración de Habitaciones en un Hotel");
  console.log("0. Salir");
  console.log("====================================================================");
}

function handleOption(option: string) {
  clearScreen();
  switch (option) {
      case '1':
          executeOptionWithReturn(program5, option);
          break;
      case '2':
          executeOptionWithReturn(program5, option);
          break;
      case '3':
          executeOptionWithReturn(program5, option);
          break;
      case '4':
          executeOptionWithReturn(program5, option);
          break;
      case '5':
          executeOptionWithReturn(program5, option);
          break;
      case '0':
          console.log("Saliendo...");
          rl.close();
          return;
      default:
          console.log("Opción no válida. Intente de nuevo.");
          askReturnToMenu(() => runApp());
  }
}

function executeOptionWithReturn(executeFunction: () => void, option: string) {
  executeFunction();
  askReturnToMenu(() => handleOption(option));
}

function askReturnToMenu(callback: () => void) {
  rl.question("¿Deseas volver al menú principal? (s/n): ", (answer) => {
      clearScreen();
      if (answer.toLowerCase() === 's') {
          runApp();
      } else {
          callback();
      }
  });
}

function runApp() {
  clearScreen();
  showMenu();
  rl.question("Seleccione una opción: ", handleOption);
}

runApp();
