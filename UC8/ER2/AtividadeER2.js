let numeroDeAlunos = 10

for(let contador = 0; contador <= numeroDeAlunos; contador++){

    if (contador == 0){
        //console.log("O número atual é zero")
        console.log(`${contador} - Zero`) //$ vem antes de variáveis
    }
    else if ((contador % 2) == 0){ // % simboliza o resto da divisão, logo, se o resto for igual a zero, o número é par
        console.log(`${contador} - Par`)
    }
    else{
        console.log(`${contador} - Impar`)
    }
}