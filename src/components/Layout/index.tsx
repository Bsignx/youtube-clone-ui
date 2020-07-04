import React from 'react';

import MainMenu from '../MainMenu';
import Navbar from '../Navbar';
import MenuLinks from '../MenuLinks';

import { Container } from './styles';

const Layout: React.FC = () => {
  return (
    <Container>
      <MainMenu />
      <Navbar />
      <MenuLinks />
    </Container>
  );
};

export default Layout;
