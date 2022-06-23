<template>
  <div id="chart">
    <apexchart
      type="polarArea"
      height="350"
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
    /*   series: [],
      chartOptions: {
        chart: {
          height: 350,
          type: "polarArea",
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 300,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
        colors: [
          "#FF3756",
          "#56D88E",
          "#EAEE18",
          "#EE18DD",
          "#18AAEE",
          "#EC9027",
          "#819C9E",
          "#39CE2C",
          "#323232",
          "#4136F0",
        ],
        labels: ["asa", "asas", "232", "asa", "asas", "232"],
        fill: {
          opacity: 1,
        },
        stroke: {
          width: 0,
          colors: "#fff",
        },
        yaxis: {
          show: false,
        },
        legend: {
          position: "bottom",
        },
        plotOptions: {
          polarArea: {
            rings: {
              strokeWidth: 0,
            },
            spokes: {
              strokeWidth: 2,
            },
          },
        },
      }, */
       series: [],
          chartOptions: {
             colors: [
          "#FF3756",
          "#56D88E",
          "#EAEE18",
          "#EE18DD",
          "#18AAEE",
          "#EC9027",
          "#819C9E",
          "#39CE2C",
          "#323232",
          "#4136F0",
        ],
          labels:[],
            chart: {
              type: 'polarArea',
            },
            stroke: {
              colors: ['#fff']
            },
            fill: {
              opacity: 6
            },
            yaxis: {
          show: false,
        },
              plotOptions: {
          polarArea: {
            rings: {
              strokeWidth: 0,
            },
            spokes: {
              strokeWidth: 2,
            },
          },
        },
            responsive: [{
              breakpoint: 480,
              options: {
                chart: {
                  width: 350
                },
                legend: {
                  position: 'bottom'
                }
              }
            }]
          },
    };
  },
  mounted() {
    this.getData();
  },

  methods: {
    async getData() {
      const res = await createInstaceAxios.get("top-finding-for-area");
      res.data.data.forEach((element) => {
    
        this.series.push(element.finding_count);
        this.chartOptions.labels.push(element.name);
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
