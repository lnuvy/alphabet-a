import React, { useEffect, useRef, useState } from 'react'
import styled from '@emotion/styled'
import SelectBox from '@components/SelectBox/SelectBox'
import { useSelector } from 'react-redux'
import { RootState } from '@redux/store'
import { useMouseDrag } from 'src/hooks/useMouseDrag'

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
      onMouseUp={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <div className="sticky-position">
        <SelectBox length={length} />
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
  grid-template-columns: repeat(${({ length }) => length + 1}, 1fr);
  column-gap: 10px;
  overflow: auto;

  & > .sticky-position {
    position: sticky;
    left: 0;
    z-index: 1;
    padding: 12px 0;
    background-color: #fff;
  }
`
export default HorizontalWrapper
