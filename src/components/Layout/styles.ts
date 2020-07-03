import styled from 'styled-components';

export const Container = styled.div`
  display: grid;

  grid-template-rows: 82px 280px 363px 280px;
  grid-template-columns: 255px auto;

  grid-template-areas:
    'MM NB'
    'ML PV'
    'ML RE'
    'ML RV';

  height: 100vh;
`;
