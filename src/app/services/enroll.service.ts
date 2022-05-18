import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { TableSpecialization } from '../models/specialization';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class EnrollService {

  constructor(private httpService:HttpService) { }

  getSpecializations(studentId: number): Observable<TableSpecialization[]>{
    return this.httpService
      .getById<TableSpecialization[]>(studentId, 'enroll/specializations')
      .pipe(catchError(this.httpService.handleHttpErrorResponse));
  }
}
