import styled from 'styled-components';

export const Container = styled.div`
  grid-area: PV RV;
  flex-direction: column;
  display: flex;
  overflow: hidden;
`;

export const ContainerHead = styled.div`
  display: flex;
  padding: 24px 24px 24px 0;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

export const ContainerProfile = styled.div`
  display: flex;
  align-items: center;

  > p {
    font-weight: bold;
    color: var(--primary);
    font-size: 24px;
  }
`;

export const ContainerAvatar = styled.div`
  height: 50px;
  width: 50px;
  overflow: hidden;
  border-radius: 50%;
  margin-right: 20px;
  img {
    max-width: 50px;
  }
`;

export const ContainerControls = styled.div`
  > svg + svg {
    margin-top: 8px;
    margin-left: 16px;
  }
`;

export const ContainerBottom = styled.div`
  display: flex;

  > div + div {
    margin-left: 32px;
  }
`;
