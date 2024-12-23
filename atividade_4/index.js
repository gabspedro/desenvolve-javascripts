// Função para calcular o tempo restante até uma data futura
function calcularTempoRestante(dataFutura) {
    const agora = new Date();
    const diferenca = dataFutura - agora;

    if (diferenca <= 0) {
        return {
            dias: 0,
            horas: 0,
            minutos: 0,
            segundos: 0
        };
    }

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    return { dias, horas, minutos, segundos };
}

// Função para atualizar o temporizador na tela
function atualizarTemporizador(dataFutura) {
    const { dias, horas, minutos, segundos } = calcularTempoRestante(dataFutura);

    // Atualiza o conteúdo no DOM
    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent = horas;
    document.getElementById("minutos").textContent = minutos;
    document.getElementById("segundos").textContent = segundos;

    if (dias === 0 && horas === 0 && minutos === 0 && segundos === 0) {
        clearInterval(intervalo);
        document.getElementById("mensagem").textContent = "A contagem regressiva terminou!";
    }
}

// Configura o temporizador
const dataFutura = new Date("2024-12-31T23:59:59");

// Atualiza o temporizador a cada segundo
const intervalo = setInterval(() => {
    atualizarTemporizador(dataFutura);
}, 1000);

// HTML básico para exibir o temporizador (insira no arquivo HTML):
/*
<div>
    <p>Faltam:</p>
    <p id="dias">0</p> dias
    <p id="horas">0</p> horas
    <p id="minutos">0</p> minutos
    <p id="segundos">0</p> segundos
    <p id="mensagem"></p>
</div>
*/