import styled from 'styled-components';

export const Container = styled.div`
  grid-area: ML;
  padding: 32px;
  color: var(--secondary);
  > div {
    display: flex;
    align-items: center;
    margin-bottom: 16px;

    > svg {
      margin-right: 16px;
    }
  }
`;
