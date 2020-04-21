<template>
  <div class="home">
    <div></div>
    <div class="dashboard">
      <h1>Informe de {{informe.timestamp | formatData}}</h1>
      <div class="totais">
        <div class="suspeitos">
          <label>Casos Suspeitos</label>
          <p>{{informe.casos_suspeitos}}</p>
        </div>
        <div class="positivos">
          <label>Casos Positivos</label>
          <p>{{informe.casos_positivos}} - {{percent.toFixed(2)}}%</p>
        </div>
      </div>
      <div class="obitos">
        <div class="obitos-suspeitos">
          <label>Obitos Suspeitos</label>
          <p>{{informe.obitos_suspeitos}}</p>
        </div>
        <div class="obitos-positivos">
          <label>Obitos Positivos</label>
          <p>{{informe.obitos_positivos}}</p>
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
  grid-template-columns: 1fr 2fr 1fr;
}

h1 {
  font-size: 24px;
}
</style>
