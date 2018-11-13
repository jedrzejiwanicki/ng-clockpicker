import { HOURS_MODE_PM } from './constants';

export function convertToTimeFormat(value: number): string {
  return value < 10 ? `0${value}` : value.toString();
}

export function getTime(hours: number, minutes: number, mode: string): string {
  const date = new Date();

  date.setHours(mode === HOURS_MODE_PM ? hours + 12 : hours);
  date.setMinutes(minutes);

  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

export function getDisplayTime(hours: number, minutes: number, mode: string): string {
  return getTime(hours, minutes, mode);
}
