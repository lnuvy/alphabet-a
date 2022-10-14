import React, { useCallback } from 'react'
import { GlobalNavBar } from '@styles/Styles'
import { useRouter } from 'next/router'
import Image from 'next/image'

interface Props {
  title: string
}

const GlobalNav: React.FC<Props> = ({ title }) => {
  const router = useRouter()

  const onClickNext = useCallback(() => {
    router.push('/step1').then()
  }, [])

  return (
    <GlobalNavBar>
      {title === 'Home' ? (
        <div>&nbsp;</div>
      ) : (
        <div className="back-arrow" onClick={() => router.back()}>
          <Image src="/back_arrow.svg" width={32} height={32} alt="뒤로가기" />
        </div>
      )}

      <div className="text-area">{title}</div>

      {title !== '제품 태그하기' ? (
        <div></div>
      ) : (
        <div className="next-arrow" onClick={onClickNext}>
          다음
          <Image src="/next_arrow.svg" width={16} height={16} alt="다음" />
        </div>
      )}
    </GlobalNavBar>
  )
}

export default GlobalNav
