

// GLOBALS  - NO WINDOW !!!!

// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed
//setinterval 会一直执行， settimeout 只在时间到了执行一次
console.log(__dirname)
setInterval(() => {
  console.log('hello world')
}, 1000)