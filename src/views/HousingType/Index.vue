<template>
  <div class="main-panel">
    <div class="content-wrapper table-responsive">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Tipos de vivienda</h4>
          <router-link to="/housing-types-register" class="btn btn-primary text-right"
            >Registrar tipo de vivienda</router-link
          >

          <div v-if="!housingType" class="d-flex justify-content-center mt-4">
            <div
              class="spinner-border text-primary"
              style="width: 100px; height: 100px"
              role="status"
            >
              <span class="sr-only">Loading...</span>
            </div>
          </div>

          <div v-else>
            <input
              type="text"
              class="form-control my-2"
              v-model="search"
              placeholder="Buscar por nombre"
              @keyup="searching()"
            />
            <div class="table-responsive">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>NOMBRE</th>
                    <th>FECHA DE CREACIÓN</th>
                    <th>ACCIONES</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="housing in housingType" :key="housing.id">
                    <td>{{ housing.id }}</td>
                    <td>{{ housing.name }}</td>
                    <td>{{ formatDate(housing.created_at) }}</td>
                    <td>
                      <button
                        @click="housingTypeUpdate(housing.id)"
                        class="btn btn-warning btn-sm"
                      >
                        <img
                          style="width: 20px; height: 20px"
                          src="https://img.icons8.com/external-tanah-basah-detailed-outline-tanah-basah/48/000000/external-edit-user-interface-tanah-basah-detailed-outline-tanah-basah-2.png"
                        />
                      </button>
                      <button
                        @click="showAlert(housing.id)"
                        class="btn btn-danger mx-1 btn-sm"
                      >
                        <img
                          style="width: 20px; height: 20px"
                          src="https://img.icons8.com/ios-glyphs/30/000000/filled-trash.png"
                        />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="row">
              <div class="col">
                <nav>
                  <ul class="pagination flex-wrap pagination-sm">
                    <li
                      class="page-item"
                      v-for="link in links"
                      :key="link"
                      :class="{ active: link.active == true }"
                    >
                      <a
                        @click="next(link.label)"
                        style="cursor: pointer"
                        class="page-link"
                        >{{ link.label }}</a
                      >
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <notifications />
</template>
<script>
import { createInstaceAxios } from "../../utils/instance";
import moment from "moment";
export default {
  name: "housingType",
  data() {
    return {
      housingType: null,
      links: null,
      page: 1,
      limit: 10,
      search: "",
    };
  },
  mounted() {
    this.gethousingType();
  },
  methods: {
    searching() {
      this.page = 1;
      this.gethousingType();
    },
    housingTypeUpdate(id) {
      this.$router.push({ path: "/housing-types-update/" + id });
    },
    async gethousingType(limit = null, page = null) {
      if (limit) {
        this.limit = limit;
      }
      if (page) {
        this.page = page;
      }
      const res = await createInstaceAxios.get(
        "housing-types-list-paginate?search=" +
          this.search +
          "&limit=" +
          this.limit +
          "&page=" +
          this.page
      );
      this.housingType = res.data.data.data;
      this.links = res.data.data.links.slice(1, res.data.data.links.length - 1);
    },
    next(num) {
      this.gethousingType(this.limit, num);
    },
    formatDate(value) {
      moment.locale("es");
      if (value) {
        return moment(String(value)).format("LL");
      }
    },
    showAlert(id) {
      // Use sweetalert2
      console.log(id);
      this.$swal({
        title: "¿Estas seguro que quieres eliminar este registro?",
        text: "Al eliminarlo no podrás volver atras!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, eliminar!",
        cancelButtonText: "Cancelar",
      }).then((result) => {
        if (result.isConfirmed) {
          this.delete(id);
        }
      });
    },
    //detele arl from database and show success message
    async delete(id) {
      const res = await createInstaceAxios.delete("housing-types-delete/" + id);
      this.$swal({
        title: "Eliminado!",
        text: "El registro ha sido eliminado correctamente.",
        icon: "success",
        timer: 2000,
        showConfirmButton: false,
      });
      this.gethousingType();
    },
  },
};
</script>
