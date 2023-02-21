
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
