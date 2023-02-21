//Trabajando con fechas

////Maneras de inicializar fechas:

    const fecha = new Date() //la fecha de AHORA

    //Los meses inicializan en 0 
    const fecha2 = new Date(1999, 5, 17)

    //Estan formateadas en ms, el inicio es 1/1/1979, si le paso 0 milisegundos me dará la fecha origen
    const fecha3 = new Date(0)

    //Strings
    const fecha4 = new Date("June 17, 1999 12:15:35")

console.log('fecha :>> ', fecha);
console.log('fecha2 :>> ', fecha2);
console.log('fecha3 :>> ', fecha3);
console.log('fecha4 :>> ', fecha4);

////Comparación de fechas
console.log(fecha > fecha2) //true

const fecha5 = new Date(1999, 5, 17)

console.log(fecha2 === fecha5) //false --> ERROR no se puede comprarar así, se tiene que pasar a ms

    //Para convertir a ms:
    console.log(fecha2.getTime() === fecha5.getTime()) //true

////Obtener el dia, mes y año de una fecha
    
    //Obtener el DIA
    console.log(fecha2.getDate())

    //Obtener el MES
    console.log(fecha2.getMonth() + 1)

    //Obtener el añño
    console.log(fecha2.getFullYear())

////Mostrar fecha en un STRING .toLocaleDateString

console.log(fecha2.toLocaleDateString("en-GB"))
console.log(fecha2.toLocaleDateString("en-US"))

