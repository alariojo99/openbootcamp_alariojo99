//Sets (conjuntos) --> Listas pero con diferente comportamiento 

const array = [1,2,3,4,5,1,2,"hola",3]

const miSet = new Set(array)

console.log('array :>> ', array); //[1,2,3,4,5,1,2,"hola",3]
console.log('miSet :>> ', miSet); // Set {1,2,3,4,5,"hola"}

// .add()
miSet.add(9)

// .delete() 
miSet.delete(9)

// .clear() --> elimina todos los valores del set

// .has() 
array.includes(4) //true
miSet.has(4) //true

// .size (propiedad)
console.log(miSet.size) //6

// Iteración dentro de un Set
miSet.forEach(valor => console.log(valor))

//Obtener los valores del Set
const values = miSet.values() // --> devuelve un objeto iterator
console.log('values :>> ', values);

    // o volver a convertir el Set en array con el factor de propagción

    const ar_miSet = [...miSet]

    console.log(ar_miSet)

