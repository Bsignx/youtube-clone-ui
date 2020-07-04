import styled from 'styled-components';

export const Container = styled.div`
  grid-area: MM;
  padding-left: 32px;

  display: flex;
  align-items: center;

  > svg + svg {
    margin-left: 28px;
  }

  > svg {
    cursor: pointer;
  }

  > svg:hover {
    path {
      fill: var(--youtube);
    }
  }
`;
