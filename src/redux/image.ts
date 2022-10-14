import { createSlice } from '@reduxjs/toolkit'

export interface ImageState {
  preview: null
  imageArr: string[]
}

const initialState: ImageState = {
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

export const { upload, removePreview } = actions

export default reducer
