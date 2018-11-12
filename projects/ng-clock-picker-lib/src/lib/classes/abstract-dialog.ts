export abstract class DialogComponent {

  constructor() { }

  wrapperClassName: string;
  buttonClose?: string = 'close';
  buttonConfirm?: string = 'confirm';

  close(data: any): void {}

}
