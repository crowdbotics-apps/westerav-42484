import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const airtableapi_get_base_id_table_Id_read = createAsyncThunk(
  "airtableapi_response_get_ListRecords/airtableapi_get_base_id_table_Id_read",
  async payload => {
    const response = await apiService.airtableapi_get_base_id_table_Id_read(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const airtableapi_response_get_ListRecordsSlice = createSlice({
  name: "airtableapi_response_get_ListRecords",
  initialState,
  reducers: {},
  extraReducers: {
    [airtableapi_get_base_id_table_Id_read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [airtableapi_get_base_id_table_Id_read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [airtableapi_get_base_id_table_Id_read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  airtableapi_get_base_id_table_Id_read,
  slice: airtableapi_response_get_ListRecordsSlice
}
