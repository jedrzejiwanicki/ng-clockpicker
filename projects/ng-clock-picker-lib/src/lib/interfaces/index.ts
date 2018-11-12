export interface DialogConfig {
  wrapperClassName: string;
  buttonCancel?: string;
  buttonConfirm?: string;
  value?: string;
}

export interface SelectedTime {
  hours: number;
  minutes: number;
}
