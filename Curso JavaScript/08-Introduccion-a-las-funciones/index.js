//Una función sin parámetros que devuelva siempre "true"

//Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado

//Una función generadora de índices pares automáticos

function trueFn(){ 
    return true 
}

setTimeout(()=>console.log("Hola soy una promesa"), 5000)

function* indicesGenerator(){
    let i = 0
    while (true){
        i += 2
        yield i
    }
}

const indice = indicesGenerator()

console.log(indice.next().value)
console.log(indice.next().value)
console.log(indice.next().value)
console.log(indice.next().value)

