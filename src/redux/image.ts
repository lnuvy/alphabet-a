import { createSlice } from '@reduxjs/toolkit'

export interface ImageType {
  id: number
  src: string
}
export interface ImageState {
  isLoading: boolean
  imageArr: ImageType[]
}

const initialState: ImageState = {
  isLoading: false,
  imageArr: [],
}

const imageSlice = createSlice({
  name: 'image',
  initialState,
  reducers: {
    // input 통해 추가 시 id 고유값 지정 후 리덕스 주입
    upload: (state, action) => {
      const id = new Date().getTime()
      state.imageArr.push({ id, src: action.payload })
    },

    // x 버튼 클릭
    removePreview: (state, action) => {
      state.imageArr = state.imageArr.filter((el) => {
        return el.id !== action.payload
      })
    },

    // 업로드시 로딩
    loadingChange: (state, action) => {
      state.isLoading = action.payload
    },
  },
})

const { reducer, actions } = imageSlice

export const { upload, removePreview, loadingChange } = actions

export default reducer
