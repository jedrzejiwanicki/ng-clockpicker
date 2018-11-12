export declare abstract class DialogComponent {
    constructor();
    wrapperClassName: string;
    buttonClose: string;
    buttonConfirm: string;
    closeOnOverlayClick: boolean;
    close(data: any): void;
}
