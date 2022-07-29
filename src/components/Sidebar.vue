<template>
  <nav class="sidebar sidebar-offcanvas" id="sidebar">
    <ul class="nav">
      <li class="nav-item">
        <router-link to="/" class="nav-link">
          <i class="fa fa-home mx-2" aria-hidden="true"></i>
          <span class="menu-title">Home</span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/employee-list" class="nav-link">
          <i class="fas fa-user-tie mx-2"></i>
          <span class="menu-title">Empleados</span>
        </router-link>
      </li>

      <li class="nav-item">
        <router-link to="/users-list" class="nav-link">
          <i class="fas fa-user-alt mx-2"></i>
          <span class="menu-title">Usuarios</span>
        </router-link>
      </li>

      <li class="nav-item">
        <router-link to="/findings-list" class="nav-link">
          <i class="fas fa-exclamation-circle mx-2"></i>
          <span class="menu-title">Hallazgos</span>
        </router-link>
      </li>

      <li class="nav-item">
        <router-link to="/matrix-risk-index" class="nav-link">
          <i class="fa fa-exclamation-triangle mx-2" aria-hidden="true"></i>
          <span class="menu-title">Matrices de peligro</span>
        </router-link>
      </li>

      <li class="nav-item">
        <router-link to="/events" class="nav-link">
          <i class="fa fa-calendar mx-2" aria-hidden="true"></i>
          <span class="menu-title">Eventos</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  name: "Sidebar",
};
</script>
<style>
a.router-link-exact-active {
  background-color: rgba(108, 153, 186, 0.383);
  font-weight: bold;
}
</style>
