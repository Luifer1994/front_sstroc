<template>
  <div class="main-panel">
    <div class="content-wrapper table-responsive">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Perfilar empleado</h4>
          <div v-if="direccionAndContact">
            <h5>Dirección y contacto de emergencia</h5>
            <hr />
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="exampleSelectGender">Ciudad de residencia</label>
                <select
                  class="custom-select"
                  :class="{ 'is-invalid': errors.city_id }"
                  v-model="client.city_id"
                >
                  <option v-for="city in cities" :key="city.id" :value="city.id">
                    {{ city.name }}
                  </option>
                </select>
                <small v-if="errors.city_id" class="text-danger">{{
                  errors.city_id[0]
                }}</small>
              </div>

              <div class="form-group col-md-6">
                <label for="exampleInputName1">Dirección</label>
                <input
                  type="text"
                  class="form-control form-control-sm"
                  placeholder="Dirección..."
                  :class="{ 'is-invalid': errors.address }"
                  v-model="client.address"
                />
                <small v-if="errors.address" class="text-danger">{{
                  errors.address[0]
                }}</small>
              </div>

              <div class="form-group col-md-6">
                <label for="exampleSelectGender">Tipo de residencia</label>
                <select
                  class="custom-select"
                  :class="{ 'is-invalid': errors.housing_type_id }"
                  v-model="client.housing_type_id"
                >
                  <option
                    v-for="housinType in housingTypes"
                    :key="housinType.id"
                    :value="housinType.id"
                  >
                    {{ housinType.name }}
                  </option>
                </select>
                <small v-if="errors.housing_type_id" class="text-danger">{{
                  errors.housing_type_id[0]
                }}</small>
              </div>

              <div class="form-group col-md-6">
                <label for="exampleInputName1">Contacto en caso de emergencia</label>
                <input
                  type="text"
                  class="form-control form-control-sm"
                  placeholder="Nombre de contacto..."
                  :class="{ 'is-invalid': errors.contact_emergency }"
                  v-model="client.contact_emergency"
                />
                <small v-if="errors.contact_emergency" class="text-danger">{{
                  errors.contact_emergency[0]
                }}</small>
              </div>

              <div class="form-group col-md-6">
                <label for="exampleSelectGender">Parentesco</label>
                <select
                  class="custom-select"
                  :class="{ 'is-invalid': errors.kindred_id }"
                  v-model="client.kindred_id"
                >
                  <option
                    v-for="kindred in kindreds"
                    :key="kindred.id"
                    :value="kindred.id"
                  >
                    {{ kindred.name }}
                  </option>
                </select>
                <small v-if="errors.kindred_id" class="text-danger">{{
                  errors.kindred_id[0]
                }}</small>
              </div>

              <div class="form-group col-md-6">
                <label for="exampleInputName1">Télefono</label>
                <input
                  type="number"
                  class="form-control form-control-sm"
                  placeholder="Télefono de contacto..."
                  :class="{ 'is-invalid': errors.phone_contact }"
                  v-model="client.phone_contact"
                />
                <small v-if="errors.phone_contact" class="text-danger">{{
                  errors.phone_contact[0]
                }}</small>
              </div>
            </div>
          </div>

          <div v-if="educationInfoFamily">
            <h5>Nivel educativo e información familiar</h5>
            <hr />
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="exampleSelectGender">Nivel educativo</label>
                <select
                  class="custom-select"
                  :class="{ 'is-invalid': errors.education_level_id }"
                  v-model="client.education_level_id"
                >
                  <option
                    v-for="educationLevel in educationLevels"
                    :key="educationLevel.id"
                    :value="educationLevel.id"
                  >
                    {{ educationLevel.name }}
                  </option>
                </select>
                <small v-if="errors.education_level_id" class="text-danger">{{
                  errors.education_level_id[0]
                }}</small>
              </div>

              <div class="form-group col-md-6">
                <label for="exampleSelectGender">Estado civil</label>
                <select
                  class="custom-select"
                  :class="{ 'is-invalid': errors.marital_status_id }"
                  v-model="client.marital_status_id"
                >
                  <option
                    v-for="maritalStatu in maritalStatus"
                    :key="maritalStatu.id"
                    :value="maritalStatu.id"
                  >
                    {{ maritalStatu.name }}
                  </option>
                </select>
                <small v-if="errors.marital_status_id" class="text-danger">{{
                  errors.marital_status_id[0]
                }}</small>
              </div>

              <div class="form-group col-md-6">
                <label for="exampleInputName1">Personas a cargo</label>
                <input
                  type="number"
                  class="form-control form-control-sm"
                  placeholder="Número de personas..."
                  :class="{ 'is-invalid': errors.dependents }"
                  v-model="client.dependents"
                />
                <small v-if="errors.dependents" class="text-danger">{{
                  errors.dependents[0]
                }}</small>
              </div>

              <div class="form-group col-md-6">
                <label for="exampleInputName1">Número de hijos</label>
                <input
                  type="number"
                  class="form-control form-control-sm"
                  placeholder="Número de personas..."
                  :class="{ 'is-invalid': errors.number_of_children }"
                  v-model="client.number_of_children"
                />
                <small v-if="errors.number_of_children" class="text-danger">{{
                  errors.number_of_children[0]
                }}</small>
              </div>

              <div class="form-group col-md-6">
                <label for="exampleInputName1">Uso de tiempo libre</label>
                <input
                  type="Text"
                  class="form-control form-control-sm"
                  placeholder="Uso de tiempo libre..."
                  :class="{ 'is-invalid': errors.use_free_time }"
                  v-model="client.use_free_time"
                />
                <small v-if="errors.use_free_time" class="text-danger">{{
                  errors.use_free_time[0]
                }}</small>
              </div>
            </div>
          </div>

          <div v-if="infoLaboral">
            <h5>Información laboral</h5>
            <hr />
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="exampleSelectGender">Cargo</label>
                <select
                  class="custom-select"
                  :class="{ 'is-invalid': errors.position_id }"
                  v-model="client.position_id"
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

              <div class="form-group col-md-6">
                <label for="exampleSelectGender">Tipo de contrato</label>
                <select
                  class="custom-select"
                  :class="{ 'is-invalid': errors.type_contract_id }"
                  v-model="client.type_contract_id"
                >
                  <option
                    v-for="typeContract in typeContracts"
                    :key="typeContract.id"
                    :value="typeContract.id"
                  >
                    {{ typeContract.name }}
                  </option>
                </select>
                <small v-if="errors.type_contract_id" class="text-danger">{{
                  errors.type_contract_id[0]
                }}</small>
              </div>

              <div class="form-group col-md-6">
                <label for="exampleInputName1">Fecha de ingreso a la empresa</label>
                <input
                  type="date"
                  class="form-control form-control-sm"
                  placeholder="Fecha de ingreso..."
                  :class="{ 'is-invalid': errors.contract_date }"
                  v-model="client.contract_date"
                />
                <small v-if="errors.contract_date" class="text-danger">{{
                  errors.contract_date[0]
                }}</small>
              </div>

              <div class="form-group col-md-6">
                <label for="exampleInputName1">Promedio de ingreso</label>
                <input
                  type="number"
                  class="form-control form-control-sm"
                  placeholder="Promedio de ingreso..."
                  :class="{ 'is-invalid': errors.average_income }"
                  v-model="client.average_income"
                />
                <small v-if="errors.average_income" class="text-danger">{{
                  errors.average_income[0]
                }}</small>
              </div>

              <div class="form-group col-md-6">
                <label for="exampleInputName1">Rango de antiguedad en la empresa</label>
                <select
                  class="custom-select"
                  :class="{ 'is-invalid': errors.seniority_range }"
                  v-model="client.seniority_range"
                >
                  <option value="1 mes - 1 año">1 mes - 1 año</option>
                  <option value="2 años - 5 años">2 años - 5 años</option>
                  <option value="6 años - 10 años">6 años - 10 años</option>
                  <option value="11 años o más">11 años o más</option>
                </select>
                <!-- <input
                  type="text"
                  class="form-control form-control-sm"
                  placeholder="Promedio de ingreso..."
                  :class="{ 'is-invalid': errors.seniority_range }"
                  v-model="client.seniority_range"
                /> -->
                <small v-if="errors.contract_date" class="text-danger">{{
                  errors.contract_date[0]
                }}</small>
                <small v-if="errors.seniority_range" class="text-danger">{{
                  errors.seniority_range[0]
                }}</small>
              </div>

              <div class="form-group col-md-6">
                <label for="exampleSelectGender">EPS</label>
                <select
                  class="custom-select"
                  :class="{ 'is-invalid': errors.social_security_id }"
                  v-model="client.social_security_id"
                >
                  <option
                    v-for="socialSecurity in socialSecurities"
                    :key="socialSecurity.id"
                    :value="socialSecurity.id"
                  >
                    {{ socialSecurity.name }}
                  </option>
                </select>
                <small v-if="errors.social_security_id" class="text-danger">{{
                  errors.social_security_id[0]
                }}</small>
              </div>

              <div class="form-group col-md-6">
                <label for="exampleSelectGender">ARL</label>
                <select
                  class="custom-select"
                  :class="{ 'is-invalid': errors.arl_id }"
                  v-model="client.arl_id"
                >
                  <option v-for="arl in arls" :key="arl.id" :value="arl.id">
                    {{ arl.name }}
                  </option>
                </select>
                <small v-if="errors.arl_id" class="text-danger">{{
                  errors.arl_id[0]
                }}</small>
              </div>

              <div class="form-group col-md-6">
                <label for="exampleSelectGender">Fondo de pensiones</label>
                <select
                  class="custom-select"
                  :class="{ 'is-invalid': errors.pension_fund_id }"
                  v-model="client.pension_fund_id"
                >
                  <option
                    v-for="pensionFund in pensionFunds"
                    :key="pensionFund.id"
                    :value="pensionFund.id"
                  >
                    {{ pensionFund.name }}
                  </option>
                </select>
                <small v-if="errors.pension_fund_id" class="text-danger">{{
                  errors.pension_fund_id[0]
                }}</small>
              </div>
            </div>
          </div>

          <router-link
            v-if="tap === 1"
            to="/employee-list"
            type="button"
            class="btn btn-danger"
          >
            Cancelar
          </router-link>
          <button
            v-if="tap > 1"
            type="button"
            class="btn btn-danger mx-2"
            @click="prev()"
          >
            Atras
          </button>
          <button
            v-if="tap < 3"
            type="button"
            class="btn btn-primary mx-2"
            @click="next()"
          >
            Siguiente
          </button>
          <button
            v-if="tap === 3"
            type="button"
            class="btn btn-primary mx-2"
            @click="storePerfil()"
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { createInstaceAxios } from "../../utils/instance";
import moment from "moment";
export default {
  mounted() {
    console.log(this.$route.params.id);
    this.getinfoEmploye();
    this.getCities();
    this.getHousingTypes();
    this.getKindred();
    this.getEducationLevel();
    this.getPosition();
    this.getTypeContract();
    this.getSocialSecurities();
    this.getMaritalStatus();
    this.getArls();
    this.getPensionFunds();
  },
  data() {
    return {
      cities: [],
      housingTypes: [],
      kindreds: [],
      educationLevels: [],
      positions: [],
      typeContracts: [],
      socialSecurities: [],
      maritalStatus: [],
      arls: [],
      pensionFunds: [],
      direccionAndContact: true,
      educationInfoFamily: false,
      infoLaboral: false,
      tap: 1,
      client: {
        employee_id: this.$route.params.id,
        city_id: null,
        address: null,
        housing_type_id: null,
        contact_emergency: null,
        kindred_id: null,
        phone_contact: null,
        education_level_id: null,
        dependents: null,
        number_of_children: null,
        use_free_time: null,
        position_id: null,
        type_contract_id: null,
        contract_date: null,
        average_income: null,
        seniority_range: null,
        social_security_id: null,
        marital_status_id: null,
        arl_id: null,
        pension_fund_id: null,
      },
      errors: {},
    };
  },
  methods: {
    async getinfoEmploye() {
      const res = await createInstaceAxios.get(
        "employee-detail-perfil/" + this.$route.params.id
      );
      if (res.data.data.perfil_sociodemographics[0]) {
        this.client = res.data.data.perfil_sociodemographics[0];
        let dateB = moment(String(this.client.contract_date)).format("Y-MM-DD");
        this.client.contract_date = dateB;
      }
    },
    async storePerfil() {
      const Toast = this.$swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      });
      try {
        const res = await createInstaceAxios.post(
          "employee-register-perfil",
          this.client
        );
        if (res.data.res) {
          Toast.fire({
            icon: "success",
            title: res.data.message,
          });
          this.$router.push("/employee-list");
        }
      } catch (er) {
        this.errors = er.response.data;
        Toast.fire({
          icon: "warning",
          title: "Error al crear el registro",
        });
      }
    },
    async getCities() {
      const res = await createInstaceAxios.get("city-list");
      this.cities = res.data.data;
    },
    async getHousingTypes() {
      const res = await createInstaceAxios.get("housing-types-list");
      this.housingTypes = res.data.data;
    },
    async getKindred() {
      const res = await createInstaceAxios.get("kindred-list");
      this.kindreds = res.data.data;
    },
    async getEducationLevel() {
      const res = await createInstaceAxios.get("education-level-list");
      this.educationLevels = res.data.data;
    },
    async getPosition() {
      const res = await createInstaceAxios.get("position-list");
      this.positions = res.data.data;
    },
    async getTypeContract() {
      const res = await createInstaceAxios.get("type-contract-list");
      this.typeContracts = res.data.data;
    },
    async getSocialSecurities() {
      const res = await createInstaceAxios.get("social-security-list");
      this.socialSecurities = res.data.data;
    },
    async getMaritalStatus() {
      const res = await createInstaceAxios.get("marital-status-list");
      this.maritalStatus = res.data.data;
    },
    async getArls() {
      const res = await createInstaceAxios.get("arl-list");
      this.arls = res.data.data;
    },
    async getPensionFunds() {
      const res = await createInstaceAxios.get("pension-fund-list");
      this.pensionFunds = res.data.data;
    },
    next() {
      this.tap++;
      if (this.tap === 1) {
        this.direccionAndContact = true;
        this.educationInfoFamily = false;
      }
      if (this.tap === 2) {
        this.direccionAndContact = false;
        this.educationInfoFamily = true;
        this.infoLaboral = false;
      }
      if (this.tap === 3) {
        this.direccionAndContact = false;
        this.educationInfoFamily = false;
        this.infoLaboral = true;
      }
    },
    prev() {
      this.tap--;
      if (this.tap === 1) {
        this.direccionAndContact = true;
        this.educationInfoFamily = false;
      }
      if (this.tap === 2) {
        this.direccionAndContact = false;
        this.educationInfoFamily = true;
        this.infoLaboral = false;
      }
      if (this.tap === 3) {
        this.direccionAndContact = false;
        this.educationInfoFamily = false;
        this.infoLaboral = true;
      }
    },
  },
};
</script>
