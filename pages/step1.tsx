import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@redux/store'
import Image from 'next/image'
import { SellPage, StarStyled } from '@styles/Styles'
import ImageBox from '@components/ImageBox/ImageBox'
import SelectBox from '@components/SelectBox/SelectBox'

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

      <SelectBox length={image.imageArr.length} />
      {/* <HorizontalWrapper> */}
      {image.imageArr.map((img, i) => {
        return (
          <ImageBox key={i} image={img} /> // TODOS: 아이디 지정하고 key 값 바꾸기
        )
      })}
      <ImageBox />
      {/* </HorizontalWrapper> */}
    </SellPage>
  )
}

export default Step1
