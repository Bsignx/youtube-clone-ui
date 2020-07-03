import React from 'react';

import { ReactComponent as IconMenu } from '../../assets/Menu.svg';
import { ReactComponent as LogoYoutube } from '../../assets/youtube.svg';

import { Container } from './styles';

const MainMenu: React.FC = () => {
  return (
    <Container>
      <IconMenu />
      <LogoYoutube />
    </Container>
  );
};

export default MainMenu;
