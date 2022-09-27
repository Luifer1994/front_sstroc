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

//countries
import Countries from '../views/Countries/Index.vue'
import CountriesRegister from '../views/Countries/Register.vue'
import CountriesUpdate from '../views/Countries/Update.vue'

//cities
import Cities from '../views/Cities/Index.vue'
import CitiesRegister from '../views/Cities/Register.vue'
import CitiesUpdate from '../views/Cities/Update.vue'
//marital status
import MaritalStatus from '../views/MaritalStatus/Index.vue'
import MaritalStatusRegister from '../views/MaritalStatus/Register.vue'
import MaritalStatusUpdate from '../views/MaritalStatus/Update.vue'
//kingdreds
import Kingdreds from '../views/Kingdreds/Index.vue'
import KingdredsRegister from '../views/Kingdreds/Register.vue'
import KingdredsUpdate from '../views/Kingdreds/Update.vue'
//positions
import Positions from '../views/Positions/Index.vue'
import PositionsRegister from '../views/Positions/Register.vue'
import PositionsUpdate from '../views/Positions/Update.vue'
//proccess
import Proccess from '../views/Proccess/Index.vue'
import ProccessRegister from '../views/Proccess/Register.vue'
import ProccessUpdate from '../views/Proccess/Update.vue'

// risk types
import RiskTypes from '../views/RiskTypes/Index.vue'
import RiskTypesRegister from '../views/RiskTypes/Register.vue'
import RiskTypesUpdate from '../views/RiskTypes/Update.vue'
//risks
import Risks from '../views/Risks/Index.vue'
import RisksRegister from '../views/Risks/Register.vue'
import RisksUpdate from '../views/Risks/Update.vue'
//document types
import DocumentTypes from '../views/DocumentTypes/Index.vue'
import DocumentTypesRegister from '../views/DocumentTypes/Register.vue'
import DocumentTypesUpdate from '../views/DocumentTypes/Update.vue'
// contrac types
import ContractTypes from '../views/ContractTypes/Index.vue'
import ContractTypesRegister from '../views/ContractTypes/Register.vue'
import ContractTypesUpdate from '../views/ContractTypes/Update.vue'
//task
import Task from '../views/Task/Index.vue'
import TaskRegister from '../views/Task/Register.vue'
import TaskUpdate from '../views/Task/Update.vue'

const routes = [
  {
    path: '/',
    name: 'index',
    component: Cover
  },
  {
    path: '/home',
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
  },
  {
    path: '/country',
    name: 'country',
    component: Countries
  },
  {
    path: '/country-register',
    name: 'country-register',
    component: CountriesRegister
  },
  {
    path: '/country-update/:id',
    name: 'country-update',
    component: CountriesUpdate
  },
  {
    path: '/cities',
    name: 'cities',
    component: Cities
  },
  {
    path: '/cities-register',
    name: 'cities-register',
    component: CitiesRegister
  },
  {
    path: '/cities-update/:id',
    name: 'cities-update',
    component: CitiesUpdate
  },
  {
    path: '/marital-status',
    name: 'marital-status',
    component: MaritalStatus
  },
  {
    path: '/marital-status-register',
    name: 'marital-status-register',
    component: MaritalStatusRegister
  },
  {
    path: '/marital-status-update/:id',
    name: 'marital-status-update',
    component: MaritalStatusUpdate
  },
  {
    path: '/kingdreds',
    name: 'kingdreds',
    component: Kingdreds
  },
  {
    path: '/kingdreds-register',
    name: 'kingdreds-register',
    component: KingdredsRegister
  },
  {
    path: '/kingdreds-update/:id',
    name: 'kingdreds-update',
    component: KingdredsUpdate
  },
  {
    path: '/positions',
    name: 'positions',
    component: Positions
  },
  {
    path: '/positions-register',
    name: 'positions-register',
    component: PositionsRegister
  },
  {
    path: '/positions-update/:id',
    name: 'positions-update',
    component: PositionsUpdate
  },
  {
    path: '/proccess',
    name: 'proccess',
    component: Proccess
  },
  {
    path: '/proccess-register',
    name: 'proccess-register',
    component: ProccessRegister
  },
  {
    path: '/proccess-update/:id',
    name: 'proccess-update',
    component: ProccessUpdate
  },
  {
    path: '/risk-types',
    name: 'risk-types',
    component: RiskTypes
  },
  {
    path: '/risk-types-register',
    name: 'risk-types-register',
    component: RiskTypesRegister
  },
  {
    path: '/risk-types-update/:id',
    name: 'risk-types-update',
    component: RiskTypesUpdate
  },
  {
    path: '/risks',
    name: 'risks',
    component: Risks
  },
  {
    path: '/risks-register',
    name: 'risks-register',
    component: RisksRegister
  },
  {
    path: '/risks-update/:id',
    name: 'risks-update',
    component: RisksUpdate
  },
  {
    path: '/document-types', 
    name: 'document-types',
    component: DocumentTypes
  },
  {
    path: '/document-types-register',
    name: 'document-types-register',
    component: DocumentTypesRegister
  },
  {
    path: '/document-types-update/:id',
    name: 'document-types-update',
    component: DocumentTypesUpdate
  },
  {
    path: '/contrac-types',
    name: 'contrac-types',
    component: ContractTypes
  },
  {
    path: '/contrac-types-register',
    name: 'contrac-types-register',
    component: ContractTypesRegister
  },
  {
    path: '/contrac-types-update/:id',
    name: 'contrac-types-update',
    component: ContractTypesUpdate
  },
  {
    path: '/task',
    name: 'task',
    component: Task
  },
  {
    path: '/task-register',
    name: 'task-register',
    component: TaskRegister
  },
  {
    path: '/task-update/:id',
    name: 'task-update',
    component: TaskUpdate
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
    if (to.name === "login" || to.name === "identification-risk" || to.name === "index") {
      next();
    } else {
      next("login");
    }
  }
});

export default router
