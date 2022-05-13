<template>
  <div class="main-panel">
    <div class="content-wrapper table-responsive">
      <div class="card">
        <div class="card-body">
          <div class="form-row">
            <div
              v-for="(question, n) in questions"
              :key="question.id"
              class="form-group col-md-6"
            >
              <label for="exampleSelectGender">{{ question.title }}</label>
              <div v-if="question.multiple_responses.length > 0">
                <select
                  class="custom-select"
                  v-model="responseQ.responses[n].response_id"
                  @change="checkResponse(question, responseQ.responses[n])"
                >
                  <option
                    v-for="res in question.multiple_responses"
                    :key="res.id"
                    :value="res.id"
                  >
                    {{ res.text }}
                  </option>
                </select>
                <div v-if="responseQ.responses[n].nex.response_id">
                  <!-- <label for="exampleSelectGender">{{ question.multiple_responses[n].question_next.title }}</label> -->
                  <input
                    v-model="responseQ.responses[n].nex.response"
                    type="text"
                    class="form-control form-control-sm mt-2"
                  />
                </div>
              </div>
              <div v-else>
                <input
                  v-model="responseQ.responses[n].response"
                  type="text"
                  class="form-control form-control-sm mt-2"
                />
              </div>
            </div>
          </div>
          <router-link to="/" type="button" class="btn btn-danger">
            Cancelar
          </router-link>
          <button
            @click="sendResponse()"
            type="button"
            class="btn btn-primary mx-2"
          >
            Registrar
          </button>
        </div>
      </div>
    </div>
  </div>
  <notifications />
</template>
<script>
import { createInstaceAxios } from "../../utils/instance";
export default {
  name: "EmployeeSurvey",
  mounted() {
    this.getQuestions();
  },
  data() {
    return {
      questions: [],
      responseQ: {
        employee_id: this.$route.params.id,
        responses: [],
      },
    };
  },
  methods: {
    async getQuestions() {
      const res = await createInstaceAxios.get("survey-detail/1");
      this.questions = res.data.data.questions;
      this.questions.forEach((element) => {
        this.responseQ.responses.push({
          question_id: element.id,
          response: null,
          response_id: null,
          nex: {
            question_id: element.id,
            response: null,
            response_id: null,
          },
        });
      });
    },
    async sendResponse() {
      let data = [];

      this.responseQ.responses.forEach((element) => {
        data.push({
          question_id: element.question_id,
          response: element.response,
          response_id: element.response_id,
        });
        if (element.nex.response && element.nex.response_id) {
          data.push({
            question_id: element.question_id,
            response: element.nex.response,
            response_id: element.nex.response_id,
          });
        }
      });
      let onjetRes = {
        employee_id: this.responseQ.employee_id,
        responses: data,
      };
      try {
        const res = await createInstaceAxios.post(
          "survey/1/add-responses",
          onjetRes
        );
        if (res.data.res) {
          this.$router.push("/");
        }
      } catch (error) {
        console.log(error.response.data.message);
        this.$notify({
          title: "Error",
          text: error.response.data.message,
          type: "error",
        });
      }
    },
    checkResponse(question, res) {
      if (
        res.response_id === question.multiple_responses[0].id &&
        question.multiple_responses[0].question_next
      ) {
        res.nex.question_id = question.multiple_responses[0].question_id;
        res.nex.response_id = question.multiple_responses[0].question_next.id;
        res.nex.response = null;
      } else {
        res.nex = {
          question_id: null,
          response: null,
          response_id: null,
        };
      }
    },
  },
};
</script>