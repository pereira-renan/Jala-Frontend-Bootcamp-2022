import { createSlice } from "@reduxjs/toolkit"

export const showcaseSlice = createSlice({
  name: "showcase",
  initialState: {
    value: {},
  },
  reducers: {
    selectProduct: (state, product) => {
      const payload = product.payload
      state.value = payload
    },
  },
})

export const { selectProduct } = showcaseSlice.actions

export default showcaseSlice.reducer
