import styled from '@emotion/styled'

interface ImageProps {
  src?: string
}

export const Wrapper = styled.div<ImageProps>`
  border: 1px solid #f0f0f0;
  border-radius: 8px;
  width: 120px;
  height: 120px;
  background-color: #fafafa;

  ${({ src }) => src && `background-image: url(${src}); background-size: cover;`};
`
