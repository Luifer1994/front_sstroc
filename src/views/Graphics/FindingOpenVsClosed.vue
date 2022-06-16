<template>
  <div id="chart">
    <apexchart
      type="radialBar"
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
      series: [],
      chartOptions: {
        chart: {
          height: 300,
          type: "radialBar",
        },
        colors: ["#FF3756", "#56D88E"],
        plotOptions: {
          radialBar: {
            columnWidth: 200,
            dataLabels: {
              name: {
                fontSize: "22px",
              },
              value: {
                fontSize: "16px",
              },
              total: {
                show: true,
                label: "Total",
                formatter: function (w) {
                  return w.globals.seriesTotals.reduce((a, b) => {
                    return a + b;
                  }, 0);
                },
              },
            },
          },
        },
        labels: ["CERRADOS", "ABIERTOS"],
      },
    };
  },
  mounted() {
    this.getData();
  },

  methods: {
    async getData() {
      const res = await createInstaceAxios.get("count-open-and-closed");
      this.series.push(res.data.data.total_closed, res.data.data.total_open);
    },
  },
};
</script>
<style>
text {
  color: red;
}
</style>
