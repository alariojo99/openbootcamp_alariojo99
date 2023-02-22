
const winston = require('winston');

const logger = winston.createLogger({
  level: 'error',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    new winston.transports.File({ filename: 'error.log' }),
  ],
});


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
    logger.log("error", e.toString())
}