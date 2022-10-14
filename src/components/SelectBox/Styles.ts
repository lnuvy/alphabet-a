import styled from '@emotion/styled'

interface Props {
  small?: boolean
}

export const Wrapper = styled.label<Props>`
  cursor: pointer;
  border: 1px solid #f0f0f0;
  ${({ small }) => (small ? 'border-radius: 8px; width: 120px; height: 120px;' : 'width: 100%; height: 50vh;')}
  background-color: #fafafa;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > .image-length-info {
    font-size: 0.8rem;
    color: #797979;
    margin-top: 4px;
  }

  & .image-length {
    font-size: 0.7rem;
    color: #777777;
    margin-top: 4px;
  }
`
