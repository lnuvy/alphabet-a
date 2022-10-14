import { TagPage } from '@styles/Styles'
import React, { useEffect } from 'react'
import Image from 'next/image'
import Carousel from '@components/Carousel/Carousel'
import { useSelector } from 'react-redux'
import { RootState } from '@redux/store'
import { useRouter } from 'next/router'

/**
 * 제품 태그하기 페이지
 */
const Step2 = () => {
  const image = useSelector((state: RootState) => state.image)
  const router = useRouter()

  useEffect(() => {
    if (image.imageArr.length === 0) {
      router.replace('/step1')
    }
  }, [image])

  return (
    <TagPage>
      <Carousel imageArr={image.imageArr} />
    </TagPage>
  )
}

export default Step2
