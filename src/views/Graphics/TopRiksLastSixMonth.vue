<template>
  <div id="chart">
    <apexchart
      type="bar"
      height="300"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>
<script>
import apexchart from "vue3-apexcharts";
import { createInstaceAxios } from "../../utils/instance";
export default {
  components: {
    apexchart,
  },
  data() {
    return {
      series: [
        {
          name: "# Identificaciones",
          data: [],
        },
      ],
      chartOptions: {
        chart: {
          height: 300,
          width: '100%',
          type: "bar",
        },
        plotOptions: {
          bar: {
            borderRadius: 10,
            dataLabels: {
              position: "top", // top, center, bottom
            },
          },
        },
        dataLabels: {
          enabled: true,
          formatter: function (val) {
            return val;
          },
          offsetY: -20,
          style: {
            fontSize: "12px",
            colors: ["#304758"],
          },
        },
        stroke: {
          width: 2,
        },

        grid: {
          row: {
            colors: ["#fff", "#f2f2f2"],
          },
        },
        xaxis: {
          labels: {
            rotate: -45,
            show: true,
                formatter: function (val) {
                  return val;
                }
          },
          categories: [],
        },
         yaxis: {
              axisBorder: {
                show: false
              },
              axisTicks: {
                show: false,
              },
              labels: {
                show: false,
                formatter: function (val) {
                  return val;
                }
              }
            
            },
        fill: {
          type: "gradient",
          gradient: {
            shade: "light",
            type: "horizontal",
            shadeIntensity: 0.25,
            gradientToColors: undefined,
            inverseColors: true,
            opacityFrom: 0.85,
            opacityTo: 0.85,
            stops: [50, 0, 100],
          },
        },
      },
    };
  },
  mounted() {
    this.getData();
  },

  methods: {
    async getData() {
      const res = await createInstaceAxios.get("top-risk-last-six-months");
      res.data.data.forEach((element) => {
        this.series[0].data.push(element.identification_hazard_and_risks_count);
        let indice = element.name.indexOf("(");
        let extraida = element.name.substring(0, indice);
        if (extraida) {
          this.chartOptions.xaxis.categories.push(extraida);
        } else {
          this.chartOptions.xaxis.categories.push(element.name);
        }
      });
    },
  },
};
</script>
<style>
text {
  color: red;
}
</style>
