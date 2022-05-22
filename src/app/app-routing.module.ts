import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginCardComponent } from './components/login-card/login-card.component';
import { NavigationBarComponent } from './components/nav-bar/nav-bar.component';
import { SpecializationInfoComponent } from './components/specialization-info/specialization-info.component';
import { SpecializationTableComponent } from './components/specialization-table/specialization-table.component';
import { StaffComponent } from './components/staff/staff.component';

const routes: Routes = [
  { path:'login', component: LoginCardComponent },
  { path:'specialization', component: SpecializationTableComponent },
  { path:'specialization/:id', component: SpecializationInfoComponent },
  { path:'staff', component: StaffComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
