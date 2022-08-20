<template>
  <div class="main-panel">
    <div class="content-wrapper table-responsive">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Registrar documento</h4>

          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="exampleInputName1">Título</label>
              <input
                type="email"
                class="form-control form-control-sm"
                placeholder="Descripción..."
                v-model="document.title"
                :class="{ 'is-invalid': errors.title }"
              />
              <small v-if="errors.title" class="text-danger">{{ errors.title[0] }}</small>
            </div>

            <div class="form-group col-md-12">
              <label for="exampleInputName1">Descripción</label>
              <textarea
                type="text"
                class="form-control form-control-sm"
                placeholder="Descripción larga..."
                v-model="document.description"
              />
            </div>

            <div class="form-group col-md-6">
              <label for="exampleInputName1">Evidencias</label>
              <input
                accept=".xlsx,.xls,image/*,.doc, .docx,.ppt, .pptx,.txt,.pdf"
                type="file"
                class="form-control form-control-sm"
                @change="uploadFile"
                :class="{ 'is-invalid': errors.url }"
              />
              <small v-if="errors.url" class="text-danger">{{ errors.url[0] }}</small>
            </div>
          </div>

          <router-link to="/documents" type="button" class="btn btn-danger">
            Cancelar
          </router-link>

          <button v-if="disabled" type="button" disabled class="btn btn-primary mx-2">
            Actualizar
          </button>

          <button
            v-else
            @click="updateDocument()"
            type="button"
            class="btn btn-primary mx-2"
          >
            Actualizar
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
      disabled: false,
      document: {
        id: null,
        description: null,
        title: null,
        extension: null,
        url: [],
      },
      errors: {},
    };
  },
  mounted() {
    this.findDocument();
  },
  methods: {
    async findDocument() {
      const res = await createInstaceAxios.get(
        `/document-detail/${this.$route.params.id}`
      );
      this.document = res.data.data;
    },
    async updateDocument() {
      const Toast = this.$swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      });
      try {
        const res = await createInstaceAxios.put(
          "document-update/" + this.$route.params.id,
          this.document
        );
        if (res.data.res) {
          Toast.fire({
            icon: "success",
            title: res.data.message,
          });
          this.$router.push("/documents");
        }
      } catch (er) {
        this.errors = er.response.data;
        Toast.fire({
          icon: "warning",
          title: "Error al actualizar el registro",
        });
      }
    },

    uploadFile(e) {
      console.log(e.target.files);

      let type = e.target.files[0].name.split(".");
      this.document.extension = type[1];

      Array.from(e.target.files).forEach((file) => {
        this.returnFile(file);
      });
    },
    async returnFile(file) {
      this.disabled = true;
      const res = await UploadFile(file);
      this.document.url = res;
      this.disabled = false;
    },
  },
};
</script>
