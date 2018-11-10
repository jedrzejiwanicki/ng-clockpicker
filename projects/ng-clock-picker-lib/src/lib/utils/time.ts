export function convertToTimeFormat(value: number): string {
  return value < 10 ? `0${value}` : value.toString();
}

export function getDisplayTime(hours: number, minutes: number): string {
  return convertToTimeFormat(hours) + ':' + convertToTimeFormat(minutes);
}
