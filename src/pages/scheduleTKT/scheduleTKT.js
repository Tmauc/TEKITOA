import React from 'react';
import styled from 'styled-components';

import StreamersJson from 'streamers.json';
import { parseJsonSchedule } from 'utils/parseJsonSchedule';
import Schedule from 'components/schedule/schedule';
import { useDevice } from 'hooks/useDevice';

import { SectionStyle, HeaderStyle, TitleStyle } from 'pages/scheduleTKT/scheduleTKT.style.js';

function ScheduleTKT() {
  const { isMobile } = useDevice();
  const scheduleArray = parseJsonSchedule(StreamersJson)

  return (
    <Section className="schedule">
      <Header>
        <Title isMobile={isMobile}>Calendrier</Title>
      </Header>
      <Schedule scheduleArray={scheduleArray} />
    </Section>
  );
}

const Section = styled.section`
  ${SectionStyle};
`;

const Header = styled.div`
  ${HeaderStyle};
`;

const Title = styled.h1`
  ${TitleStyle};
`;

export default ScheduleTKT;
