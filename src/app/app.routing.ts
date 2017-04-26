import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { MedicineComponent } from './medicine/medicine.component';
import { ProductComponent } from './products/product/product.component';
import { PosComponent } from './pos/pos.component';
import { SalesComponent } from './sales/sales.component';
import { ReportComponent } from './report/report.component';
import { SettingsComponent } from './settings/settings.component';
import { AppComponent } from './app.component';

const routes: Routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: 'phamatech', redirectTo: '/', pathMatch: 'full' },
    { path: 'products', component: ProductComponent },
    { path: 'pos', component: PosComponent },
    { path: 'sales', component: SalesComponent },
    { path: 'reports', component: ReportComponent },
    { path: 'settings', component: SettingsComponent },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})

export class RoutingModule { }
