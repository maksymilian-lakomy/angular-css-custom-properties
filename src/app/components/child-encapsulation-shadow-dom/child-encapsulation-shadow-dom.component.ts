import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-child-encapsulation-shadow-dom',
  templateUrl: './child-encapsulation-shadow-dom.component.html',
  styleUrls: ['./child-encapsulation-shadow-dom.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.ShadowDom, // Anyone uses it? xdd
})
export class ChildEncapsulationShadowDomComponent {
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
