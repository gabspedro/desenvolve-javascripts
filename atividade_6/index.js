const names = [];
const input = document.getElementById('name-input');
const button = document.getElementById('like-button');
const message = document.getElementById('like-message');

button.addEventListener('click', () => {
    const name = input.value.trim();
    if (name && !names.includes(name)) {
        names.push(name);
    }
    updateMessage();
    input.value = '';
});

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