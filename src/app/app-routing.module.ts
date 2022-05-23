import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GradeStudentsComponent } from './components/grade-students/grade-students.component';
import { LoginCardComponent } from './components/login-card/login-card.component';
import { NavigationBarComponent } from './components/nav-bar/nav-bar.component';
import { SpecializationInfoComponent } from './components/specialization-info/specialization-info.component';
import { SpecializationTableComponent } from './components/specialization-table/specialization-table.component';
import { StaffComponent } from './components/staff/staff.component';
import { GradesComponent } from './grades/grades.component';
import { SignContractComponent } from './components/sign-contract/sign-contract.component';
import { RegisterCardComponent } from './components/register-card/register-card.component';
import { AuthGuard, TeacherGuard } from './helpers/auth.guard';
import { GradeStudentsComponent } from './components/grade-students/grade-students.component';

const routes: Routes = [
  { path:'login', component: LoginCardComponent},
  { path:'specialization', component: SpecializationTableComponent, canActivate: [AuthGuard] },
  { path:'specialization/:id', component: SpecializationInfoComponent, canActivate: [AuthGuard] },
  { path:'sign', component: SignContractComponent, canActivate: [AuthGuard] },
  { path:'grades', component: GradesComponent, canActivate: [AuthGuard] },
  { path:'register', component: RegisterCardComponent},
  { path:'grade-students', component: GradeStudentsComponent, canActivate: [AuthGuard, TeacherGuard] }
  { path:'staff', component: StaffComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
