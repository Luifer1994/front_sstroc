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
      $route.name === 'home'
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
      $route.name === 'home'
    "
    class="container-fluid page-body-wrapper"
  >
    <sidebar></sidebar>
    <router-view />
  </div>
  <router-view
    v-if="$route.name === 'login' || $route.name === 'identification-risk'"
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

