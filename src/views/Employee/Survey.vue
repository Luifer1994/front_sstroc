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
        employee_id: 1,
        responses: [],
      },
    };
  },
  methods: {
    async getQuestions() {
      const res = await createInstaceAxios.get("survey-detail/1");
      this.questions = res.data.data.questions;
      console.log(this.questions);
      this.questions.forEach((element) => {
        this.responseQ.responses.push({
          question_id: element.id,
          response: null,
          response_id: null,
          nex: {
            response: null,
            response_id: null,
          },
        });
      });
    },
    sendResponse() {
      //const res = await createInstaceAxios.get("survey-detail")
      console.log(this.responseQ);
    },
    checkResponse(question, res) {
      //console.log(this.responseQ);
      console.log(res);
      console.log(question);
      if (res.response_id === question.multiple_responses[0].id) {
        res.nex.response_id = question.multiple_responses[0].question_next.id;
        res.nex.response = null;
      } else {
        res.nex = {
          response: null,
          response_id: null,
        };
      }
    },
  },
};
</script>