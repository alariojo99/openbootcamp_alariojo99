
const suma = (a,b) => {
    if (typeof a === 'number' && typeof b === 'number'){
        return a+b
    }else{
        throw new Error('Tienen que ser numeros')
    }
}

try{
    console.log(suma("a", 5))
}catch(e){
    console.log(e);
}