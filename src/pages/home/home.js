import React, { useEffect } from 'react';
import styled from 'styled-components';

import { useDevice } from 'hooks/useDevice';
import { StreamerConsumerHook } from 'stores/streamerStore';

import { SectionStyle, TitleStyle, LabelStyle, LabelTmpStyle } from 'pages/home/home.style';

function Home() {
  const { isMobile } = useDevice();
  const [{ }, dispatch] = StreamerConsumerHook();


  useEffect(() => {
    dispatch({
      type: 'cleanStreamer',
    });
  }, [dispatch]);

  return (
    <Section className="home" isMobile={isMobile}>
      <Title isMobile={isMobile}>TE KI TOA</Title>
      <Label isMobile={isMobile}>À la découverte des streamer⸱euses !</Label>
      <LabelTmp isMobile={isMobile}>L'émission est en pause pendant une durée indéterminée ! Merci à tous de votre soutien :D</LabelTmp>
    </Section>
  );
}

const Section = styled.section`
  ${SectionStyle};
`;

const Title = styled.h1`
  ${TitleStyle};
`;

const Label = styled.h2`
  ${LabelStyle};
`;

const LabelTmp = styled.h3`
  ${LabelTmpStyle};
`;

export default Home;
