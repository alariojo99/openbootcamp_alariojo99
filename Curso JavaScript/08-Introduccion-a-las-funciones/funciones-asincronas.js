//Funciones que pueden tardar algo de tiempo en realizarse

function miAsinc(){
    //Hace una llamada a una BD externa
    //Puede darnos algún ERROR
}

const miPromesa = new Promise((resolve, reject) => {
    const i = Math.floor(Math.random()*2)
    console.log(i)
    //Si está todo correcto
    if(i !== 0){
        resolve()
    }else{
        reject()
    }
})

////Cómo poder consumir las promesas, 2 opciones:

//1

miPromesa
    .then(() => console.log('Se ha ejecutado correctamente'))
    .catch(() => console.log('Error'))
    .finally(() => console.log('Yo me ejecuto siempre') )

//2 Async/Await