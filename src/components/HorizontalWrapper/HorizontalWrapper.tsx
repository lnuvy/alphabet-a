import React, { useEffect, useRef, useState } from 'react'
import styled from '@emotion/styled'
import SelectBox from '@components/SelectBox/SelectBox'
import { useSelector } from 'react-redux'
import { RootState } from '@redux/store'
import { useMouseDrag } from 'src/hooks/useMouseDrag'
import Image from 'next/image'

interface Props {
  children: React.ReactNode
}

const HorizontalWrapper: React.FC<Props> = ({ children }) => {
  const image = useSelector((state: RootState) => state.image)
  const length = image.imageArr.length
  const ref = useRef<null | HTMLDivElement>()
  const { handleMouseDown, handleMouseLeave, handleMouseMove } = useMouseDrag(ref)

  return (
    <Wrapper
      length={length}
      ref={ref}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseLeave}
    >
      <div className="sticky-position">
        <SelectBox small>
          <Image src="/camera.svg" width={20} height={20} alt="mini" />
          <div className="image-length-info">
            <b>{length}</b> · 10
          </div>
        </SelectBox>
      </div>
      {children}
    </Wrapper>
  )
}

interface StyleProps {
  length: number
}

const Wrapper = styled.div<StyleProps>`
  width: 100%;
  display: grid;
  align-items: center;
  justify-content: start;
  grid-template-columns: repeat(${({ length }) => length + 1}, 120px);
  column-gap: 10px;
  overflow: hidden;

  & > .sticky-position {
    position: sticky;
    left: 0;
    z-index: 1;
    padding: 12px 0;
    background-color: #fff;
  }
`
export default HorizontalWrapper
