import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-child-encapsulation-emulated',
  templateUrl: './child-encapsulation-emulated.component.html',
  styleUrls: ['./child-encapsulation-emulated.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.Emulated,
})
export class ChildEncapsulationEmulatedComponent {
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
