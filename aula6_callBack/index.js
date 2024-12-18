function chamaPrimeiro() {
    console.log('Essa primeiro');
};

function chamaSegundo() {
    console.log('Segunda')
    chamaPrimeiro();
}

function recebePrimeiro(primeiraFuncao) {
    primeiraFuncao();
}

recebePrimeiro(chamaDepois)