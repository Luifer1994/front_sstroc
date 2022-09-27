<template>
  <div class="main-panel">
    <div class="content-wrapper table-responsive">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Editar Estado Civil</h4>

          <form>
            <div class="form-row">
              <div class="form-group col-md-12">
                <label for="exampleInputName1">Nombre</label>
                <input
                  type="text"
                  class="form-control form-control-sm"
                  placeholder="Nombres..."
                  :class="{ 'is-invalid': errors.name }"
                  v-model="maritalStatus.name"
                />
                <small v-if="errors.name" class="text-danger">{{ errors.name[0] }}</small>
              </div>
            </div>
          </form>

          <router-link to="/marital-status" type="button" class="btn btn-danger">
            Cancelar
          </router-link>
          <button
            @click="updatemaritalStatus()"
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
      maritalStatus: {
        name: null,
      },
      errors: {},
    };
  },
  mounted() {
    this.getmaritalStatus();
  },
  methods: {
    //get info from api using router params id and add url.name the data
    async getmaritalStatus() {
      const res = await createInstaceAxios.get(
        "marital-status-detail/" + this.$route.params.id
      );
      this.maritalStatus.name = res.data.data.name;
    },
    async updatemaritalStatus() {
      const Toast = this.$swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      });
      try {
        const res = await createInstaceAxios.put(
          "marital-status-update/" + this.$route.params.id,
          this.maritalStatus
        );
        if (res.data.res) {
          Toast.fire({
            icon: "success",
            title: res.data.message,
          });
          this.$router.push("/marital-status");
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
