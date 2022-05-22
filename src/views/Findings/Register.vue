<template>
  <div class="main-panel">
    <div class="content-wrapper table-responsive">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Registrar hallazgo</h4>

          <form>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="exampleSelectGender">Area</label>
                <select
                  class="custom-select"
                  :class="{ 'is-invalid': errors.area_id }"
                  v-model="finding.area_id"
                >
                  <option v-for="area in areas" :key="area.id" :value="area.id">
                    {{ area.name }}
                  </option>
                </select>
                <small v-if="errors.area_id" class="text-danger">{{
                  errors.area_id[0]
                }}</small>
              </div>

              <div class="form-group col-md-6">
                <label for="exampleInputName1">Descripción</label>
                <input
                  type="email"
                  class="form-control form-control-sm"
                  placeholder="Apellidos..."
                  v-model="finding.description"
                  :class="{ 'is-invalid': errors.description }"
                />
                <small v-if="errors.description" class="text-danger">{{
                  errors.description[0]
                }}</small>
              </div>

              <div class="form-group col-md-12">
                <label for="exampleInputName1">Descripción larga</label>
                <textarea
                  type="email"
                  class="form-control form-control-sm"
                  placeholder="Descripciòn larga..."
                  v-model="finding.long_description"
                />
              </div>

              <div class="form-group col-md-6">
                <label for="exampleInputName1">Imagenes</label>
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

          <img
            v-if="previewImage"
            :src="previewImage"
            class="uploading-image"
          />
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
      previewImage: null,
      disabled: false,
      finding: {
        description: null,
        long_description: null,
        area_id: null,
        images: [],
      },
      errors: {},
    };
  },
  mounted() {
    this.getAreas();
  },
  methods: {
    async regsiterFinding() {
      try {
        const res = await createInstaceAxios.post(
          "finding-register",
          this.finding
        );
        if (res.data.res) {
          this.$router.push("/findings-list");
        }
      } catch (er) {
        this.errors = er.response.data;
        console.log(this.errors);
      }
    },
    async getAreas() {
      const res = await createInstaceAxios.get("areas-list");
      this.areas = res.data.data;
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
      this.disabled = false;
    },
  },
};
</script>