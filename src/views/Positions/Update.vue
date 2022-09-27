<template>
  <div class="main-panel">
    <div class="content-wrapper table-responsive">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Editar Cargo</h4>

          <form>
            <div class="form-row">
              <div class="form-group col-md-12">
                <label for="exampleInputName1">Nombre</label>
                <input
                  type="text"
                  class="form-control form-control-sm"
                  placeholder="Nombres..."
                  :class="{ 'is-invalid': errors.name }"
                  v-model="position.name"
                />
                <small v-if="errors.name" class="text-danger">{{ errors.name[0] }}</small>
              </div>
            </div>
          </form>

          <button @click="updateposition()" type="button" class="btn btn-primary mx-2">
            Actualizar
          </button>
        </div>
      </div>

      <div class="card mt-4">
        <div class="card-body">
          <h4 class="card-title">Agregar Procesos</h4>
          <Multiselect
            v-model="value"
            placeholder="Buscar proceso"
            label="name"
            trackBy="name"
            :options="options"
            :searchable="true"
            mode="tags"
          >
          </Multiselect>
          <div class="mt-4">
            <router-link to="/positions" type="button" class="btn btn-danger">
              Cancelar
            </router-link>
            <button
              @click="addProcessToPosition()"
              type="button"
              class="btn btn-primary mx-2"
            >
              Guardar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { createInstaceAxios } from "../../utils/instance";
import Multiselect from "@vueform/multiselect";
export default {
  components: { Multiselect },
  data() {
    return {
      value: [],
      options: [],
      position: {
        name: null,
      },
      errors: {},
    };
  },
  mounted() {
    this.getProcess();
    this.getposition();
  },
  methods: {
    async addProcessToPosition() {
      const Toast = this.$swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      });
      try {
        const res = await createInstaceAxios.post("position-register-process", {
          position_id: this.$route.params.id,
          processes: this.value,
        });
        if (res.data.res) {
          Toast.fire({
            icon: "success",
            title: res.data.message,
          });
          this.getProcess();
        } else {
          Toast.fire({
            icon: "error",
            title: res.data.message,
          });
        }
      } catch (error) {
        console.log(error);
      }
    },

    //get info from api using router params id and add url.name the data
    async getProcess() {
      const res = await createInstaceAxios.get(`process-list`);
      res.data.data.forEach((element) => {
        this.options.push({ name: element.name, value: element.id });
      });
    },
    async getposition() {
      const res = await createInstaceAxios.get(
        "process-by-position/" + this.$route.params.id
      );
      this.position.name = res.data.data.name;
      res.data.data.processes.forEach((element) => {
        this.value.push(element.id);
      });
    },
    async updateposition() {
      const Toast = this.$swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      });
      try {
        const res = await createInstaceAxios.put(
          "position-update/" + this.$route.params.id,
          this.position
        );
        if (res.data.res) {
          Toast.fire({
            icon: "success",
            title: res.data.message,
          });
          this.$router.push("/positions");
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
<style>
@import "@vueform/multiselect/themes/default.css";
</style>
