<template>
  <div class="main-panel">
    <div class="content-wrapper table-responsive">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Editar tipo de contrato</h4>

          <form>
            <div class="form-row">
              <div class="form-group col-md-12">
                <label for="exampleInputName1">Nombre</label>
                <input
                  type="text"
                  class="form-control form-control-sm"
                  placeholder="Nombres..."
                  :class="{ 'is-invalid': errors.name }"
                  v-model="contractType.name"
                />
                <small v-if="errors.name" class="text-danger">{{ errors.name[0] }}</small>
              </div>
            </div>
          </form>

          <router-link to="/document-types" type="button" class="btn btn-danger">
            Cancelar
          </router-link>
          <button
            @click="updatecontractType()"
            type="button"
            class="btn btn-primary mx-2"
          >
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
      contractType: {
        name: null,
      },
      errors: {},
    };
  },
  mounted() {
    this.getcontractType();
  },
  methods: {
    //get info from api using router params id and add url.name the data
    async getcontractType() {
      const res = await createInstaceAxios.get(
        "type-contract-detail/" + this.$route.params.id
      );
      this.contractType.name = res.data.data.name;
    },
    async updatecontractType() {
      const Toast = this.$swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      });
      try {
        const res = await createInstaceAxios.put(
          "type-contract-update/" + this.$route.params.id,
          this.contractType
        );
        if (res.data.res) {
          Toast.fire({
            icon: "success",
            title: res.data.message,
          });
          this.$router.push("/contrac-types");
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
