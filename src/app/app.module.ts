import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChildEncapsulationEmulatedComponent } from './components/child-encapsulation-emulated/child-encapsulation-emulated.component';
import { ChildEncapsulationNoneComponent } from './components/child-encapsulation-none/child-encapsulation-none.component';
import { ChildEncapsulationShadowDomComponent } from './components/child-encapsulation-shadow-dom/child-encapsulation-shadow-dom.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    ChildEncapsulationEmulatedComponent,
    ChildEncapsulationNoneComponent,
    ChildEncapsulationShadowDomComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSliderModule,
    FormsModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
