import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResetearComponent } from './resetear/resetear.component';
import { MultiplicarDividirComponent } from './multiplicar-dividir/multiplicar-dividir.component';
import { IncrementarDecrementarComponent } from './incrementar-decrementar/incrementar-decrementar.component';

@NgModule({
  declarations: [
    AppComponent,
    ResetearComponent,
    MultiplicarDividirComponent,
    IncrementarDecrementarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
