import styled from '@emotion/styled'

interface ImageProps {
  src?: string
}

export const Wrapper = styled.label<ImageProps>`
  border: 1px solid #f0f0f0;
  border-radius: 8px;
  width: 120px;
  height: 120px;
  background-color: #fafafa;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${({ src }) => src && `background-image: url(${src}); background-size: cover;`};

  & > .image-length-info {
    font-size: 0.8rem;
    color: #797979;
    margin-top: 4px;
  }
`
