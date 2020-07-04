import React from 'react';

import { ReactComponent as IconSearch } from '../../assets/search.svg';
import { ReactComponent as IconCamera } from '../../assets/camera.svg';
import { ReactComponent as IconGrid } from '../../assets/grid.svg';
import { ReactComponent as IconBell } from '../../assets/bell.svg';
import ImageProfile from '../../assets/profile.png';

import { Container, ContainerInput, ContainerOthers } from './styles';

const Navbar: React.FC = () => {
  return (
    <Container>
      <ContainerInput>
        <input type="text" placeholder="Search" />
        <IconSearch />
      </ContainerInput>
      <ContainerOthers>
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
