/*
- Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)

- Una variable que obtenga tu edad a partir del objeto anterior

- Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s

- Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
*/

const persona = {
    nombre: 'Alejandro',
    apellido: 'Lario',
    edad: 23,
    altura: 178,
    isDeveloper: true
}

const edad = persona.edad

const listaPersonas = [
    {... persona},
    {    
        nombre: 'Albert',
        apellido: 'Lario',
        edad: 20,
        altura: 178,
        isDeveloper: false
    },
    {    
        nombre: 'Joana',
        apellido: 'Cuenca',
        edad: 24,
        altura: 160,
        isDeveloper: false
    },
]

listaPersonas.sort((a,b)=> a.edad - b.edad)