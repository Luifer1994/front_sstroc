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
              <div class="card">
                <div class="card-body">
                  <p class="mb-4">HALLAZGOS CERRADOS VS ABIERTOS</p>
                  <div class="justify-content-center">
                    <FindingOpenVsClosed></FindingOpenVsClosed>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 mb-4 mb-lg-0 stretch-card transparent">
              <div class="card">
                <div class="card-body">
                  <p class="mb-4">AREAS CON MÁS HALLAZGOS</p>
                  <TopFindingForArea></TopFindingForArea>
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
import TopRiksLastSixMonth from "./Graphics/TopRiksLastSixMonth.vue";
import FindingOpenVsClosed from "./Graphics/FindingOpenVsClosed.vue";
import TopFindingForArea from "./Graphics/TopFindingForArea.vue";

export default {
  name: "HomeView",
  components: {
    TopRiksLastSixMonth,
    FindingOpenVsClosed,
    TopFindingForArea,
  },
};
</script>

<style>
.card.card-tale {
  background: #ffffff;
  color: #ffffff;
}
</style>
