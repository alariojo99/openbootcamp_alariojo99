//Getter --> Métodos que nos permiten obtener atributos o métodos privados o protegidos
//Setter --> Métodos que nos permiten cambiar el valor de alguno de los atributos privados o protegidos

class Persona{
    //Private -> #, sólo se puede acceder desde dentro de la clase
    #nombre
    #edad

    //Protected -> _, sólo se puede acceder desde dentro de la clase y desde clases descendientes   
    _isDeveloper

    constructor(nombre, edad){
        this.#nombre = nombre
        this.#edad = edad
        this._isDeveloper = true
    }

    saludo(){
        return `Mi nombre es ${this.#nombre} y tengo ${this.#edad} años`
    }

    getNombre(){ //Función GETTER --> Nos permite acceder de forma controlada a algun atributo protegido
        return this.#nombre
    }

    #obtenEdad(){
        return this.#edad
    }

    getEdad(){ //Función GETTER
        return `${this.#edad}, edad privada: ${this.#obtenEdad()}` //Estoy accediendo a un método privado desde dentro de un método público que pertenece a la clase
    }

    setEdad(nuevaEdad){ //Función SETTER
        this.#edad = nuevaEdad
    }
}

const persona = new Persona('Alejandro', 23)

console.log('persona:>> ', persona.saludo())
console.log('persona:>> ', persona.getNombre())
console.log('persona:>> ', persona.getEdad())
console.log('persona:>> ', persona._isDeveloper)
persona.setEdad(34)
console.log('persona:>> ', persona.getEdad())



