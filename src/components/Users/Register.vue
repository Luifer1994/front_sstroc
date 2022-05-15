<template>
  <form>
    <div class="form-row">
      <div class="form-group col-md-6">
        <label for="exampleSelectGender">Tipo de documento</label>
        <select
          class="custom-select"
          :class="{ 'is-invalid': errors.type_document_id }"
          v-model="client.type_document_id"
        >
          <option v-for="type in typeDocuments" :key="type.id" :value="type.id">
            {{ type.name }}
          </option>
        </select>
        <small v-if="errors.type_document_id" class="text-danger">{{
          errors.type_document_id[0]
        }}</small>
      </div>
      <div class="form-group col-md-6">
        <label for="exampleInputName1">Número de documento</label>
        <input
          type="number"
          class="form-control form-control-sm"
          placeholder="Documento..."
          :class="{ 'is-invalid': errors.document_number }"
          v-model="client.document_number"
        />
        <small v-if="errors.document_number" class="text-danger">{{
          errors.document_number[0]
        }}</small>
      </div>
      <div class="form-group col-md-6">
        <label for="exampleSelectGender">Genero</label>
        <select
          class="custom-select"
          :class="{ 'is-invalid': errors.gender_id }"
          v-model="client.gender_id"
        >
          <option v-for="gender in genders" :key="gender.id" :value="gender.id">
            {{ gender.name }}
          </option>
        </select>
        <small v-if="errors.gender_id" class="text-danger">{{
          errors.gender_id[0]
        }}</small>
      </div>
      <div class="form-group col-md-6">
        <label for="exampleInputName1">Nombres</label>
        <input
          type="text"
          class="form-control form-control-sm"
          placeholder="Nombres..."
          :class="{ 'is-invalid': errors.name }"
          v-model="client.name"
        />
        <small v-if="errors.name" class="text-danger">{{
          errors.name[0]
        }}</small>
      </div>
      <div class="form-group col-md-6">
        <label for="exampleInputName1">Apellidos</label>
        <input
          type="text"
          class="form-control form-control-sm"
          placeholder="Apellidos..."
          v-model="client.last_name"
          :class="{ 'is-invalid': errors.last_name }"
        />
        <small v-if="errors.last_name" class="text-danger">{{
          errors.last_name[0]
        }}</small>
      </div>

      <div class="form-group col-md-6">
        <label for="exampleInputName1">Email</label>
        <input
          type="email"
          class="form-control form-control-sm"
          placeholder="Apellidos..."
          v-model="client.email"
          :class="{ 'is-invalid': errors.email }"
        />
        <small v-if="errors.email" class="text-danger">{{
          errors.email[0]
        }}</small>
      </div>

      <div class="form-group col-md-6">
        <label for="exampleInputName1">Télefono</label>
        <input
          type="email"
          class="form-control form-control-sm"
          placeholder="Apellidos..."
          v-model="client.phone"
          :class="{ 'is-invalid': errors.phone }"
        />
        <small v-if="errors.phone" class="text-danger">{{
          errors.phone[0]
        }}</small>
      </div>

      <div class="form-group col-md-6">
        <label for="exampleInputName1">Contraseña</label>
        <input
          type="email"
          class="form-control form-control-sm"
          placeholder="Apellidos..."
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
</template>
<script>
import { createInstaceAxios } from "../../utils/instance";
export default {
  data() {
    return {
      typeDocuments: [],
      genders: [],
      rols: [],
      client: {
        name: null,
        last_name: null,
        phone: null,
        type_document_id: null,
        document_number: null,
        rol_id: null,
        gender_id: null,
        email: null,
        password: null,
      },
      errors: {},
    };
  },
  mounted() {
    this.getTypeDocuments();
    this.getGenders();
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
      }
    },
    async getTypeDocuments() {
      const res = await createInstaceAxios.get("document-type-list");
      this.typeDocuments = res.data.data;
    },
    async getGenders() {
      const res = await createInstaceAxios.get("gender-list");
      this.genders = res.data.data;
    },
    async getRols() {
      const res = await createInstaceAxios.get("rol-list");
      this.rols = res.data.data;
    },
  },
};
</script>