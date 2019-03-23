function enviarDivulgacao() {
    var nome = $("#txtNome").val();
    var telefone = $("#txtTelefone").val();
    var email = $("#txtEmail").val();
    var descricao = $("#txtDescricao").val();

    if (nome === "" || nome === undefined ||
        telefone === "" || telefone === undefined ||
        email === "" || email === undefined ||
        descricao === "" || descricao === undefined) {
        
        alert("Todos os campos são obrigatórios");
    } else {
        alert("Agradecemos a sua divulgação! Entraremos em contato o mais breve possível");
        $("#txtNome").val('');
        $("#txtTelefone").val('');
        $("#txtEmail").val('');
        $("#txtDescricao").val('');
    }
}

function plotGrafico(){
    // Load the Visualization API and the corechart package.
    google.charts.load('current', {'packages':['corechart']});

    // Set a callback to run when the Google Visualization API is loaded.
    google.charts.setOnLoadCallback(drawChart);

    // Callback that creates and populates a data table,
    // instantiates the pie chart, passes in the data and
    // draws it.
    function drawChart() {

      // Create the data table.
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Topping');
      data.addColumn('number', 'Slices');
      data.addRows([
        ['Esporte', 54],
        ['Teatro', 10],
        ['Artes Visuais', 1],
        ['Cinema', 10],
        ['Jogos', 20],
        ['Outras', 5]        
      ]);

      // Set chart options
      var options = {'title':'Eventos sugeridos',
                     'width':400,
                     'height':300};

      // Instantiate and draw our chart, passing in some options.
      var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
      chart.draw(data, options);
    }
}

$(document).ready(function(){
    plotGrafico();
});