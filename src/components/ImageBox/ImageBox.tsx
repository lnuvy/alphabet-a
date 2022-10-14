import React, { useCallback } from 'react'
import { Wrapper } from '@components/SelectBox/Styles'
import Close from '@components/Close'
import { ImageType, removePreview } from '@redux/image'
import { useDispatch } from 'react-redux'

const ImageBox = ({ image }: { image: ImageType }) => {
  const dispatch = useDispatch()

  const onClickDelete = useCallback(() => {
    dispatch(removePreview(image.id))
  }, [image])

  return (
    <Wrapper style={{ flexDirection: 'row' }} src={image.src}>
      <Close onClick={onClickDelete} />
    </Wrapper>
  )
}

export default ImageBox
