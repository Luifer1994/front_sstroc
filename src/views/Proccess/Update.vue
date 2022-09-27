<template>
  <div class="main-panel">
    <div class="content-wrapper table-responsive">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Editar proceso</h4>

          <form>
            <div class="form-row">
              <div class="form-group col-md-12">
                <label for="exampleInputName1">Nombre</label>
                <input
                  type="text"
                  class="form-control form-control-sm"
                  placeholder="Nombres..."
                  :class="{ 'is-invalid': errors.name }"
                  v-model="procces.name"
                />
                <small v-if="errors.name" class="text-danger">{{ errors.name[0] }}</small>
              </div>
            </div>
          </form>

          <router-link to="/proccess" type="button" class="btn btn-danger">
            Cancelar
          </router-link>
          <button @click="updateprocces()" type="button" class="btn btn-primary mx-2">
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
      procces: {
        name: null,
      },
      errors: {},
    };
  },
  mounted() {
    this.getprocces();
  },
  methods: {
    //get info from api using router params id and add url.name the data
    async getprocces() {
      const res = await createInstaceAxios.get("process-detail/" + this.$route.params.id);
      this.procces.name = res.data.data.name;
    },
    async updateprocces() {
      const Toast = this.$swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      });
      try {
        const res = await createInstaceAxios.put(
          "process-update/" + this.$route.params.id,
          this.procces
        );
        if (res.data.res) {
          Toast.fire({
            icon: "success",
            title: res.data.message,
          });
          this.$router.push("/proccess");
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
