//Função para informar odados para imprimir o documento
function imprimirFicha(){
    document.getElementById('registroRecebe').innerHTML = document.getElementById('id_paciente').value;
    document.getElementById('idadeRecebido').innerHTML = calcIdade(); 
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
    document.getElementById('sexoRecebido').innerHTML = document.getElementById('sexo').value;
    document.getElementById('nomeExameRecebido').innerHTML = document.getElementById('nome_exame').value;
    document.getElementById('tipoExameRecebio').innerHTML = document.getElementById('tipo_exame').value;
    document.getElementById('convRecebido').innerHTML = document.getElementById('convenio').value;
    window.print();
}

// Função para mostrar o data Atual
function dataAtual(){
    let data = new Date();
    return data.getDate() +"/"+ (data.getMonth()+1) +"/"+ data.getFullYear();
}


 // Função para calcular a idade
function calcIdade(){

    var dataAtual = new Date()
    var dataNascimento = new Date(document.getElementById('data_nascimento').value)
    

    //Subtração dos anos
    var anos = dataAtual.getFullYear() - dataNascimento.getFullYear()

    //Análise dos meses
    if(dataAtual.getMonth() != dataNascimento.getMonth()){

        //Verificar a diferença nos meses
        if(dataAtual.getMonth() < dataNascimento.getMonth()){
            anos--;
        }
    }
    else{
        //Análise do dia do mês 
        if(dataAtual.getDate() < data_nascimento()){
            anos--;
        }
    }

    let resultadoFinal = ``
    
    return resultadoFinal =  `${anos}  anos`
    
}
