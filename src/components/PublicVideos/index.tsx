import React from 'react';

import { ReactComponent as LeftIcon } from '../../assets/ControllersIcons/Left.svg';
import { ReactComponent as RightIcon } from '../../assets/ControllersIcons/Right.svg';

import {
  Container,
  ContainerHead,
  ContainerBottom,
  ContainerProfile,
  ContainerAvatar,
  ContainerControls,
} from './styles';

const Navbar: React.FC = () => {
  return (
    <Container>
      <ContainerHead>
        <ContainerProfile>
          <ContainerAvatar>
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80"
              alt="Profile"
            />
          </ContainerAvatar>
          <p>Dollie Blair</p>
        </ContainerProfile>
        <ContainerControls>
          <LeftIcon />
          <RightIcon />
        </ContainerControls>
      </ContainerHead>
      <ContainerBottom />
    </Container>
  );
};

export default Navbar;
