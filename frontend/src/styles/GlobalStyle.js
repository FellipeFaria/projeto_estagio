import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', BlinkMaxSystemFont, 'Segoe UI', Roboto, Oxygen, Ubunto, Canterall, sans-serif;
    background: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.5;
    min-height: 100vh;
  }

  a {
    text-decoration: none;
    color: inherit
  }
`;
