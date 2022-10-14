import Image from 'next/image'
import React from 'react'
import { Wrapper } from './Styles'

interface Props {
  length: number
}

const SelectBox: React.FC<Props> = ({ length }) => {
  return (
    <Wrapper>
      <Image src="/camera.svg" width={20} height={20} alt="mini" />
      <div className="image-length-info">
        <b>{length}</b> · 10
      </div>
    </Wrapper>
  )
}

export default SelectBox
