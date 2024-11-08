
// Variáveis para armazenar nome, quantidade de XP e nível do herói
let nickname = "NomeDoJogador"  // Alterar nome do Jogador
let PontosXP = 8.856           // Alterar quantidade de XP ganha
let nivelJogador = ""


// Estrutura de decisão para determinar o nível do herói com base na quantidade de XP
if ( PontosXP < 1.000) {
    nivelJogador = "Ferro"
}
else if ( PontosXP >= 1.001 && PontosXP <= 2.000) {
    nivelJogador = "Bronze"
}
else if ( PontosXP >= 2.001 && PontosXP <= 5.000) {
    nivelJogador = "Prata"
}
else if ( PontosXP >= 6.001 && PontosXP <= 7.000) {
    nivelJogador = "Ouro"
}
else if ( PontosXP >= 7.001 && PontosXP <= 8.000) {
    nivelJogador = "Platina"
}
else if ( PontosXP >= 8.001 && PontosXP <= 9.000) {
    nivelJogador = "Ascendente"
}
else if ( PontosXP >= 9.001 && PontosXP <= 10.000) {
    nivelJogador = "Imortal"
}
else if ( PontosXP >= 10.001) {
    nivelJogador = "Radiante"
}

// Mensagem final com o nome do herói e o seu nível
console.log("O Herói de nome " + nickname + " está no nível de " + nivelJogador)
