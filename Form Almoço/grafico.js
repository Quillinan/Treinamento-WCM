
//Definir dataset como uma variável global
var dataset;

// Função para obter os dados do dataset no Fluig
function obterDadosDataset() {
  // Substitua 'DSFormAula' pelo nome do seu dataset no Fluig
  dataset = DatasetFactory.getDataset("DSFormAula", null, null, null);
  var dados = {
    Outback: 0,
    Quentinha: 0,
    "Leve Mix": 0,
    Bistrô: 0,
  };

  // Verificar se o dataset existe antes de prosseguir
  if (dataset && dataset.values) {
    for (var i = 0; i < dataset.values.length; i++) {
      var restauranteSelecionado = dataset.values[i].restaurante;

      // Verificar se o restaurante existe nas opções esperadas
      if (dados.hasOwnProperty(restauranteSelecionado)) {
        // Incrementar o contador para o restaurante selecionado
        dados[restauranteSelecionado]++;
      } else {
        console.log("Restaurante não reconhecido:", restauranteSelecionado);
      }
    }
  } else {
    console.log("Dataset não encontrado ou sem valores.");
  }

  return dados;
}

// Configuração do gráfico
var ctx = document.getElementById("chart").getContext("2d");
var Grafico;

// Função para inicializar e atualizar o gráfico
function inicializarGrafico() {
  var dados = obterDadosDataset();

  // Verificar se há dados antes de criar o gráfico
  if (
    dataset &&
    Object.values(dados).reduce((acc, curr) => acc + curr, 0) > 0
  ) {
    // Destruir o gráfico anterior se existir
    if (Grafico) {
    	Grafico.destroy();
    }

    // Criar um novo gráfico
    Grafico = new Chart(ctx, {
      type: "bar",
      data: {
        labels: Object.keys(dados),
        datasets: [
          {
            label: "Quantidade de Votos",
            data: Object.values(dados),
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  } else {
    // Se não houver dados ou dataset não existe, exibir mensagem
    document.getElementById("info").innerHTML =
      "<p>Sem dados até o momento</p>";
  }
}

// Chamar a função para inicializar o gráfico ao carregar a página
inicializarGrafico();