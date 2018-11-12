import { Input, Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'ng-circle-button',
  templateUrl: './circle-button.component.html',
  styleUrls: ['./circle-button.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CircleButtonComponent {
  @Input() selected: boolean;

  constructor() { }


}
