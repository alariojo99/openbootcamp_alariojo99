//Inheritance - Herencia

class Persona{
    _nombre
    _edad
    
    constructor(nombre, edad){
        this._nombre = nombre
        this._edad = edad
    }

    saludo(){
        return `Mi nombre es ${this._nombre} y tengo ${this._edad} años`
    }
}

class Desarrollador extends Persona{ // Keyword EXTENDS
    #lenguaje
    constructor(nombre, edad, lenguaje){
        super(nombre, edad) // Keyword SUPER --> Llamamos al constructor de la clase superior, nos permite utilizar el constructor de la clase padre
        this.#lenguaje = lenguaje
    }  

    saludo(){ 
        return `${super.saludo()} y programo en ${this.#lenguaje}` // Keyword SUPER, Polimorfismo --> otra forma del método super especifico para las personas desarrolladores
    }

    getLenguaje(){
        return this.#lenguaje
    }
}

const nuevoDev = new Desarrollador('Alejandro', 23, 'JavaScript')       

console.log('desarollador :>> ', nuevoDev)
console.log('nuevoDev.getLenguaje() :>> ', nuevoDev.getLenguaje())

//Polimorfismo --> Varias formas
console.log(nuevoDev.saludo())

const persona = new Persona('Albert', 20)
console.log(persona.saludo())
