<template>
  <div class="main-panel">
    <div class="content-wrapper table-responsive">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Matrices de peligro</h4>
          <router-link
            to="/matrix-risk-register"
            class="btn btn-primary text-right"
            >Crear nuevo matriz</router-link
          >
         <!--  <div v-if="!findings" class="d-flex justify-content-center mt-4">
            <div
              class="spinner-border text-primary"
              style="width: 100px; height: 100px"
              role="status"
            >
              <span class="sr-only">Loading...</span>
            </div>
          </div>
          <div v-else>
            <div class="table-responsive">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>DESCRIPCIÓN</th>
                    <th>CREADO POR</th>
                    <th>AREA</th>
                    <th>FECHA_CREACIÓN</th>
                    <th>ESTADO</th>
                    <th>EVIDENCIAS</th>
                    <th>ACCIONES</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(finding, index) in findings" :key="finding.id">
                    <td>
                      {{ finding.id }}
                    </td>

                    <td>
                      {{ finding.description }}
                      <p class="long-text">{{ finding.long_description }}</p>
                    </td>

                    <td v-if="finding.user.employee">
                      {{ finding.user.employee.name }}
                      {{ finding.user.employee.last_name }}
                    </td>
                    <td v-else></td>
                    <td>{{ finding.area.name }}</td>
                    <td>{{ formatDate(finding.created_at) }}</td>
                    <td>
                      <span v-if="finding.status" class="badge badge-success">
                        ABIERTO
                      </span>
                      <span v-else class="badge badge-danger"> CERRADO</span>
                    </td>
                    <td>
                      <vue-picture-swipe
                        :items="media[index]"
                      ></vue-picture-swipe>
                    </td>
                    <td>
                      <router-link
                        :to="{
                          name: 'findings-detail',
                          params: { id: finding.id },
                        }"
                        class="btn btn-primary btn-sm mr-1"
                      >
                        <i class="fas fa-clipboard-list"></i>
                      </router-link>
                      <button
                      v-if="finding.status"
                        @click="showAlert(finding.id)"
                        class="btn btn-danger btn-sm"
                      >
                        <i class="fas fa-lock"></i>
                      </button>

                       <button
                       v-else
                       disabled
                        class="btn btn-danger btn-sm"
                      >
                        <i class="fas fa-lock"></i>
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
          </div> -->
        </div>
      </div>
    </div>
  </div>
  <notifications />
</template>
<!-- <script>
import { createInstaceAxios } from "../../utils/instance";
import moment from "moment";
import VuePictureSwipe from "vue-picture-swipe";
export default {
  name: "Users",
  components: {
    "vue-picture-swipe": VuePictureSwipe,
  },
  data() {
    return {
      findings: null,
      links: null,
      page: 1,
      limit: 10,
      media: [],
    };
  },
  mounted() {
    this.getFindings();
  },
  methods: {
    async getFindings(limit = null, page = null) {
      if (limit) {
        this.limit = limit;
      }
      if (page) {
        this.page = page;
      }
      const res = await createInstaceAxios.get(
        "finding-list?limit=" + this.limit + "&page=" + this.page
      );
      this.findings = res.data.data.data;
      let num = 0;
      this.findings.forEach((element) => {
        this.media.push([]);
        element.image_findings.forEach((el) => {
          this.media[num].push({
            src: el.url,
            thumbnail: el.url,
            w: 600,
            h: 600,
          });
        });
        num++;
      });
      this.links = res.data.data.links.slice(1, res.data.data.links.length - 1);
    },
    showAlert(id) {
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
        cancelButtonText:"Cancelar"
      }).then((result) => {
        if (result.isConfirmed) {
          this.closed(id);
        }
      });
    },
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
    async closed(id) {
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
    },
  },
};
</script>-->
<style> 
.long-text {
  width: 120px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: dimgrey;
  font-size: 12px;
}
.table td img {
  border-radius: 0%;
}
</style>