const mario = {
    NOME: "Mario",
    VELOCIDADE: 4,
    MANOBRABILIDADE: 3,
    PODER: 3,
    PONTOS: 0,
};
const peach = {
    NOME: "Peach",
    VELOCIDADE: 3,
    MANOBRABILIDADE: 4,
    PODER: 2,
    PONTOS: 0,
};
const yoshi = {
    NOME: "Yoshi",
    VELOCIDADE: 2,
    MANOBRABILIDADE: 4,
    PODER: 3,
    PONTOS: 0,
};
const bowser = {
    NOME: "Bowser",
    VELOCIDADE: 5,
    MANOBRABILIDADE: 2,
    PODER: 5,
    PONTOS: 0,
};
const Luigi = {
    NOME: "Luigi",
    VELOCIDADE: 3,
    MANOBRABILIDADE: 4,
    PODER: 4,
    PONTOS: 0,
};
const donkey_kong = {
    NOME: "Donkey Kong",
    VELOCIDADE: 2,
    MANOBRABILIDADE: 2,
    PODER: 5,
    PONTOS: 0,
};

async function rollDice(){
    return Math.floor(Math.random() * 6) + 1;

};

async function logRollResult(characterName, block,diceResult, attribute){
    
    console.log(`${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${diceResult + attribute}`);
};

async function playRaceEngine(character1, character2){
    for (let round = 1; round <= 5; round++ ){
        console.log(`🏁 Rodada ${round}`);

        // Sortear blocos
        let block = await getRandomBlock();
        console.log(`Bloco: ${block}`)
        
        // Rolar dados
        let diceResult1 = await rollDice();
        let diceResult2 = await rollDice();

        // teste de habilidade
        let totalTestSkill1 = 0;
        let totalTestSkill2 = 0;

        if (block === "RETA"){
            totalTestSkill1 = diceResult1 + character1.VELOCIDADE;
            totalTestSkill2 = diceResult2 + character2.VELOCIDADE;

            await logRollResult (
                character1.NOME, 
                "velociade",
                 diceResult1,
                  character1.VELOCIDADE
            );
            await logRollResult (
                character2.NOME, 
                "velociade",
                 diceResult2,
                  character2.VELOCIDADE
            );


        }

        if (block === "CURVA"){
            totalTestSkill1 = diceResult1 + character1.MANOBRABILIDADE;
            totalTestSkill2 = diceResult2 + character2.MANOBRABILIDADE;

            await logRollResult (
                character1.NOME, 
                "manobrabilidade",
                 diceResult1,
                  character1.MANOBRABILIDADE
            );
            await logRollResult (
                character2.NOME, 
                "manobrabilidade",
                 diceResult2,
                  character2.MANOBRABILIDADE
            );
        }

        if (block === "CONFRONTO"){
            let powerResult1 = diceResult1 + character1.PODER;
            let powerResult2 = diceResult2 + character2.PODER;

            console.log(`${character1.NOME} confrontou ${character2.NOME} ! 🥊`);

            await logRollResult (
                character1.NOME, 
                "poder",
                 diceResult1,
                  character1.PODER
            );
            await logRollResult (
                character2.NOME, 
                "poder",
                 diceResult2,
                  character2.PODER
            );

            if (powerResult1 > powerResult2 && character2.PONTOS > 0){
                console.log(`${character1.NOME} venceu o confronto!
                 ${character2.NOME} perdeu 1 ponto 💣`);
                character2.PONTOS--;
            };

            if( powerResult2 > powerResult1 && character1.PONTOS > 0){
                console.log(`${character2.NOME} venceu o confronto! ${character1.NOME} perdeu 1 ponto 💣`);
                character1.PONTOS--;
            };

            if (powerResult1 === powerResult2){
                console.log("Confonto empatado! Nenhum ponto foi perdido");
            };

        }

        // verificar o vencedor

        if (totalTestSkill1 > totalTestSkill2){
            console.log(`${character1.NOME} marcou um ponto!`);
            character1.PONTOS++;
        } else if(totalTestSkill2 > totalTestSkill1){
            console.log(`${character2.NOME} marcou ponto!`);
            character2.PONTOS++;
        };

        console.log("--------------------------------------------------");

    };

};

async function getRandomBlock(){
    let random = Math.random();
    let result 

    switch(true){
        case random < 0.33:
            result = "RETA";
            break;
        case random <0.66:
            result = "CURVA";
            break;
        default: 
            result = "CONFRONTO";
    }

    return result
}

async function declareWinner(character1, character2){
    console.log("Resultado final: ");
    console.log(`${character1.NOME}: ${character1.PONTOS} pontos`);
    console.log(`${character2.NOME}: ${character2.PONTOS} pontos`);

    if(character1.PONTOS > character2.PONTOS){
        console.log(`\n ${character1.NOME} venceu a corrida! Parabéns! 🏆`);
    } else if(character2.PONTOS > character1.PONTOS){
        console.log(`\n ${character2.NOME} venceu a corrida! Parabéns! 🏆 `);
    } else{
        console.log("A corrida terminou empatada ");
    };
}

(async function main(){
    console.log(`🏁🚨 Corrida entre ${mario.NOME} e ${yoshi.NOME} começando...\n `);

    await playRaceEngine(mario, yoshi);
    await declareWinner(mario,yoshi);
    
})();


