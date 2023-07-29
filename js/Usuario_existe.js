const form = document.getElementById('cadastroForm');
form.addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const formData = new FormData(form);
    const response = await fetch('/cadastrar', {
        method: 'POST',
        body: formData
    });

    const data = await response.json();
    if (data.error) {
        // Abrir nova janela pop-up com a mensagem de erro
        const errorMessage = data.error;
        window.open('', '_blank').document.write(errorMessage);
    } else {
        alert('Cadastro realizado com sucesso!');
        // Aqui você pode redirecionar para outra página, se necessário.
    }
/*
    const data = await response.json();
    if (data.error) {
        alert(data.error);
    } else {
        alert('Cadastro realizado com sucesso!');
        // Aqui você pode redirecionar para outra página, se necessário.
    }
  */  
});
       
    