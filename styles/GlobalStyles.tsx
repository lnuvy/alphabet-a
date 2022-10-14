import React from "react";
import { Global, css } from "@emotion/react";

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
    .global {
      width: 520px;
      min-height: 100vh;
      padding: 100px 104px 0 100px;
      margin: 0 auto;
    }
    .title-global {
      width: 100vw;
      height: 100vh;
    }
    .flex-s {
      display: flex;
      justify-content: start;
      align-items: center;
    }
    .flex-c {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .flex-sb {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .flex-e {
      display: flex;
      justify-content: end;
      align-items: center;
    }
    .flex-c-s {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: start;
    }
    .flex-c-c {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .flex-c-e {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: end;
    }
  `;

  return <Global styles={styles} />;
};

export default GlobalStyles;
