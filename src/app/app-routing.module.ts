import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WorldViewComponent} from "./world-view/world-view.component";

const routes: Routes = [
  {path: 'worldview', component: WorldViewComponent},
  {path: '', redirectTo: '/worldview', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
