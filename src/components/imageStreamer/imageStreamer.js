import React from 'react'
import styled from 'styled-components';

import { ImgWrapperStyle, StreamerImgStyle } from './imageStreamer.style'

import { StreamerConsumerHook } from 'stores/streamerStore';

function ImageStreamer() {
  const [{ streamer }] = StreamerConsumerHook();
  return (
    <ImgWrapper>
      <StreamerImg src={streamer?.imgPath} />
    </ImgWrapper>
  )
}

const ImgWrapper = styled.div`
  ${ImgWrapperStyle};
`

const StreamerImg = styled.img`
  ${StreamerImgStyle};
`

export default ImageStreamer
