<template>
  <div class="main-panel">
    <div class="content-wrapper table-responsive">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Registrar Seguimiento</h4>

          <form>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="exampleInputName1">Descripción</label>
                <input
                  type="email"
                  class="form-control form-control-sm"
                  placeholder="Descripción..."
                  v-model="finding.description"
                  :class="{ 'is-invalid': errors.description }"
                />
                <small v-if="errors.description" class="text-danger">{{
                  errors.description[0]
                }}</small>
              </div>

              <div class="form-group col-md-6">
                <label for="exampleInputName1">Evidencias</label>
                <input
                  accept="image/jpeg,jpg,png"
                  type="file"
                  class="form-control form-control-sm"
                  @change="uploadImage"
                  multiple
                  :class="{ 'is-invalid': errors.images }"
                />
                <small v-if="errors.images" class="text-danger">{{
                  errors.images[0]
                }}</small>
              </div>

              <div class="form-group col-md-12">
                <label for="exampleInputName1">Descripción larga</label>
                <textarea
                  type="email"
                  class="form-control form-control-sm"
                  placeholder="Descripción larga..."
                  v-model="finding.long_description"
                />
              </div>

              <div class="form-group col-md-4">
                <div class="text-center row" v-if="previewImage.length > 0">
                  <div
                    class="col-sm col"
                    v-for="img in previewImage"
                    :key="img"
                  >
                    <img
                      :src="img.url"
                      class="rounded preview-image"
                      alt="..."
                    />
                    <br />
                    <button
                      @click="removeImage(img.url)"
                      class="btn btn-danger btn-sm"
                    >
                      <i class="fas fa-trash-alt"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <router-link to="/" type="button" class="btn btn-danger">
            Cancelar
          </router-link>
          <button
            v-if="disabled"
            type="button"
            disabled
            class="btn btn-primary mx-2"
          >
            Registrar
          </button>

          <button
            v-else
            @click="regsiterFinding()"
            type="button"
            class="btn btn-primary mx-2"
          >
            Registrar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createInstaceAxios } from "../../utils/instance";
import { UploadFile } from "../../utils/firebase";
export default {
  data() {
    return {
      areas: [],
      disabled: false,
      previewImage: [],
      finding: {
        description: null,
        long_description: null,
        finding_id: this.$route.params.id,
        images: [],
      },
      errors: {},
    };
  },
  methods: {
    async regsiterFinding() {
      const Toast = this.$swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      });
      try {
        const res = await createInstaceAxios.post(
          "tracing-register",
          this.finding
        );
        if (res.data.res) {
          Toast.fire({
            icon: "success",
            title: res.data.message,
          });
          this.$router.push("/findings-detail/" + this.$route.params.id);
        }
      } catch (er) {
        this.errors = er.response.data;
        Toast.fire({
          icon: "warning",
          title: "Error al crear el registro",
        });
      }
    },

    uploadImage(e) {
      Array.from(e.target.files).forEach((file) => {
        this.returnImage(file);
      });
    },
    async returnImage(file) {
      this.disabled = true;
      const res = await UploadFile(file);
      this.finding.images.push({ url: res });
      this.previewImage.push({ url: res });
      this.disabled = false;
    },
    removeImage(e) {
      console.log(e);
      this.previewImage = this.previewImage.filter((item) => item.url !== e);
    },
  },
};
</script>