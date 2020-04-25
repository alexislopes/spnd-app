<template>
  <div class="home">
    <div></div>
    <div v-if="informe != null" class="dashboard">
      <h1 class="title">Informe Coronavirus São José dos Campos</h1>
      <h1>{{ informe[0].timestamp | formatData }}</h1>
      <div class="dados-totais">
        <div class="card">
          <p class="card-title">Suspeitos</p>
          <div class="dados">
            <p class="dado">{{ informe[0].casos_suspeitos }}</p>
            <p class="diferenca">
              {{ modulate(diferencaSuspeitos) }}
              <i
                v-if="isPositive(diferencaSuspeitos)"
                class="fas fa-sort-up"
              ></i>
              <i v-else-if="isPositive(diferencaSuspeitos) === ''" class="far fa-window-minimize"></i>

              <i v-else class="fas fa-sort-down"></i>
            </p>
          </div>
          <highcharts v-if="suspeitos != null" class="chart" :options="suspeitos"></highcharts>
          <div class="porcentagens">
            <p class="dado">{{ populacao.toFixed(2) }}%</p>
            <p class="exp">
              <a
                target="_blank"
                href="https://cidades.ibge.gov.br/brasil/sp/sao-jose-dos-campos/panorama"
              >da população estimada de São José dos Campos.</a>
            </p>
          </div>
        </div>
        <div class="card">
          <p class="card-title">Positivos</p>
          <div class="dados">
            <p class="dado">{{ informe[0].casos_positivos }}</p>
            <p class="diferenca">
              {{ modulate(diferencaPositivos) }}
              <i
                v-if="isPositive(diferencaPositivos)"
                class="fas fa-sort-up"
              ></i>
              <i v-else-if="isPositive(diferencaPositivos) === ''" class="far fa-window-minimize"></i>

              <i v-else class="fas fa-sort-down"></i>
            </p>
          </div>
          <highcharts v-if="positivos != null" class="chart" :options="positivos"></highcharts>

          <div class="porcentagens">
            <p class="dado">{{ perPositivos.toFixed(2) }}%</p>
            <p class="exp">da quantidade de Suspeitos.</p>
          </div>
        </div>
        <div class="card">
          <p class="card-title">Óbitos</p>
          <div class="dados">
            <p class="dado">{{ informe[0].obitos_positivos }}</p>
            <p class="diferenca">
              {{ modulate(diferencaObitos) }}
              <i
                v-if="isPositive(diferencaObitos)"
                class="fas fa-sort-up"
              ></i>
              <i v-else-if="isPositive(diferencaObitos) === ''" class="far fa-window-minimize"></i>
              <i v-else class="fas fa-sort-down"></i>
            </p>
          </div>
          <highcharts v-if="obitos != null" class="chart" :options="obitos"></highcharts>

          <div class="porcentagens">
            <p class="dado">{{ perObitos.toFixed(2) }}%</p>
            <p class="exp">da quantidade de Positivos.</p>
          </div>
        </div>
        <div class="card">
          <p class="card-title">Recuperados</p>
          <div class="dados">
            <p class="dado">{{ informe[0].casos_recuperados }}</p>
            <p class="diferenca">
              {{ modulate(diferencaRecuperados) }}
              <i
                v-if="isPositive(diferencaRecuperados)"
                class="fas fa-sort-up"
              ></i>
              <i v-else-if="isPositive(diferencaRecuperados) === ''" class="far fa-window-minimize"></i>

              <i v-else class="fas fa-sort-down"></i>
            </p>
          </div>
          <highcharts v-if="recuperados != null" class="chart" :options="recuperados"></highcharts>

          <div class="porcentagens">
            <p class="dado">{{ perRecuperados.toFixed(2) }}%</p>
            <p class="exp">da quantidade de Positivos.</p>
          </div>
        </div>
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import { Chart } from "highcharts-vue";
import { config } from "../config/chartConfig";
export default {
  name: "Home",
  data() {
    return {
      informes: [],
      informe: null,
      suspeitos: null,
      positivos: null,
      obitos: null,
      recuperados: null
    };
  },
  async created() {
    const response = await axios.get(
      "https://covid19-sjc-api.herokuapp.com/informe"
    );
    var informes = response.data.informes;

    informes = informes.sort((a, b) => (a > b ? 1 : -1));

    this.informes = informes;
    this.informe = [informes[0], informes[1]];

    this.suspeitos = await config.suspeitos(this.informes);
    this.positivos = await config.positivos(this.informes);
    this.obitos = await config.obitos(this.informes);
    this.recuperados = await config.recuperados(this.informes);
  },
  methods: {
    isPositive(n) {
      if (n > 0) return true;
      else if (n === 0) return "";
      else return false;
    },
    modulate(n) {
      return n < 0 ? n * -1 : n;
    },
    chartConfig(data) {
      return {
        chart: {
          type: "spline"
        },
        title: {
          text: ""
        },
        yAxis: {
          visible: false
        },
        xAxis: {
          visible: false,
          type: "datetime"
        },
        legend: {
          enabled: false
        },
        credits: {
          enabled: false
        },
        tooltip: {
          xDateFormat: "%d/%m/%Y",
          shared: true
        },
        series: [
          {
            name: "Casos",
            data: data
          }
        ]
      };
    },
    sortedInformes() {
      return this.informes.sort((a, b) => (a.timestamp > b.timestamp ? 1 : -1));
    },
    async stockSuspeitos() {
      return await config.suspeitos(this.informes);
    },
    async stockPositivos() {
      return await config.positivos(this.informes);
    },
    async stockObitos() {
      return await config.obitos(this.informes);
    },
    async stockRecuperados() {
      return await config.recuperados(this.informes);
    }
  },
  computed: {
    percent() {
      const PERCENT = 100;
      return (
        (this.informe.casos_positivos * PERCENT) / this.informe.casos_suspeitos
      );
    },
    diferencaRecuperados() {
      return (
        this.informe[0].casos_recuperados - this.informe[1].casos_recuperados
      );
    },
    diferencaPositivos() {
      return this.informe[0].casos_positivos - this.informe[1].casos_positivos;
    },
    diferencaSuspeitos() {
      return this.informe[0].casos_suspeitos - this.informe[1].casos_suspeitos;
    },
    diferencaObitos() {
      return (
        this.informe[0].obitos_positivos - this.informe[1].obitos_positivos
      );
    },
    populacao() {
      let POPULACAO_ESTIMADA = 721944;
      return (this.informe[0].casos_suspeitos / POPULACAO_ESTIMADA) * 100;
    },
    perPositivos() {
      return (
        (this.informe[0].casos_positivos / this.informe[0].casos_suspeitos) *
        100
      );
    },
    perObitos() {
      return (
        (this.informe[0].obitos_positivos / this.informe[0].casos_positivos) *
        100
      );
    },
    perRecuperados() {
      return (
        (this.informe[0].casos_recuperados / this.informe[0].casos_positivos) *
        100
      );
    }
  },
  components: {
    highcharts: Chart
  }
};
</script>

<style scoped>
.totais,
.obitos {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 20px 0;
}

.chart {
  height: 100px;
}

.title {
  font-size: 20px;
  padding: 15px;
  padding-left: 0;
}

.home {
  margin-top: 40px;
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
}

h1 {
  font-size: 14px;
  text-align: start;
  color: rgb(136, 136, 136);
}

.card {
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
}

.card p {
  text-align: start;
  margin: 20px 5px 0 20px;
}

.dado {
  font-size: 24px;
  font-weight: bold;
  padding-bottom: 20px;
  margin-right: 0;
}

.card-title {
  padding-top: 1px;
  color: #b9b9b9;
}

.dados-totais {
  margin-top: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
}

.diferenca {
  margin: 20px 0 0 3px !important;
  color: rgb(77, 76, 76);
}

.dados {
  display: flex;
  flex-direction: row;
}

.fas.fa-sort-up {
  position: absolute;
  margin: 3px 0 0 3px;
}
.fas.fa-sort-up {
  color: green;
}

.fas.fa-sort-down {
  position: absolute;
  color: red;
  margin: -3px 0 0 3px;
}

.far.fa-window-minimize {
  position: absolute;
  font-size: 8px;
  font-weight: bold;
  color: rgb(107, 107, 107);
  margin-top: 1px;
  margin-left: 4px;
}

.exp {
  font-size: 16px;
  margin-bottom: 20px;
  margin: 0 !important;
  width: 100%;
  text-align: center !important;
  padding: 10px;
  color: rgb(150, 150, 150);
}

.exp a {
  color: rgb(150, 150, 150);
}

.porcentagens > .dado {
  text-align: center;
  margin-bottom: 5px;
  padding: 0;
}

/* 
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/

@media (min-width: 320px) and (max-width: 480px) {
  .dados-totais {
    display: flex;
    flex-direction: column;
  }

  .card {
    margin-top: 20px;
  }
}
</style>
