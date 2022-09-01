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

      <li class="nav-item">
        <router-link to="/documents" class="nav-link">
          <i class="fa fa-file mx-2" aria-hidden="true"></i>
          <span class="menu-title">Documentos</span>
        </router-link>
      </li>

      <li class="nav-item" v-if="this.$store.state.user.rol_id == 1">
        <a class="nav-link collapsed" data-toggle="collapse" href="#ui-basic">
          <i class="fa fa-cog mx-2" aria-hidden="true"></i>
          <span class="menu-title">Configuración</span>
          <i class="menu-arrow"></i>
        </a>
        <div class="collapse" id="ui-basic" style="background-color: white">
          <ul class="nav flex-column sub-menu">
            <li class="nav-item">
              <router-link to="/arls" class="nav-link">Arls</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/pensions-fund" class="nav-link"
                >Fondo de pensiones</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/education-levels" class="nav-link"
                >Nidel de educación</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/housing-types" class="nav-link"
                >Tipos de vivienda</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/areas" class="nav-link">Áreas</router-link>
            </li>
          </ul>
        </div>
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
  background-color: #7cabc9;
  font-weight: bold;
}
.sidebar .nav .nav-item.active > .nav-link {
  background: #7cabc9;
  position: relative;
}

.sidebar .nav .nav-item.active > .nav-link {
  background: #7cabc9;
  position: relative;
}

.sidebar .nav:not(.sub-menu) > .nav-item > .nav-link[aria-expanded="true"] {
  background-color: #7cabc9;
  font-weight: bold;
  color: rgb(54, 54, 54);
}

.sidebar .nav.sub-menu {
  margin-bottom: 0;
  margin-top: 0;
  list-style: none;
  padding: 0.25rem 0 0 3.07rem;
  background: #7cabc9;
  padding-bottom: 12px;
  color: rgb(46, 46, 46);
}
a.router-link-exact-active {
  background-color: #7cabc9;
  font-weight: bold;
}

.sidebar .nav.sub-menu {
  margin-bottom: 0;
  margin-top: 0;
  list-style: none;
  padding: 0.25rem 0 0 3.07rem;
  background: #7cabc9;
  padding-bottom: 12px;
  color: rgb(46, 46, 46);
}

.sidebar .nav.sub-menu {
  margin-bottom: 0;
  margin-top: 0;
  list-style: none;
  padding: 0.25rem 0 0 3.07rem;
  background: #ffffff;
  padding-bottom: 12px;
}

.sidebar .nav.sub-menu .nav-item .nav-link {
  color: rgb(80, 80, 80);
  padding: 0.7rem 1rem;
  position: relative;
  font-size: 0.875rem;
  line-height: 1;
  height: auto;
  border-top: 0;
}
</style>
