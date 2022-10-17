function getMonth(date) {
  const month = date && date[3] + date[4];
  return month;
}

export function getMonthString(date) {
  const monthNumber = getMonth(date);
  switch (monthNumber) {
    case '01':
      return 'Janvier';
    case '02':
      return 'Février';
    case '03':
      return 'Mars';
    case '04':
      return 'Avril';
    case '05':
      return 'Mai';
    case '06':
      return 'Juin';
    case '07':
      return 'Juillet';
    case '08':
      return 'Août';
    case '09':
      return 'Septembre';
    case '10':
      return 'Octobre';
    case '11':
      return 'Novembre';
    case '12':
      return 'Décembre';
    default:
      return '';
  }
}

export function parseJsonSchedule(streamersJson) {
  var scheduleArray = {};

  streamersJson.streamers.map((streamer, index) => {
    const month = parseInt(getMonth(streamer?.dateTKT))

    if (scheduleArray[month]) {
      scheduleArray[month].push(streamer);
    } else {
      scheduleArray[month] = new Array();
      scheduleArray[month].push(streamer);
    }
    return 1;
  })
  return scheduleArray;
}