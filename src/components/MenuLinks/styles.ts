import styled from 'styled-components';

export const Container = styled.div`
  grid-area: ML;
  padding: 32px;
  color: var(--secondary);
  > div {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;

    > svg {
      margin-right: 16px;
    }

    &:not(.except):hover {
      p,
      path {
        color: var(--youtube);
        fill: var(--youtube);
        opacity: 1;
      }
    }
  }

  .separator {
    margin-bottom: 32px;
  }

  h2 {
    color: black;
    font-size: 18px;
    margin-bottom: 30px;
  }
`;

export const ContainerSubscriptions = styled.div`
  display: flex;
  flex-direction: column;

  > div {
    align-self: self-start;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }

  .ContainerAvatar {
    height: 26px;
    width: 26px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 10px;

    > img {
      width: 100%;
    }
  }

  > div {
    cursor: pointer;

    &:hover {
      p {
        color: var(--youtube);
      }
    }
  }
`;
