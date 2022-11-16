function getYear(date) {
  const year = date && date[6] + date[7] + date[8] + date[9];
  return year;
}

function getMonth(date) {
  const month = date && date[3] + date[4];
  return month;
}

export function getCurrentYear() {
  const year = new Date().getFullYear()
  return year;
}

export function getCurrentMonth() {
  const month = new Date().getMonth()
  return month + 1;
}

export function getMonthString(monthNumber) {
  switch (monthNumber.toString()) {
    case '1':
      return 'Janvier';
    case '2':
      return 'Février';
    case '3':
      return 'Mars';
    case '4':
      return 'Avril';
    case '5':
      return 'Mai';
    case '6':
      return 'Juin';
    case '7':
      return 'Juillet';
    case '8':
      return 'Août';
    case '9':
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
    const year = getYear(streamer?.dateTKT);

    if (scheduleArray[year]) {
      if (scheduleArray[year][month]) {
        scheduleArray[year][month].push(streamer);
      } else {
        scheduleArray[year][month] = new Array();
        scheduleArray[year][month].push(streamer);
      }
    } else {
      scheduleArray[year] = new Array();
      if (scheduleArray[year][month]) {
        scheduleArray[year][month].push(streamer);
      } else {
        scheduleArray[year][month] = new Array();
        scheduleArray[year][month].push(streamer);
      }
    }

    return 1;
  })
  return scheduleArray;
}