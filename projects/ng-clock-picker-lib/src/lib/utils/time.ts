export function convertToTimeFormat(value: number): string {
  return value < 10 ? `0${value}` : value.toString();
}

export function getTime(hours: number, minutes: number, mode: string): string {
  const date = new Date();
  date.setHours(hours);
  date.setMinutes(minutes);

  return date.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    hour12: mode === 'am',
  });
}

export function getDisplayTime(hours: number, minutes: number, mode: string): string {
  return getTime(hours, minutes, mode);
}
