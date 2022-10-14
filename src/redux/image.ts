import { createSlice } from '@reduxjs/toolkit'

export interface ImageType {
  id: number
  src: string
}
export interface ImageState {
  preview: null
  imageArr: ImageType[]
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
      const id = new Date().getTime()
      state.imageArr.push({ id, src: action.payload })
    },

    removePreview: (state, action) => {
      console.log('리덕스 내부 action payload 콘솔', action, action.payload)

      state.imageArr = state.imageArr.filter((el) => {
        return el.id !== action.payload
      })
    },
  },
})

const { reducer, actions } = imageSlice

export const { upload, removePreview } = actions

export default reducer
