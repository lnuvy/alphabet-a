import { TagPage } from '@styles/Styles'
import React, { useEffect } from 'react'
import Carousel from '@components/Carousel/Carousel'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@redux/store'
import { useRouter } from 'next/router'
import { loadingChange } from '@redux/image'
import Head from 'next/head'

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
    <>
      <Head>
        <title>제품 태그하기 | 알파벳에이(ffeed) 코딩테스트</title>
        <meta name="제품 태그하기" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TagPage>
        <Carousel imageArr={image.imageArr} />
      </TagPage>
    </>
  )
}

export default Step2
