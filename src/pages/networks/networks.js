import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import HeaderStreamer from 'components/headerStreamer/headerStreamer.js';
import ImageStreamer from 'components/imageStreamer/imageStreamer';
import FakeWindow from 'components/fakeWindow/fakeWindow';

import { OAuthTwitch } from 'core/twitchAPI.js';
import { StreamerConsumerHook } from 'stores/streamerStore';
import { useDevice } from 'hooks/useDevice';
import { capitalize } from 'utils/capitalize';

import { SectionStyle, MainWrapperStyle, NetWorksWrapperStyle } from 'pages/networks/networks.style.js';

import StreamersJson from 'streamers.json';

function Networks() {
  const location = useLocation();
  const { isMobile } = useDevice();
  const [{ streamer }, dispatch] = StreamerConsumerHook();

  useEffect(() => {
    if (!streamer) {
      dispatch({
        type: 'changeStreamer',
        newStreamer: StreamersJson.streamers.find(e => e.pseudo === location?.pathname.substring(1).replace('/reseaux', '')),
      });
    }
    streamer?.pseudoTwitch && OAuthTwitch(dispatch, streamer?.pseudoTwitch);
  }, [dispatch, streamer, streamer?.pseudoTwitch, location?.pathname]);

  const onClickNetwork = (url) => {
    window.open(url, '_blank').focus();
  }

  return (
    <Section className="networks">
      <HeaderStreamer
        title={'Reseaux : ' + streamer?.pseudo}
        twitchURL={streamer?.networks.find(o => o?.type === 'twitch')?.url}
      />
      <ImageStreamer />
      <MainWrapper isMobile={isMobile}>
        {streamer?.networks?.map((network, index) => (
          <NetWorksWrapper isMobile={isMobile}>
            <FakeWindow
              onClick={() => onClickNetwork(network?.url)}
              type={capitalize(network?.type) + ".exe"}
              content={capitalize(network?.type)}
              size={
                isMobile
                  ? { width: 180, height: 50 }
                  : { width: 280, height: 100 }
              }
            />
          </NetWorksWrapper>
        ))}
      </MainWrapper>
    </Section>
  );
}

const Section = styled.section`
  ${SectionStyle};
`;

const MainWrapper = styled.div`
  ${MainWrapperStyle};
`;

const NetWorksWrapper = styled.div`
  ${NetWorksWrapperStyle};
`;


export default Networks;
