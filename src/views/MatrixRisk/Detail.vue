<template>
  <div class="main-panel">
    <div class="content-wrapper table-responsive">
      <div class="card">
        <div class="card-body" v-if="matrix">
          <h4 class="card-title">
            Detalle matriz # {{ this.$route.params.id }}
          </h4>
          <div class="row">
            <div class="col-sm">
              <h5>CARGO:</h5>
              <p>{{ matrix.position.name }}</p>
            </div>
            <div class="col-sm">
              <h5>AREA:</h5>
              <p>{{ matrix.area.name }}</p>
            </div>
            <div class="col-sm">
              <h5>CLASIFICACIÓN:</h5>
              <span
                v-if="matrix.clasification == 'RUTINARIO'"
                class="badge badge-warning font-weight-bold"
              >
                {{ matrix.clasification }}
              </span>
              <span v-else class="badge badge-success font-weight-bold">
                {{ matrix.clasification }}
              </span>
            </div>
            <div class="col-sm">
              <h5>FECHA DE REGISTRO:</h5>
              <p>{{ formatDate(matrix.created_at) }}</p>
            </div>
          </div>
        <hr>
          <div class="row">
            <div class="col-sm">
              <h5>PROCESO:</h5>
              <p>{{ matrix.process.name }}</p>
            </div>
            <div class="col-sm">
              <h5>RIESGO:</h5>
              
              <p>{{ matrix.risk.name }}</p>
              <span>{{ matrix.risk.risk_type.name }}</span>
            </div>
            <div class="col-sm">
              <h5>TAREA:</h5>
               <p>{{ matrix.task.name }}</p>
            </div>
             <div class="col-sm">
              <h5>CONTROL REALIZADO A:</h5>
               <p v-if="matrix.control_done==='INDIVIDUE'">INDIVIDUO</p>
               <p v-else>{{ matrix.control_done }}</p>
            </div>
          </div>

          <hr>
          <div class="row">
            <div class="col-sm">
              <h5>POSIBLES EFECTO:</h5>
              <p>{{ matrix.possible_effects }}</p>
            </div>
            <div class="col-sm">
              <h5>PEOR CONSECUENCIA:</h5>
              
              <p>{{ matrix.consequence }}</p>
            </div>
            <div class="col-sm">
              <h5>HORAS DE EXPOSICIÓN AL DÍA:</h5>
               <p>{{ matrix.hours_exposition_day }}</p>
            </div>
             <div class="col-sm">
              <h5>EXISTENCIA DE CONTROL:</h5>
              <span
                v-if="matrix.exists_control"
                class="badge badge-success font-weight-bold"
              >
               SI
              </span>
              <span v-else class="badge badge-danger font-weight-bold">
                NO
              </span>
            </div>
          </div>
           <div class="row" v-if="matrix.exists_control">
            <div class="col-sm">
              <h5>DETALLES DEL CONTROL:</h5>
              <p>{{ matrix.cotrol_descrption }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>
<script>
import { createInstaceAxios } from "../../utils/instance";
import moment from "moment";
export default {
  data() {
    return {
      matrix: null,
    };
  },
  mounted() {
    this.getInfo();
  },
  methods: {
    async getInfo() {
      const res = await createInstaceAxios.get(
        "matrix-ris-detail/" + this.$route.params.id
      );
      this.matrix = res.data.data;
    },
     formatDate(value) {
      moment.locale("es");
      if (value) {
        return moment(String(value)).format("LL");
      }
    },
  },
};
</script>