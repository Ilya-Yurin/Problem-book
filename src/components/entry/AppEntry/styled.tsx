import styled, { createGlobalStyle } from 'utils/styled';

/**
 * Global css
 */
export const GlobalStyle = createGlobalStyle`
    html,
    body {
      font-family: Roboto, sans-serif;
      font-size: 14px;
      padding: 0;
      margin: 0;
      width: 100%;
      height: 100%;

      * {
        box-sizing: border-box;
        font-family: Roboto, sans-serif;
      }
    }

    body.text-selection-disabled {
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }

    #root {
      display: flex;
      flex: 1;

      height: auto;
      min-height: 100%;
    }
`;

export const StyledAppEntry = styled.div`
  display: flex;
  flex: 1;

  flex-direction: column;
  background-color: white;

  overflow-x: hidden;
`;
