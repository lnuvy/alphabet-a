import styled from '@emotion/styled'

export const GlobalNavBar = styled.div`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  
  & > .back-arrow {
    cursor: pointer;
  }
  
  & > .text-area {
    font-weight: 700;
    font-size: 20px;
  }
  
  & > .next-arrow {
    cursor: pointer;
    padding: 6px;
    font-weight: 700;
    font-size: 16px;
    display: flex;
    justify-content: center;
  }
`
