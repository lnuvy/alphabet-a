import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  preview: null,
  imageArr: [],
}

const imageSlice = createSlice({
  name: 'image',
  initialState,
  reducers: {
    upload: (state, action) => {
      state.imageArr.push(action.payload)
    },

    removePreview: (state, action) => {
      state.imageArr = state.imageArr.filter((el) => {
        return el !== action.payload
      })
    },
  },
})

const { reducer, actions } = imageSlice

export const { accrueImage } = actions

export default reducer
