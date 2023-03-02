localStorage.setItem('nombre', 'Alejandro')
const name = localStorage.getItem('nombre')


////Guardar objetos en LocalStorage:

//Así NO
localStorage.setItem("persona", {nombre:'Alejandro', edad:23})
const persona = localStorage.getItem("persona")
console.log('persona :>> ', persona) 

//Así SÍ
localStorage.setItem("persona2", JSON.stringify({nombre:"Albert", edad: 20})) //Guardas el objeto como una string

console.log(localStorage.getItem("persona2")) //Si lo pasas así te devuelve la string

console.log(JSON.parse(localStorage.getItem("persona2"))) //Si lo pasas así te lo convierte en objeto

localStorage.removeItem("persona")

/* SessionStorage -> El mateix que amb Local Storage, però no es guarda en totes les pestanyes */

sessionStorage.setItem("nombre", "Alejandro")

/* COOKIES */
document.cookie = "nombreCookie=AlejandroCookie; expires=" + new Date(2023,2,4)

console.log('Las cookies: ' + document.cookie)