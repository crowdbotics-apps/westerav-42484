import axios from "axios"
import { AIRTABLE_API_INTEGRATION_TOKEN } from "react-native-dotenv"
const airtableAPI = axios.create({
  baseURL: "https://api.airtable.com/v0",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${AIRTABLE_API_INTEGRATION_TOKEN}`
  }
})
function airtableapi_get_base_id_table_Id_read(payload) {
  return airtableAPI.get(`/base_id/table_Id`)
}
function airtableapi_post_base_id_table_Id_create(payload) {
  return airtableAPI.post(`/base_id/table_Id`)
}
export const apiService = {
  airtableapi_get_base_id_table_Id_read,
  airtableapi_post_base_id_table_Id_create
}
