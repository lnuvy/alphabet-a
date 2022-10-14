import { RootState } from '@redux/store'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { usePreviewImage } from 'src/hooks/usePreviewImage'
import { Wrapper } from './Styles'

interface Props {
  children: React.ReactNode
  small?: boolean
}

const SelectBox: React.FC<Props> = ({ children, small }) => {
  const router = useRouter()
  const image = useSelector((state: RootState) => state.image)

  const { selectFile } = usePreviewImage()

  const [prevLength, setPrevLength] = useState(image.imageArr.length)

  useEffect(() => {
    const len = image.imageArr.length

    if (prevLength !== len && prevLength < len) {
      router.push('/step2').then(() => {
        setPrevLength(len)
      })
    }
  }, [image.imageArr.length])

  return (
    <Wrapper htmlFor="imageFile" small={small}>
      <input style={{ display: 'none' }} id="imageFile" type="file" multiple onChange={selectFile} />
      {children}
    </Wrapper>
  )
}

export default SelectBox
