<template>
  <div class="main-panel">
    <div class="content-wrapper">
      <div v-if="loading" class="d-flex justify-content-center mt-4">
        <div
          class="spinner-border text-primary"
          style="width: 100px; height: 100px"
          role="status"
        >
          <span class="sr-only">Loading...</span>
        </div>
      </div>
      <div v-else>
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Detalles de hallazgo N° {{ finding.id }}</h4>
            <router-link
              :to="{
                name: 'tracing-register',
                params: { id: this.$route.params.id },
              }"
              class="btn btn-primary btn-sm"
              >Crear reguimiento</router-link
            >
            <div class="mt-3">
              <div class="row">
                <div class="col-sm">
                  Fecha de creación:
                  <br />
                  <h4>{{ formatDate(finding.created_at) }}</h4>
                </div>
                <div class="col-sm">
                  Creado por:
                  <br />
                  <h4 v-if="userEmployee">
                    {{ userEmployee.name }} {{ userEmployee.last_name }}
                  </h4>
                </div>
                <div class="col-sm">
                  Area:
                  <br />
                  <h4 v-if="finding.area">{{ finding.area.name }}</h4>
                </div>
                <div class="col-sm">
                  Estado:
                  <br />
                  <span v-if="finding.status" class="badge badge-success">
                    ABIERTO
                  </span>
                  <span v-else class="badge badge-danger"> CERRADO</span>
                </div>
              </div>

              <div class="row">
                <div class="col-sm">
                  Descripción:
                  <br />
                  <h5 class="text-justify">{{ finding.description }}</h5>
                </div>
                <div class="col-9">
                  Descripción larga:
                  <br />
                  <h5 class="text-justify">{{ finding.long_description }}</h5>
                </div>
                <div class="col-12 evidence">
                  Evidencias:
                  <br />
                  <vue-picture-swipe :items="mediaFinding"></vue-picture-swipe>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="card" style="background-color: #f5f7ff">
          <div class="card-body">
            <div class="text-center">
              <h3>Seguimientos de hallazgo</h3>
            </div>

            
              <div class="timeline">
                <div
                  v-for="(tracing, index) in tracings"
                  :key="tracing.id"
                  class="timeline-row"
                >
                  <div class="timeline-time text-dark">
                    {{ formatDate(tracing.created_at) }}
                  </div>
                  <div class="timeline-content shadow bg-white">
                    Creado por:
                    <h4 v-if="tracing.user.employee">
                      {{ tracing.user.employee.name }}
                      {{ tracing.user.employee.last_name }}
                    </h4>
                    <h4>{{ tracing.description }}</h4>
                    <p>
                      {{ tracing.long_description }}
                    </p>
                    <div class="media-tracing">
                      <vue-picture-swipe
                        :items="mediaTracings[index]"
                      ></vue-picture-swipe>
                    </div>
                  </div>
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
import VuePictureSwipe from "vue-picture-swipe";
export default {
  components: {
    VuePictureSwipe,
  },
  mounted() {
    this.getDetailFinding();
  },
  data() {
    return {
      loading: true,
      finding: {},
      userEmployee: null,
      mediaFinding: [],
      tracings: [],
      mediaTracings: [],
    };
  },
  methods: {
    async getDetailFinding() {
      const res = await createInstaceAxios.get(
        "finding-detail/" + this.$route.params.id
      );
      this.finding = res.data.data;
      this.tracings = this.finding.tracings;
      let num = 0;
      this.tracings.forEach((element) => {
        this.mediaTracings.push([]);
        element.image_tracings.forEach((el) => {
          this.mediaTracings[num].push({
            src: el.url,
            thumbnail: el.url,
            w: 600,
            h: 600,
          });
        });
        num++;
      });

      this.finding.image_findings.forEach((el) => {
        this.mediaFinding.push({
          src: el.url,
          thumbnail: el.url,
          w: 600,
          h: 600,
        });
      });
      if (this.finding.user.employee) {
        this.userEmployee = this.finding.user.employee;
      }
      this.loading = false;
    },
    formatDate(value) {
      moment.locale("es");
      if (value) {
        return moment(String(value)).format("LL");
      }
    },
  },
};
</script>

<style>
.timeline {
  position: relative;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  padding: 5rem;
  margin: 0 auto 1rem auto;
  overflow: hidden;
}
.timeline:after {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  margin-left: -2px;
  border-right: 2px dashed #4b546f;
  height: 100%;
  display: block;
}

.timeline-row {
  padding-left: 50%;
  position: relative;
  margin-bottom: 30px;
}
.timeline-row .timeline-time {
  position: absolute;
  right: 50%;
  top: 15px;
  text-align: right;
  margin-right: 20px;
  color: #bcd0f7;
  font-size: 1.5rem;
}
.timeline-row .timeline-time small {
  display: block;
  font-size: 0.8rem;
}
.timeline-row .timeline-content {
  position: relative;
  padding: 20px 10px;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
}
.timeline-row .timeline-content:after {
  content: "";
  position: absolute;
  top: 20px;
  height: 16px;
  width: 16px;
  background: #1a233a;
}
.timeline-row .timeline-content:before {
  content: "";
  position: absolute;
  top: 20px;
  right: -49px;
  width: 20px;
  height: 20px;
  -webkit-border-radius: 100px;
  -moz-border-radius: 100px;
  border-radius: 100px;
  z-index: 10;
  background: #272e48;
  border: 2px dashed #4b546f;
}
.timeline-row .timeline-content h4 {
  margin: 0 0 20px 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  line-height: 150%;
}
.timeline-row .timeline-content p {
  margin-bottom: 30px;
  line-height: 150%;
}
.timeline-row .timeline-content i {
  font-size: 1.2rem;
  line-height: 100%;
  padding: 15px;
  -webkit-border-radius: 100px;
  -moz-border-radius: 100px;
  border-radius: 100px;
  background: #272e48;
  margin-bottom: 10px;
  display: inline-block;
}
.timeline-row .timeline-content .thumbs {
  margin-bottom: 20px;
  display: flex;
}
.timeline-row .timeline-content .thumbs img {
  margin: 5px;
  max-width: 60px;
}
.timeline-row .timeline-content .badge {
  color: #ffffff;
  background: linear-gradient(120deg, #00b5fd 0%, #0047b1 100%);
}
.timeline-row:nth-child(even) .timeline-content {
  margin-left: 40px;
  text-align: left;
}
.timeline-row:nth-child(even) .timeline-content:after {
  left: -8px;
  right: initial;
  border-bottom: 0;
  border-left: 0;
  transform: rotate(-135deg);
}
.timeline-row:nth-child(even) .timeline-content:before {
  left: -52px;
  right: initial;
}
.timeline-row:nth-child(odd) {
  padding-left: 0;
  padding-right: 50%;
}
.timeline-row:nth-child(odd) .timeline-time {
  right: auto;
  left: 50%;
  text-align: left;
  margin-right: 0;
  margin-left: 20px;
}
.timeline-row:nth-child(odd) .timeline-content {
  margin-right: 40px;
}
.timeline-row:nth-child(odd) .timeline-content:after {
  right: -8px;
  border-left: 0;
  border-bottom: 0;
  transform: rotate(45deg);
}

@media (max-width: 992px) {
  .timeline {
    padding: 15px;
  }
  .timeline:after {
    border: 0;
  }
  .timeline .timeline-row:nth-child(odd) {
    padding: 0;
  }
  .timeline .timeline-row:nth-child(odd) .timeline-time {
    position: relative;
    top: 0;
    left: 0;
    margin: 0 0 10px 0;
  }
  .timeline .timeline-row:nth-child(odd) .timeline-content {
    margin: 0;
  }
  .timeline .timeline-row:nth-child(odd) .timeline-content:before {
    display: none;
  }
  .timeline .timeline-row:nth-child(odd) .timeline-content:after {
    display: none;
  }
  .timeline .timeline-row:nth-child(even) {
    padding: 0;
  }
  .timeline .timeline-row:nth-child(even) .timeline-time {
    position: relative;
    top: 0;
    left: 0;
    margin: 0 0 10px 0;
    text-align: left;
  }
  .timeline .timeline-row:nth-child(even) .timeline-content {
    margin: 0;
  }
  .timeline .timeline-row:nth-child(even) .timeline-content:before {
    display: none;
  }
  .timeline .timeline-row:nth-child(even) .timeline-content:after {
    display: none;
  }
}
.evidence .my-gallery figure img {
  width: 140px;
  height: 140px;
  border-radius: 5%;
  margin: 2px;
}
.media-tracing .my-gallery figure img {
  width: 80px;
  height: 80px;
  border-radius: 5%;
  margin: 2px;
}

</style>