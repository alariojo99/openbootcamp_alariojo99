const listaCompra = ["manzana", "pera", "pomelo", "plátano", "melón"]

listaCompra.push("aceite de girasol")
listaCompra.pop()

console.log(listaCompra)

const peliculas = [
    { 
      titulo: "Pulp Fiction",
      director: "Quentin Tarantino",
      fecha: "1994"
    },
    {
      titulo: "El Padrino",
      director: "Francis Ford Coppola",
      fecha: "1972"
    },
    {
      titulo: "El Señor de los Anillos: La Comunidad del Anillo",
      director: "Peter Jackson",
      fecha: "2001"
    }
  ]

const peliculasPosterioresAl2000 = peliculas.filter(obj => obj.fecha > 2000)

console.log(peliculasPosterioresAl2000)

const directores = peliculas.map(obj => obj.director)

console.log(directores)

const titulos = peliculas.map(obj => obj.titulo)
console.log(titulos)

/* De primeras hice esto para concatenar, pero se referían a hacerlo como he puesto abajo

const directoresTitulos = directores.map((obj, i)=>{
    return `${obj} -> ${titulos[i]}`
})

console.log(directoresTitulos)*/

//Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const directores_titulos = directores.concat(titulos)
console.log(directores_titulos)

// Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
const directores_titulos_prop = [...directores, ...titulos]
console.log(directores_titulos_prop)
