import styled from '@emotion/styled'
import { OnClickProps } from '@typing/Types'
import React from 'react'

interface Props extends OnClickProps {
  isTagged: boolean
}

const TagButton: React.FC<Props> = ({ onClick, isTagged }) => {
  return (
    <ButtonStyle onClick={onClick} isTagged={isTagged}>
      {isTagged ? '제품 태그됨' : '제품 태그하기'}
    </ButtonStyle>
  )
}

const ButtonStyle = styled.button<Props>`
  cursor: pointer;
  width: 86px;

  background-color: ${({ isTagged }) => (isTagged ? '#0003f2;' : '#efefef;')};
  color: ${({ isTagged }) => (isTagged ? '#fff;' : '#000;')};
  border: none;
  outline: none;
  border-radius: 100px;
  padding: 10px 12px;
  font-size: 0.7rem;
  vertical-align: bottom;

  position: relative;
  top: 12px;
  left: 12px;

  &:hover {
    background-color: ${({ isTagged }) => (isTagged ? '#000cd9' : '#dedede;')};
  }
`

export default TagButton
