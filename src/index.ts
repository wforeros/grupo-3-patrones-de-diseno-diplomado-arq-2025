// src/index.ts
import * as readline from 'readline';
import { program1 } from './ejercicio1/main';
import { program2 } from './exercise_2/index';
import { program3 } from './ejercicio3/index';
import { program4 } from './ejercicio4/main';
import { program5 } from './ejercicio5/main';
import { program6 } from './exercise_3/main';


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
  console.log("6. Integración de un Sistema de Pago Externo 2.0");
  console.log("0. Salir");
  console.log("====================================================================");
}

function handleOption(option: string) {
  clearScreen();
  switch (option) {
      case '1':
          executeOptionWithReturn(program1, option);
          break;
      case '2':
          executeOptionWithReturn(program2, option);
          break;
      case '3':
          executeOptionWithReturn(program3, option);
          break;
      case '4':
          executeOptionWithReturn(program4, option);
          break;
      case '5':
          executeOptionWithReturn(program5, option);
          break;
      case '6':
          executeOptionWithReturn(program6, option);
          break;
      case '0':
          console.log("Saliendo...");
          rl.close();
          process.exit(0);
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
