import { createRouter, createWebHistory } from 'vue-router'
import axios from "axios";
import Login from '../views/Login.vue'
import EmployeeList from '../views/Employee/List.vue'
import EmployeeRegister from '../views/Employee/Register.vue'
import EmployeePerfilate from '../views/Employee/Perfilate.vue'
import EmployeeSurvey from '../views/Employee/Survey.vue'

const routes = [
  {
    path: '/',
    name: 'employee-list',
    component: EmployeeList
  },
  {
    path: '/employee-register',
    name: 'employee-register',
    component: EmployeeRegister
  },
  {
    path: '/employee-perfilate/:id',
    name: 'employee-perfilate',
    component: EmployeePerfilate
  },
  {
    path: '/employee-survey/:id',
    name: 'smployee-survey',
    component: EmployeeSurvey
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

async function validateSesion() {
  const urlApi = process.env.VUE_APP_URL_API;
  const token = localStorage.getItem("token");
  try {
    const res = await axios.get(urlApi + "validate-sesion", {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (res.data) {
      return true;
    }
  } catch (error) {
    if (error) {
      localStorage.removeItem("token");
      localStorage.removeItem("vuex");
      window.location.reload();
    }
  }
}

function existToken() {
  if (localStorage.getItem("token")) {
    return true;
  }
}

router.beforeEach((to, from, next) => {
  var isLogin = existToken();
  if (isLogin && validateSesion()) {
    next();
  } else {
    if (to.name === "login") {
      next();
    } else {
      next("login");
    }
  }
});

export default router
