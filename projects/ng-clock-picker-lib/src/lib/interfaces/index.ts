export interface DialogConfig {
  wrapperClassName: string;
  buttonCancel?: string;
  buttonConfirm?: string;
  closeOnOverlayClick?: boolean;
  value?: string;
}

export interface SelectedTime {
  hours: number;
  minutes: number;
}
