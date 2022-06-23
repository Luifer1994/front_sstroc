import { createRouter, createWebHistory } from 'vue-router'
import axios from "axios";
import Login from '../views/Login.vue'
import Home from '../views/HomeView.vue'
import EmployeeList from '../views/Employee/List.vue'
import UsersList from '../views/Users/List.vue'
import EmployeeRegister from '../views/Employee/Register.vue'
import UsersRegister from '../views/Users/Register.vue'
import EmployeePerfilate from '../views/Employee/Perfilate.vue'
import EmployeeSurvey from '../views/Employee/Survey.vue'
import EmployeeDetail from '../views/Employee/Detail.vue'
import EmployeeUpdate from '../views/Employee/Update.vue'
import FindingsList from '../views/Findings/List.vue'
import FindingsRegister from '../views/Findings/Register.vue'
import FindingsDetail from '../views/Findings/Detail.vue'
import  TracingRegister from '../views/Tracing/Register.vue'
import IdentificationRisk from '../views/IdentificationRisk/Form.vue'
import RegisterMatrixRisk from '../views/MatrixRisk/Register.vue'

import ListMatrixRisk from '../views/MatrixRisk/Index.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/employee-list',
    name: 'employee-list',
    component: EmployeeList
  },
  {
    path: '/employee-register',
    name: 'employee-register',
    component: EmployeeRegister
  },
  {
    path: '/employee-detail/:id',
    name: 'employee-detail',
    component: EmployeeDetail
  },
  {
    path: '/employee-update/:id',
    name: 'employee-update',
    component: EmployeeUpdate
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
  },
  {
    path: '/users-list',
    name: 'users-list',
    component: UsersList
  },
  {
    path: '/users-register/:id',
    name: 'users-register',
    component: UsersRegister
  },
  {
    path: '/findings-list',
    name: 'findings-list',
    component: FindingsList
  },
  {
    path: '/findings-register',
    name: 'findings-register',
    component: FindingsRegister
  },
  {
    path: '/findings-detail/:id',
    name: 'findings-detail',
    component: FindingsDetail
  },
  {
    path: '/tracing-register/:id',
    name: 'tracing-register',
    component: TracingRegister
  },
  {
    path: '/identification-risk',
    name: 'identification-risk',
    component: IdentificationRisk
  },
  {
    path: '/matrix-risk-index',
    name: 'matrix-risk-index',
    component: ListMatrixRisk
  },
  {
    path: '/matrix-risk-register',
    name: 'matrix-risk-register',
    component: RegisterMatrixRisk
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
    if (to.name === "login" || to.name === "identification-risk") {
      next();
    } else {
      next("login");
    }
  }
});

export default router
