import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginCardComponent } from './components/login-card/login-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { SpecializationTableComponent } from './components/specialization-table/specialization-table.component';
import {MatTableModule} from '@angular/material/table';
import { SpecializationInfoComponent } from './components/specialization-info/specialization-info.component';
import { CurriculumCardComponent } from './components/curriculum-card/curriculum-card.component';
import { NavigationBarComponent } from './components/nav-bar/nav-bar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDividerModule} from '@angular/material/divider';
import { StaffComponent } from './components/staff/staff.component';
import {MatNativeDateModule} from '@angular/material/core';
import { MatTabsModule } from '@angular/material/tabs'; 


@NgModule({
  declarations: [
    AppComponent,
    LoginCardComponent,
    SpecializationTableComponent,
    SpecializationInfoComponent,
    CurriculumCardComponent,
    NavigationBarComponent,
    StaffComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSnackBarModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
    MatToolbarModule,
    MatSelectModule,
    MatSidenavModule,
    MatExpansionModule,
    MatGridListModule,
    MatDividerModule,
    MatNativeDateModule,
    FormsModule,
    MatTabsModule,
  
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    MatDatepickerModule,
],
  bootstrap: [AppComponent]
})
export class AppModule { }
