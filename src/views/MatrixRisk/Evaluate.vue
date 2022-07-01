<template>
  <div class="main-panel">
    <div class="content-wrapper table-responsive">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">
            Evaluar matriz # {{ this.$route.params.id }}
          </h4>

          <form>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="exampleInputName1">Nivel de deficiencia</label>
                <select
                  class="custom-select"
                  :class="{ 'is-invalid': errors.deficiency_level }"
                  v-model="newMatrix.deficiency_level"
                >
                  <option value="10">Muy alta</option>
                  <option value="10">Alta</option>
                  <option value="6">Media</option>
                  <option value="0">Baja</option>
                </select>

                <small v-if="errors.deficiency_level" class="text-danger">{{
                  errors.deficiency_level[0]
                }}</small>
              </div>

              <div class="form-group col-md-6">
                <label for="exampleInputName1">Nivel de exposición</label>
                <select
                  class="custom-select"
                  :class="{ 'is-invalid': errors.exposition_level }"
                  v-model="newMatrix.exposition_level"
                >
                  <option value="4">Continuo</option>
                  <option value="3">Frecuente</option>
                  <option value="2">Ocasional</option>
                  <option value="1">Esporádica</option>
                </select>

                <small v-if="errors.exposition_level" class="text-danger">{{
                  errors.exposition_level[0]
                }}</small>
              </div>

              <div class="form-group col-md-6">
                <label for="exampleInputName1">Nivel de consecuencia</label>
                <select
                  class="custom-select"
                  :class="{ 'is-invalid': errors.consequence_level }"
                  v-model="newMatrix.consequence_level"
                >
                  <option value="100">MORTAL O CATASTRÓFICO (M)</option>
                  <option value="60">MUY GRAVE( MG)</option>
                  <option value="25">GRAVE (G)</option>
                  <option value="10">LEVE (L)</option>
                </select>

                <small v-if="errors.consequence_level" class="text-danger">{{
                  errors.consequence_level[0]
                }}</small>
              </div>

              <div class="form-group col-md-6">
                <label for="exampleInputName1"
                  >Número de expuestos en planta</label
                >
                <input
                  type="number"
                  class="form-control form-control-sm"
                  placeholder="Número..."
                  v-model="newMatrix.number_exposed_plant"
                  :class="{ 'is-invalid': errors.number_exposed_plant }"
                />

                <small v-if="errors.number_exposed_plant" class="text-danger">{{
                  errors.number_exposed_plant[0]
                }}</small>
              </div>

              <div class="form-group col-md-6">
                <label for="exampleInputName1"
                  >Número de expuestos visitantes</label
                >
                <input
                  type="number"
                  class="form-control form-control-sm"
                  placeholder="Número..."
                  v-model="newMatrix.number_exposed_visitor"
                  :class="{ 'is-invalid': errors.number_exposed_visitor }"
                />

                <small
                  v-if="errors.number_exposed_visitor"
                  class="text-danger"
                  >{{ errors.number_exposed_visitor[0] }}</small
                >
              </div>

              <div class="form-group col-md-6">
                <label for="exampleInputName1"
                  >Número de expuestos contratistas</label
                >
                <input
                  type="number"
                  class="form-control form-control-sm"
                  placeholder="Número..."
                  v-model="newMatrix.number_exposed_contrataing"
                  :class="{ 'is-invalid': errors.number_exposed_contrataing }"
                />

                <small
                  v-if="errors.number_exposed_contrataing"
                  class="text-danger"
                  >{{ errors.number_exposed_contrataing[0] }}</small
                >
              </div>

              <div class="form-group col-md-6">
                <label for="exampleSelectGender"
                  >¿Existe requerimiento legal especifico asociado?</label
                >
                <select
                  class="custom-select"
                  :class="{ 'is-invalid': errors.exist_legal_requirement }"
                  v-model="newMatrix.exist_legal_requirement"
                >
                  <option :value="false">NO</option>
                  <option :value="true">SI</option>
                </select>
                <small
                  v-if="errors.exist_legal_requirement"
                  class="text-danger"
                  >{{ errors.exist_legal_requirement[0] }}</small
                >
              </div>

              <div
                class="form-group col-md-6"
                v-if="newMatrix.exist_legal_requirement"
              >
                <label class="form-label"
                  >Descripción del requerimiento legal</label
                >
                <textarea
                  class="form-control"
                  rows="3"
                  v-model="newMatrix.detail_legal_requirement"
                  :class="{ 'is-invalid': errors.detail_legal_requirement }"
                ></textarea>
                <small
                  v-if="errors.detail_legal_requirement"
                  class="text-danger"
                  >{{ errors.detail_legal_requirement[0] }}</small
                >
              </div>

              <div class="form-group col-md-6">
                <label for="exampleSelectGender">¿Existe nuevo control?</label>
                <select
                  class="custom-select"
                  :class="{ 'is-invalid': errors.exist_new_control }"
                  v-model="newMatrix.exist_new_control"
                >
                  <option value="SI">SI</option>
                  <option value="NO">NO</option>
                  <option value="NO APLICA">NO APLICA</option>
                </select>
                <small v-if="errors.exist_new_control" class="text-danger">{{
                  errors.exist_new_control[0]
                }}</small>
              </div>

              <div
                class="form-group col-md-6"
                v-if="newMatrix.exist_new_control === 'SI'"
              >
                <label class="form-label">Descripción del control</label>
                <textarea
                  class="form-control"
                  rows="3"
                  v-model="newMatrix.detail_control"
                  :class="{ 'is-invalid': errors.detail_control }"
                ></textarea>
                <small v-if="errors.detail_control" class="text-danger">{{
                  errors.detail_control[0]
                }}</small>
              </div>

              <div
                class="form-group col-md-6"
                v-if="newMatrix.exist_new_control === 'SI'"
              >
                <label class="form-label">Tipo de control</label>
                <textarea
                  class="form-control"
                  rows="3"
                  v-model="newMatrix.control_type"
                  :class="{ 'is-invalid': errors.control_type }"
                ></textarea>
                <small v-if="errors.control_type" class="text-danger">{{
                  errors.control_type[0]
                }}</small>
              </div>

              <div
                class="form-group col-md-6"
                v-if="newMatrix.exist_new_control === 'SI'"
              >
                <label class="form-label">Fecha prograda del control</label>
                <input
                  type="date"
                  class="form-control"
                  rows="3"
                  v-model="newMatrix.date_programing_control"
                  :class="{ 'is-invalid': errors.date_programing_control }"
                />
                <small
                  v-if="errors.date_programing_control"
                  class="text-danger"
                  >{{ errors.date_programing_control[0] }}</small
                >
              </div>

              <div
                class="form-group col-md-6"
                v-if="newMatrix.exist_new_control === 'SI'"
              >
                <label for="exampleSelectGender"
                  >Responsables del control</label
                >
                <select
                  class="custom-select"
                  :class="{ 'is-invalid': errors.position_id }"
                  v-model="newMatrix.position_id"
                >
                  <option
                    v-for="position in positions"
                    :key="position.id"
                    :value="position.id"
                  >
                    {{ position.name }}
                  </option>
                </select>
                <small v-if="errors.position_id" class="text-danger">{{
                  errors.position_id[0]
                }}</small>
              </div>
            </div>
          </form>
          <router-link
            to="/matrix-risk-index"
            type="button"
            class="btn btn-danger"
          >
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
            @click="save()"
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
export default {
  data() {
    return {
      disabled: false,
      newMatrix: {
        matrix_risk_id: this.$route.params.id,
        deficiency_level: null,
        exposition_level: null,
        consequence_level: null,
        number_exposed_plant: null,
        number_exposed_visitor: null,
        number_exposed_contrataing: null,
        exist_legal_requirement: null,
        detail_legal_requirement: null,
        exist_new_control: null,
        detail_control: null,
        control_type: null,
        date_programing_control: null,
        position_id:null
      },
      errors: {},
      positions: [],
    };
  },
  mounted() {
    this.getPositions();
  },
  methods: {
    async getPositions() {
      const res = await createInstaceAxios.get("position-list");
      this.positions = res.data.data;
    },
    async save() {
      const Toast = this.$swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      });
      try {
        const res = await createInstaceAxios.post(
          "evaluate-matrix-create",
          this.newMatrix
        );
        if (res.data.res) {
          Toast.fire({
            icon: "success",
            title: res.data.message,
          });
          this.$router.push("/matrix-risk-index");
        }
      } catch (er) {
        this.errors = er.response.data;
        Toast.fire({
          icon: "warning",
          title: "Error al crear el registro",
        });
      }
    },
  },
};
</script>