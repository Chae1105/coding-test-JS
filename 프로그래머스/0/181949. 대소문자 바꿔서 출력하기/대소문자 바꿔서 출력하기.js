const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

function replaceCase(str) {
    let replaced = "";
    
    for(let i = 0; i < str.length; i++) {
        const char = str[i];
        
        if(char === char.toUpperCase()) {
            replaced += char.toLowerCase();
        } else {
            replaced += char.toUpperCase()
        }
    }
    
    return replaced;
}

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    console.log(replaceCase(str));
});