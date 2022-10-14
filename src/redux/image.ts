import { createSlice } from '@reduxjs/toolkit'

export interface ImageType {
  id: number
  src: string
  isTagged: boolean
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
      state.imageArr.push({ id, src: action.payload, isTagged: false })
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

    // 태그 토글, 리소스를 아끼기 위해 find, filter 등을 사용하지 않고 인덱스가 일치할때 태그 토글
    taggedImage: (state, action) => {
      console.log(action.payload)

      const { index, id } = action.payload
      if (state.imageArr[index].id === id) {
        state.imageArr[index].isTagged = !state.imageArr[index].isTagged
      }
    },
  },
})

const { reducer, actions } = imageSlice

export const { upload, removePreview, loadingChange, taggedImage } = actions

export default reducer
