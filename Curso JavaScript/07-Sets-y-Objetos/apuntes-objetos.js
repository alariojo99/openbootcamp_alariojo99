const persona = {
    nombre: 'Alejandr',
    edad: 23,
    isDeveloper: true,
    "3-caracteristicas": ['pelo castaño', 'estatura media', 'ojos marrones']
}

console.log(persona["3-caracteristicas"])
console.log(persona.edad)

//Acceder dinámicamente a las props de un objeto
const años = 'edad'
console.log(persona[años])

const persona2 = persona // --> Apuntan al mismo sitio de la memoria, por lo tanto un cambio en uno repercute al otro (shallow copy) Esto ocurre solo con los objetos, con los elementos primitivos NO 
 
persona2.nombre = 'Pedro' 
console.log(persona.nombre)
console.log(persona2.nombre)

//Crear una copia de un objeto

const persona3 = {... persona}

persona3.nombre = 'Manuel'

console.log(persona.nombre)
console.log(persona3.nombre)

//// Cómo ordenar una lista de objetos en función de una propiedad
const listaPeliculas = [
    {titulo: "Lo que el viento se lelvó", anyo: 1939},
    {titulo: "Titanic", anyo: 1997},
    {titulo: "Moana", anyo: 2016},
    {titulo: "El efecto mariposa", anyo: 2004},
    {titulo: "TED", anyo: 2012}
]

console.log(listaPeliculas)

listaPeliculas.sort((a,b)=> a.anyo -b.anyo)
console.log(listaPeliculas)



