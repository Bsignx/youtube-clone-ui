import React from 'react';

import MainMenu from '../MainMenu';
import Navbar from '../Navbar';
import MenuLinks from '../MenuLinks';
import PublicVideos from '../PublicVideos';

import { Container } from './styles';

const Layout: React.FC = () => {
  return (
    <Container>
      <MainMenu />
      <Navbar />
      <MenuLinks />
      {/* <PublicVideos /> */}
    </Container>
  );
};

export default Layout;
