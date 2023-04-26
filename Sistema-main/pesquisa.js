// No arquivo JavaScript
const idInput = document.getElementById("idInput");
const nomeInput = document.getElementById("nomeInput");
const emailInput = document.getElementById("emailInput");
const telefoneInput = document.getElementById("telefoneInput");

if (q && registros && registros.length > 0) {
  // Se encontrou registros na busca, preenche os inputs com os dados
  const primeiroRegistro = registros[0];
  idInput.value = Registro.id;
  nomeInput.value = Registro.nome;
  emailInput.value = Registro.email;
  telefoneInput.value = Registro.telefone;
} else {
  // Se não encontrou registros, limpa os valores dos inputs
  idInput.value = "";
  nomeInput.value = "";
  emailInput.value = "";
  telefoneInput.value = "";
}
