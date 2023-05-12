import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import HeaderStreamer from 'components/headerStreamer/headerStreamer.js';
import Description from 'components/description/description.js';
import FakeWindow from 'components/fakeWindow/fakeWindow.js';
import ImageStreamer from 'components/imageStreamer/imageStreamer';
import Emotes from 'components/emotes/emotes';
import Button from 'components/button/button';
import AudioButton from 'components/audioButton/audioButton';

import { StreamerConsumerHook } from 'stores/streamerStore';

import { useDevice } from 'hooks/useDevice';
import { OAuthTwitch } from 'core/twitchAPI.js';

import OnLiveDot from 'components/onLiveDot/onLiveDot';

import StreamersJson from 'streamers.json';

import {
  Section,
  Main,
  LeftWrapper,
  Categories,
  Separator,
  Title,
  RediffWrapper,
  ParallaxBg,
  ParallaxOverlay,
  ParallaxContent,
  HeaderRightWrapper,
  NetWorksWrapper,
  LiveWrapper,
  BackIcon,
  WrapperAudio,
  DescWrapper,
  P,
  OnLiveWrapper,
} from 'pages/streamer/streamer.style.js';

function Streamer() {
  const location = useLocation();
  const { isMobile } = useDevice();
  const navigate = useNavigate();
  const [{ streamer, user, stream }, dispatch] = StreamerConsumerHook();
  const [createdDate, setCreatedDate] = useState(null);
  const [userDesc, setUserDesc] = useState(null);
  var audio = streamer && streamer?.thePhrase && new Audio(streamer?.thePhrase);

  function backStreamers() {
    navigate('/streamersBrowse');
  }

  const onClickNetwork = (url) => {
    window.open(url, '_blank').focus();
  }


  const onClickAudio = () => {
    audio.play();
  };

  useEffect(() => {
    if (!streamer) {
      dispatch({
        type: 'changeStreamer',
        newStreamer: StreamersJson.streamers.find(e => e.pseudo === location?.pathname.substring(1)),
      });
    }
    streamer?.pseudoTwitch && streamer?.pseudoTwitch && OAuthTwitch(dispatch, streamer?.pseudoTwitch);
  }, [dispatch, streamer, streamer?.pseudoTwitch, location?.pathname]);

  useEffect(() => {
    const tmpDate =
      user?.created_at && new Date(user?.created_at).toLocaleDateString();
    setCreatedDate(tmpDate);
  }, [setCreatedDate, user?.created_at]);

  useEffect(() => {
    user?.description && setUserDesc(user?.description);
  }, [setUserDesc, user?.description]);

  return (
    <Section className="Streamer">
      <ParallaxBg>
        <Emotes maxEmotes={10} />
      </ParallaxBg>
      <ParallaxOverlay />

      <ParallaxContent>
        {!isMobile &&
          <HeaderRightWrapper>
            <BackIcon
              alt="Back icon"
              onClick={backStreamers}
              src={process.env.PUBLIC_URL + '/assets/icons/ArrowLeft.svg'}
            />
          </HeaderRightWrapper>
        }
        {stream && isMobile && (
          <OnLiveWrapper>
            <P>ON LIVE</P>
            <OnLiveDot small />
          </OnLiveWrapper>
        )}
        <HeaderStreamer
          title={streamer?.pseudo}
          twitchURL={streamer?.networks.find(o => o?.type === 'twitch')?.url}
          onClickAudio={onClickAudio}
        />
        <Main>
          <LeftWrapper>
            <Categories>{streamer?.categories}</Categories>
            {isMobile &&
              <WrapperAudio>
                <AudioButton onClickAudio={onClickAudio} />
              </WrapperAudio>
            }
            <Separator />
            {stream &&
              <LiveWrapper>
                <FakeWindow
                  type="ONLIVE.exe"
                  title={streamer?.pseudo}
                  size={
                    isMobile
                      ? { width: 300, height: 170 }
                      : { width: 440, height: 250 }
                  }
                  twitchInfos={{ live: true, channel: streamer?.pseudoTwitch }}
                />
              </LiveWrapper>
            }
            <DescWrapper>
              <Description title={'Date de creation'} label={createdDate} />
              {streamer?.pseudoHistory && <Description title={'Pseudo signification'} label={streamer?.pseudoHistory} />}
              <Description title={'Description'} label={userDesc} />
            </DescWrapper>
            <RediffWrapper>
              <Title>La rediffusion</Title>
              <FakeWindow
                type="Rediff.exe"
                title={'TKT ' + streamer?.pseudo + ' - ' + streamer?.dateTKT}
                youtubeUrl={streamer?.rediffTKT}
                dateTKT={streamer?.dateTKT}
                size={
                  isMobile
                    ? { width: 300, height: 170 }
                    : { width: 440, height: 250 }
                }
              />
            </RediffWrapper>
            <NetWorksWrapper>
              <Title>Où le / la retrouver ?</Title>
              {streamer?.networks?.map((network, index) => (
                <Button key={network?.type + index} label={network?.type} callbackFunc={() => onClickNetwork(network?.url)} />
              ))}
            </NetWorksWrapper>
          </LeftWrapper>
          {!isMobile && <ImageStreamer />}
        </Main>
      </ParallaxContent>
    </Section>
  );
}

export default Streamer;