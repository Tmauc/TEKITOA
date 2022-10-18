import React, { useEffect } from 'react';
import styled from 'styled-components';

import FakeWindow from 'components/fakeWindow/fakeWindow';

import { OAuthTwitch } from 'core/twitchAPI.js';
import { useDevice } from 'hooks/useDevice';
import { StreamerConsumerHook } from 'stores/streamerStore';

import { SectionStyle, MainStyle, TitleStyle, DescriptionWrapperStyle, DescriptionStyle, SeparatorStyle, LiveWrapperStyle } from 'pages/about/about.style.js';

function About() {
  const { isMobile } = useDevice();
  const [{ }, dispatch] = StreamerConsumerHook();

  useEffect(() => {
    OAuthTwitch(dispatch, 'maucsama');
  }, [dispatch]);

  return (
    <Section className="about">
      <Title className="title" isMobile={isMobile}>A Propos</Title>
      <Main>
        <DescriptionWrapper isMobile={isMobile}>
          <Description isMobile={isMobile}>Bienvenue dans TE KI TOA, je suis Mauc et aujourd'hui je te présente mon émission qui va te faire découvrir pleins de petits streamer !</Description>
          <Description isMobile={isMobile}>Tous les mercredis à 18h sur Twitch, un petit streamer va rejoindre mon live et nous allons apprendre à le découvrir.</Description>
          <Description isMobile={isMobile}>L'objectif de cette soirée ? Retracer tout son parcours sur twitch et internet depuis qu'il est devenu streamer.</Description>
          <Description isMobile={isMobile}>Alors, ça te dis de découvrir chaque semaine une nouvelle personne et d'augmenter considérablement ton catalogue de tes streamer favoris?</Description>
          <Description isMobile={isMobile}>Prends ton meilleur coca frais, mets toi à l'aise et profite bien !</Description>
        </DescriptionWrapper>
        <Separator />
        <LiveWrapper isMobile={isMobile}>
          <FakeWindow
            type="ONLIVE.exe"
            title={'TE KI TOA'}
            size={
              isMobile
                ? { width: 300, height: 170 }
                : { width: 600, height: 350 }
            }
            twitchInfos={{ live: true, channel: 'maucsama' }}
          />
          <FakeWindow
            type="Tchat.exe"
            title={'TE KI TOA - TCHAT'}
            size={{ width: 300, height: 350 }}
            twitchInfos={{ chat: true, channel: 'maucsama' }}
          />
        </LiveWrapper>
      </Main>
    </Section>
  );
}

const Section = styled.section`
  ${SectionStyle};
`;

const Main = styled.div`
  ${MainStyle};
`;

const Title = styled.h1`
  ${TitleStyle};
`;

const DescriptionWrapper = styled.div`
  ${DescriptionWrapperStyle};
`;

const Description = styled.p`
  ${DescriptionStyle};
`;

const Separator = styled.div`
  ${SeparatorStyle};
`;

const LiveWrapper = styled.div`
  ${LiveWrapperStyle};
`;

export default About;
