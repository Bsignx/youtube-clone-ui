import React from 'react';

import MainMenu from '../MainMenu';
import Navbar from '../Navbar';

import { Container } from './styles';

const Layout: React.FC = () => {
  return (
    <Container>
      <MainMenu />
      <Navbar />
    </Container>
  );
};

export default Layout;
