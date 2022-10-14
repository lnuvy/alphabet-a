import { TagPage } from '@styles/Styles'
import React, { useEffect } from 'react'
import Carousel from '@components/Carousel/Carousel'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@redux/store'
import { useRouter } from 'next/router'
import { loadingChange } from '@redux/image'

/**
 * 제품 태그하기 페이지
 */

const Step2 = () => {
  const image = useSelector((state: RootState) => state.image)
  const router = useRouter()
  const dispatch = useDispatch()

  useEffect(() => {
    if (image.imageArr.length === 0) {
      router.replace('/step1')
    }
  }, [image])

  useEffect(() => {
    dispatch(loadingChange(false))
  }, [])

  return (
    <TagPage>
      <Carousel imageArr={image.imageArr} />
    </TagPage>
  )
}

export default Step2
