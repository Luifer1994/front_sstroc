<template>
  <div class="main-panel">
    <div class="content-wrapper table-responsive">
      <div class="card">
        <div class="card-body">
          <h5 class="card-tittle">Calendario de eventos</h5>
          <div class="demo-app-sidebar-section">
            <label>
              <input
                type="checkbox"
                :checked="calendarOptions.weekends"
                @change="handleWeekendsToggle"
              />
              Alternar los fines de semana
            </label>
          </div>
          <div class="demo-app-sidebar-section">
            <!--  <h5>Eventos ({{ currentEvents.length }})</h5> -->
            <!-- <ul>
              <li v-for="event in currentEvents" :key="event.id">
                <b>{{ event.startStr }}</b>
                <i>{{ event.title }}</i>
              </li>
            </ul> -->
          </div>
          <div class="demo-app-main">
            <FullCalendar class="demo-app-calendar" :options="calendarOptions">
              <template v-slot:eventContent="arg">
                <b>{{ arg.timeText }}</b>
                <i>{{ arg.event.title }}</i>
              </template>
            </FullCalendar>
          </div>
        </div>
      </div>
    </div>
    <div :class="modalClasses" class="fade" id="reject" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">Registra evento</h4>
            <button type="button" class="close" @click="toggle()">&times;</button>
          </div>
          <div class="modal-body">
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="exampleSelectGender">Fecha Inicial *</label>
                <input
                  type="date"
                  class="form-control form-control-sm"
                  v-model="new_evenet.start_date"
                />
                <small v-if="errors.start_date" class="text-danger">{{
                  errors.start_date[0]
                }}</small>
              </div>

              <div class="form-group col-md-6">
                <label for="exampleSelectGender">Hora inicial *</label>
                <input
                  type="time"
                  class="form-control form-control-sm"
                  v-model="new_evenet.timeStart"
                />
              </div>

              <div class="form-group col-md-6">
                <label for="exampleSelectGender">Fecha y hora final *</label>
                <input
                  type="datetime-local"
                  class="form-control form-control-sm"
                  v-model="new_evenet.end_date"
                />
                <small v-if="errors.end_date" class="text-danger">{{
                  errors.end_date[0]
                }}</small>
              </div>

              <div class="form-group col-md-6">
                <label for="exampleSelectGender">Título *</label>
                <input
                  type="text"
                  class="form-control form-control-sm"
                  v-model="new_evenet.title"
                />
                <small v-if="errors.title" class="text-danger">{{
                  errors.title[0]
                }}</small>
              </div>

              <div class="form-group col-md-12">
                <label for="exampleSelectGender">Descripción</label>
                <textarea
                  type="text"
                  class="form-control form-control-sm"
                  v-model="new_evenet.description"
                />
              </div>
            </div>
            <button @click="toggle()" type="button" class="btn btn-danger">
              Cancelar
            </button>
            <button
              @click="updateEvent()"
              v-if="new_evenet.id"
              type="button"
              class="btn btn-primary mx-2"
            >
              Actualizar
            </button>
            <button
              @click="createEvent()"
              v-else
              type="button"
              class="btn btn-primary mx-2"
            >
              Registrar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "@fullcalendar/core/vdom"; // solves problem with Vite
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import esLocale from "@fullcalendar/core/locales/es";
import { createEventId, getEvenetUser } from "./event-utils";
import moment from "moment";
import { createInstaceAxios } from "../../utils/instance";

export default {
  components: {
    FullCalendar,
  },
  data() {
    return {
      errors: {},
      new_evenet: {
        id: null,
        timeStart: "00:00:00",
        timeEnd: "",
        title: "",
        start_date: "",
        end_date: "",
        description: "",
      },
      modalClasses: ["modal", "fade"],
      calendarOptions: {
        plugins: [
          dayGridPlugin,
          timeGridPlugin,
          interactionPlugin, // needed for dateClick
        ],
        locales: [esLocale],
        locale: "es",
        headerToolbar: {
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        },
        initialView: "dayGridMonth",
        initialEvents: getEvenetUser, // alternatively, use the `events` setting to fetch from a feed
        editable: false,
        selectable: true,
        selectMirror: true,
        dayMaxEvents: true,
        weekends: true,
        select: this.handleDateSelect,
        eventClick: this.handleEventClick,
        eventsSet: this.handleEvents,
      },
      currentEvents: [],
    };
  },
  methods: {
    //create new evenet  using createInstaceAxios and async await and try catch
    async updateEvent() {
      const Toast = this.$swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      });
      try {
        this.new_evenet.end_date = moment(this.new_evenet.end_date).format(
          "YYYY-MM-DD HH:mm:ss"
        );
        this.new_evenet.start_date = moment(
          `${this.new_evenet.start_date} ${this.new_evenet.timeStart}`
        ).format("YYYY-MM-DD HH:mm:ss");
        const res = await createInstaceAxios.put(
          "event-update/" + this.new_evenet.id,
          this.new_evenet
        );
        Toast.fire({
          icon: "success",
          title: res.data.message,
        });
        this.new_evenet = {
          id: null,
          time: "",
          title: "",
          start_date: "",
          end_date: "",
          description: "",
        };
        this.toggle();
        this.$router.go(this.$router.currentRoute);
      } catch (er) {
        this.errors = er.response.data;
        Toast.fire({
          icon: "error",
          title: res.response.message,
        });
      }
    },
    async createEvent() {
      const Toast = this.$swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      });
      try {
        this.new_evenet.end_date = moment(this.new_evenet.end_date).format(
          "YYYY-MM-DD HH:mm:ss"
        );
        this.new_evenet.start_date = moment(
          `${this.new_evenet.start_date} ${this.new_evenet.timeStart}`
        ).format("YYYY-MM-DD HH:mm:ss");
        const res = await createInstaceAxios.post("event-register", this.new_evenet);
        Toast.fire({
          icon: "success",
          title: res.data.message,
        });
        this.new_evenet = {
          id: null,
          time: "",
          title: "",
          start_date: "",
          end_date: "",
          description: "",
        };
        this.toggle();
        this.$router.go(this.$router.currentRoute);
      } catch (er) {
        this.errors = er.response.data;
      }
    },
    concatDateStart() {
      this.new_evenet.start_date = moment(
        `${this.new_evenet.start_date} ${this.new_evenet.timeStart}`,
        "YYYY-MM-DD HH:mm:ss"
      ).format("YYYY-MM-DD HH:mm:ss");
    },
    handleWeekendsToggle() {
      this.calendarOptions.weekends = !this.calendarOptions.weekends; // update a property
    },
    handleDateSelect(selectInfo) {
      this.new_evenet = {
        id: null,
        time: "",
        title: "",
        start_date: "",
        end_date: "",
        description: "",
      };
      this.new_evenet.start_date = moment(selectInfo.startStr).format("YYYY/MM/DD");
      this.new_evenet.start_date = selectInfo.startStr;
      //var timeString = e.time.hour + ':' + e.time.minute + ':00';
      this.toggle();
      let calendarApi = selectInfo.view.calendar;
      calendarApi.unselect(); // clear date selection
      /*  if (title) {
        calendarApi.addEvent({
          id: createEventId(),
          title,
          start: selectInfo.startStr,
          end: selectInfo.endStr,
          allDay: selectInfo.allDay,
        });
      } */
    },
    async handleEventClick(clickInfo) {
      //filter event by id using createInstaceAxios and async await and try catch
      try {
        const res = await createInstaceAxios.get("event/" + clickInfo.event.id);
        this.new_evenet.id = res.data.data.id;
        let dateS = moment(String(res.data.data.start_date)).format("Y-MM-DD");
        this.new_evenet.start_date = dateS;
        let dataE = moment(String(res.data.data.end_date)).format("Y-MM-DD HH:mm");
        this.new_evenet.end_date = dataE;
        let timeS = moment(String(res.data.data.start_date)).format("HH:mm");
        this.new_evenet.timeStart = timeS;
        this.new_evenet.title = res.data.data.title;
        this.new_evenet.description = res.data.data.description;
        this.toggle();
      } catch (er) {
        Toast.fire({
          icon: "error",
          title: er.response.data.message,
        });
      }
    },

    toggle() {
      document.body.className += " modal-open";
      let modalClasses = this.modalClasses;

      if (modalClasses.indexOf("d-block") > -1) {
        modalClasses.pop();
        modalClasses.pop();

        //hide backdrop
        let backdrop = document.querySelector(".modal-backdrop");
        document.body.removeChild(backdrop);
      } else {
        modalClasses.push("d-block");
        modalClasses.push("show");

        //show backdrop
        let backdrop = document.createElement("div");
        backdrop.classList = "modal-backdrop fade show";
        document.body.appendChild(backdrop);
      }
    },
  },
};
</script>

<style lang="css">
.fc .fc-button-group .fc-button {
  background-color: rgb(45, 120, 200);
  margin: 0;
}

.fc-daygrid-event-harness {
  cursor: pointer;
}

.fc .fc-toolbar-title {
  font-size: 15px;
}
.fc .fc-event {
  /* border: 0; */
  color: rgb(255, 255, 255);
  padding: 0.5rem;
  background-color: rgb(41, 87, 130);
}
</style>
