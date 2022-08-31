<template>
  <div class="main-panel">
    <div class="content-wrapper table-responsive">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Registrar empleado</h4>
          <FormRegisterEmployee></FormRegisterEmployee>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import FormRegisterEmployee from "../../components/Employee/Register.vue";
export default {
  name: "RegisterEmployee",
  components: {
    FormRegisterEmployee,
  },
};
</script>
