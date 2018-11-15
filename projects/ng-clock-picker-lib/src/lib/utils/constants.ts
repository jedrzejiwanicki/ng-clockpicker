import { ClockPickerConfig } from '../interfaces';

const fullHours: number[] =
  Array(24)
    .fill(0, 0, 24)
    .map((_, i, a) => i === a.length - 1 ? 0 : i + 1)

export const hours = {
  '24h': fullHours.slice(12, 24),
  '12h': fullHours.slice(0, 12),
};

export const config = (hoursScope: string) => ({
  hours: hours[hoursScope],
  minutes: Array(60).fill(0, 0, 60).map((_, i) => i),
});

export const defaults = {
  hours: 12,
  monutes: 0,
};

export const defaultConfig: ClockPickerConfig = {
  buttonConfirm: 'Confirm',
  buttonCancel: 'Cancel',
};

export const MODE_MINUTES = 'minutes';
export const MODE_HOURS = 'hours';
export const HOURS_MODE_AM = 'AM';
export const HOURS_MODE_PM = 'PM';
export const HOURS_SCOPE_24 = '24h';
export const HOURS_SCOPE_12 = '12h';
