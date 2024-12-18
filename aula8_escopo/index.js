const todoMundoVe = 'Todo mundo ta vendo'; // Variavel de Escopo Global

function executaEscopoGlobal() {
    console.log(todoMundoVe);
};

function executaEscopoLocal() {
    const visivelLocal = 'Apenas pessoas no local estao vendo'; // Variavel de Escopo Local
    console.log(visivelLocal);


    function chamaDentroEscopo() {
        console.log('Dentro do Escopo ->', visivelLocal);
        const dentroDoLocal = false;
        console.log(dentroDoLocal);
    };

    chamaDentroEscopo();
};

executaEscopoGlobal()
executaEscopoLocal()
executaEscopoLocal()