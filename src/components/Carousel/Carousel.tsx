import React, { useCallback } from 'react'
import Slider from 'react-slick'
import styled from '@emotion/styled'
import { ImageType, taggedImage } from '@redux/image'
import Image from 'next/image'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { OnlySrcProps } from '@typing/Types'
import SelectBox from '@components/SelectBox/SelectBox'
import { useDispatch } from 'react-redux'
import TagButton from '@components/TagButton'

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
  const dispatch = useDispatch()

  const onClickTag = useCallback(
    (image: ImageType, index: number) => {
      const { id } = image
      dispatch(taggedImage({ id, index }))
    },
    [imageArr],
  )

  return (
    <StyledSlider {...settings}>
      {imageArr.map((img, i) => {
        return (
          <ImageDiv className="background-setting" key={img.id} src={img.src}>
            <TagButton onClick={() => onClickTag(img, i)} isTagged={img.isTagged} />
          </ImageDiv>
        )
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
