const btnBuscar = document.getElementById('btn-buscar');

btnBuscar.addEventListener('click', () => {
  const nome = document.getElementsByName('nome')[0].value;
  const email = document.getElementsByName('email')[0].value;

  fetch(`/buscar?nome=${nome}&email=${email}`)
    .then(response => response.json())
    .then(results => {
      const listaResultados = document.getElementById('lista-resultados');
      listaResultados.innerHTML = '';

      for (let i = 0; i < results.length; i++) {
        const li = document.createElement('li');
        li.innerHTML = `
          <p>Nome: ${results[i].nome}</p>
          <p>E-mail: ${results[i].email}</p>
        `;
        listaResultados.appendChild(li);
      }

      listaResultados.style.display = 'block';
    })
    .catch(error => console.error(error));
});

