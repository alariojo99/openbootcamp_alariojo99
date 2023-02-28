const nombre = "Alejandro"
const apellido = "Lario"

const estudiante = `${nombre} ${apellido}`

const estudianteMayus = estudiante.toUpperCase()
const estudianteMinus = estudiante.toLowerCase()

const lenEstudiante = estudiante.length

const firstLetterNombre = nombre[0]
const lastLetterApellido = apellido[apellido.length - 1]

// Una cadena de texto que elimine los espacios de la variable "estudiante" - Expresiones Regulares para detectar todos los
const estudianteWithoutBlankSpaces = estudiante.replace(/ /g, "")

// Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
const isNombre = estudiante.includes(nombre)
