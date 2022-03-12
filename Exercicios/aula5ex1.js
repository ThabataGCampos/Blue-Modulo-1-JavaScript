const prompt = require('prompt-sync')();
console.clear();

let usuario = prompt ('Digite o usuario: ')
let senha = prompt ('Digite sua senha ')

while(usuario == senha) {
console.log('Senha não pode ser igual do usuario ')
let usuario = prompt ('Digite o usuario: ')
let senha = prompt ('Digite sua senha ')
}
