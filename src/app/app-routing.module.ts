import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { InfoPageComponent } from './info-page/info-page.component';
import { DevicesPageComponent } from './devices-page/devices-page.component';

const routes: Routes = [
  {path: "home", component: HomePageComponent},
  {path: "info", component: InfoPageComponent},
  {path: "devices", component: DevicesPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
