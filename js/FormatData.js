function formatarData() {
    var mysqlDate = document.getElementById('#data_nascimento').value;
    var formattedDate = moment(mysqlDate).format('DD/MM/YYYY');
    console.log(formattedDate);
    // Faça o que desejar com a data formatada
  }