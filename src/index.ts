/*
Código de prueba
*/

type CarType = "eléctrico" | "mecánico" | "hibrído"
interface Car {
  type: CarType
}

class Car implements Car {
  type: CarType;

  constructor (type: CarType){
    this.type = type
  }

}

const car = new Car("eléctrico")
console.log(car);
