<template>
  <div class="main-panel">
    <div class="content-wrapper table-responsive">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Crear nueva matriz</h4>

          <form>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="exampleInputName1">Item</label>
                <input
                  type="number"
                  class="form-control form-control-sm"
                  placeholder="Item..."
                  v-model="newMatrix.item"
                  :class="{ 'is-invalid': errors.description }"
                />

                <small v-if="errors.item" class="text-danger">{{ errors.item[0] }}</small>
              </div>

              <div class="form-group col-md-6">
                <label for="exampleSelectGender">Cargo</label>
                <select
                  @change="getProccess()"
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

              <div class="form-group col-md-6" v-if="proccess.length">
                <label for="exampleSelectGender">Proceso</label>
                <select
                  class="custom-select"
                  :class="{ 'is-invalid': errors.process_id }"
                  v-model="newMatrix.process_id"
                >
                  <option v-for="procce in proccess" :key="procce.id" :value="procce.id">
                    {{ procce.name }}
                  </option>
                </select>
                <small v-if="errors.process_id" class="text-danger">{{
                  errors.process_id[0]
                }}</small>
              </div>

              <div class="form-group col-md-6">
                <label for="exampleSelectGender">Área</label>
                <select
                  class="custom-select"
                  :class="{ 'is-invalid': errors.area_id }"
                  v-model="newMatrix.area_id"
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
                <label for="exampleSelectGender">Riesgo</label>
                <select
                  class="custom-select"
                  :class="{ 'is-invalid': errors.risk_id }"
                  v-model="newMatrix.risk_id"
                >
                  <option v-for="risk in risks" :key="risk.id" :value="risk.id">
                    {{ risk.name }}
                  </option>
                </select>
                <small v-if="errors.risk_id" class="text-danger">{{
                  errors.risk_id[0]
                }}</small>
              </div>

              <div class="form-group col-md-6">
                <label for="exampleSelectGender">Tarea</label>
                <select
                  class="custom-select"
                  :class="{ 'is-invalid': errors.task_id }"
                  v-model="newMatrix.task_id"
                >
                  <option v-for="task in tasks" :key="task.id" :value="task.id">
                    {{ task.name }}
                  </option>
                </select>
                <small v-if="errors.task_id" class="text-danger">{{
                  errors.task_id[0]
                }}</small>
              </div>

              <div class="form-group col-md-6">
                <label for="exampleSelectGender">Clasificación</label>
                <select
                  class="custom-select"
                  :class="{ 'is-invalid': errors.clasification }"
                  v-model="newMatrix.clasification"
                >
                  <option value="RUTINARIO">RUTINARIO</option>
                  <option value="NO RUTINARIO">NO RUTINARIO</option>
                </select>
                <small v-if="errors.clasification" class="text-danger">{{
                  errors.clasification[0]
                }}</small>
              </div>

              <div class="form-group col-md-6">
                <label class="form-label">Posibles efectos</label>
                <textarea
                  class="form-control"
                  rows="3"
                  v-model="newMatrix.possible_effects"
                  :class="{ 'is-invalid': errors.possible_effects }"
                ></textarea>
                <small v-if="errors.possible_effects" class="text-danger">{{
                  errors.possible_effects[0]
                }}</small>
              </div>

              <div class="form-group col-md-6">
                <label class="form-label">Peor consecuencia</label>
                <textarea
                  class="form-control"
                  rows="3"
                  v-model="newMatrix.consequence"
                  :class="{ 'is-invalid': errors.consequence }"
                ></textarea>
                <small v-if="errors.consequence" class="text-danger">{{
                  errors.consequence[0]
                }}</small>
              </div>

              <div class="form-group col-md-6">
                <label for="exampleInputName1">Horas de exposición al día</label>
                <input
                  type="text"
                  class="form-control form-control-sm"
                  placeholder="Horas..."
                  v-model="newMatrix.hours_exposition_day"
                  :class="{ 'is-invalid': errors.hours_exposition_day }"
                />

                <small v-if="errors.hours_exposition_day" class="text-danger">{{
                  errors.hours_exposition_day[0]
                }}</small>
              </div>

              <div class="form-group col-md-6">
                <label for="exampleSelectGender">¿Existe control?</label>
                <select
                  class="custom-select"
                  :class="{ 'is-invalid': errors.exists_control }"
                  v-model="newMatrix.exists_control"
                >
                  <option value="0">NO</option>
                  <option value="1">SI</option>
                </select>
                <small v-if="errors.exists_control" class="text-danger">{{
                  errors.exists_control[0]
                }}</small>
              </div>

              <div class="form-group col-md-6" v-if="newMatrix.exists_control">
                <label class="form-label">Descripción del control</label>
                <textarea
                  class="form-control"
                  rows="3"
                  v-model="newMatrix.cotrol_descrption"
                  :class="{ 'is-invalid': errors.cotrol_descrption }"
                ></textarea>
                <small v-if="errors.cotrol_descrption" class="text-danger">{{
                  errors.cotrol_descrption[0]
                }}</small>
              </div>

              <div class="form-group col-md-6">
                <label for="exampleSelectGender">Control realizado a</label>
                <select
                  class="custom-select"
                  :class="{ 'is-invalid': errors.control_done }"
                  v-model="newMatrix.control_done"
                >
                  <option value="FUENTE">FUENTE</option>
                  <option value="INDIVIDUE">INDIVIDUO</option>
                  <option value="MEDIO">MEDIO</option>
                </select>
                <small v-if="errors.control_done" class="text-danger">{{
                  errors.control_done[0]
                }}</small>
              </div>
            </div>
          </form>
          <router-link to="/matrix-risk-index" type="button" class="btn btn-danger">
            Cancelar
          </router-link>
          <button v-if="disabled" type="button" disabled class="btn btn-primary mx-2">
            Registrar
          </button>

          <button v-else @click="save()" type="button" class="btn btn-primary mx-2">
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
        position_id: null,
        item: null,
        process_id: null,
        area_id: null,
        task_id: null,
        clasification: null,
        risk_id: null,
        possible_effects: null,
        consequence: null,
        hours_exposition_day: null,
        exists_control: false,
        cotrol_descrption: null,
        control_done: null,
      },
      errors: {},
      positions: [],
      proccess: [],
      areas: [],
      risks: [],
      tasks: [],
    };
  },
  mounted() {
    this.getPositions();
    this.getAreas();
    this.getRisks();
    this.getTasks();
  },
  methods: {
    async getPositions() {
      const res = await createInstaceAxios.get("position-list");
      this.positions = res.data.data;
    },
    async getProccess() {
      const res = await createInstaceAxios.get(
        "process-by-position/" + this.newMatrix.position_id
      );
      this.proccess = res.data.data.processes;
    },
    async getAreas() {
      const res = await createInstaceAxios.get("areas-list");
      this.areas = res.data.data;
    },
    async getRisks() {
      const res = await createInstaceAxios.get("risk-list");
      this.risks = res.data.data;
    },
    async getTasks() {
      const res = await createInstaceAxios.get("task-list");
      this.tasks = res.data.data;
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
        const res = await createInstaceAxios.post("matrix-risk-create", this.newMatrix);
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
