import { TagPage } from '@styles/Styles'
import React from 'react'
import Image from 'next/image'

/**
 * 제품 태그하기 페이지
 */
const Step2 = () => {
  return (
    <TagPage>
      <div className="image-box">
        <Image src="/camera.svg" width={32} height={32} alt="camera" />
        사진 추가하기
      </div>
    </TagPage>
  )
}

export default Step2
