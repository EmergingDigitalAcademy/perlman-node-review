const myName = "blaine";

// Whatever the file ./functions.js exports as `module.exports` will
// "pop out" on this side into the `sayHello` variable. We know module.exports
// is a function (see functions.js) so we can call sayHello() like a function
// Think of it as a global `return` statement for that file
const sayHello = require('./functions.js');

// Loop 5 times, but can override with `node app.js 10`
const howManyTimes = Number(process.argv[2]) || 5;
console.log(`Looping ${howManyTimes} times...`);

for (let i=0; i<howManyTimes; i++) {
    sayHello(myName);
}
