// commonjs, every file is module (by default)
//modules - encapsulated code (only share minimum)

const sayHi = (name) => {
    console.log(`hellp there ${name}`)
}

module.exports = sayHi