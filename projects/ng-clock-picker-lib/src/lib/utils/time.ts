export function convertToTimeFormat(value: number): string {
  return value < 10 ? `0${value}` : value.toString();
}

export function getTime(hours: number, minutes: number, mode: string): string {
  const timeString = ` ${hours}:${minutes} ${mode}`;
  const date = new Date(new Date().toISOString().split('T')[0] + timeString);

  return date.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });
}

export function getDisplayTime(hours: number, minutes: number, mode: string): string {
  return getTime(hours, minutes, mode);
}

export function parseTime(value: string): number[] {
  return value
    .split(':')
    .map(item => Number(item));
}
