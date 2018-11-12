export interface ClockPickerConfig {
  wrapperClassName: string;
  buttonCancel?: string;
  buttonConfirm?: string;
  closeOnOverlayClick?: boolean;
}

export interface SelectedTime {
  hours: number;
  minutes: number;
}
