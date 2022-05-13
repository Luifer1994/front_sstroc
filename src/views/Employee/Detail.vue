<template>
  <div class="main-panel">
    <div class="content-wrapper table-responsive">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Información de empleado</h4>
          <DetailEmployee></DetailEmployee>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import DetailEmployee from "../../components/Employee/Detail.vue";
export default {
  name: "RegisterEmployee",
  components: {
    DetailEmployee,
  },
};
</script>