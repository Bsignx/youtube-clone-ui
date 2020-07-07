import styled from 'styled-components';

export const Container = styled.div`
  grid-area: RE;
  padding-top: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;

  > div + div {
    margin-left: 40px;
  }
`;
