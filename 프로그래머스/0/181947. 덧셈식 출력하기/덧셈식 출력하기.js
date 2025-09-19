const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// let input = [];
let a, b;

rl.on('line', function (line) {
   [a, b]  = line.split(' ').map(Number);
}).on('close', function () {
    //console.log(`${input[0]} + ${input[1]} = ${Number(input[0]) + Number(input[1])}`);
    console.log(`${a} + ${b} = ${a+b}`)
});