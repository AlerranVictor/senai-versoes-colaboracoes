let listaDePecas = ['Filtro de ar', 'Roda', 'Pneu']

listaDePecas.push('Disco de freio')
listaDePecas.push('Motor')
listaDePecas.push('Amortecedor')

if (listaDePecas.length < 10){
    console.log("É possível cadastrar mais peças!")
}
else{
    console.log("Não há mais espaço na caixa")
}

let peso = 150
if (peso < 100){
    console.log("A peça deve pesar no mínimo 100g")
}
else{
    console.log("A peça possui o peso adequado")
}


let nomePeca = "Disco de Freio"

switch (nomePeca) {
    case 0:
        console.log("O nome da peça não pode estar vazio")
    case 1:
    case 2:
    case 3:
        console.log("O nome da peça deve conter mais de três caracteres! Digite um nome adequado")
        break;
    default:
        console.log("O nome da peça está adequado para o cadastro")
        break;
}

/*if (nomePeca.length > 3){
    console.log("O nome da peça está adequado para o cadastro")
}
else if (nomePeca.length == 0){
    console.log("O nome da peça não pode estar vazio")
}
else{
    console.log("O nome da peça deve conter mais de três caracteres! Digite o nome adequado")
}
*/