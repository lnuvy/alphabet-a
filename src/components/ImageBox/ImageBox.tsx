import React, { useCallback } from 'react'
import Close from '@components/Close'
import { ImageType, removePreview } from '@redux/image'
import { useDispatch } from 'react-redux'
import { Wrapper } from './Styles'

const ImageBox = ({ image }: { image: ImageType }) => {
  const dispatch = useDispatch()

  const onClickDelete = useCallback(() => {
    dispatch(removePreview(image.id))
  }, [image])

  return (
    <Wrapper src={image.src}>
      <Close onClick={onClickDelete} />
    </Wrapper>
  )
}

export default ImageBox
