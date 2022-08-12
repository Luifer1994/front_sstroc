import { createInstaceAxios } from "../../utils/instance";
import moment from "moment";
let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today
let data = []



export async function getEvenetUser() {
  const res = await createInstaceAxios.get("event-list-user")
  res.data.data.forEach(element => {
    data.push({
      id: element.id,
      title: element.title,
      start: formatDate(element.start_date),
      end: formatDate(element.end_date),
      color:'#057391',
      description: element.description,
    })
  });
  return data;

}

function formatDate(value) {
  if (value) {
    return moment(String(value)).format("YYYY-MM-DD");
  }
}

export function createEventId() {
  return String(eventGuid++)
}
