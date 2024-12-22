// Array para armazenar os livros no estoque
let estoque = [];

// Função para adicionar um livro ao estoque
function adicionarLivro(titulo, autor, quantidade) {
    // Verifica se o livro já existe no estoque
    const livroExistente = estoque.find(livro => livro.titulo === titulo);
    if (livroExistente) {
        console.log(`O livro "${titulo}" já está no estoque.`);
        return;
    }

    // Adiciona o novo livro ao estoque
    estoque.push({ titulo, autor, quantidade });
    console.log(`Livro "${titulo}" adicionado com sucesso!`);
}

// Função para remover um livro do estoque
function removerLivro(titulo) {
    // Encontra o índice do livro no estoque
    const indice = estoque.findIndex(livro => livro.titulo === titulo);
    if (indice === -1) {
        console.log(`O livro "${titulo}" não foi encontrado no estoque.`);
        return;
    }

    // Remove o livro do estoque
    estoque.splice(indice, 1);
    console.log(`Livro "${titulo}" removido com sucesso!`);
}

// Função para atualizar a quantidade de um livro no estoque
function atualizarQuantidade(titulo, novaQuantidade) {
    // Encontra o livro no estoque
    const livro = estoque.find(livro => livro.titulo === titulo);
    if (!livro) {
        console.log(`O livro "${titulo}" não foi encontrado no estoque.`);
        return;
    }

    // Atualiza a quantidade do livro
    livro.quantidade = novaQuantidade;
    console.log(`Quantidade do livro "${titulo}" atualizada para ${novaQuantidade}.`);
}

// Função para listar todos os livros no estoque
function listarLivros() {
    if (estoque.length === 0) {
        console.log("O estoque está vazio.");
        return;
    }

    console.log("Livros disponíveis no estoque:");
    estoque.forEach(livro => {
        console.log(`Título: ${livro.titulo}, Autor: ${livro.autor}, Quantidade: ${livro.quantidade}`);
    });
}

// Exemplos de uso
adicionarLivro("1984", "George Orwell", 10);
adicionarLivro("O Senhor dos Anéis", "J.R.R. Tolkien", 5);
adicionarLivro("1984", "George Orwell", 3); // Teste para livro já existente
listarLivros();
atualizarQuantidade("1984", 15);
removerLivro("O Senhor dos Anéis");
listarLivros();