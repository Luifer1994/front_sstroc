<template>
  <div class="main-panel">
    <div class="content-wrapper">
      <div class="row">
        <div class="col-md-12 grid-margin transparent">
          <div class="row">
            <div class="col-md-6 mb-4 stretch-card transparent">
              <div class="card">
                <div class="card-body">
                 <p class="mb-4">TOP 10 RIESGOS DE ENCUESTA DE LOS ULTIMOS 6 MESES</p>
                  <TopRiksLastSixMonth></TopRiksLastSixMonth>
                </div>
              </div>
            </div>
            <div class="col-md-6 mb-4 stretch-card transparent">
              <div class="card card-dark-blue">
                <div class="card-body">
                  <p class="mb-4">Total Bookings</p>
                  <p class="fs-30 mb-2">61344</p>
                  <p>22.00% (30 days)</p>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 mb-4 mb-lg-0 stretch-card transparent">
              <div class="card card-light-blue">
                <div class="card-body">
                  <p class="mb-4">Number of Meetings</p>
                  <p class="fs-30 mb-2">34040</p>
                  <p>2.00% (30 days)</p>
                </div>
              </div>
            </div>
            <div class="col-md-6 stretch-card transparent">
              <div class="card card-light-danger">
                <div class="card-body">
                  <p class="mb-4">Number of Clients</p>
                  <p class="fs-30 mb-2">47033</p>
                  <p>0.22% (30 days)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopRiksLastSixMonth from './Graphics/TopRiksLastSixMonth.vue'
export default {
  name: "HomeView",
  components:{
    TopRiksLastSixMonth
  }
};
</script>
<style>
.card.card-tale {
    background: #ffffff;
    color: #ffffff;
}
</style>