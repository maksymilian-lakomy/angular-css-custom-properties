import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-child-encapsulation-none',
  templateUrl: './child-encapsulation-none.component.html',
  styleUrls: ['./child-encapsulation-none.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ChildEncapsulationNoneComponent {
  @Input()
  @HostBinding('style.--app-child-border-width.px')
  public borderWidth?: number;

  @Input()
  @HostBinding('style.--app-child-description-height.vh')
  public descriptionHeight?: number;

  @Input()
  @HostBinding('style.--app-child-header-color')
  public headerColor?: string;
}
