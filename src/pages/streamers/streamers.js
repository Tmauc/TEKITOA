import React, { useEffect } from 'react'
import { generatePath, useNavigate } from "react-router";
import StreamersJson from 'assets/streamers.json';
import styled from 'styled-components';

import { useDevice } from 'hooks/useDevice'
import { StreamerConsumerHook } from 'stores/streamerStore';

import { SectionStyle, ListWrapperStyle, StreamerLinkStyle } from './streamers.style'

function Streamers() {
  const navigate = useNavigate();
  const { isMobile } = useDevice();
  const [{ }, dispatch] = StreamerConsumerHook();

  useEffect(() => {
    dispatch({
      type: 'cleanStreamer',
    });
  }, []);

  const onClick = (streamer) => {
    var generateStreamerPath = generatePath("/:streamer", {
      streamer: streamer?.pseudo
    });
    dispatch({
      type: 'changeStreamer',
      newStreamer: streamer
    });
    navigate(generateStreamerPath, { state: { isStreamer: true } });
  }

  return (
    <Section className='streamers' isMobile={isMobile}>
      <h1 className='title'>STREAMERS</h1>
      <ListWrapper className='list-wrapper' isMobile={isMobile}>
        <ul>
          {StreamersJson.streamers.map((streamer, index) => (
            <li key={streamer + index}><StreamerLink onClick={() => onClick(streamer)}>{streamer.pseudo}</StreamerLink></li>
          ))}
        </ul>
      </ListWrapper>
    </Section>
  )
}

const Section = styled.section`
  ${SectionStyle};
`

const ListWrapper = styled.div`
  ${ListWrapperStyle};
`

const StreamerLink = styled.a`
  ${StreamerLinkStyle};
`

export default Streamers
