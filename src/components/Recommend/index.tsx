import React from 'react';

import ThumbnailVideoRecommend from '../ThumbnailVideoRecommend';

import ImageVideo4 from '../../assets/ImagesVideos/Cover-7.png';
import ImageVideo3 from '../../assets/ImagesVideos/Cover-6.png';
import ImageVideo2 from '../../assets/ImagesVideos/Cover-8.png';

import { Container } from './styles';

const Navbar: React.FC = () => {
  return (
    <Container>
      <ThumbnailVideoRecommend
        thumbnail={ImageVideo4}
        time="08:20"
        title="A Brief History Of Creation"
        views="18k"
        dateVideo={4}
        channel="Dollie Blair"
      />
      <ThumbnailVideoRecommend
        thumbnail={ImageVideo2}
        time="08:20"
        title="A Brief History Of Creation"
        views="18k"
        dateVideo={4}
        channel="Dollie Blair"
      />
      <ThumbnailVideoRecommend
        thumbnail={ImageVideo3}
        time="08:20"
        title="A Brief History Of Creation"
        views="18k"
        dateVideo={4}
        channel="Dollie Blair"
      />
    </Container>
  );
};

export default Navbar;
