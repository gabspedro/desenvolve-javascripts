const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');
const results = document.getElementById('results');

searchButton.addEventListener('click', async () => {
const query = searchInput.value.trim();
if (!query) {
    results.innerHTML = '<p class="error">Por favor, digite um nome de usuário para buscar.</p>';
    return;
}

results.innerHTML = '<p>Carregando...</p>';

try {
    const response = await fetch(`https://api.github.com/search/users?q=${query}`);
    if (!response.ok) {
        throw new Error('Erro ao buscar usuários.');
    }

    const data = await response.json();

    if (data.items.length === 0) {
        results.innerHTML = '<p class="error">Não foram encontrados usuários para esta pesquisa.</p>';
    } else {
        results.innerHTML = '';
        data.items.forEach(user => {
            const userDiv = document.createElement('div');
            userDiv.className = 'user';

            userDiv.innerHTML = `
                <img src="${user.avatar_url}" alt="Avatar" width="50" height="50">
                <a href="${user.html_url}" target="_blank">${user.login}</a>
            `;

            results.appendChild(userDiv);
        });
    }
} catch (error) {
    results.innerHTML = `<p class="error">Erro: ${error.message}</p>`;
} });