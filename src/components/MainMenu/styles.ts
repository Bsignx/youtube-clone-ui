import styled from 'styled-components';

export const Container = styled.div`
  grid-area: MM;

  display: flex;
  align-items: center;
  padding: 32px 32px;

  > svg + svg {
    margin-left: 28px;
  }

  > svg {
    cursor: pointer;
  }

  > svg:first-child > path:hover {
    fill: red;
  }
`;
