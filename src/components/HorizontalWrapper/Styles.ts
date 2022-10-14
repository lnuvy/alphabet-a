import styled from '@emotion/styled'
import { LengthProps } from '@typing/Types'

export const Wrapper = styled.div<LengthProps>`
  width: 100%;
  display: grid;
  align-items: center;
  justify-content: start;
  grid-template-columns: repeat(${({ length }) => length + 1}, 120px);
  column-gap: 10px;
  overflow: hidden;

  & > .sticky-position {
    position: sticky;
    left: 0;
    z-index: 1;
    padding: 12px 0;
    background-color: #fff;
  }
`
