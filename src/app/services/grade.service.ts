import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Grade } from '../models/grade';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class GradeService {

  constructor(private httpService:HttpService) { }

  getGrade(studentId: number, specializationId: number, year: number): Observable<Grade[]>{
    //to be modified
    return this.httpService.getAll<Grade[]>('/' + studentId + '/grades/' + year).pipe(catchError(this.httpService.handleHttpErrorResponse));
  }
}
