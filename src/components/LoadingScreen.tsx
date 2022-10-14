import styled from '@emotion/styled'
import Image from 'next/image'
import React from 'react'

const LoadingScreen = () => {
  return (
    <LoadingWraper>
      <Image src="/200w.gif" width={100} height={100} alt="loading" />
    </LoadingWraper>
  )
}

const LoadingWraper = styled.div`
  height: calc(100vh - 60px);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding-bottom: 5rem;
`

export default LoadingScreen
