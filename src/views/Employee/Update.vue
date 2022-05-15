<template>
  <div class="main-panel">
    <div class="content-wrapper table-responsive">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Actualizar empleado</h4>
          <FormUpdateEmployee></FormUpdateEmployee>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import FormUpdateEmployee from "../../components/Employee/Update.vue";
export default {
  name: "RegisterEmployee",
  components: {
    FormUpdateEmployee,
  },
};
</script>