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

const ThumbnailVideoRecommend: React.FC<Props> = ({
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
        <div>
          <span>
            {`  ${views}
          views`}
          </span>
          <span>
            {` ${dateVideo}
          days ago`}
          </span>
        </div>

        <span>{channel}</span>
      </DataContainer>
    </Container>
  );
};

export default ThumbnailVideoRecommend;
