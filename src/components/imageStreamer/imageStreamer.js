import React from 'react';

import { StreamerConsumerHook } from 'stores/streamerStore';

import {
  ImgWrapper,
  StreamerImg,
} from 'components/imageStreamer/imageStreamer.style';

function ImageStreamer() {
  const [{ streamer }] = StreamerConsumerHook();
  return (
    <ImgWrapper>
      <StreamerImg alt="Streamer image" src={streamer?.imgPath} />
    </ImgWrapper>
  );
}

export default ImageStreamer;
