import React, { useCallback } from 'react'
import Close from '@components/Close'
import { ImageType, removePreview } from '@redux/image'
import { useDispatch } from 'react-redux'
import { Wrapper } from './Styles'
import Image from 'next/image'

const ImageBox = ({ image }: { image: ImageType }) => {
  const dispatch = useDispatch()

  const onClickDelete = useCallback(() => {
    dispatch(removePreview(image.id))
  }, [image])

  return (
    <Wrapper src={image.src}>
      <Close onClick={onClickDelete} />
      {image.isTagged && <Image className="tag-checked" src="/tagged.svg" width={16} height={16} alt="tag" />}
    </Wrapper>
  )
}

export default ImageBox
