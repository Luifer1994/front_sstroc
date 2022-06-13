<template>
  <div class="content-wrapper">
    <div class="card container" style="margin-top: 15%" v-if="!validEmployee">
      <div class="card-body">
        <h4 class="card-title">
          PARTICIPACIÓN DE IDENTIFICACIÓN DE PELIGROS Y RIESGOS
        </h4>
        <p>Introduce tu número de documento para validar tus datos.</p>
        <small v-if="errors.document_number" class="text-danger">{{
          errors.document_number[0]
        }}</small>
        <div class="form-inline">
          <div class="form-group mb-2">
            <input
              :class="{ 'is-invalid': errors.document_number }"
              type="number"
              class="form-control"
              placeholder="Número de documento..."
              v-model="document_number"
            />
          </div>

          <button
            @click="validateEmployee()"
            class="btn btn-primary mb-2 mx-sm-4"
          >
            VALIDAR
          </button>
        </div>
      </div>
    </div>

    <div class="card container" v-else>
      <div class="card-body">
        <h4 class="card-title">
          PARTICIPACIÓN DE IDENTIFICACIÓN DE PELIGROS Y RIESGOS
        </h4>
        <hr />
        <h5>IDENTIFICACION DE PELIGROS</h5>
        <p>
          En los siguientes peligros, elegir SI o NO, en caso de que en su
          puesto de trabajo exista el riesgo correspondiente, y en caso de un
          SI, se debe escribir la "FUENTE", el elemento que produce u origina
          ese peligro.
        </p>

        <div v-if="questions.length > 0">
          <div v-for="(question, index) in questions" :key="question.id">
            <br />
            <h5>{{ question.name }}</h5>
            <p>{{ question.description }}</p>
            <hr />

            <form v-for="(item, ind) in question.risks" :key="item.id">
              <fieldset class="form-group row">
                <legend class="col-form-label col-sm-7 float-sm-left pt-0">
                  <h6>{{ item.name }}</h6>
                </legend>
                <div class="col-sm-5 bg-light rounded">
                  <div class="px-5">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        value="1"
                        v-model="question.risks[ind].value"
                        :class="{
                          'is-invalid': question.risks[ind].value === '',
                        }"
                      />
                      <label class="form-check-label" for="gridRadios1">
                        SI
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        value="0"
                        v-model="question.risks[ind].value"
                        :class="{
                          'is-invalid': question.risks[ind].value === '',
                        }"
                      />
                      <label class="form-check-label" for="gridRadios2">
                        NO
                      </label>
                    </div>
                  </div>

                  <div v-if="question.risks[ind].value == 1">
                    <label for="exampleFormControlTextarea1">
                      Describir la fuente del peligro *
                    </label>
                    <textarea
                      :class="{
                        'is-invalid':
                          question.risks[ind].value == 1 &&
                          question.risks[ind].description === '',
                      }"
                      class="form-control"
                      rows="3"
                      v-model="question.risks[ind].description"
                    ></textarea>
                  </div>
                </div>
              </fieldset>
            </form>
          </div>
        </div>

        <button class="btn btn-success mx-2" @click="save()">GUARDAR</button>
      </div>
    </div>
  </div>
</template>
  
<script>
import { createInstaceAxios } from "../../utils/instance";
export default {
  name: "IdentificacionRisk",
  data() {
    return {
      infoForm: { employee_id: null, responses: [] },
      name: "",
      description: "",
      questions: [],
      formData: [],
      document_number: null,
      errors: {},
      validEmployee: false,
    };
  },
  mounted() {
    this.getInfoForm();
  },
  methods: {
    save() {
      let valid = [];
      this.questions.forEach((element) => {
        valid.push(this.validateForm(element));
      });
      let number = valid.includes(0);
      if (!number) {
        const key = "risk_id";

        const arrayUniqueByKey = [
          ...new Map(
            this.infoForm.responses.map((item) => [item[key], item])
          ).values(),
        ];
        this.store(arrayUniqueByKey);
      }
    },
    async store(data) {
      const Toast = this.$swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
      });
      try {
        const res = await createInstaceAxios.post("store-identification-risk", {
          employee_id: this.infoForm.employee_id,
          responses: data,
        });
        if (res.data.res) {
          (this.infoForm = { employee_id: null, responses: [] }),
            (this.name = ""),
            (this.description = ""),
            (this.questions = []),
            (this.formData = []),
            (this.document_number = null),
            (this.errors = {}),
            (this.validEmployee = false),
            Toast.fire({
              icon: "success",
              title: "Registro exitoso, muchas gracias¡¡¡",
            });
             /* this.$router.push("/identificacion-de-riesgos"); */
        }
      } catch (error) {
        console.log(error);
      }
    },
    validateForm(data) {
      const Toast = this.$swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
      });
      let dataValidate = null;
      data.risks.forEach((el) => {
        if (el.value == "" || (el.value == 1 && el.description == "")) {
          Toast.fire({
            icon: "warning",
            title: "Hay datos vacios revisa el formulario",
          });
          dataValidate = 0;
          this.infoForm.responses = [];
        } else {
          this.infoForm.responses.push({
            risk_id: el.id,
            response: el.value,
            description: el.description,
          });
          dataValidate = 1;
        }
      });
      return dataValidate;
    },
    async validateEmployee() {
      const Toast = this.$swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
      });
      try {
        const res = await createInstaceAxios.get(
          "employee-by-document?document_number=" + this.document_number
        );
        this.infoForm.employee_id = res.data.data.id;
        this.validEmployee = true;
        Toast.fire({
          icon: "success",
          title: "Datos validos",
        });
      } catch (er) {
        this.errors = er.response.data;
        if (er.response.data.message) {
          Toast.fire({
            icon: "warning",
            title: er.response.data.message,
          });
        }
      }
    },
    async getInfoForm() {
      const res = await createInstaceAxios.get("risk-types-list-and-risk");
      this.questions = res.data.data;

      this.questions.forEach((element) => {
        element.risks.forEach((el) => {
          el.value = "";
          el.description = "";
        });
      });
    },
  },
};
</script>

<style>
body {
  background-color: #f5f7ff;
}
</style>