const hoy = new Date()

const nacimiento = new Date(1999, 5, 17)

const comparacion = hoy > nacimiento
console.log('comparacion :>> ', comparacion);

const dia = nacimiento.getDate()
const mes = nacimiento.getMonth() + 1
const anyo = nacimiento.getFullYear()

console.log('dia :>> ', dia);
console.log('mes :>> ', mes);
console.log('anyo :>> ', anyo);
