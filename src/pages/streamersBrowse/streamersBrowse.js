import React, { useEffect } from 'react';
import { generatePath, useNavigate } from 'react-router';
import styled from 'styled-components';

import StreamersJson from 'streamers.json';
import FakeWindow from 'components/fakeWindow/fakeWindow';
import { useDevice } from 'hooks/useDevice';
import { StreamerConsumerHook } from 'stores/streamerStore';

import {
  SectionStyle,
  ListWrapperStyle,
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
      <ListWrapper isMobile={isMobile}>
        {StreamersJson.streamers.map((streamer, index) => (
          <li key={streamer + index}>
            <FakeWindow
              onClick={() => onClick(streamer)}
              type={streamer.pseudo + ".exe"}
              content={streamer.pseudo}
              size={
                isMobile
                  ? { width: 180, height: 50 }
                  : { width: 280, height: 100 }
              }
            />
          </li>
        ))}
      </ListWrapper>
    </Section>
  );
}

const Section = styled.section`
  ${SectionStyle};
`;

const ListWrapper = styled.ul`
  ${ListWrapperStyle};
`;

export default StreamersBrowse;
