
class Persona{

    constructor(nombre, edad, isDeveloper){
        this.nombre = nombre
        this.edad = edad
        this.isDeveloper = isDeveloper
    }

    saluda(){
        console.log(`Mi nombre es ${this.nombre} y tengo ${this.edad} años`);
    }
}

const persona1 = new Persona('Alejandro', 23, true)

console.log('persona1 :>> ', persona1);

persona1.saluda()

let numero = 60 //Inicializar 
console.log(typeof numero)

const persona2 = new Persona('Joana', 24, false)
console.log(typeof persona2) //object

console.log(persona2 instanceof Persona) //true

////instanceof -> similar a typeof pero para clases
