<template>
  <div class="main-panel">
    <div class="content-wrapper table-responsive">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Regsitrar ciudad</h4>

          <form>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="exampleInputName1">País</label>
                <select
                  class="custom-select"
                  :class="{ 'is-invalid': errors.country_id }"
                  v-model="city.country_id"
                >
                  <option
                    v-for="country in countries"
                    :key="country.id"
                    :value="country.id"
                  >
                    {{ country.name }}
                  </option>
                </select>
                <small v-if="errors.country_id" class="text-danger">{{
                  errors.country_id[0]
                }}</small>
              </div>
              <div class="form-group col-md-6">
                <label for="exampleInputName1">Nombre</label>
                <input
                  type="text"
                  class="form-control form-control-sm"
                  placeholder="Nombres..."
                  :class="{ 'is-invalid': errors.name }"
                  v-model="city.name"
                />
                <small v-if="errors.name" class="text-danger">{{ errors.name[0] }}</small>
              </div>
            </div>
          </form>

          <router-link to="/cities" type="button" class="btn btn-danger">
            Cancelar
          </router-link>
          <button @click="registercity()" type="button" class="btn btn-primary mx-2">
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
      city: {
        name: null,
        country_id: null,
      },
      countries: [],
      errors: {},
    };
  },
  mounted() {
    this.getCountries();
  },
  methods: {
    //get all countries
    async getCountries() {
      const response = await createInstaceAxios.get("/country-list");
      this.countries = response.data.data;
    },
    async registercity() {
      const Toast = this.$swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      });
      try {
        const res = await createInstaceAxios.post("city-register", this.city);
        if (res.data.res) {
          Toast.fire({
            icon: "success",
            title: res.data.message,
          });
          this.$router.push("/cities");
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
