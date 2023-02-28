class Estudiante {
    _nombre
    _asignaturas = ['HTML', 'CSS', 'JavaScript']

    constructor(nombre){
        this._nombre = nombre
    }

    obtenDatos(){
        const datosEstudiante = {nombre: this._nombre, asignaturas: this._asignaturas}
        return datosEstudiante
    }
}

const estudiante = new Estudiante('Alejandro')
console.log(estudiante.obtenDatos())