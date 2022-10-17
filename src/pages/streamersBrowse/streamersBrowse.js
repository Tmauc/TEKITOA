import React, { useEffect } from 'react';
import { generatePath, useNavigate } from 'react-router';
import styled from 'styled-components';

import StreamersJson from 'streamers.json';
import { useDevice } from 'hooks/useDevice';
import { StreamerConsumerHook } from 'stores/streamerStore';

import {
  SectionStyle,
  ListWrapperStyle,
  StreamerLinkStyle,
} from 'pages/streamersBrowse/streamersBrowse.style';

function StreamersBrowse() {
  const navigate = useNavigate();
  const { isMobile } = useDevice();
  const [{ }, dispatch] = StreamerConsumerHook();

  useEffect(() => {
    dispatch({
      type: 'cleanStreamer',
    });
  }, [dispatch]);

  const onClick = (streamer) => {
    var generateStreamerPath = generatePath('/:streamer', {
      streamer: streamer?.pseudo,
    });
    navigate(generateStreamerPath, { state: { isStreamer: true } });
  };

  return (
    <Section className="streamersBrowse" isMobile={isMobile}>
      <h1 className="title">STREAMERS</h1>
      <ListWrapper className="list-wrapper" isMobile={isMobile}>
        <ul>
          {StreamersJson.streamers.map((streamer, index) => (
            <li key={streamer + index}>
              <StreamerLink onClick={() => onClick(streamer)}>
                {streamer.pseudo}
              </StreamerLink>
            </li>
          ))}
        </ul>
      </ListWrapper>
    </Section>
  );
}

const Section = styled.section`
  ${SectionStyle};
`;

const ListWrapper = styled.div`
  ${ListWrapperStyle};
`;

const StreamerLink = styled.a`
  ${StreamerLinkStyle};
`;

export default StreamersBrowse;
