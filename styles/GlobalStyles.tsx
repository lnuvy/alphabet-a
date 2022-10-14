import React from 'react'
import { Global, css } from '@emotion/react'

const GlobalStyles = () => {
  const styles = css`
    html,
    body {
      padding: 0;
      margin: 0;
      font-family: Noto Sans;
      scroll-behavior: smooth;
      background-color: #f5f5f5;
    }
    a {
      color: inherit;
      text-decoration: none;
    }
    * {
      box-sizing: border-box;
      -webkit-tap-highlight-color: transparent;
    }

    .view-screen {
      min-width: 375px;
      max-width: 438px;
      height: 100vh;
      margin: 0 auto;
      background-color: #fff;
    }

    .card-desc {
      cursor: pointer;
      margin: 1rem;
      padding: 1.5rem;
      text-align: left;
      color: inherit;
      text-decoration: none;
      border: 1px solid #eaeaea;
      border-radius: 10px;
      transition: color 0.15s ease, border-color 0.15s ease;
      vertical-align: middle;
    }

    .card-desc:hover,
    .card-desc:focus,
    .card-desc:active {
      color: #0070f3;
      border-color: #0070f3;
    }

    .card-desc h2 {
      margin: 0;
      font-size: 1.5rem;
    }

    .card-desc p {
      margin: 0;
      font-size: 1.25rem;
      line-height: 1.5;
    }
  `

  return <Global styles={styles} />
}

export default GlobalStyles
