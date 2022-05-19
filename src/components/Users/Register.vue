<template>
  <form>
    <div class="form-row">
      <div class="form-group col-md-6">
        <label for="exampleInputName1">Nombre</label>
        <input
          type="text"
          class="form-control form-control-sm"
          placeholder="Nombre..."
          v-model="infoClient.name"
          disabled
        />
      </div>

      <div class="form-group col-md-6">
        <label for="exampleInputName1">Apellidos</label>
        <input
          type="text"
          class="form-control form-control-sm"
          placeholder="Apellidos..."
          v-model="infoClient.last_name"
          disabled
        />
      </div>

      <div class="form-group col-md-6">
        <label for="exampleInputName1">Número de documento</label>
        <input
          type="number"
          class="form-control form-control-sm"
          placeholder="Número de documento..."
          v-model="infoClient.document_number"
          disabled
        />
      </div>

      <div class="form-group col-md-6">
        <label for="exampleInputName1">Email</label>
        <input
          type="email"
          class="form-control form-control-sm"
          placeholder="Email..."
          v-model="infoClient.email"
          disabled
        />
      </div>

      <div class="form-group col-md-6">
        <label for="exampleInputName1">Contraseña</label>
        <input
          type="password"
          class="form-control form-control-sm"
          placeholder="Contraseña..."
          v-model="client.password"
          :class="{ 'is-invalid': errors.password }"
        />
        <small v-if="errors.password" class="text-danger">{{
          errors.password[0]
        }}</small>
      </div>

      <div class="form-group col-md-6">
        <label for="exampleSelectGender">Rol</label>
        <select
          class="custom-select"
          :class="{ 'is-invalid': errors.rol_id }"
          v-model="client.rol_id"
        >
          <option v-for="rol in rols" :key="rol.id" :value="rol.id">
            {{ rol.name }}
          </option>
        </select>
        <small v-if="errors.rol_id" class="text-danger">{{
          errors.rol_id[0]
        }}</small>
      </div>
    </div>
  </form>
  <router-link to="/" type="button" class="btn btn-danger">
    Cancelar
  </router-link>
  <button @click="regsiterUser()" type="button" class="btn btn-primary mx-2">
    Registrar
  </button>
  <notifications />
</template>
<script>
import { createInstaceAxios } from "../../utils/instance";
export default {
  data() {
    return {
      rols: [],
      infoClient: {
        name: null,
        last_name: null,
        document_number: null,
        email: null,
      },
      client: {
        employee_id: this.$route.params.id,
        rol_id: null,
        password: null,
      },
      errors: {},
    };
  },
  mounted() {
    this.getDetailClient(this.$route.params.id);
    this.getRols();
  },
  methods: {
    async regsiterUser() {
      try {
        const res = await createInstaceAxios.post("user-register", this.client);
        if (res.data.res) {
          this.$router.push("/users-list");
        }
      } catch (er) {
        this.errors = er.response.data;
        if (er.response.data.employee_id) {
          this.$notify({
            title: "Error",
            text: "Este este empleado ya tiene un usuario asignado",
            type: "error",
          });
        }
      }
    },
    async getRols() {
      const res = await createInstaceAxios.get("rol-list");
      this.rols = res.data.data;
    },
    async getDetailClient(id) {
      const res = await createInstaceAxios.get("employee-detail/" + id);
      this.infoClient.name = res.data.data.name;
      this.infoClient.last_name = res.data.data.last_name;
      this.infoClient.email = res.data.data.email;
      this.infoClient.document_number = res.data.data.document_number;
    },
  },
};
</script>