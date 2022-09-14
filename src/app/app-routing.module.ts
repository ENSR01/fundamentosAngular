import { NgModule } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import { ApiComponent } from './pages/api/api.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'api', component: ApiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
