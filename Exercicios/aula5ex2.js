const prompt = require('prompt-sync')();
console.clear();

do {
    while(true) {
        nome = prompt('Digite seu nome:')
        nomeContador = nome.length;
        if(nomeContador < 3){
            console.log('Nome invalido, digite um nome com mais de três caracteres ');
            continue
        } else{
            break;
        }
    }  
    
    while(true) {
        idade = prompt('digite sua idade: ')
        if( idade <= 0 || idade >= 150) {
            console.log('Idade inválida. Digite idade entre 0 e 150: ');
            continue
        } else{
            break;    
        }
    }
 
    while(true) {
        salario = prompt('digite seu salário: ')
        if(salario <= 0) {
            console.log('Digite um valor maior que zero. ')
            continue
        } else {
            break;
        }
    }
    while(true) {
        estadoCivil = prompt('Digite seu Estado civil: s para solteiro; c para casado; v para viuvo; d para divorciado ')
        if(estadoCivil != 's' && estadoCivil != 'c' && estadoCivil != 'v' && estadoCivil != 'd') {
            console.log('Digite: s para solteiro; c para casado; v para viuvo; d para divorciado. ')
            continue
        } else {
            break;
        }
    }
    console.log(`\nNome: ${nome} idade: ${idade} salario: ${salario} Estado Civil: ${estadoCivil} `)
    looping=prompt ('digite r para reiniciar ou qualquer tecla para finalizar. ')
} while(looping == 'r' || looping == 'R')

console.clear();