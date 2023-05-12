import React from 'react';

import AudioButton from 'components/audioButton/audioButton';
import OnLiveDot from 'components/onLiveDot/onLiveDot';
import { useDevice } from 'hooks/useDevice';
import { StreamerConsumerHook } from 'stores/streamerStore';

import {
  Header,
  HeaderLeftWrapper,
  TitleLink,
  P,
  WrapperAudio,
} from 'components/headerStreamer/headerStreamer.style';

function HeaderStreamer({ title, twitchURL, onClickAudio }) {
  const { isMobile } = useDevice();
  const [{ stream }] = StreamerConsumerHook();

  const goToTwitch = () => {
    window.open(twitchURL, '_blank').focus();
  };

  return (
    <Header>
      <HeaderLeftWrapper>
        <TitleLink onClick={goToTwitch}>
          {title}
        </TitleLink>
        {!isMobile &&
          <WrapperAudio>
            <AudioButton onClickAudio={onClickAudio} />
            {stream && (
              <>
                <P>ON LIVE</P>
                <OnLiveDot small />
              </>
            )}
          </WrapperAudio>
        }
      </HeaderLeftWrapper>
    </Header>
  );
}

export default HeaderStreamer;
