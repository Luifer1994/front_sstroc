<template>
  <div class="main-panel">
    <div class="content-wrapper table-responsive">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Documentos</h4>
          <router-link to="/document-register" class="btn btn-primary text-right"
            >Registrar documento</router-link
          >

          <div v-if="!documents" class="d-flex justify-content-center mt-4">
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
                  <tr v-for="document in documents" :key="document.id">
                    <td>{{ document.id }}</td>
                    <td>{{ document.title }}</td>
                    <td>{{ formatDate(document.created_at) }}</td>
                    <td>
                      <button
                        @click="documentUpdate(document.id)"
                        class="btn btn-warning btn-sm"
                      >
                        <i class="fas fa-user-edit"></i>
                      </button>
                      <button
                        @click="
                          downloadItem({
                            url: document.url,
                            label: document.title + '.' + document.extension,
                          })
                        "
                        class="btn btn-primary btn-sm"
                      >
                        <i class="fa fa-download" aria-hidden="true"></i>
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
  name: "documents",
  data() {
    return {
      documents: null,
      links: null,
      page: 1,
      limit: 10,
      search: "",
    };
  },
  mounted() {
    this.getdocuments();
  },
  methods: {
    searching() {
      this.page = 1;
      this.getdocuments();
    },
    documentUpdate(id) {
      this.$router.push({ path: "/document-update/" + id });
    },
    //dowload file from url storage firebase
    async downloadItem({ url, label }) {
      const Toast = this.$swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      });
      Toast.fire({
        icon: "success",
        title: "Descargando documento...",
      });
      const response = await createInstaceAxios.get(url, { responseType: "blob" });
      const blob = new Blob([response.data], { type: "application/pdf" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = label;
      link.click();
      URL.revokeObjectURL(link.href);
      Toast.fire({
        icon: "success",
        title: "Documento descargado con exito",
      });
    },
    async getdocuments(limit = null, page = null) {
      if (limit) {
        this.limit = limit;
      }
      if (page) {
        this.page = page;
      }
      const res = await createInstaceAxios.get(
        "document-list?search=" +
          this.search +
          "&limit=" +
          this.limit +
          "&page=" +
          this.page
      );
      this.documents = res.data.data.data;
      this.links = res.data.data.links.slice(1, res.data.data.links.length - 1);
    },
    next(num) {
      this.getdocuments(this.limit, num);
    },
    formatDate(value) {
      moment.locale("es");
      if (value) {
        return moment(String(value)).format("LL");
      }
    },
  },
};
</script>
