import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToComponent } from './components/to/to.component';
import { AboutComponent } from './components/pages/about/about.component';

const routes: Routes = [
  { path:'', component: ToComponent },
  { path:'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
