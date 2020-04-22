<template>
  <div class="home">
    <div></div>
    <div class="dashboard">
      <h1>{{informe.timestamp | formatData}}</h1>
      <div class="dados-totais">
        <div class="card">
          <p class="card-title">Suspeitos</p>
          <div class="dados">
            <p class="dado">{{informe.casos_suspeitos}}</p>
            <p class="diferenca">
              {{modulate(informe.casos_suspeitos - informes[1].casos_suspeitos)}}
              <i
                v-if="isPositive(informe.casos_suspeitos - informes[1].casos_suspeitos)"
                class="fas fa-sort-up"
              ></i>
              <i v-else class="fas fa-sort-down"></i>
            </p>
          </div>
        </div>
        <div class="card">
          <p class="card-title">Positivos</p>
          <div class="dados">
            <p class="dado">{{informe.casos_positivos}}</p>
            <p class="diferenca">
              {{modulate(informe.casos_positivos - informes[1].casos_positivos)}}
              <i
                v-if="isPositive(informe.casos_positivos - informes[1].casos_positivos)"
                class="fas fa-sort-up"
              ></i>
              <i v-else class="fas fa-sort-down"></i>
            </p>
          </div>
        </div>
        <div class="card">
          <p class="card-title">Óbitos</p>
          <div class="dados">
            <p class="dado">{{informe.obitos_positivos}}</p>
            <p class="diferenca">
              {{modulate(informe.obitos_positivos - informes[1].obitos_positivos)}}
              <i
                v-if="isPositive(informe.obitos_positivos - informes[1].obitos_positivos)"
                class="fas fa-sort-up"
              ></i>
              <i v-else class="fas fa-sort-down"></i>
            </p>
          </div>
        </div>
        <div class="card">
          <p class="card-title">Recuperados</p>
          <div class="dados">
            <p class="dado">{{informe.casos_recuperados}}</p>
            <p class="diferenca">
              {{modulate(informe.casos_recuperados - informes[1].casos_recuperados)}}
              <i
                v-if="isPositive(informe.casos_recuperados - informes[1].casos_recuperados)"
                class="fas fa-sort-up"
              ></i>
              <i v-else class="fas fa-sort-down"></i>
            </p>
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

export default {
  name: "Home",
  data() {
    return {
      informes: [],
      informe: []
    };
  },
  async created() {
    const response = await axios.get(
      "https://covid19-sjc-api.herokuapp.com/informe"
    );

    var informes = response.data.informes;

    informes = informes.sort((a, b) => (a > b ? 1 : -1));

    this.informes = informes;
    this.informe = informes[0];
    console.log(this.informes);
  },
  methods: {
    isPositive(n) {
      return n > 0 ? true : false;
    },
    modulate(n) {
      return n < 0 ? n * -1 : n;
    }
  },
  computed: {
    percent() {
      const PERCENT = 100;
      return (
        (this.informe.casos_positivos * PERCENT) / this.informe.casos_suspeitos
      );
    }
  },
  components: {}
};
</script>

<style scoped>
.totais,
.obitos {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 20px 0;
}

.home {
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
}

h1 {
  font-size: 18px;
  text-align: start;
  color: rgb(136, 136, 136);
}

.card {
  margin-top: 40px;
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
</style>
