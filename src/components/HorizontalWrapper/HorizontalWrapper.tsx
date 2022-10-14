import React, { useRef } from 'react'
import SelectBox from '@components/SelectBox/SelectBox'
import { useSelector } from 'react-redux'
import { RootState } from '@redux/store'
import { useMouseDrag } from 'src/hooks/useMouseDrag'
import Image from 'next/image'
import { Wrapper } from './Styles'

interface Props {
  children: React.ReactNode
}

const HorizontalWrapper: React.FC<Props> = ({ children }) => {
  const image = useSelector((state: RootState) => state.image)
  const length = image.imageArr.length
  const ref = useRef<null | HTMLDivElement>(null)
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

export default HorizontalWrapper
