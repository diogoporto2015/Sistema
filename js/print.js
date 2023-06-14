function imprimirFicha(){
    document.getElementById('dataRecebe').innerHTML = dataAtual();
    document.getElementById('nomeRecebido').innerHTML =document.getElementById('nome').value;
    document.getElementById('cpfRecebido').innerHTML =document.getElementById('cpf').value;
    document.getElementById('nascRecebido').innerHTML =document.getElementById('nasc').value;
    document.getElementById('endRecebido').innerHTML =document.getElementById('end').value;
    document.getElementById('telRecebido').innerHTML =document.getElementById('tel').value;
    document.getElementById('nomeExameRecebido').innerHTML =document.getElementById('nomeExame').value;
    document.getElementById('tipoExameRecebio').innerHTML =document.getElementById('tipoExame').value;
    document.getElementById('convRecebido').innerHTML =document.getElementById('conv').value;
    window.print();
}


function dataAtual(){
    let data = new Date();
    return data.getDate() +"/"+ (data.getMonth()+1) +"/"+ data.getFullYear();
}


    