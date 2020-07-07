import React from 'react';

import { Container, ImageContainer, DataContainer } from './styles';

interface Props {
  thumbnail: string;
  time: string;
  title: string;
  views: string;
  dateVideo: number;
  channel: string;
}

const ThumbnailVideo: React.FC<Props> = ({
  thumbnail,
  time,
  title,
  views,
  dateVideo,
  channel,
}) => {
  return (
    <Container>
      <ImageContainer>
        <img src={thumbnail} alt="" />
        <span>{time}</span>
      </ImageContainer>
      <p>{title}</p>
      <DataContainer>
        <span>
          {`  ${views}
          views`}
        </span>
        <span>
          {` ${dateVideo}
          days ago`}
        </span>
        <span>{channel}</span>
      </DataContainer>
    </Container>
  );
};

export default ThumbnailVideo;
