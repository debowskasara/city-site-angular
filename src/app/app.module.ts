import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RzymComponent } from './rzym/rzym.component';
import { ParyzComponent } from './paryz/paryz.component';
import { LondynComponent } from './londyn/londyn.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { StronaGlownaComponent } from './strona-glowna/strona-glowna.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    RzymComponent,
    ParyzComponent,
    LondynComponent,
    GaleriaComponent,
    KontaktComponent,
    StronaGlownaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
