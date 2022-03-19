const prompt = require ('prompt-sync')();

const figlet = require ('figlet');

do{
    console.clear();
    console.log(figlet.textSync('Jokenpô', {font: 'Standard',horizontalLayout: 'default',verticalLayout: 'default',width: 90,whitespaceBreak: false}));
    console.log();
    let elementos = ['[1] pedra ', '[2] papel ', '[3] tesoura '];
    let rodadas = +prompt('Escolha quantas rodadas quer jogar: ');
    while (rodadas == 0 || isNaN(rodadas)){  
        console.clear();
        rodadas = +prompt ('Escolha inválida, escolha um número de rodadas maior que 0: '); 
        console.log();
    }
    let player1
    let player1Placar = 0;
    let maquinaPlacar = 0;
    let empate = 0;
    let frases = ["Pedra quebra tesoura", "Papel embrulha pedra", "Tesoura corta papel"]
    for(i=0;i<rodadas;i++){
        var escolhaDaMaquina = Math.floor(Math.random() * 3 + 1) ;
        player1 = prompt(`Digite sua escolha: ${elementos} `);
        console.log(escolhaDaMaquina);
        if (player1 == escolhaDaMaquina){ 
            console.clear();
            empate++;
            console.log(`EMPATE! Você e o computador escolheram ${elementos[player1 -1]} \n\nPlacar: Player1 ${player1Placar} X ${maquinaPlacar} Computador.\n `);
        } else if ((player1 == 1 && escolhaDaMaquina == 2) || (player1 == 2 && escolhaDaMaquina == 3) || (player1 == 3 && escolhaDaMaquina == 1)){
            console.clear();
            maquinaPlacar++;
            console.log(frases [escolhaDaMaquina -1]) 
            console.log(`PERDEU! O computador escolheu ${elementos[escolhaDaMaquina -1]}  \n\nPlacar: Player1 ${player1Placar} X ${maquinaPlacar} Computador.\n `);
        } else if ((player1 == 1 && escolhaDaMaquina == 3) || (player1 == 2 && escolhaDaMaquina == 1) || (player1 == 3 && escolhaDaMaquina == 2)){
            console.clear();
            player1Placar++;
            console.log(frases [player1 -1]) 
            console.log(`GANHOU! O computador escolheu ${elementos[escolhaDaMaquina -1]} \n\nPlacar: Player1 ${player1Placar} X ${maquinaPlacar} Computador.\n `);
        } else {
            console.clear();
            console.log('Escolha inválida, digite 0 ou 1 ou 2: ');
            i--
        }
    }

    console.log()
    if(player1Placar > escolhaDaMaquina){
        console.clear();
        console.log(`VOCÊ GANHOU! \nPlacar: Player1 ${player1Placar} X ${maquinaPlacar} Computador `);
    }   else if(player1Placar < escolhaDaMaquina){
        console.clear();
        console.log(`VOCÊ PERDEU! \nPlacar: Player1 ${player1Placar} X ${maquinaPlacar} Computador `);
    }   else if (player1 == escolhaDaMaquina){
        console.clear();
        console.log(`EMPATE! \nPlacar: Player1 ${player1Placar} X ${maquinaPlacar} Computador `);
    }
console.log();

loop = prompt ('Digite "r" para reiniciar ou qualquer tecla para encerrar o jogo. ').toLowerCase();
} while(loop == "r");