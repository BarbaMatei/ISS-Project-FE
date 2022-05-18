import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Course } from '../models/course';
import { Curriculum } from '../models/curriculum';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class CurriculumService {

  constructor(private httpService:HttpService) { }

  getCurriculumsForSpecialization(specializationId: number): Observable<Curriculum[]>{
    return this.httpService
      .getById<Curriculum[]>(specializationId, 'enroll/specializations/curriculums')
      .pipe(catchError(this.httpService.handleHttpErrorResponse));
  }

  getCoursesForCurriculum(curriculumId: number): Observable<Course[]>{
    return this.httpService
      .getById<Curriculum[]>(curriculumId, 'enroll/curriculums/courses')
      .pipe(catchError(this.httpService.handleHttpErrorResponse));
  }
}
