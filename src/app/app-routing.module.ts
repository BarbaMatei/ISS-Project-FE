import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginCardComponent } from './components/login-card/login-card.component';
import { SpecializationTableComponent } from './components/specialization-table/specialization-table.component';

const routes: Routes = [
  { path:'login', component: LoginCardComponent },
  { path:'specialization', component: SpecializationTableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
