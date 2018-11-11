export abstract class DialogComponent {

  constructor() { }

  wrapperClassName: string;
  buttonClose?: string;
  buttonConfirm?: string;

  close(data: any): void {}

}
