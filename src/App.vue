<template>
  <Nav
    v-if="
      $route.name === 'employee-list' ||
      $route.name === 'employee-register' ||
      $route.name === 'employee-detail' ||
      $route.name === 'employee-update' ||
      $route.name === 'employee-perfilate' ||
      $route.name === 'smployee-survey' ||
      $route.name === 'users-list' ||
      $route.name === 'users-register' ||
      $route.name === 'findings-list' ||
      $route.name === 'findings-register' ||
      $route.name === 'findings-detail' ||
      $route.name === 'tracing-register' ||
      $route.name === 'matrix-risk-register' ||
      $route.name === 'matrix-risk-index' ||
      $route.name === 'matrix-risk-detail' ||
      $route.name === 'matrix-risk-evaluate' ||
      $route.name === 'matrix-risk-evaluate-detail' ||
      $route.name === 'home' ||
      $route.name === 'events' ||
      $route.name === 'documents' ||
      $route.name === 'document-register' ||
      $route.name === 'document-update' ||
      $route.name === 'arls' ||
      $route.name === 'arls-register' ||
      $route.name === 'arls-update' ||
      $route.name === 'education-levels' ||
      $route.name === 'education-levels-register' ||
      $route.name === 'education-levels-update' ||
      $route.name === 'housing-types' ||
      $route.name === 'housing-types-register' ||
      $route.name === 'housing-types-update' ||
      $route.name === 'areas' ||
      $route.name === 'areas-register' ||
      $route.name === 'areas-update' ||
      $route.name === 'pensions-fund' ||
      $route.name === 'pensions-fund-register' ||
      $route.name === 'pensions-fund-update' ||
      $route.name === 'country' ||
      $route.name === 'country-register' ||
      $route.name === 'country-update' ||
      $route.name === 'cities' ||
      $route.name === 'cities-register' ||
      $route.name === 'cities-update' ||
      $route.name === 'marital-status' ||
      $route.name === 'marital-status-register' ||
      $route.name === 'marital-status-update' ||
      $route.name === 'kingdreds' ||
      $route.name === 'kingdreds-register' ||
      $route.name === 'kingdreds-update' ||
      $route.name === 'positions' ||
      $route.name === 'positions-register' ||
      $route.name === 'positions-update' ||
      $route.name === 'proccess' ||
      $route.name === 'proccess-register' ||
      $route.name === 'proccess-update' ||
      $route.name === 'risk-types' ||
      $route.name === 'risk-types-register' ||
      $route.name === 'risk-types-update' ||
      $route.name === 'risks' ||
      $route.name === 'risks-register' ||
      $route.name === 'risks-update' ||
      $route.name === 'document-types' ||
      $route.name === 'document-types-register' ||
      $route.name === 'document-types-update' ||
      $route.name === 'contrac-types' ||
      $route.name === 'contrac-types-register' ||
      $route.name === 'contrac-types-update' ||
      $route.name === 'task' ||
      $route.name === 'task-register' ||
      $route.name === 'task-update'
    "
  ></Nav>
  <div
    v-if="
      $route.name === 'employee-list' ||
      $route.name === 'employee-register' ||
      $route.name === 'employee-detail' ||
      $route.name === 'employee-update' ||
      $route.name === 'employee-perfilate' ||
      $route.name === 'smployee-survey' ||
      $route.name === 'users-list' ||
      $route.name === 'users-register' ||
      $route.name === 'findings-list' ||
      $route.name === 'findings-register' ||
      $route.name === 'findings-detail' ||
      $route.name === 'tracing-register' ||
      $route.name === 'matrix-risk-register' ||
      $route.name === 'matrix-risk-index' ||
      $route.name === 'matrix-risk-detail' ||
      $route.name === 'matrix-risk-evaluate' ||
      $route.name === 'matrix-risk-evaluate-detail' ||
      $route.name === 'events' ||
      $route.name === 'home' ||
      $route.name === 'documents' ||
      $route.name === 'document-register' ||
      $route.name === 'document-update' ||
      $route.name === 'arls' ||
      $route.name === 'arls-register' ||
      $route.name === 'arls-update' ||
      $route.name === 'education-levels' ||
      $route.name === 'education-levels-register' ||
      $route.name === 'education-levels-update' ||
      $route.name === 'housing-types' ||
      $route.name === 'housing-types-register' ||
      $route.name === 'housing-types-update' ||
      $route.name === 'areas' ||
      $route.name === 'areas-register' ||
      $route.name === 'areas-update' ||
      $route.name === 'pensions-fund' ||
      $route.name === 'pensions-fund-register' ||
      $route.name === 'pensions-fund-update' ||
      $route.name === 'country' ||
      $route.name === 'country-register' ||
      $route.name === 'country-update' ||
      $route.name === 'cities' ||
      $route.name === 'cities-register' ||
      $route.name === 'cities-update' ||
      $route.name === 'marital-status' ||
      $route.name === 'marital-status-register' ||
      $route.name === 'marital-status-update' ||
      $route.name === 'kingdreds' ||
      $route.name === 'kingdreds-register' ||
      $route.name === 'kingdreds-update' ||
      $route.name === 'positions' ||
      $route.name === 'positions-register' ||
      $route.name === 'positions-update' ||
      $route.name === 'proccess' ||
      $route.name === 'proccess-register' ||
      $route.name === 'proccess-update' ||
      $route.name === 'risk-types' ||
      $route.name === 'risk-types-register' ||
      $route.name === 'risk-types-update' ||
      $route.name === 'risks' ||
      $route.name === 'risks-register' ||
      $route.name === 'risks-update' ||
      $route.name === 'document-types' ||
      $route.name === 'document-types-register' ||
      $route.name === 'document-types-update' ||
      $route.name === 'contrac-types' ||
      $route.name === 'contrac-types-register' ||
      $route.name === 'contrac-types-update' ||
      $route.name === 'task' ||
      $route.name === 'task-register' ||
      $route.name === 'task-update'
    "
    class="container-fluid page-body-wrapper"
  >
    <sidebar></sidebar>
    <router-view />
  </div>
  <router-view
    v-if="
      $route.name === 'login' ||
      $route.name === 'identification-risk' ||
      $route.name === 'index'
    "
  />
</template>
<script>
import sidebar from "@/components/Sidebar";
import Nav from "./components/Nav.vue";
export default {
  components: {
    sidebar,
    Nav,
  },
};
</script>
