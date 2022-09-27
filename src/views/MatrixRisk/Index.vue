<template>
  <div class="main-panel">
    <div class="content-wrapper table-responsive">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Matrices de peligro</h4>
          <router-link to="/matrix-risk-register" class="btn btn-primary text-right"
            >Crear nuevo matriz</router-link
          >
          <div v-if="!matrix" class="d-flex justify-content-center mt-4">
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
              placeholder="Buscar por cualquier campo de la tabla"
              @keyup="searching()"
            />
            <div class="table-responsive">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>CARGO</th>
                    <th>PROCESO</th>
                    <th>AREA</th>
                    <th>TAREA</th>
                    <th>RIESGO</th>
                    <th>FECHA_CREACIÓN</th>
                    <th>CLASIFICACIÓN</th>
                    <th>ACCIONES</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in matrix" :key="item.id">
                    <td>
                      {{ item.id }}
                    </td>

                    <td>
                      {{ item.position.name }}
                    </td>

                    <td>
                      {{ item.process.name }}
                    </td>

                    <td>
                      {{ item.area.name }}
                    </td>

                    <td>
                      {{ item.task.name }}
                    </td>

                    <td>
                      {{ item.risk.name }}
                    </td>

                    <td>
                      {{ formatDate(item.created_at) }}
                    </td>

                    <td>
                      <span
                        v-if="item.clasification == 'RUTINARIO'"
                        class="badge badge-warning font-weight-bold"
                      >
                        {{ item.clasification }}
                      </span>
                      <span v-else class="badge badge-success font-weight-bold">
                        {{ item.clasification }}
                      </span>
                    </td>

                    <td>
                      <router-link
                        :to="{
                          name: 'matrix-risk-detail',
                          params: { id: item.id },
                        }"
                        class="btn btn-primary btn-sm mr-1"
                        title="Detalle"
                      >
                        <i class="fa fa-eye" aria-hidden="true"></i>
                      </router-link>
                      <router-link
                        :to="{
                          name: 'matrix-risk-evaluate',
                          params: { id: item.id },
                        }"
                        class="btn btn-danger btn-sm mr-1"
                        title="Crear seguimiento"
                        :class="{
                          disabled: item.evaluate_matrices_count,
                        }"
                      >
                        <i class="fa fa-flag" aria-hidden="true"></i>
                      </router-link>
                      <!--  <router-link
                      :to="{
                          name: 'matrix-risk-evaluate-detail',
                          params: { id: item.id },
                        }"
                        class="btn btn-success btn-sm mr-1"
                        title="Evaluar"
                      >
                        <i class="fa fa-check-circle" aria-hidden="true"></i>
                      </router-link> -->
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
  name: "Matrix",
  data() {
    return {
      matrix: null,
      links: null,
      page: 1,
      limit: 10,
      search: "",
    };
  },
  mounted() {
    this.getFindings();
  },
  methods: {
    searching() {
      this.page = 1;
      this.getFindings();
    },
    async getFindings(limit = null, page = null) {
      if (limit) {
        this.limit = limit;
      }
      if (page) {
        this.page = page;
      }
      const res = await createInstaceAxios.get(
        "matrix-ris-list?search=" +
          this.search +
          "&limit=" +
          this.limit +
          "&page=" +
          this.page
      );
      this.matrix = res.data.data.data;
      this.links = res.data.data.links.slice(1, res.data.data.links.length - 1);
    },
    /*  showAlert(id) {
      // Use sweetalert2
      console.log(id);
      this.$swal({
        title: "¿Estas seguro que quieres cerrar este hallazgo?",
        text: "Al cerrarlo no podrás hacer mas seguimiento del mismo!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, cerrar!",
        cancelButtonText: "Cancelar",
      }).then((result) => {
        if (result.isConfirmed) {
          this.closed(id);
        }
      });
    }, */
    next(num) {
      this.media = [];
      this.getFindings(this.limit, num);
    },
    formatDate(value) {
      moment.locale("es");
      if (value) {
        return moment(String(value)).format("LL");
      }
    },
    /* async closed(id) {
      const Toast = this.$swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      });
      try {
        const res = await createInstaceAxios.put("finding-closed/" + id);

        Toast.fire({
          icon: "success",
          title: res.data.message,
        });
        this.getFindings();
      } catch (error) {
        Toast.fire({
          icon: "warning",
          title: error.response.message,
        });
      }
    }, */
  },
};
</script>
