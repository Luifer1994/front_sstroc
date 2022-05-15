<template>
  <div class="main-panel">
    <div class="content-wrapper table-responsive">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Regsitrar usuario</h4>
          <FormRegisterUser></FormRegisterUser>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import FormRegisterUser from "../../components/Users/Register.vue";
export default {
  name: "RegisterUser",
  components: {
    FormRegisterUser,
  },
};
</script>