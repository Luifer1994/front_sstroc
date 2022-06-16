<template>
  <div id="chart">
    <apexchart
      type="donut"
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
            colors: ["#FF3756", "#56D88E","#EAEE18","#EE18DD","#18AAEE","#EC9027","#819C9E","#39CE2C","#323232", "#4136F0"],
            chart: {
              height: 350,
              width: 350,
              type: 'donut',
            },
            plotOptions: {
              donut: {
                dataLabels: {
                  name: {
                    fontSize: '22px',
                  },
                  value: {
                    fontSize: '16px',
                  },
                }
              }
            },
            labels: [],
          },
    };
  },
  mounted() {
    this.getData();
  },

  methods: {
    async getData() {
      const res = await createInstaceAxios.get("top-finding-for-area");
      res.data.data.forEach(element => {
       this.series.push(element.finding_count);
       this.chartOptions.labels.push(element.name)
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
