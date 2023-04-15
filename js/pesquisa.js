const form = document.querySelector('#search-form');
const searchTerm = document.querySelector('#search-term');
const resultsContainer = document.querySelector('#results-container');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  // verifica se o valor da barra de pesquisa não está vazio
  if (searchTerm.value.trim() !== '') {
    fetch(`/search?searchTerm=${searchTerm.value}`)
      .then(response => response.json())
      .then(data => {
        if (data.length === 0) {
          resultsContainer.innerHTML = '<p>Usuário não encontrado.</p>';
        } else {
          let html = '';
          data.forEach(result => {
            // cria um HTML para cada registro encontrado
            html += `
              <div>
                <h2>${result.nome}</h2>
                <p>${result.descricao}</p>
              </div>
            `;
          });
          resultsContainer.innerHTML = html;
        }
      })
      .catch(error => console.error(error));
  } else {
    // exibe uma mensagem de erro se o valor da barra de pesquisa estiver vazio
    resultsContainer.innerHTML = '<p>Por favor, digite algo na barra de pesquisa.</p>';
  }
});