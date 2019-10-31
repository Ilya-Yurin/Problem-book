import styled from 'utils/styled';

export const StyledPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  flex: 1;
`;

export const RouteSpecificContent = styled.main`
  display: flex;
  position: relative;
  flex: 1;
  overflow-x: auto;
  background-color: #E3E8F0;
    & > * {
      padding: 16px 15% 16px 15%;
    }
`;
