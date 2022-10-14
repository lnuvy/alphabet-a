import { TagPage } from '@styles/Styles'
import React from 'react'
import Image from 'next/image'
import Carousel from '@components/Carousel/Carousel'
import { useSelector } from 'react-redux'
import { RootState } from '@redux/store'

/**
 * 제품 태그하기 페이지
 */
const Step2 = () => {
  const image = useSelector((state: RootState) => state.image)

  return (
    <TagPage>
      <Carousel imageArr={image.imageArr} />
      {/* <Image src="/camera.svg" width={32} height={32} alt="camera" /> */}
      {/* 사진 추가하기 */}
    </TagPage>
  )
}

export default Step2
