<template>
  <nav class="sidebar sidebar-offcanvas" id="sidebar">
    <ul class="nav">
      <li class="nav-item">
        <router-link to="/" class="nav-link">
          <i class="fas fa-user-tie mx-1"></i>
          <span class="menu-title">Empleados</span>
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
