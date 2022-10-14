import Toast from '@components/Toast/Toast'
import { upload } from '@redux/image'
import { RootState } from '@redux/store'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

/**
 * step1, step2 에서 공용으로 사용하는 커스텀훅
 */

const maxFileCnt = 10
const fileTypes = ['image/gif', 'image/jpeg', 'image/png', 'image/bmp', 'image/tif', 'image/svg+xml']

export const usePreviewImage = () => {
  const image = useSelector((state: RootState) => state.image)
  const dispatch = useDispatch()

  const selectFile = (e: { target: EventTarget }) => {
    const { files } = e.target as HTMLInputElement
    const attFileCnt = image.imageArr.length
    const curFileCnt = files?.length || 0
    const remainFileCnt = maxFileCnt - attFileCnt

    // console.log(remainFileCnt)

    if (curFileCnt > remainFileCnt) {
      Toast('error', '사진은 최대 10장까지 업로드 가능합니다.')
      return
    }

    let check = 0
    for (let i = 0; i < Math.min(curFileCnt, remainFileCnt); i++) {
      const file = files[i]
      if (!fileTypes.includes(file.type)) {
        check++
        continue
      }

      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onloadend = () => {
        console.log(reader.result)
        dispatch(upload(reader.result))
      }
    }

    if (check > 0) Toast('info', '사진형식이 아닌 파일은 제외되었습니다.')
  }

  return { selectFile }
}
