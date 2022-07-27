<template>
 <!--  <div class="main-panel">
    <div class="content-wrapper table-responsive">
     
    </div>
  </div> -->
   <div class="card">
        <div class="card-body" v-if="matrix">
          <h4 class="card-title">
            Detalle de evaluación de matriz # {{ this.$route.params.id }}
          </h4>
          <div class="row">
            <div class="col-sm">
              <h5>NIVEL DEFICIENCIA:</h5>
              <span
                v-if="matrix.deficiency_level === 10"
                class="badge badge-danger"
                 style="cursor: pointer"
                 data-toggle="tooltip"
                data-placement="top"
                title="ausencia de luz natural o artificial."
                >Exposición muy alta</span
              >
              <span
                v-if="matrix.deficiency_level === 6"
                class="badge badge-warning"
                 style="cursor: pointer"
                data-toggle="tooltip"
                data-placement="top"
                title="deficiencia de luz natural o artificial con sombras evidentes y dificultad para leer."
                >Exposición alta</span
              >
              <span
                v-if="matrix.deficiency_level === 2"
                class="badge badge-success"
                style="cursor: pointer"
                data-toggle="tooltip"
                data-placement="top"
                title="percepción de algunas sombras al ejecutar una actividad (ejemplo: escribir)."
                >Exposición media</span
              >
              <span
                v-if="matrix.deficiency_level < 2"
                class="badge badge-primary"
                 style="cursor: pointer"
                data-toggle="tooltip"
                data-placement="top"
                title="ausencia de sombras."
                >Exposición baja</span
              >
            </div>
            <div class="col-sm">
              <h5>NIVEL DE EXPOSICIÓN:</h5>
              <span
                style="cursor: pointer"
                v-if="matrix.exposition_level === 4"
                class="badge badge-danger"
                data-toggle="tooltip"
                data-placement="top"
                title="La situación de exposición se presenta sin interrupción o varias veces con tiempo prolongado durante la jornada laboral."
                >Continuo</span
              >
              <span
                v-if="matrix.exposition_level === 3"
                class="badge badge-warning"
                style="cursor: pointer"
                data-toggle="tooltip"
                data-placement="top"
                title="La situación de exposición se presenta varias veces durante la jornada laboral por tiempos cortos."
                >Frecuente</span
              >
              <span
                v-if="matrix.exposition_level === 2"
                class="badge badge-success"
                 style="cursor: pointer"
                data-toggle="tooltip"
                data-placement="top"
                title="La situación de exposición se presenta alguna vez durante la jornada laboral y por un periodo de tiempo corto."
                >Ocasional</span
              >
              <span
                v-if="matrix.exposition_level === 1"
                class="badge badge-primary"
                data-toggle="tooltip"
                data-placement="top"
                title="La situación de exposición se presenta de manera eventual."
                >Esporádica</span
              >
            </div>
            <div class="col-sm">
              <h5>NIVEL CONSECUENCIA:</h5>
               <span
                style="cursor: pointer"
                v-if="matrix.consequence_level === 100"
                class="badge badge-danger"
                data-toggle="tooltip"
                data-placement="top"
                title="Muerte (s)"
                >MORTAL O CATASTRÓFICO(M)</span
              >
              <span
                v-if="matrix.consequence_level === 60"
                class="badge badge-warning"
                style="cursor: pointer"
                data-toggle="tooltip"
                data-placement="top"
                title="Lesiones graves irreparables ( Incapacidad permanente parcial o invalidez)"
                >Frecuente</span
              >
              <span
                v-if="matrix.consequence_level === 25"
                class="badge badge-success"
                 style="cursor: pointer"
                data-toggle="tooltip"
                data-placement="top"
                title="Lesiones con incapacidad laboral temporal (ILT)"
                >Ocasional</span
              >
              <span
                v-if="matrix.consequence_level === 10"
                class="badge badge-primary"
                data-toggle="tooltip"
                data-placement="top"
                title="Lesiones o enfermedades que no requieren incapacidad"
                >Esporádica</span
              >
            </div>
          </div>
          <hr />
          <div class="row">
            <div class="col-md-4 col-sm">
              <h5>NIVEL DE RIESGO:</h5>
              <span
                style="cursor: pointer"
                v-if="matrix.risk_level >= 600"
                class="badge badge-danger"
                data-toggle="tooltip"
                data-placement="top"
                title="Situación crítica. Suspender actividades hasta que el riesgo esté bajo control. Intervención urgente."
                >I</span
              >
              <span
                v-else-if="matrix.risk_level <= 599 || matrix.risk_level >= 150"
                class="badge badge-warning"
                style="cursor: pointer"
                data-toggle="tooltip"
                data-placement="top"
                title="Corregir y adoptar medidas de control de inmediato."
                >II</span
              >
              <span
                v-else-if="matrix.risk_level <= 149 || matrix.risk_level >= 25"
                class="badge badge-success"
                 style="cursor: pointer"
                data-toggle="tooltip"
                data-placement="top"
                title="Mejorar si es posible. Sería conveniente justificar la intervención y su rentabilidad"
                >III</span
              >
              <span
                v-else-if="matrix.risk_level < 25"
                class="badge badge-primary"
                data-toggle="tooltip"
                data-placement="top"
                title="Mantener las medidas de control existentes, pero se deberían considerar soluciones o mejoras y se deben hacer comprobaciones periódicas para asegurar que el riesgo aún es aceptable."
                >IV</span
              >
            </div>
            <div class="col-md-4 col-sm">
              <h5>ACEPTABILIDAD DE RIESGO:</h5>
               <span
                style="cursor: pointer"
                v-if="matrix.risk_level >= 600"
                class="badge badge-danger"
                data-toggle="tooltip"
                data-placement="top"
                title="Situación crítica, corrección urgente"
                >No Aceptable</span
              >
              <span
                v-else-if="matrix.risk_level <= 599 || matrix.risk_level >= 150"
                class="badge badge-warning"
                style="cursor: pointer"
                data-toggle="tooltip"
                data-placement="top"
                title="Corregir o adoptar medidas de control"
                >Aceptable con control específico</span
              >
              <span
                v-else-if="matrix.risk_level <= 149 || matrix.risk_level >= 25"
                class="badge badge-success"
                 style="cursor: pointer"
                data-toggle="tooltip"
                data-placement="top"
                title="Mejorar el control existente"
                >Mejorable</span
              >
              <span
                v-else-if="matrix.risk_level < 25"
                class="badge badge-primary"
                data-toggle="tooltip"
                data-placement="top"
                title="No intervenir, salvo que un análisis más preciso lo justifique"
                >Aceptable</span
              >
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
        "evaluate-matrix-detail/" + this.$route.params.id
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