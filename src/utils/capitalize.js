export function capitalize(string) {
  if (string && string[0] && string[0].match(/[a-z]/i)) {
    return string[0]?.toUpperCase() + string?.slice(1);
  }
  return string;
}
