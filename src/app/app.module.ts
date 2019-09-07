
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { AppComponent } from './app.component';
import { UiGridDirective } from './directive/uigrid.directive';
import { CommonModule } from '@angular/common';
import { UpgradeModule } from '@angular/upgrade/static';

import { CabeceraComponent } from './paginas/cabecera/cabecera.component';
import { HomeComponent } from './paginas/home/home.component';
import { QuienesomosComponent } from './paginas/quienesomos/quienesomos.component';
import { PiepaginaComponent } from './paginas/piepagina/piepagina.component';
import { TablaComponent } from './datatable/tabla/tabla.component';
import { TablauigridComponent } from './datatable/tablauigrid/tablauigrid.component';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'quienesomos', component: QuienesomosComponent},
  { path: 'tabla', component: TablaComponent},
  { path: 'tablauigrid', component: TablauigridComponent},
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
  
];

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    HomeComponent,
    QuienesomosComponent,
    PiepaginaComponent,
    TablaComponent,
    TablauigridComponent,
    UiGridDirective
  ],
  imports: [
    BrowserModule,
    CommonModule,
    NgxDatatableModule,
    UpgradeModule,
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  exports:[UiGridDirective],
  bootstrap: [AppComponent]
})
export class AppModule { }
