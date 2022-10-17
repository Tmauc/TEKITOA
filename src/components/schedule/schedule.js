import React, { useState } from 'react'
import styled from 'styled-components'

import { getMonthString } from 'utils/parseJsonSchedule'

import { WrapperStyle, ScheduleMainWrapperStyle, MonthLabelStyle, ScheduleWrapperStyle, ArrowRearwardStyle, ArrowForwardStyle, DayWrapperStyle, DayHeaderWrapperStyle, DateLabelStyle, PseudoLabelStyle, MainWrapperStyle, StreamerImageStyle } from 'components/schedule/schedule.style'

function ScheduleDay({ day }) {
  const onClickDay = () => { }
  return (
    <DayWrapper onClick={onClickDay}>
      <DayHeaderWrapper>
        <DateLabel>{day?.dateTKT}</DateLabel>
        <PseudoLabel>{day?.pseudo}</PseudoLabel>
      </DayHeaderWrapper>
      <MainWrapper>
        <StreamerImage src={day?.imgPath} />
      </MainWrapper>
    </DayWrapper>
  )
}

function Schedule({ scheduleArray }) {
  const [currentMonth, setCurrentMonth] = useState(Object.keys(scheduleArray)?.length - 1);

  const onClickRearward = () => {
    if (currentMonth < Object.keys(scheduleArray)?.length - 1) {
      setCurrentMonth(currentMonth + 1)
    }
  }

  const onClickForward = () => {
    if (currentMonth > 0) {
      setCurrentMonth(currentMonth - 1)
    }
  }

  return (
    <Wrapper>
      <MonthLabel>{getMonthString(scheduleArray[Object.keys(scheduleArray)[currentMonth]][0]?.dateTKT)}</MonthLabel>
      <ScheduleMainWrapper>
        <ArrowRearward
          alt="Rearward icon"
          onClick={onClickRearward}
          src={process.env.PUBLIC_URL + '/assets/icons/Arrow.svg'}
        />
        <ScheduleWrapper>
          {scheduleArray && scheduleArray[Object.keys(scheduleArray)[currentMonth]].map((day, index) => (
            <ScheduleDay key={day + index} day={day} />
          ))}
        </ScheduleWrapper>
        <ArrowForward
          alt="Rearward icon"
          onClick={onClickForward}
          src={process.env.PUBLIC_URL + '/assets/icons/Arrow.svg'}
        />
      </ScheduleMainWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  ${WrapperStyle};
`

const ScheduleMainWrapper = styled.div`
  ${ScheduleMainWrapperStyle};
`

const MonthLabel = styled.p`
  ${MonthLabelStyle};
`;

const ScheduleWrapper = styled.div`
  ${ScheduleWrapperStyle};
`

const ArrowRearward = styled.img`
  ${ArrowRearwardStyle};
`;

const ArrowForward = styled.img`
  ${ArrowForwardStyle};
`;

const DayWrapper = styled.div`
  ${DayWrapperStyle};
`

const DayHeaderWrapper = styled.div`
  ${DayHeaderWrapperStyle};
`

const DateLabel = styled.p`
  ${DateLabelStyle};
`

const PseudoLabel = styled.p`
  ${PseudoLabelStyle};
`

const MainWrapper = styled.div`
  ${MainWrapperStyle};
`

const StreamerImage = styled.img`
  ${StreamerImageStyle};
`

export default Schedule
