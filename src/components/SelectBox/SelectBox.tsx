import LoadingScreen from '@components/LoadingScreen'
import { RootState } from '@redux/store'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { usePreviewImage } from 'src/hooks/usePreviewImage'
import { Wrapper } from './Styles'

interface Props {
  children: React.ReactNode
  small?: boolean
}

const SelectBox: React.FC<Props> = ({ children, small }) => {
  const { selectFile } = usePreviewImage()

  return (
    <Wrapper htmlFor="imageFile" small={small}>
      <input style={{ display: 'none' }} id="imageFile" type="file" multiple onChange={selectFile} />
      {children}
    </Wrapper>
  )
}

export default SelectBox
