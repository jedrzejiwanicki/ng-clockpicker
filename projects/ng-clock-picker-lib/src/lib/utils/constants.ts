export const hoursConfig = {
    am: Array(12).fill(0, 0, 12).map((_, i) => i + 1),
    pm: Array(12).fill(0, 0, 12).map((_, i) => (i + 1) * 2)
};


export const minutesConfig = Array(12).fill(0, 0, 12).map((_, i) => i * 5);

export const MODE_MINUTES = 'minutes';
export const MODE_HOURS = 'hours';
export const HOURS_MODE_AM = 'am';
export const HOURS_MODE_PM = 'pm';
