
/*
Crea los siguientes archivos JS:
- factorial-break.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break
*/

function factorialFor(num){
    let factorial = 1

    for(let i=1; i<num; i++){
        factorial += factorial * i
    }

    return factorial
}

console.log(factorialFor(10))

function factorialWhile(num){
    let count = 1
    let factorial = 1

    while(count < num){
        factorial += factorial * count
        count ++
    }

    return factorial
}

console.log(factorialWhile(10))

function factorialWhilePlus(num){
    let count = 1
    let factorial = 1

    while(true){
        factorial += factorial * count
        count ++

        if(count === 10){
            break
        }
    }
    return factorial
}

console.log(factorialWhilePlus(10))