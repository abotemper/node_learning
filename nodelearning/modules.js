



const names= require("./1-names")
const sayHi = require('./1-modules')
console.log(names)

sayHi('susan')
sayHi(names.tianbo)
sayHi(names.hourong)

const data = require('./6-alternative-favor')

console.log(data)

require('./mind-thing')