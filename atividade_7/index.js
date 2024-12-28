// Recuperar a lista do localStorage ou inicializar vazia
const names = JSON.parse(localStorage.getItem('likedNames')) || [];
const input = document.getElementById('name-input');
const likeButton = document.getElementById('like-button');
const clearButton = document.getElementById('clear-button');
const message = document.getElementById('like-message');

// Atualiza o parágrafo de mensagem
function updateMessage() {
    if (names.length === 0) {
        message.textContent = 'Ninguém curtiu';
    } else if (names.length === 1) {
        message.textContent = `${names[0]} curtiu`;
    } else if (names.length === 2) {
        message.textContent = `${names[0]} e ${names[1]} curtiram`;
    } else {
        message.textContent = `${names[0]}, ${names[1]} e mais ${names.length - 2} pessoas curtiram`;
    }
}

// Salva a lista no localStorage
function saveToLocalStorage() {
    localStorage.setItem('likedNames', JSON.stringify(names));
}

// Evento do botão Curtir
likeButton.addEventListener('click', () => {
    const name = input.value.trim();
    if (name && !names.includes(name)) {
        names.push(name);
        saveToLocalStorage();
    }
    updateMessage();
    input.value = '';
});

// Evento do botão Limpar
clearButton.addEventListener('click', () => {
    names.length = 0; // Limpa o array
    saveToLocalStorage();
    updateMessage();
});

// Inicializa a mensagem com os dados do localStorage
updateMessage();