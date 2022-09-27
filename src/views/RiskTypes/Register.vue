<template>
  <div class="main-panel">
    <div class="content-wrapper table-responsive">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Regsitrar tipo de riesgo</h4>

          <form>
            <div class="form-row">
              <div class="form-group col-md-12">
                <label for="exampleInputName1">Nombre</label>
                <input
                  type="text"
                  class="form-control form-control-sm"
                  placeholder="Nombres..."
                  :class="{ 'is-invalid': errors.name }"
                  v-model="riskType.name"
                />
                <small v-if="errors.name" class="text-danger">{{ errors.name[0] }}</small>
              </div>
            </div>
          </form>

          <router-link to="/risk-types" type="button" class="btn btn-danger">
            Cancelar
          </router-link>
          <button @click="regsiterriskType()" type="button" class="btn btn-primary mx-2">
            Registrar
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
      riskType: {
        name: null,
      },
      errors: {},
    };
  },
  methods: {
    async regsiterriskType() {
      const Toast = this.$swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      });
      try {
        const res = await createInstaceAxios.post("risk-type-register", this.riskType);
        if (res.data.res) {
          Toast.fire({
            icon: "success",
            title: res.data.message,
          });
          this.$router.push("/risk-types");
        }
      } catch (er) {
        this.errors = er.response.data;
        Toast.fire({
          icon: "warning",
          title: "Error al crear el registro",
        });
      }
    },
  },
};
</script>
