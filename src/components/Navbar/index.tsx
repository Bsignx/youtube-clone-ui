import React from 'react';

import { ReactComponent as IconSearch } from '../../assets/search.svg';
import { ReactComponent as IconCamera } from '../../assets/camera.svg';
import { ReactComponent as IconGrid } from '../../assets/grid.svg';
import { ReactComponent as IconBell } from '../../assets/bell.svg';
import ImageProfile from '../../assets/profile.png';

import { Container, ContainerInput, ContainerOthers } from './styles';

export interface Props {
  hasNotification?: number;
}

const Navbar: React.FC<Props> = ({ hasNotification }) => {
  return (
    <Container>
      <ContainerInput>
        <input type="text" placeholder="Search" />
        <IconSearch />
      </ContainerInput>
      <ContainerOthers hasNotification={hasNotification}>
        <div>
          <IconCamera />
          <IconGrid />
          <IconBell />
        </div>
        <div className="profile">
          <img src={ImageProfile} alt="Profile" />
        </div>
      </ContainerOthers>
    </Container>
  );
};

export default Navbar;
