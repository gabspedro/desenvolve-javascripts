// Mudar o texto do título
const title = document.getElementById('main-title');
title.textContent = 'Novo Título';

// Alterar o estilo dos itens da lista
const listItems = document.querySelectorAll('#item-list li');
    listItems.forEach(item => {
        item.style.color = 'blue';
        item.style.fontSize = '20px';
    });

// Adicionar uma classe a todos os parágrafos
const paragraphs = document.querySelectorAll('p');
    paragraphs.forEach(paragraph => {
        paragraph.classList.add('highlight');
    });

// Alterar o texto do botão
const button = document.getElementById('action-button');
    button.textContent = 'Botão Atualizado';