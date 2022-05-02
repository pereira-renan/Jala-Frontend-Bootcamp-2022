import { createSlice } from "@reduxjs/toolkit"

export const shopSlice = createSlice({
  name: "product",
  initialState: {
    value: [],
  },
  reducers: {
    addProduct: (state, product) => {
      const payload = product.payload

      const existingIndex = state.value.findIndex(
        (item) => item.id === product.payload.id
      )

      if (existingIndex >= 0) {
        return
      } else {
        state.value.push(payload)
      }
    },
    removeProduct: (state, product) => {
      const payload = product.payload
      state.value = state.value.filter((prd) => prd.id !== payload.id)
    },
  },
})

export const { addProduct, removeProduct } = shopSlice.actions

export default shopSlice.reducer
