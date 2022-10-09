let participantes = ['Joao', 'Maria', 'Fernando', 'Luiz', 'Helder', 'Jonathan']
let idade = 21
let numeroParticipantes = participantes.length

if (numeroParticipantes < 100){
    console.log("Ainda há vagas disponíveis para o evento!")
}
else{
    console.log("Vagas esgotadas!")
}

if (idade >= 18){
    console.log("Cadastro realizado com sucesso!!!")
}
else{
    console.log("Este evento é destinado para maiores de 18 anos. O cadastro não pôde ser realizado!")
}
