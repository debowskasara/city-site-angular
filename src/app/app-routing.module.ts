import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RzymComponent} from "./rzym/rzym.component";
import {KontaktComponent} from "./kontakt/kontakt.component";
import {GaleriaComponent} from "./galeria/galeria.component";
import {LondynComponent} from "./londyn/londyn.component";
import {ParyzComponent} from "./paryz/paryz.component";
import {StronaGlownaComponent} from "./strona-glowna/strona-glowna.component";

const routes: Routes = [
  { path: '', redirectTo: 'strona-glowna', pathMatch: 'full' },
  { path: 'strona-glowna', component: StronaGlownaComponent },
  { path: 'rzym', component: RzymComponent },
  { path: 'paryz', component: ParyzComponent },
  { path: 'londyn', component: LondynComponent },
  { path: 'galeria', component: GaleriaComponent },
  { path: 'kontakt', component: KontaktComponent },
  { path: '**', component: StronaGlownaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
