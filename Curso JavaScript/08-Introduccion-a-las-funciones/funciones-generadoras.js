function* generaId(){
    let id = 0
    while (true){
        id++
        if (id === 10){
            return id
        }
        yield id //Esperando hasta que se vuelva a llamar
    }
}

const gen = generaId()

console.log(gen.next()) //Esto nos devuelve un objeto
console.log(gen.next().value)
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())


