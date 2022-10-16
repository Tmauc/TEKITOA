function addLeadingZeros(num, totalLength) {
  return String(num).padStart(totalLength, '0');
}

export function calcTimeOnLive(date) {
  const startDate = new Date(date);
  const currentDate = new Date();
  var dateDiff = (currentDate.getTime() - startDate.getTime()) / 1000;
  dateDiff /= 60 * 60;
  const hours = addLeadingZeros(Math.abs(Math.round(dateDiff)), 2);
  const minutes = addLeadingZeros(Math.round(60 * (dateDiff % 1)), 2);

  return hours + ':' + minutes + 'H';
}
