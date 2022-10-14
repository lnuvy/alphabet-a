import React from 'react'
import Slider from 'react-slick'
import styled from '@emotion/styled'
import { ImageType } from '@redux/image'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

interface Props {
  imageArr: ImageType[]
}

const Carousel: React.FC<Props> = ({ imageArr }) => {
  console.log(imageArr)

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    autoplay: false,
    autoplaySpeed: 2000,
    slidesToShow: 5, // 한페이지에 보이는 객체 수
    slidesToScroll: 1,
    arrows: false,
    centerMode: false,
    centerPadding: '0',
  }

  return (
    <StyledSlider {...settings}>
      {imageArr.map((img) => {
        console.log('캐러셀 안쪽 맵 ', img)
        return <div className="background-setting" key={img.id} />
      })}
    </StyledSlider>
  )
}

const StyledSlider = styled(Slider)`
  .slick-slide div {
    outline: none; // 슬라이드 클릭시 파란선을 제거하기 위해서 작성
    width: 100%;
  }

  & .background-setting {
    background-color: tomato;
  }
`

export default Carousel
