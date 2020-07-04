import React from 'react';

import { Container } from './styles';

import { ReactComponent as Icon1 } from '../../assets/MenuLinksIcons/1.svg';
import { ReactComponent as Icon2 } from '../../assets/MenuLinksIcons/2.svg';
import { ReactComponent as Icon3 } from '../../assets/MenuLinksIcons/3.svg';
import { ReactComponent as Icon4 } from '../../assets/MenuLinksIcons/4.svg';
import { ReactComponent as Icon5 } from '../../assets/MenuLinksIcons/5.svg';
import { ReactComponent as Icon6 } from '../../assets/MenuLinksIcons/6.svg';
import { ReactComponent as Icon7 } from '../../assets/MenuLinksIcons/7.svg';
import { ReactComponent as Icon8 } from '../../assets/MenuLinksIcons/8.svg';
import { ReactComponent as Icon9 } from '../../assets/MenuLinksIcons/9.svg';
import { ReactComponent as Icon10 } from '../../assets/MenuLinksIcons/10.svg';
import { ReactComponent as Icon11 } from '../../assets/MenuLinksIcons/11.svg';

const MenuLinks: React.FC = () => {
  return (
    <Container>
      <div>
        <Icon11 />
        <p>Home</p>
      </div>
      <div>
        <Icon1 />
        <p>Trending</p>
      </div>
      <div>
        <Icon2 />
        <p>Subscriptions</p>
      </div>
      <div>
        <Icon3 />
        <p>Library</p>
      </div>
      <div>
        <Icon4 />
        <p>History</p>
      </div>
      <div>
        <Icon5 />
        <p>Watch Later</p>
      </div>
      <div>
        <Icon6 />
        <p>Favourites</p>
      </div>
      <div>
        <Icon7 />
        <p>Liked Videos</p>
      </div>
      <div>
        <Icon8 />
        <p>Music</p>
      </div>
      <div>
        <Icon9 />
        <p>Games</p>
      </div>
      <div>
        <Icon10 />
        <p>Show More</p>
      </div>
    </Container>
  );
};

export default MenuLinks;
