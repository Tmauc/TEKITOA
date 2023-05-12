import React, { useEffect } from 'react';
import { generatePath, useNavigate } from 'react-router';

import StreamersJson from 'streamers.json';
import FakeWindow from 'components/fakeWindow/fakeWindow';
import { StreamerConsumerHook } from 'stores/streamerStore';
import { useDevice } from 'hooks/useDevice';

import {
  Section,
  ListWrapper,
  StreamersDesc,
  Separator,
} from 'pages/streamersBrowse/streamersBrowse.style';

function StreamersBrowse() {
  const navigate = useNavigate();
  const { isMobile } = useDevice();
  // eslint-disable-next-line
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
    <Section className="streamersBrowse">
      <h1 className="title">STREAMERS</h1>
      <StreamersDesc>Ils ont participé à l’émission TE KI TOA !</StreamersDesc>
      <Separator />
      <ListWrapper>
        {StreamersJson.streamers.map((streamer, index) => (
          <li key={streamer + index}>
            <FakeWindow
              isStreamer
              onClick={() => onClick(streamer)}
              type={streamer.pseudo + ".exe"}
              content={streamer.pseudo}
              pp={streamer.ppPath}
              size={
                isMobile
                  ? { width: 330, height: 100 }
                  : { width: 330, height: 100 }
              }
            />
          </li>
        ))}
      </ListWrapper>
    </Section>
  );
}

export default StreamersBrowse;
