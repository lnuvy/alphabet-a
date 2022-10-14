import React from 'react'
import styled from '@emotion/styled'

interface Props {
  onClick: () => void
}

const Close: React.FC<Props> = ({ onClick }) => {
  return (
    <ButtonStyle onClick={onClick}>
      {/* <svg width={20} height={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z"
          fill="white"
          stroke="2"
        />
      </svg> */}

      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 1000"
        enableBackground="new 0 0 1000 1000"
        width={12}
        height={12}
      >
        <g>
          <path
            fill="#fff"
            d="M638.6,500l322.7-322.7c38.3-38.3,38.3-100.3,0-138.6C923,0.4,861,0.4,822.7,38.7L500,361.4L177.3,38.7C139,0.4,77,0.4,38.7,38.7C0.4,77,0.4,139,38.7,177.3L361.4,500L38.7,822.7C0.4,861,0.4,923,38.7,961.3C57.9,980.4,82.9,990,108,990s50.1-9.6,69.3-28.7L500,638.6l322.7,322.7c19.1,19.1,44.2,28.7,69.3,28.7c25.1,0,50.1-9.6,69.3-28.7c38.3-38.3,38.3-100.3,0-138.6L638.6,500z"
          />
        </g>
      </svg>
    </ButtonStyle>
  )
}

const ButtonStyle = styled.button`
  cursor: pointer;
  padding: 1px;
  position: relative;
  top: -10px;
  left: 100px;
  background-color: black;
  width: 24px;
  height: 24px;
  border: none;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default Close
