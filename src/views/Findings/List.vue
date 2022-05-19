<template>
  <div class="main-panel">
    <div class="content-wrapper table-responsive">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Hallazgos</h4>
          <!--  <router-link to="/users-register" class="btn btn-primary text-right"
            >Crear nuevo hallazgo</router-link
          > -->
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

                  <td>{{ finding.user.name }} {{ finding.user.last_name }}</td>
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
                    <button class="btn btn-primary btn-sm">Seguimiento</button>
                    <!-- <button
                      @click="employeeSurvey(user.id, user.questions_count)"
                      class="btn btn-danger btn-sm"
                    >
                      <i class="fas fa-file-contract"></i>
                    </button>
                     <button
                      @click="employeeUpdate(user.id)"
                      class="btn btn-warning btn-sm"
                    >
                     <i class="fas fa-user-edit"></i>
                    </button>
                    <button
                      @click="employeeDetail(user.id)"
                      class="btn btn-primary btn-sm"
                    >
                      <i class="fas fa-eye"></i>
                    </button> -->
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
  <notifications />
</template>
<script>
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
    /* employeePerfil(id) {
      this.$router.push({ path: "/employee-perfilate/" + id });
    },
    employeeUpdate(id) {
      this.$router.push({ path: "/employee-update/" + id });
    },
    employeeSurvey(id, count_survey) {
      if (count_survey > 0) {
        this.$notify({
          title: "Error",
          text: "Este empleado ya realizó la encuesta",
          type: "error",
        });
      } else {
        this.$router.push({ path: "/employee-survey/" + id });
      }
    },
    employeeDetail(id) {
      this.$router.push({ path: "/employee-detail/" + id });
    }, */
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
            src: process.env.VUE_APP_URL + "images/" + el.url,
            thumbnail: process.env.VUE_APP_URL + "images/" + el.url,
            w: 600,
            h: 600,
          });
        });
        num++;
      });
      this.links = res.data.data.links.slice(1, res.data.data.links.length - 1);
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
  },
};
</script>
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