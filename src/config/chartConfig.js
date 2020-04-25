const config = {
  async suspeitos(informes) {
    var stk = await informes.map((informe) => [
      informe.timestamp,
      informe.casos_suspeitos,
    ]);

    stk = await stk.sort((a, b) => (a[0] > b[0] ? 1 : -1));

    return {
      chart: {
        type: "spline",
      },
      title: {
        text: "",
      },
      yAxis: {
        visible: false,
      },
      xAxis: {
        visible: false,
        type: "datetime",
      },
      legend: {
        enabled: false,
      },
      credits: {
        enabled: false,
      },
      tooltip: {
        xDateFormat: "%d/%m/%Y",
        shared: true,
      },
      series: [
        {
          name: "Casos",
          data: stk,
        },
      ],
    };
  },
  async positivos(informes) {
    var stk = await informes.map((informe) => [
      informe.timestamp,
      informe.casos_positivos,
    ]);

    stk = await stk.sort((a, b) => (a[0] > b[0] ? 1 : -1));

    return {
      chart: {
        type: "spline",
      },
      title: {
        text: "",
      },
      yAxis: {
        visible: false,
      },
      xAxis: {
        visible: false,
        type: "datetime",
      },
      legend: {
        enabled: false,
      },
      credits: {
        enabled: false,
      },
      tooltip: {
        xDateFormat: "%d/%m/%Y",
        shared: true,
      },
      series: [
        {
          name: "Casos",
          data: stk,
        },
      ],
    };
  },
  async obitos(informes) {
    var stk = await informes.map((informe) => [
      informe.timestamp,
      informe.obitos_positivos,
    ]);

    stk = await stk.sort((a, b) => (a[0] > b[0] ? 1 : -1));

    return {
      chart: {
        type: "spline",
      },
      title: {
        text: "",
      },
      yAxis: {
        visible: false,
      },
      xAxis: {
        visible: false,
        type: "datetime",
      },
      legend: {
        enabled: false,
      },
      credits: {
        enabled: false,
      },
      tooltip: {
        xDateFormat: "%d/%m/%Y",
        shared: true,
      },
      series: [
        {
          name: "Casos",
          data: stk,
        },
      ],
    };
  },
  async recuperados(informes) {
    var stk = await informes.map((informe) => [
      informe.timestamp,
      informe.casos_recuperados,
    ]);

    stk = await stk.sort((a, b) => (a[0] > b[0] ? 1 : -1));

    return {
      chart: {
        type: "spline",
      },
      title: {
        text: "",
      },
      yAxis: {
        visible: false,
      },
      xAxis: {
        visible: false,
        type: "datetime",
      },
      legend: {
        enabled: false,
      },
      credits: {
        enabled: false,
      },
      tooltip: {
        xDateFormat: "%d/%m/%Y",
        shared: true,
      },
      series: [
        {
          name: "Casos",
          data: stk,
        },
      ],
    };
  },
  async chartOptions(data) {
    return await {
      chart: {
        type: "spline",
      },
      title: {
        text: "",
      },
      yAxis: {
        visible: false,
      },
      xAxis: {
        visible: false,
        type: "datetime",
      },
      legend: {
        enabled: false,
      },
      credits: {
        enabled: false,
      },
      tooltip: {
        xDateFormat: "%d/%m/%Y",
        shared: true,
      },
      series: [
        {
          name: "Casos",
          data: data,
        },
      ],
    };
  },
};

module.exports = { config };
