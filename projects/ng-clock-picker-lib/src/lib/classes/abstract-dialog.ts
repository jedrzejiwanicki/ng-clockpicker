export abstract class DialogComponent {

  constructor() { }

  wrapperClassName: string;
  buttonClose = 'close';
  buttonConfirm = 'confirm';
  closeOnOverlayClick = false;
  close(data: any): void {}

}
