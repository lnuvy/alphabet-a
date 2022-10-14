import React from 'react'
import Slider from 'react-slick'
import styled from '@emotion/styled'
import { ImageType } from '@redux/image'
import Image from 'next/image'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { OnlySrcProps } from '@typing/Types'
import SelectBox from '@components/SelectBox/SelectBox'

interface Props {
  imageArr: ImageType[]
}

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  autoplay: false,
  autoplaySpeed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  centerPadding: '0',
  appendDots: (dots: any) => (
    <div
      style={{
        position: 'absolute',
        bottom: '-36px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <ul>{dots}</ul>
    </div>
  ),
}

const Carousel: React.FC<Props> = ({ imageArr }) => {
  return (
    <StyledSlider {...settings}>
      {imageArr.map((img) => {
        return <ImageDiv className="background-setting" key={img.id} src={img.src} />
      })}

      <SelectBox>
        <Image src="/camera.svg" width={32} height={32} alt="camera" />
        사진 추가하기
        <span className="image-length">
          <b>{imageArr.length}</b> · 10
        </span>
      </SelectBox>
    </StyledSlider>
  )
}

const StyledSlider = styled(Slider)`
  .slick-slide div {
    outline: none; // 슬라이드 클릭시 파란선을 제거하기 위해서 작성
    /* width: 100%; */
  }

  .slick-dots li button:before {
    width: 10px;
    height: 10px;
  }
`

const AddImageScreen = styled.div`
  cursor: pointer;
  display: flex !important;
  flex-direction: column !important;
  justify-content: center !important;
  align-items: center !important;
  margin-top: 5rem;

  background-color: #fafafa;

  & .image-length {
    color: #777777;
    font-size: 0.7rem;
    margin-top: 4px;
  }
`

const ImageDiv = styled.div<OnlySrcProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
  width: 100%;
  min-height: 50vh;

  background-image: url(${({ src }) => src});
  background-size: cover;
`

export default Carousel
