import React from 'react';

import StreamersJson from 'streamers.json';
import { parseJsonSchedule } from 'utils/parseJsonSchedule';
import Schedule from 'components/schedule/schedule';

import { Section, Header, Title } from 'pages/scheduleTKT/scheduleTKT.style.js';

function ScheduleTKT() {
  const scheduleArray = parseJsonSchedule(StreamersJson)

  return (
    <Section className="schedule">
      <Header>
        <Title>Calendrier</Title>
      </Header>
      <Schedule scheduleArray={scheduleArray} />
    </Section>
  );
}

export default ScheduleTKT;
