import React from 'react';

import { ReactComponent as LeftIcon } from '../../assets/ControllersIcons/Left.svg';
import { ReactComponent as RightIcon } from '../../assets/ControllersIcons/Right.svg';

import ImageVideo1 from '../../assets/ImagesVideos/Cover-1.png';
import ImageVideo2 from '../../assets/ImagesVideos/Cover-2.png';
import ImageVideo3 from '../../assets/ImagesVideos/Cover-11.png';
import ImageVideo4 from '../../assets/ImagesVideos/Cover-9.png';

import {
  Container,
  ContainerHead,
  ContainerBottom,
  ContainerProfile,
  ContainerAvatar,
  ContainerControls,
} from './styles';
import ThumbnailVideo from '../ThumbnailVideo';

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
      <ContainerBottom>
        <ThumbnailVideo
          thumbnail={ImageVideo1}
          time="08:20"
          title="A Brief History Of Creation"
          views="18k"
          dateVideo={4}
          channel="Dollie Blair"
        />
        <ThumbnailVideo
          thumbnail={ImageVideo2}
          time="08:20"
          title="A Brief History Of Creation"
          views="18k"
          dateVideo={4}
          channel="Dollie Blair"
        />
        <ThumbnailVideo
          thumbnail={ImageVideo3}
          time="08:20"
          title="A Brief History Of Creation"
          views="18k"
          dateVideo={4}
          channel="Dollie Blair"
        />
        <ThumbnailVideo
          thumbnail={ImageVideo4}
          time="08:20"
          title="A Brief History Of Creation"
          views="18k"
          dateVideo={4}
          channel="Dollie Blair"
        />
        <ThumbnailVideo
          thumbnail={ImageVideo2}
          time="08:20"
          title="A Brief History Of Creation"
          views="18k"
          dateVideo={4}
          channel="Dollie Blair"
        />
      </ContainerBottom>
    </Container>
  );
};

export default Navbar;
