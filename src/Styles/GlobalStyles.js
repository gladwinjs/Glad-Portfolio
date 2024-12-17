import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
    line-height: 1.6;
    background-color: #f9f9f9;
    color: #333;
  }

  h1, h2, h3 {
    margin-bottom: 10px;
  }

  button {
    cursor: pointer;
    padding: 10px 20px;
    background: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    transition: background 0.3s ease;

    &:hover {
      background: #0056b3;
    }
  }
`;

export default GlobalStyle;
