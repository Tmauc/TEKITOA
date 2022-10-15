import React from 'react'
import styled from 'styled-components';

import { useDevice } from 'hooks/useDevice'
import { StreamerConsumerHook } from 'stores/streamerStore';

import { ImgWrapperStyle, StreamerImgStyle } from './imageStreamer.style'

function ImageStreamer() {
  const { isMobile } = useDevice();
  const [{ streamer }] = StreamerConsumerHook();
  return (
    <ImgWrapper isMobile={isMobile}>
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
