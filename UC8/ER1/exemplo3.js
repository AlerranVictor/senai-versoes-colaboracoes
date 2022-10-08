//sistema para um radar de velocidade

//variaveis
let velocidade;

//entrada
velocidade = 111;

//processamento / saida
if (velocidade > 110){
    console.log("Voce foi multado!!!")
}
else if(velocidade > 100 && velocidade < 110){
    console.log("Voce esta sendo notificado por andar acima do limite")
}
else{
    console.log("Voce esta dentro do limite de velocidade")
}
