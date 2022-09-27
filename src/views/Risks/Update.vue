<template>
  <div class="main-panel">
    <div class="content-wrapper table-responsive">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Editar riesgo</h4>

          <form>
            <div class="form-row">
              <div class="form-group col-md-6" v-if="riskTypes.length">
                <label for="exampleInputName1">Tipo de riesgo</label>
                <select
                  class="custom-select"
                  :class="{ 'is-invalid': errors.risks_type_id }"
                  v-model="risk.risks_type_id"
                >
                  <option
                    v-for="riskType in riskTypes"
                    :key="riskType.id"
                    :value="riskType.id"
                  >
                    {{ riskType.name }}
                  </option>
                </select>
                <small v-if="errors.risks_type_id" class="text-danger">{{
                  errors.risks_type_id[0]
                }}</small>
              </div>
              <div class="form-group col-md-6">
                <label for="exampleInputName1">Nombre</label>
                <input
                  type="text"
                  class="form-control form-control-sm"
                  placeholder="Nombres..."
                  :class="{ 'is-invalid': errors.name }"
                  v-model="risk.name"
                />
                <small v-if="errors.name" class="text-danger">{{ errors.name[0] }}</small>
              </div>
            </div>
          </form>

          <router-link to="/risks" type="button" class="btn btn-danger">
            Cancelar
          </router-link>
          <button @click="updaterisk()" type="button" class="btn btn-primary mx-2">
            Actualizar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { createInstaceAxios } from "../../utils/instance";
export default {
  data() {
    return {
      risk: {
        name: null,
        risks_type_id: null,
      },
      riskTypes: [],
      errors: {},
    };
  },
  mounted() {
    this.getrisk();
    this.getriskTypes();
  },
  methods: {
    async getriskTypes() {
      const response = await createInstaceAxios.get("/risk-type-list");
      this.riskTypes = response.data.data;
    },
    //get info from api using router params id and add url.name the data
    async getrisk() {
      const res = await createInstaceAxios.get("risk-detail/" + this.$route.params.id);
      this.risk.name = res.data.data.name;
      this.risk.risks_type_id = res.data.data.risks_type_id;
    },
    async updaterisk() {
      const Toast = this.$swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      });
      try {
        const res = await createInstaceAxios.put(
          "risk-update/" + this.$route.params.id,
          this.risk
        );
        if (res.data.res) {
          Toast.fire({
            icon: "success",
            title: res.data.message,
          });
          this.$router.push("/risks");
        }
      } catch (er) {
        this.errors = er.response.data.errors;
        Toast.fire({
          icon: "warning",
          title: "Error al crear el registro",
        });
      }
    },
  },
};
</script>
