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
import DetailMatrixRisk from '../views/MatrixRisk/Detail.vue'
import EvaluateMatrixRisk from '../views/MatrixRisk/Evaluate.vue'
import EvaluateMatrixRiskDetail from '../views/MatrixRisk/DetailEvalueate.vue'
import Events from '../views/Events/Index.vue'
import DocumentList from '../views/Document/Index.vue'
import DocumentRegister from '../views/Document/Register.vue'
import DocumentUpdate from '../views/Document/Update.vue'
import Cover from '../views/Cover/Index.vue'
import ArlsList from '../views/Arls/Index.vue'
import ArlsRegister from '../views/Arls/Register.vue'
import ArlsUpdate from '../views/Arls/Update.vue'
// impor education levels 
import EducationLevels from '../views/EducationLevels/Index.vue'
import EducationLevelsRegister from '../views/EducationLevels/Register.vue'
import EducationLevelsUpdate from '../views/EducationLevels/Update.vue'
//Housing Type
import HousingTypes from '../views/HousingType/Index.vue'
import HousingTypesRegister from '../views/HousingType/Register.vue'
import HousingTypesUpdate from '../views/HousingType/Update.vue'
//Areas
import Areas from '../views/Areas/Index.vue'
import AreasRegister from '../views/Areas/Register.vue'
import AreasUpdate from '../views/Areas/Update.vue'
//pension fount
import PensionFund from '../views/PensionFund/Index.vue'
import PensionFundRegister from '../views/PensionFund/Register.vue'
import PensionFundUpdate from '../views/PensionFund/Update.vue'

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
  },
  {
    path: '/matrix-risk-detail/:id',
    name: 'matrix-risk-detail',
    component: DetailMatrixRisk
  },
  {
    path: '/matrix-risk-evaluate/:id',
    name: 'matrix-risk-evaluate',
    component: EvaluateMatrixRisk
  },
  {
    path: '/matrix-risk-evaluate-detail/:id',
    name: 'matrix-risk-evaluate-detail',
    component: EvaluateMatrixRiskDetail
  },
  {
    path: '/events',
    name: 'events',
    component: Events
  },
  {
    path: '/documents',
    name: 'documents',
    component: DocumentList
  },
  {
    path: '/document-register',
    name: 'document-register',
    component: DocumentRegister
  },
  {
    path: '/document-update/:id',
    name: 'document-update',
    component: DocumentUpdate
  },
  {
    path: '/cover',
    name: 'cover',
    component: Cover
  },
  {
    path: '/arls',
    name: 'arls',
    component: ArlsList,
  },
  {
    path: '/arls-register',
    name: 'arls-register',
    component: ArlsRegister
  },
  {
    path: '/arls-update/:id',
    name: 'arls-update',
    component: ArlsUpdate
  },
  {
    path: '/education-levels',
    name: 'education-levels',
    component: EducationLevels
  },
  {
    path: '/education-levels-register',
    name: 'education-levels-register',
    component: EducationLevelsRegister
  },
  {
    path: '/education-levels-update/:id',
    name: 'education-levels-update',
    component: EducationLevelsUpdate
  },
  {
    path: '/housing-types',
    name: 'housing-types',
    component: HousingTypes
  },
  {
    path: '/housing-types-register',
    name: 'housing-types-register',
    component: HousingTypesRegister
  },
  {
    path: '/housing-types-update/:id',
    name: 'housing-types-update',
    component: HousingTypesUpdate
  },
  {
    path: '/areas',
    name: 'areas',
    component: Areas
  },
  {
    path: '/areas-register',
    name: 'areas-register',
    component: AreasRegister
  },
  {
    path: '/areas-update/:id',
    name: 'areas-update',
    component: AreasUpdate
  },
  {
    path: '/pensions-fund',
    name: 'pensions-fund',
    component: PensionFund
  },
  {
    path: '/pensions-fund-register',
    name: 'pensions-fund-register',
    component: PensionFundRegister
  },
  {
    path: '/pensions-fund-update/:id',
    name: 'pensions-fund-update',
    component: PensionFundUpdate
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
    if (to.name === "login" || to.name === "identification-risk" || to.name === "cover") {
      next();
    } else {
      next("login");
    }
  }
});

export default router
