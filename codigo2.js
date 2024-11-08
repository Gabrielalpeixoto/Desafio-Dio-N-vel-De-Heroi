let nivel = calcularNivel(3.847)
let nickname = "NomeDoJogador"
console.log("O Herói de nome " + nickname + " está no nível de " + nivel);



function calcularNivel(PontosXP){
    let nivelJogador = ""
    
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
return nivelJogador

}
