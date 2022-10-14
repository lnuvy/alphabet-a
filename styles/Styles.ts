import styled from '@emotion/styled'

// GNB
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

/**
 * step1 styles
 */
export const SellPage = styled.div`
  padding: 0 1rem;
  margin-top: 5rem;

  /* & > .sell-text {
    margin-bottom: 0.5rem;
  } */
`

export const StarStyled = styled.span`
  font-size: 1.2rem;
  color: #1306d6;
  position: relative;
  top: 2px;
`

export const TagPage = styled.div`
  padding: 0.2rem;
  & > .image-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 5rem;
    width: 100%;
    min-height: 50vh;
  }
`
