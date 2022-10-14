import Toast from '@components/Toast/Toast'
import { upload } from '@redux/image'
import { RootState } from '@redux/store'
import Image from 'next/image'
import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Wrapper } from './Styles'

interface Props {
  length: number
}

const maxFileCnt = 10
const fileTypes = ['image/gif', 'image/jpeg', 'image/png', 'image/bmp', 'image/tif', 'image/svg+xml']

const SelectBox: React.FC<Props> = ({ length }) => {
  const dispatch = useDispatch()
  // const fileInput = useRef()
  const image = useSelector((state: RootState) => state.image)

  const selectFile = (e) => {
    const { files } = e.target
    const attFileCnt = image.imageArr.length
    const curFileCnt = files.length
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
        console.log(file.type)

        check++
        continue
      }
      console.log(file)

      // dispatch(upload(file));
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onloadend = () => {
        console.log(reader.result)

        dispatch(upload(reader.result))
      }
    }

    if (check > 0) Toast('info', '사진형식이 아닌 파일은 제외되었습니다.')
  }

  return (
    <Wrapper htmlFor="imageFile" style={{ cursor: 'pointer' }}>
      <input
        style={{ display: 'none' }}
        id="imageFile"
        type="file"
        multiple
        onChange={selectFile}
        // ref={fileInput}
      />
      <Image src="/camera.svg" width={20} height={20} alt="mini" />
      <div className="image-length-info">
        <b>{length}</b> · 10
      </div>
    </Wrapper>
  )
}

export default SelectBox
