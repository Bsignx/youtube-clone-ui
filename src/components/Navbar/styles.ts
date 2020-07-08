import styled from 'styled-components';

import { Props } from '.';

export const Container = styled.div`
  grid-area: NB;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerInput = styled.div`
  position: relative;

  > input {
    width: 500px;
    height: 44px;
    background-color: var(--tertiary);
    padding: 12px 24px;
    border-radius: 22px;
    font-size: 16px;
    &::placeholder {
      color: rgba(48, 56, 76, 0.4);
    }
  }

  > svg {
    position: absolute;
    right: 20px;
    top: 10px;

    &:hover {
      > path {
        fill: var(--youtube);
      }
    }
  }
`;

export const ContainerOthers = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 48px;
  position: relative;

  div::after {
    background-color: var(--youtube);
    width: 15px;
    height: 15px;

    padding: 2px;

    border-radius: 50%;
    position: absolute;
    bottom: 21px;
    right: 113px;

    text-align: center;
    font-size: 10px;
    color: white;

    content: '${props => props.hasNotification && props.hasNotification}';
    display: ${props =>
      props.hasNotification && props.hasNotification > 0 ? 'inline' : 'none'};
  }

  > div svg + svg {
    margin-left: 48px;
  }

  > div:first-child {
    cursor: pointer;
    display: flex;
    align-items: center;
    > svg:hover {
      path {
        fill: var(--youtube);
        opacity: 1;
      }
    }
  }

  > .profile {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    margin-left: 32px;
    overflow: hidden;

    img {
      max-width: 100%;
    }
  }
`;
