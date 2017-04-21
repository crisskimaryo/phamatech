import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RoutingModule } from './app.routing'

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MainComponent } from './main/main.component';
import { PosComponent } from './pos/pos.component';
import { MedicineComponent } from './medicine/medicine.component';
import { SalesComponent } from './sales/sales.component';
import { ReportComponent } from './report/report.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MainComponent,
    PosComponent,
    MedicineComponent,
    SalesComponent,
    ReportComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
