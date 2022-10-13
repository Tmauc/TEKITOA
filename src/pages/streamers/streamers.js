import React from 'react'
import { generatePath, useNavigate } from "react-router";
import StreamersJson from 'assets/streamers.json';
import styled from 'styled-components';
import { SectionStyle, ListWrapperStyle, StreamerLinkStyle } from './streamers.style'

import { StreamerConsumerHook } from 'stores/streamerStore';

function Streamers() {
  const navigate = useNavigate();
  const [{ OAuth }, dispatch] = StreamerConsumerHook();

  const onClick = (streamer) => {
    var generateStreamerPath = generatePath("/:streamer", {
      streamer: streamer?.pseudo
    });
    dispatch({
      type: 'changeStreamer',
      newStreamer: streamer
    });
    navigate(generateStreamerPath, { state: { streamer: true } });
  }

  return (
    <Section className='streamers'>
      <h1 className='title'>STREAMERS</h1>
      <ListWrapper className='list-wrapper'>
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
