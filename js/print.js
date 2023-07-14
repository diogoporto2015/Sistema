function imprimirFicha(){
    document.getElementById('dataRecebe').innerHTML = dataAtual();
    document.getElementById('nomeRecebido').innerHTML = document.getElementById('nome').value;
    document.getElementById('cpfRecebido').innerHTML = document.getElementById('cpf').value;
    document.getElementById('nascRecebido').innerHTML= document.getElementById('data_nascimento').value;
    document.getElementById('endRecebido').innerHTML = document.getElementById('endereco').value;
    document.getElementById('numRecebido').innerHTML = document.getElementById('numero').value;
    document.getElementById('bairroRecebido').innerHTML = document.getElementById('bairro').value;
    document.getElementById('cidadeRecebido').innerHTML = document.getElementById('cidade').value;
    document.getElementById('estadoRecebido').innerHTML = document.getElementById('estado').value;
    document.getElementById('telRecebido').innerHTML = document.getElementById('telefone').value;
    document.getElementById('celRecebido').innerHTML = document.getElementById('celular').value;
    document.getElementById('nomeExameRecebido').innerHTML = document.getElementById('nome_exame').value;
    document.getElementById('tipoExameRecebio').innerHTML = document.getElementById('tipo_exame').value;
    document.getElementById('convRecebido').innerHTML = document.getElementById('convenio').value;
    window.print();
}


function dataAtual(){
    let data = new Date();
    return data.getDate() +"/"+ (data.getMonth()+1) +"/"+ data.getFullYear();
}


    