import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@redux/store'
import { SellPage, StarStyled } from '@styles/Styles'
import ImageBox from '@components/ImageBox/ImageBox'
import HorizontalWrapper from '@components/HorizontalWrapper/HorizontalWrapper'
import { ImageType, loadingChange } from '@redux/image'
import { usePreviewImage } from '@hooks/usePreviewImage'
import LoadingScreen from '@components/LoadingScreen'
import { useRouter } from 'next/router'

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

  console.log(isLoading)

  if (!isLoading) return <LoadingScreen />

  return (
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
  )
}

export default Step1
