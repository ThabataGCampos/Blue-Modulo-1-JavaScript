const prompt = require('prompt-sync')();
console.clear();

console.log('Uma série de crimes misteriosos estão rondando a cidade... \nUm assassinato em uma escola, incêndio em uma delegacia e agora, para piorar ainda mais, a filha do prefeito está desaparecida. Você é a melhor detetive da região e sua missão é encontrá-la e descobrir o responsável pelos crimes para acabar com a onda de terror que assombra os moradores. ')
console.log();
// perguntas
let pergunta1='Você encontrou a digital na escola? ';
let pergunta2='Viu uma pegada nas cinzas da delegacia? ';
let pergunta3='Desvendou a charada do recado deixado na casa do prefeito? ';
let pergunta4='Encontrou as gravações da câmera de segurança da delegacia? ';
let pergunta5='Perguntou para o prefeito qual é o lugar favorito da filha dele? ';

while(pergunta1 != 'sim' && pergunta1 != 'nao') {
    console.log('Você encontrou a digital na escola? ');
    pergunta1=prompt('Responda com sim ou nao: ');
    console.clear();
};
while(pergunta2 != 'sim' && pergunta2 != 'nao') {
    console.log('Viu uma pegada nas cinzas da delegacia? ');
    pergunta2=prompt('Responda com sim ou nao: ');
    console.clear();
};
while(pergunta3 != 'sim' && pergunta3 != 'nao') {
    console.log('Desvendou a charada do recado deixado na casa do prefeito? ');
    pergunta3=prompt('Responda com sim ou nao: ');
    console.clear();
};
while(pergunta4 != 'sim' && pergunta4 != 'nao') {
    console.log('Encontrou as gravações da câmera de segurança da delegacia? ');
    pergunta4=prompt('Responda com sim ou nao: ');
    console.clear();
};
while(pergunta5 != 'sim' && pergunta5 != 'nao') {
    console.log('Perguntou para o prefeito qual é o lugar favorito da filha dele? ');
    pergunta5=prompt('Responda com sim ou nao: ');
    console.clear();
};

let nivel=0;

if(pergunta1==='sim') {
    nivel++;
};

if(pergunta2==='sim') {
    nivel++;
};

if(pergunta3==='sim') {
    nivel++;
};

if(pergunta4==='sim') {
    nivel++;
};

if(pergunta5==='sim') {
    nivel++;
};

console.log();

if (nivel===0) {
   console.log('Oh, não! Você não encontrou nenhuma pista para solucionar o desaparecimento da filha do prefeito. Ela nunca mais foi vista, sua família irá ficar para sempre no limbo da dúvida e sua carreira agora é questionada. Talvez você não seja a melhor detetive da região. ');
} else if(nivel===1) {
    console.log('Oh, não! Você não encontrou pistas suficientes para solucionar o desaparecimento da filha do prefeito. Ela nunca mais foi vista, sua família irá ficar para sempre no limbo da dúvida e sua carreira agora é questionada. Talvez você não seja a melhor detetive da região.');
} else if(nivel===2 || nivel===3) {
    console.log('Você colheu poucas evidências e não foi o suficiente para descobrir o paradeiro da filha do prefeito e encontrar o criminoso misterioso! Sua carreira agora é questionada.');
} else if(nivel===4) {
    console.log('Você encontrou a filha do prefeito, mas não solucionou os crimes e não descobriu quem está por trás deles. A cidade continua aterrorizada! Talvez você não seja a melhor detetive da região.');
} else if(nivel===5) {
    console.log('Por essa nem o Sherlock Holmes esperava! Você encontrou todas as pistas e solucionou o mistério... A filha do prefeito assassinou um colega de classe e seu pai a ajudou a acobertar o crime, provocando um incêndio na delegacia e a ajudando a fugir para outro lugar! Graças ao seu trabalho, os dois foram presos e a cidade pode descansar.');
};
console.log();