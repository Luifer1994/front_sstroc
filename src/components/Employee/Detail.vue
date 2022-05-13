<template>
  <div class="main-body">
    <div class="row gutters-sm">
      <div class="col-md-5 mb-3">
        <div class="card">
          <div class="card-body">
            <div class="d-flex flex-column align-items-center text-center">
              <div class="avatar avatar-5xl">
                <div class="avatar-name rounded-circle bg-primary p-5">
                  <h2 class="text-white">{{ avatar }}</h2>
                </div>
              </div>
              <div class="mt-3">
                <h3>{{ name }}</h3>
                <p class="text-secondary mb-1">{{ this.data.document_type }}</p>
                <h4 class="text-muted font-size-sm">
                  {{ this.data.document_number }}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-7">
        <div class="card mb-3">
          <div class="card-header bg-white">
            <h3 class="mb-0 text-dark">Datos personales</h3>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-sm-5">
                <h6 class="mb-0">Email</h6>
              </div>
              <div class="col-sm-7 text-secondary">
                {{ data.email }}
              </div>
            </div>
            <hr />
            <div class="row">
              <div class="col-sm-5">
                <h6 class="mb-0">Télefono</h6>
              </div>
              <div class="col-sm-7 text-secondary">{{ data.phone }}</div>
            </div>
            <hr />
            <div class="row">
              <div class="col-sm-5">
                <h6 class="mb-0">Genero</h6>
              </div>
              <div class="col-sm-7 text-secondary">{{ data.gender }}</div>
            </div>
            <hr />
            <div class="row">
              <div class="col-sm-5">
                <h6 class="mb-0">Fecha de nacimiento</h6>
              </div>
              <div class="col-sm-7 text-secondary">
                {{ formatDate(data.birth_date) }}
              </div>
            </div>
            <hr />
            <div class="row">
              <div class="col-sm-5">
                <h6 class="mb-0">Fecha de de registro</h6>
              </div>
              <div class="col-sm-7 text-secondary">
                {{ formatDate(data.created_at) }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-5">
        <div class="card mb-3">
          <div class="card-header bg-white">
            <h3 class="mb-0 text-dark">Respuesta de encuesta</h3>
          </div>
          <div class="card-body">
            <div v-for="value in data.survey" :key="value">
              <div class="row">
                <div class="col-sm-9">
                  <h6 class="mb-0">{{ value.question_title }}</h6>
                </div>
                <div class="col-sm-3 text-secondary">
                  {{ value.question_response }}
                </div>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-7">
        <div class="card mb-3">
          <div class="card-header bg-white">
            <h3 class="mb-0 text-dark">Perfil sociodemográfico</h3>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-sm-5">
                <h6 class="mb-0">Ciudad</h6>
              </div>
              <div class="col-sm-7 text-secondary">
                 {{ perfil.city_name }}
              </div>
            </div>
            <hr>
            <div class="row">
              <div class="col-sm-5">
                <h6 class="mb-0">Dirección</h6>
              </div>
              <div class="col-sm-7 text-secondary">
                {{ perfil.address }}
              </div>
            </div>
            <hr />
            <div class="row">
              <div class="col-sm-5">
                <h6 class="mb-0">Contacto de emergencia</h6>
              </div>
              <div class="col-sm-7 text-secondary">{{ perfil.contact_emergency }}</div>
            </div>
            <hr />
            <div class="row">
              <div class="col-sm-5">
                <h6 class="mb-0">Parentesco</h6>
              </div>
              <div class="col-sm-7 text-secondary">{{ perfil.kindred_name }}</div>
            </div>
            <hr />
            <div class="row">
              <div class="col-sm-5">
                <h6 class="mb-0">Télefono del contacto</h6>
              </div>
              <div class="col-sm-7 text-secondary">
                {{ perfil.phone_contact }}
              </div>
            </div>
            <hr />
            <div class="row">
              <div class="col-sm-5">
                <h6 class="mb-0">Personas a cargo</h6>
              </div>
              <div class="col-sm-7 text-secondary">
                {{ perfil.dependents }}
              </div>
            </div>
            <hr>
            <div class="row">
              <div class="col-sm-5">
                <h6 class="mb-0">Número de hijos</h6>
              </div>
              <div class="col-sm-7 text-secondary">
                {{ perfil.number_of_children }}
              </div>
            </div>
            <hr>
            <div class="row">
              <div class="col-sm-5">
                <h6 class="mb-0">Uso de tiempo libre</h6>
              </div>
              <div class="col-sm-7 text-secondary">
                {{ perfil.use_free_time }}
              </div>
            </div>
            <hr>
            <div class="row">
              <div class="col-sm-5">
                <h6 class="mb-0">Fecha de contrato</h6>
              </div>
              <div class="col-sm-7 text-secondary">
                {{ formatDate(perfil.contract_date) }}
              </div>
            </div>
            <hr>
            <div class="row">
              <div class="col-sm-5">
                <h6 class="mb-0">Promedio de ingreso</h6>
              </div>
              <div class="col-sm-7 text-secondary">
                $ {{ formatPrice(perfil.average_income) }}
              </div>
            </div>
            <hr>
            <div class="row">
              <div class="col-sm-5">
                <h6 class="mb-0">Nivel educativo</h6>
              </div>
              <div class="col-sm-7 text-secondary">
                 {{ perfil.education_level_name }}
              </div>
            </div>
            <hr>
            <div class="row">
              <div class="col-sm-5">
                <h6 class="mb-0">Tipo de vivienda</h6>
              </div>
              <div class="col-sm-7 text-secondary">
                 {{ perfil.housing_type_name }}
              </div>
            </div>
             <hr>
            <div class="row">
              <div class="col-sm-5">
                <h6 class="mb-0">Estado civil</h6>
              </div>
              <div class="col-sm-7 text-secondary">
                 {{ perfil.marital_status_name }}
              </div>
            </div>
             <hr>
            <div class="row">
              <div class="col-sm-5">
                <h6 class="mb-0">Cargo</h6>
              </div>
              <div class="col-sm-7 text-secondary">
                 {{ perfil.position_name }}
              </div>
            </div>
            <hr>
            <div class="row">
              <div class="col-sm-5">
                <h6 class="mb-0">Tipo de contrato</h6>
              </div>
              <div class="col-sm-7 text-secondary">
                 {{ perfil.type_contract_name }}
              </div>
            </div>
            <hr>
            <div class="row">
              <div class="col-sm-5">
                <h6 class="mb-0">EPS</h6>
              </div>
              <div class="col-sm-7 text-secondary">
                 {{ perfil.social_security_name }}
              </div>
            </div>
            <hr>
            <div class="row">
              <div class="col-sm-5">
                <h6 class="mb-0">ARL</h6>
              </div>
              <div class="col-sm-7 text-secondary">
                 {{ perfil.arl_name }}
              </div>
            </div>
            <hr>
            <div class="row">
              <div class="col-sm-5">
                <h6 class="mb-0">Fondo de pensión</h6>
              </div>
              <div class="col-sm-7 text-secondary">
                 {{ perfil.pension_fund_name }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
import { createInstaceAxios } from "../../utils/instance";
import moment from "moment";
export default {
  name: "DetailClient",
  mounted() {
    this.getDetailClient(this.$route.params.id);
  },
  data() {
    return {
      detail: null,
      avatar: null,
      name: null,
      city: null,
      data: {},
      perfil: {},
    };
  },
  methods: {
    async getDetailClient(id) {
      const res = await createInstaceAxios.get("employee-detail/" + id);
      this.detail = res.data.data;
      this.perfil = this.detail.perfil_sociodemographics[0];
      this.avatar =
        this.detail.name.charAt(0) + this.detail.last_name.charAt(0);
      this.name = this.detail.name + " " + this.detail.last_name;
      this.data = this.detail;
    },
    formatDate(value) {
      moment.locale("es");
      if (value) {
        return moment(String(value)).format("LL");
      }
    },
    formatPrice(value) {
      let val = (value / 1).toFixed(0).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
  },
};
</script>