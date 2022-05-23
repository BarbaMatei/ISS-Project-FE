import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Staff } from '../models/staff';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  constructor(private httpService:HttpService) { }

  getGradesOrdered(studentId: number): Observable<Staff[]>{
    return this.httpService
      .getById<Staff[]>(studentId, 'year/staff')
      .pipe(catchError(this.httpService.handleHttpErrorResponse));
  }
}
