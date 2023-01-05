const moment = require('moment')

const fechaActual = moment()
const fechaNacimiento = moment('1988-12-01','YYYY-MM-DD')
console.log(fechaActual.format(),fechaNacimiento.format())
if(fechaNacimiento.isValid()){
    console.log(`Desde el nacimiento han pasado ${fechaActual.diff(fechaNacimiento,'days')} `)
}