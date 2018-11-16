import { defaults, hours } from './constants';
import { HoursMode } from '../classes/HoursMode';

export function convertToTimeFormat(value: number): string {
  return value < 10 ? `0${value}` : value.toString();
}

export function parseTimeString(time: string): { hours: number; minutes: number; scope: string } {
  if (!time) { return defaults; }

  const date = new Date(`11/11/11 ${time}`);
  const scope = determineScope(date.getHours());

  return {
    hours: date.getHours(),
    minutes: date.getMinutes(),
    scope,
  };
}

export function determineScope(hour: number): string {
  for (const key in hours) {
    if (hours[key].indexOf(hour) >= 0) { return key; }
  }
}

export function getDisplayTime(
  hours: number,
  minutes: number,
  mode: HoursMode,
  is24: boolean,
): string {

  const date = new Date();

  date.setHours((mode.isHoursModePM && !is24)  ? hours + 12 : hours);
  date.setMinutes(minutes);

  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}
