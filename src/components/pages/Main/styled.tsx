import styled from 'styled-components';

export const StyledMainPage = styled.main`
  display: flex;
  flex-wrap: wrap;
  flex: 1;

  .react-grid-item.react-grid-placeholder {
    background: none !important;
    border-radius: 5px; */
  }

  .react-grid-item > .react-resizable-handle {
    opacity: 0;
  }
`;

export const StyledPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const RouteSpecificContent = styled.div`
  display: flex;
  position: relative;
  flex: 1;
  overflow-x: auto;
`;
