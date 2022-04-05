const prompt = require("prompt-sync")();
const colors = require("colors");
console.clear();

console.log(`⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡴⢦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡴⠋⠀⠀⠙⢦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡴⠋⠀⠀⠀⠀⠀⠀⠙⢦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡴⠋⢰⣾⣿⡆⠀⠀⠀⠀⠀⢀⠙⢦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡴⠋⠀⠀⠈⠉⣹⣷⣿⣷⣶⣴⠞⢹⠛⣶⠙⢦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡴⠋⠀⠀⠀⠀⠀⢠⣿⣿⣿⣿⠓⠛⠀⠀⠀⠀⠀⠀⠙⢦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⠛⠁⠀⠀⠀⢰⡶⠖⢿⠟⢙⣿⣉⠀⠀⠀⠀⢀⢰⡆⠀⠀⠀⠙⢦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⠁⠀⠀⠀⠀⠀⠟⠁⠀⠈⠀⣿⣿⣿⠀⠀⠀⢐⣿⣿⡄⠀⠀⠀⠀⠀⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⢹⡏⠀⠀⠀⢰⣿⣿⡇⠀⠀⠀⠀⠀⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⡇⢸⡇⠀⠀⠀⢸⣿⣯⠀⠀⠀⠀⠀⠀⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠀⠐⠒⠒⠒⠒⠒⠒⠂⠀⣿⡅⠘⣿⡆⠀⠀⢸⠗⢻⣒⠒⠒⠒⠂⠀⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⠇⠀⠀⣷⡀⠀⠈⠁⠀⠀⠀⠀⠀⠀⠀⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠀⠘⠛⠛⠛⠛⠛⠛⢻⣿⠟⠛⠛⣿⡿⠛⠛⠛⠛⠛⠛⠛⠛⠛⠃⠀⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⠦⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠴⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⢰⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⡆⠀
⠀⢸⠀⠀⠀⠀⠀⠀⠀⢠⠤⢤⡀⢠⠤⠤⠀⢀⣤⠀⢠⡤⢤⡀⠀⠀⠤⠤⡤⢀⡤⢤⡀⣤⡀⠀⡄⢠⠤⠤⠄⠀⠀⠀⠀⠀⠀ ⡇⠀
⠀⢸⠀⠀⠀⠀⠀⠀⠀⢸⠀⠈⡇⢸⠤⠤⠀⣼⣹⡆⢸⡇⠀⣿⠀⠀⢀⡼⠁⢸⠀⠀⡇⣿⠻⡄⡇⢸⠤⠤⠀⠀⠀⠀⠀⠀⠀ ⡇⠀
⠀⢸⠀⠀⠀⠀⠀⠀⠀⠸⠤⠞⠃⠸⠤⠤⠰⠏⠉⠹⠸⠧⠴⠋⠀⠀⠾⠤⠤⠘⠦⠜⠃⠻⠀⠙⠇⠸⠤⠤⠄⠀⠀⠀⠀⠀⠀ ⡇⠀
⠀⠸⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠇`);
prompt("Tecle ENTER para começar. ".bgRed);
console.clear();

let player = {
  nome: "player",
  fome: 50,
  saude: 80,
  hidratacao: 50,
  madeira: 0,
  gasolina: 0,
};

function display() {
  console.log(`Nome: ${player.nome} | Fome: ${player.fome} | Saúde: ${player.saude} | Hidratação: ${player.hidratacao} | Madeira: ${player.madeira} | Gasolina: ${player.gasolina} `.yellow);
  console.log();
}

let tempo = {
  dia: 1,
  periodos: ["manhã", "tarde", "noite"],
  periodoatual: 0,
  avancatempo: function () {
    this.periodoatual++;
  },
  zeratempo: function () {
    this.periodoatual = 0;
  },
};

// Para parar o jogo caso um dos status zerarem
function status(player) {
  if (player.saude < 1 || player.fome < 1 || player.hidratacao < 1) {
    console.log(`${player.nome} um dos seus status vitais zeraram, você morreu. Fim de jogo.`);
    prompt("Tecle enter para continuar. ".red);
    process.exit();
  }
}

player.nome = prompt("Qual o seu nome? ");
let genero = prompt("Com qual pronome você se identifica? [1] ele/dele [2] ela/dela [3] elu/delu. ");
console.clear();
let oae = "";
// para a alteração de genero em algumas palavras
if (genero == "1") {
  oae = "o";
} else if (genero == "2") {
  oae = "a";
} else if (genero == "3") {
  oae = "e";
}
while (genero > 3 || genero == 0 || isNaN(genero)) {
  console.log("Escolha inválida. Escolha: [1] ele/dele [2] ela/dela [3] elu/delu. ");
  genero = +prompt();
  console.log();
}

console.log(`O lugar em que você mora é afastado das cidades grandes, cercado por uma floresta, que, atualmente, é de onde você costuma tirar alguns suprimentos. Os recursos se tornaram escassos, os ataques mais frequentes e está cada vez mais difícil sobreviver.
\nVocê mora sozinh${oae} em uma casa precária. Ordas de zumbis por vezes atacam sua propriedade, deixando buracos nas cercas e paredes. Seu taco de basebol favorito foi coberto com pregos e estilhaços e serve para te proteger quando está dentro e fora de casa. 
\nHá algumas semanas, seu velho rádio a pilha captou um sinal de outros sobreviventes. Eles anunciaram que possuem abrigo, comida e água em uma cidade próxima. Agora, sua última esperança é encontrar gasolina para encontrar essa zona segura. Você possui uma moto que pretende usar para fazer a viagem, mas ainda não possui gasolina suficiente para isso. Sua rotina se repete e sua agonia aumenta... Todos os dias parecem o mesmo: acordar, caçar, buscar, água, procurar gasolina... Mas você prometeu que irá encontrar um lugar melhor. `);
console.log();
prompt("Tecle ENTER para continuar. ".bgRed);

// Variável para contar a madeira
let dias = 0;
//O jogo roda até o for ser true, se encontrar a gasolina, acaba
for (; player.gasolina === 0;) {
  console.clear();
  //ALEATÓRIO
  const aleat = () => Math.floor(Math.random() * 3 + 1);
  const aleatgas = () => Math.floor(Math.random() * 4 + 1);
  //aleatório zumbis
  let aleatorio = aleat();
  //aleatório gasolina
  let aleatoriogas = aleatgas();

  function floresta() {
    console.clear();
    display();
    console.log(`Dia: ${tempo.dia}, ${tempo.periodos[tempo.periodoatual]}. ${player.nome} Você precisa ir explorar a floresta para adquirir recursos, você deseja: [1] Buscar comida [2] Pegar água [3] Cortar madeira. `);
    action = +prompt();
    while (action > 3 || action == 0 || isNaN(action)) {
      console.log("Escolha inválida. Escolha: [1] Buscar comida [2] Pegar água [3] Cortar madeira ");
      action = +prompt();
      console.clear();
    }
    if (action == 1) {
      console.clear();
      action = +prompt("Buscar comida: [1]Caçar [2] Colher frutas. ");
      console.clear();
      while (action > 2 || action == 0 || isNaN(action)) {
        console.log("Escolha inválida. Escolha: [1]Caçar [2] Colher frutas. ");
        action = +prompt();
        console.clear();
      }
      if (action == 1) {
        console.log(`Um filhote de cervo atravessou seu caminho. Você o caçou e o levou para casa em suas costas, pois estava muito pesado e poderia te atrasar, em vez disso, você tirou uma parte da carne e deixou o resto na floresta. \nVocê encontrou um ninho em uma árvore próxima, os ovos irão servir para fazer algumas receitas. `);
        prompt("Tecle enter para continuar. ".red);
        console.clear();
        player.fome += 35;
        player.saude += 5;
        aleatorio = aleat();
        if (aleatorio == 3) {
          console.log("Você começou a escutar sons estranhos atrás dos arbustos e de repente se depara com um zumbi. Ele te agarra, o que faz você tropeçar e cair no chão. Após uma breve luta, você consegue empurra-lo para longe, o que dá a você tempo para pegar seu taco que está preso em suas costas e atingir a criatura na cabeça.  ");
          prompt("Tecle enter para continuar. ".red);
          player.saude -= 35;
          player.hidratacao -= 20;
          player.fome -= 20;
        }
      } else if (action == 2) {
        console.log(`Você encontrou amoras e colhe algumas. Os pêssegos parecem suculentos, você colhe alguns para fazer suco. `);
        prompt("Tecle enter para continuar. ".red);
        console.clear();
        player.fome += 25;
        player.hidratacao += 10;
        player.saude += 5;
        aleatorio = aleat();
        if (aleatorio == 3) {
          console.log("Durante sua colheita, você percebe pegadas próximas a plantação. Zumbis parecem estar por perto, e para que não estraguem suas frutas, você vai atrás deles segurando o seu taco. Eles acabam escutando seus passos e correm até você, são apenas dois zumbis, mas o susto faz com que você se esconda nós arbustos e se machuque com os galhos afiados. Você espera eles se separarem e vai corre até o primeiro, o acertando rapidamente na cabeça e depois faz o mesmo com o segundo.  ");
          prompt("Tecle enter para continuar. ".red);
          console.clear();
          player.saude -= 35;
          player.hidratacao -= 20;
          player.fome -= 20;
        }
      }
    } else if (action == 2) {
      console.clear();
      console.log(`Você foi até o poço improvisado e pegou um pouco de água. `);
      prompt("Tecle enter para continuar. ".red);
      player.hidratacao += 30;
      player.saude += 5;
      aleatorio = aleat();
      if (aleatorio == 3) {
        console.clear();
        console.log("Com o barulho da água, você não escutou um zumbi se aproximando por trás de você. Ele quase consegue arranhar o seu braço, mas você se abaixa e rapidamente pega uma pedra grande e o acerta na cabeça. ");
        prompt("Tecle enter para continuar. ".red);
        player.saude -= 35;
        player.hidratacao -= 20;
        player.fome -= 20;
      }
    } else if (action == 3) {
      console.clear();
      console.log(`Você pegou seu machado para coletar madeira. Os pedaços menores servem para acender sua fogueira e os maiores para fazer melhorias na casa e deixa-la mais segura contra zumbis. `);
      prompt("Tecle enter para continuar. ".red);
      player.madeira += 25;
      player.fome -= 15;
      player.saude -= 15;
      player.hidratacao -= 15;
      aleatorio = aleat();
      if (aleatorio == 3) {
        console.clear();
        console.log("O barulho do seu machado contra a madeira atraiu muitos zumbis, você teve que lutar contra alguns e correr de volta para casa. Por sorte, saiu com vida da floresta. ");
        prompt("Tecle enter para continuar. ".red);
        player.saude -= 35;
        player.hidratacao -= 20;
        player.fome -= 20;
      }
    }
  }
  //para zerar toda vez que um novo dia começar
  tempo.zeratempo();
  // Chamar a função para explorar a floresta 1ª vez
  floresta();
  console.clear();
  status(player);
  tempo.avancatempo();
  // Chamar a função para explorar a floresta 2ª vez
  floresta();
  console.clear();
  status(player);
  display();
  //Para explorar a cidade
  console.log(`Dia: ${tempo.dia}, ${tempo.periodos[tempo.periodoatual]}. ${player.nome}, onde vai explorar pela cidade? [1] Explorar casas abandonadas, [2] Lojas abandonadas `);
  action2 = +prompt(" ");
  while (action2 > 2 || action2 == 0 || isNaN(action2)) {
    console.log("Escolha inválida. Escolha: [1] Explorar casas abandonadas, [2] Lojas abandonadas. ");
    action2 = +prompt();
    console.log;
  }
  if (action2 == 1) {
    console.clear();
    player.fome += 20;
    player.hidratacao += 20;
    player.saude += 10;
    console.log("Você explorou uma casa abandonada e encontrou remédios e barras de cereal.  ");
    prompt("Tecle enter para continuar. ".red);
    aleatorio = aleat();
    if (aleatorio == 3) {
      console.clear();
      console.log("Um dos quartos da casa estava com a porta fechada e ao abri-la, uma família de zumbis saiu de lá. Você precisou correr da frente para a porta principal e tranca-la, isso evitou uma mordida, mas você acabou se machucando no caminho. ");
      prompt("Tecle enter para continuar. ".red);
      player.saude -= 35;
      player.hidratacao -= 20;
      player.fome -= 20;
    }
  } else if (action2 == 2) {
    console.clear();
    player.fome += 20;
    player.hidratacao += 20;
    player.saude += 5;
    console.log();
    console.log("Você explorou uma loja e encontrou comida enlatada.  ");
    prompt("Tecle enter para continuar. ".red);
    aleatorio = aleat();
    aleatoriogas = aleatgas();
    if (aleatorio == 3) {
      console.clear();
      console.log("Um zumbi veio correndo até você quando tentou sair da loja, você precisou empurra-lo para trás e acerta-lo com seu taco. ");
      prompt("Tecle enter para continuar. ".red);
      console.log();
      player.saude -= 35;
      player.hidratacao -= 20;
      player.fome -= 20;
    }
    if (aleatoriogas == 3) {
      console.clear();
      console.log(`Quando você estava saindo da loja encontrou um galão de gasolina, que por sua sorte estava cheio e agora finalmente tem uma chance de sair da cidade. Você vai para casa, empacota seus bens mais importantes, suprimentos que pode precisar durante a viagem e sai rumo a Orizon. 
            \nQuando chega lá, se depara com algo melhor do que poderia ter imaginado. A cidade é protegida por grandes muros e conta com vários sobreviventes que te acolhem. Finalmente ${player.nome}! Você se sente segur${oae}. `);
      console.log();
            process.exit();
    }
  }

  tempo.avancatempo();
  console.clear();
  display();
  console.log(`Dia: ${tempo.dia}, ${tempo.periodos[tempo.periodoatual]}. Começou a anoitecer, permanecer fora de casa pode ser bem perigoso, voltando para a casa.. `);
  console.log();

  if (player.madeira < 99) {
    dias++;
    console.log(`Sua casa irá se deteriorar em ${5 - dias} dia(s), não deixe de recolher madeira para fazer a manutenção da casa. `.yellow);
    console.log();
  } else if (player.madeira >= 100) {
    dias = 0;
    player.madeira = 0;
    console.log(`Conseguiu a quantidade de madeiras necessárias para o reparo da casa, você está segur${oae} por enquanto. `.yellow);
    console.log();
  }
  //Se a cada 5 dias não seguir com o reparo da casa, ocorre a invasão
  if (dias >= 5) {
    console.clear();
    console.log("Você estava dormindo quando escutou grunhidos e barulhos de madeira se partindo. Mal teve tempo de se arrepender por não ter feito melhorias nas paredes antes dos zumbis invadirem a casa e te atacarem. Eram muitos zumbis e seu taco de basebol não foi suficiente para controla-los. Fim de jogo. ");
    console.log();
    process.exit();
  }
  status(player);
  console.log(`Fim do dia ${tempo.dia}. `);
  prompt("Tecle enter para continuar. ".red);

  player.saude += 30;
  player.fome -= 20;
  player.hidratacao -= 20;
  //contador de dias
  tempo.dia++;
}