import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import HeaderStreamer from 'components/headerStreamer/headerStreamer.js';
import ImageStreamer from 'components/imageStreamer/imageStreamer';

import { OAuthTwitch } from 'core/twitchAPI.js';
import { StreamerConsumerHook } from 'stores/streamerStore';

import { SectionStyle } from 'pages/networks/networks.style.js';

import StreamersJson from 'streamers.json';

function Networks() {
  const location = useLocation();
  const [{ streamer }, dispatch] = StreamerConsumerHook();

  useEffect(() => {
    if (!streamer) {
      dispatch({
        type: 'changeStreamer',
        newStreamer: StreamersJson.streamers.find(e => e.pseudo === location?.pathname.substring(1).replace('/reseaux', '')),
      });
    }
    OAuthTwitch(dispatch, streamer?.pseudoTwitch);
  }, [dispatch, streamer, streamer?.pseudoTwitch, location?.pathname]);

  return (
    <Section className="networks">
      <HeaderStreamer
        title={'Reseaux : ' + streamer?.pseudo}
        twitchURL={streamer?.twitchURL}
      />
      <ImageStreamer />
    </Section>
  );
}

const Section = styled.section`
  ${SectionStyle};
`;

export default Networks;
