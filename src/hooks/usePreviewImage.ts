import Toast from '@components/Toast/Toast'
import { loadingChange, upload } from '@redux/image'
import { RootState } from '@redux/store'
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
    const curFileCnt = files?.length ?? 0
    const remainFileCnt = maxFileCnt - attFileCnt

    if (curFileCnt > remainFileCnt) {
      Toast('error', '사진은 최대 10장까지 업로드 가능합니다.')
      return
    }
    dispatch(loadingChange(true))

    // fileTypes 형식에 맞지 않는 파일이 몇개인지 체크
    let check = 0
    for (let i = 0; i < Math.min(curFileCnt, remainFileCnt); i++) {
      const file = files![i]
      if (!fileTypes.includes(file.type)) {
        check++
        // 사진 형식이 아닌 파일들은 파일리더 객체를 만들 필요가 없으므로 continue
        continue
      }

      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onloadend = () => {
        dispatch(upload(reader.result))
      }
    }
    if (check > 0) Toast('info', '사진형식이 아닌 파일은 제외되었습니다.')
  }

  return { selectFile }
}
