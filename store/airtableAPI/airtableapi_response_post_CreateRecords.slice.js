import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const airtableapi_post_base_id_table_Id_create = createAsyncThunk(
  "airtableapi_response_post_CreateRecords/airtableapi_post_base_id_table_Id_create",
  async payload => {
    const response = await apiService.airtableapi_post_base_id_table_Id_create(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const airtableapi_response_post_CreateRecordsSlice = createSlice({
  name: "airtableapi_response_post_CreateRecords",
  initialState,
  reducers: {},
  extraReducers: {
    [airtableapi_post_base_id_table_Id_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [airtableapi_post_base_id_table_Id_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [airtableapi_post_base_id_table_Id_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  airtableapi_post_base_id_table_Id_create,
  slice: airtableapi_response_post_CreateRecordsSlice
}
