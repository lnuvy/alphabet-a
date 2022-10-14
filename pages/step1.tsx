import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@redux/store'
import { SellPage, StarStyled } from '@styles/Styles'
import ImageBox from '@components/ImageBox/ImageBox'
import HorizontalWrapper from '@components/HorizontalWrapper/HorizontalWrapper'
import { ImageType } from '@redux/image'
import LoadingScreen from '@components/LoadingScreen'
import { useRouter } from 'next/router'
import Head from 'next/head'

/**
 * 판매하기 페이지
 */

const Step1 = () => {
  const { isLoading, imageArr } = useSelector((state: RootState) => state.image)
  const router = useRouter()
  const [prevLength, setPrevLength] = useState(imageArr.length)

  useEffect(() => {
    const len = imageArr.length

    if (prevLength !== len && prevLength < len) {
      router.push('/step2').then(() => {
        setPrevLength(len)
      })
    }
  }, [imageArr.length])

  if (isLoading) return <LoadingScreen />

  return (
    <>
      <Head>
        <title>판매하기 | 알파벳에이(ffeed) 코딩테스트</title>
        <meta name="판매하기" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SellPage>
        <span>
          제품 사진 <StarStyled>*</StarStyled>
        </span>

        <HorizontalWrapper>
          {imageArr.map((img: ImageType) => (
            <ImageBox key={img.id} image={img} />
          ))}
        </HorizontalWrapper>
      </SellPage>
    </>
  )
}

export default Step1
