import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course';
import { Curriculum } from 'src/app/models/curriculum';
import { Specialization } from 'src/app/models/specialization';
import { CurriculumService } from 'src/app/services/curriculum.service';
import { EnrollService } from 'src/app/services/enroll.service';

@Component({
  selector: 'app-sign-contract',
  templateUrl: './sign-contract.component.html',
  styleUrls: ['./sign-contract.component.scss']
})
export class SignContractComponent implements OnInit {

  specializations!: Specialization[];
  curriculums: Curriculum[] = [];
  courses: Course[] = [];
  showCurriculumId!: number;

  isLoading: boolean = true;

  constructor(private enrollService: EnrollService, private curriculumService: CurriculumService) { }

  ngOnInit(): void {
    this.enrollService.getEnrolledSpecializations(1).subscribe((value) => {
      this.specializations = value;
      this.isLoading = false;
    })
  }

  changedSpecialization(event: number): void{
    this.curriculumService.getCurriculumsForSpecialization(event).subscribe((value) => {
      this.curriculums = value;
    })
  }
  
  changedCurriculum(event: number): void{
    this.showCurriculumId = event;
  }

}
