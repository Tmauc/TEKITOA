import React, { useEffect } from 'react';

import FakeWindow from 'components/fakeWindow/fakeWindow';

import { OAuthTwitch } from 'core/twitchAPI.js';
import { useDevice } from 'hooks/useDevice';
import { StreamerConsumerHook } from 'stores/streamerStore';

import {
  Section,
  Main,
  Title,
  DescriptionWrapper,
  DescriptionTitle,
  Description,
  BottomWrapper,
  DescriptionLeftWrapper,
  DescriptionLeft,
  Separator,
  LiveWrapper
} from 'pages/about/about.style.js';

function About() {
  const { isMobile } = useDevice();
  // eslint-disable-next-line
  const [{ }, dispatch] = StreamerConsumerHook();

  useEffect(() => {
    OAuthTwitch(dispatch, 'maucsama');
  }, [dispatch]);

  return (
    <Section className="about">
      <Title className="title">A Propos</Title>
      <Main>
        <DescriptionWrapper>
          <Description><b>Bienvenue dans TE KI TOA, l’émission qui va te faire découvrir pleins de streamer⸱euses !</b></Description>
          <Description>Tous les <b>mercredis</b> à <b>18h sur Twitch !</b></Description>
        </DescriptionWrapper>
        <Separator />
        <LiveWrapper>
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
          {!isMobile &&
            <FakeWindow
              type="Tchat.exe"
              title={'TE KI TOA - TCHAT'}
              size={{ width: 300, height: 350 }}
              twitchInfos={{ chat: true, channel: 'maucsama' }}
            />
          }
        </LiveWrapper>
        <BottomWrapper>
          <DescriptionLeftWrapper>
            <DescriptionTitle>Le concept ?</DescriptionTitle>
            <DescriptionLeft>Un petit streamer va rejoindre le live de Mauc et nous allons apprendre à le découvrir.</DescriptionLeft>
            <DescriptionLeft>L'objectif de cette soirée ? <b>Retracer tout son parcours sur twitch</b> et internet depuis qu'il est devenu streamer.</DescriptionLeft>
            <DescriptionLeft>Alors, ça te dis de découvrir chaque semaine une nouvelle personne et d'augmenter considérablement ton catalogue de tes streamer⸱euses favoris ?</DescriptionLeft>
          </DescriptionLeftWrapper>
          <DescriptionLeftWrapper>
            <DescriptionTitle>Comment participer ?</DescriptionTitle>
            <DescriptionLeft>Tu souhaites participer ou tu connais quelqu'un qui mérite d'être interviewer ?</DescriptionLeft>
            <DescriptionLeft>Alors clique <a href='https://docs.google.com/forms/d/e/1FAIpQLSdkEcmIujWtUmV8RZXHQXXN_pPrZHXxYGt19lBZDmd0JsOOTg/viewform?usp=pp_url' target="_blank" rel="noreferrer">sur ce lien</a> pour me partager sa / ta chaine twitch !</DescriptionLeft>
          </DescriptionLeftWrapper>
          <DescriptionLeftWrapper>
            <DescriptionLeft>Prends ton meilleur coca frais, mets toi à l'aise et profite bien !</DescriptionLeft>
          </DescriptionLeftWrapper>
        </BottomWrapper>
      </Main>
    </Section >
  );
}

export default About;
