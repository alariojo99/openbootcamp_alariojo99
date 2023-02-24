import * as controller from './modules/controller.js'
import chalk from 'chalk'



const resultado = controller.multiplica(controller.suma(1,2),controller.suma(4,5))
console.log(chalk.green('resultado :>> ', resultado));