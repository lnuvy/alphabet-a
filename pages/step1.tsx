import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@redux/store'
import Image from 'next/image'
import { SellPage, StarStyled } from '@styles/Styles'
import ImageBox from '@components/ImageBox/ImageBox'
import SelectBox from '@components/SelectBox/SelectBox'
import HorizontalWrapper from '@components/HorizontalWrapper/HorizontalWrapper'
import { ImageType } from '@redux/image'

/**
 * 판매하기 페이지
 */

const Step1 = () => {
  const dispatch = useDispatch()
  const image = useSelector((state: RootState) => state.image)

  return (
    <SellPage>
      <span>
        제품 사진 <StarStyled>*</StarStyled>
      </span>

      <div className="horizontal">
        <SelectBox length={image.imageArr.length} />
        <HorizontalWrapper>
          {image.imageArr.map((img: ImageType) => (
            <ImageBox key={img.id} image={img} />
          ))}
        </HorizontalWrapper>
      </div>
    </SellPage>
  )
}

export default Step1
