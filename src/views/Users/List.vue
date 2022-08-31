<template>
  <div class="main-panel">
    <div class="content-wrapper table-responsive">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Usuarios</h4>
          <!--  <router-link
            to="/users-register"
            class="btn btn-primary text-right"
            >Registrar usuario</router-link
          > -->

          <div v-if="!users" class="d-flex justify-content-center mt-4">
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
                    <th>TIPO_DE_DOCUMENTO</th>
                    <th>NÚMERO_DE_DOCUMENTO</th>
                    <th>NOMBRE_Y_APELLIDOS</th>
                    <th>TELÉFONO</th>
                    <th>EMAIL</th>
                    <th>GÉNERO</th>
                    <th>ROL</th>
                    <th>ACCIONES</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="user in users" :key="user.id">
                    <td>{{ user.id }}</td>
                    <td>{{ user.document_type }}</td>
                    <td>{{ user.document_number }}</td>
                    <td>{{ user.name }} {{ user.last_name }}</td>
                    <td>{{ user.phone }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.gender }}</td>
                    <td>{{ user.rol }}</td>
                    <td>
                      <!-- <button
                      @click="employeePerfil(user.id)"
                      class="btn btn-success btn-sm"
                    >
                      <i class="fas fa-user-cog"></i>
                    </button>
                    <button
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
  </div>
  <notifications />
</template>
<script>
import { createInstaceAxios } from "../../utils/instance";
export default {
  name: "Users",
  data() {
    return {
      users: null,
      links: null,
      page: 1,
      limit: 10,
    };
  },
  mounted() {
    this.getUsers();
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
    async getUsers(limit = null, page = null) {
      if (limit) {
        this.limit = limit;
      }
      if (page) {
        this.page = page;
      }
      const res = await createInstaceAxios.get(
        "user-list?limit=" + this.limit + "&page=" + this.page
      );
      this.users = res.data.data.data;
      this.links = res.data.data.links.slice(1, res.data.data.links.length - 1);
    },
    next(num) {
      this.getUsers(this.limit, num);
    },
  },
};
</script>
