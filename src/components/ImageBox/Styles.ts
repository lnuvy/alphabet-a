import styled from '@emotion/styled'
import { OnlySrcProps } from '@typing/Types'

export const Wrapper = styled.div<OnlySrcProps>`
  border: 1px solid #f0f0f0;
  border-radius: 8px;
  width: 120px;
  height: 120px;
  background-color: #fafafa;

  ${({ src }) => src && `background-image: url(${src}); background-size: cover;`};

  & > span {
    position: relative;
    top: 70px;
    left: 94px;
  }
`
