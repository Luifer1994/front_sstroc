<template>
  <div class="container-fluid page-body-wrapper full-page-wrapper">
    <div class="content-wrapper d-flex align-items-center auth px-0">
      <div class="row w-100 mx-0">
        <div class="col-lg-4 mx-auto">
          <div class="auth-form-light text-left py-5 px-4 px-sm-5">
            <div class="brand-logo">
              <div class="my-2 d-flex justify-content-center">
                <img src="../assets/logo.png" alt="logo" />
              </div>
            </div>

            <form class="pt-3">
              <div class="form-group">
                <input
                  type="email"
                  v-model="userEmail"
                  class="form-control form-control-lg"
                  placeholder="Email"
                />
                <small v-if="errors.email" class="danger">{{ errors.email[0] }}</small>
              </div>

              <div class="form-group">
                <input
                  v-model="userPassword"
                  type="password"
                  class="form-control form-control-lg"
                  placeholder="Password"
                />
                <small v-if="errors.password" class="danger"
                  >{{ errors.password[0] }}
                </small>
              </div>
              <div class="mt-3">
                <a
                  class="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                  @click="login()"
                >
                  LOGIN
                </a>
              </div>
              <div class="my-2 d-flex justify-content-center">
                <a href="#" class="auth-link text-black">Olvide contraseña</a>
              </div>
            </form>
          </div>
          <footer class="page-footer font-small blue mt-5">
            <!-- Copyright -->
            <div class="footer-copyright text-center py-3" style="font-size: 12px">
              Copyright © 2022 :
              <a href="https://www.unisinucartagena.edu.co" target="_blank"
                >Universidad del Sinú - Cartagena.</a
              >
              Todos los derechos reservados.
            </div>
            <!-- Copyright -->
          </footer>
        </div>
      </div>
    </div>
    <!-- content-wrapper ends -->
  </div>

  <notifications />
</template>
<script>
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      userEmail: null,
      userPassword: null,
      urlApi: process.env.VUE_APP_URL_API,
      errors: {},
    };
  },
  methods: {
    async login() {
      try {
        let dataUser = new Object();
        dataUser.email = this.userEmail;
        dataUser.password = this.userPassword;
        let res = await axios.post(this.urlApi + "user-login", dataUser);
        this.$store.commit("userLogin", res.data.user);
        localStorage.token = res.data.token;
        this.$router.push("/home");
      } catch (error) {
        const err = error.response.data;
        this.errors = err;
        this.$notify({
          title: "Error",
          text: error.response.data.message,
          type: "error",
        });
      }
    },
  },
};
</script>
<style>
.danger {
  color: red;
}
</style>
