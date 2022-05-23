import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Specialization, TableSpecialization } from 'src/app/models/specialization';
import { EnrollService } from 'src/app/services/enroll.service';

@Component({
  selector: 'app-specialization-table',
  templateUrl: './specialization-table.component.html',
  styleUrls: ['./specialization-table.component.scss']
})
export class SpecializationTableComponent implements OnInit {
  displayedColumns: string[] = ["name", "yearsOfStudy", "nextYearOfStudy", "Actions"]

  noOfEnrolledSpecialization: number = 0;

  specializations!: TableSpecialization[];
  isLoading: boolean = true;

  constructor(private router: Router, private enrollService: EnrollService) {
    
  }

  ngOnInit(): void {
    this.enrollService.getSpecializations(2).subscribe((value) => {
      this.specializations = value;
      this.specializations.forEach((value) =>{
        if(value.next_year != 0){
          this.noOfEnrolledSpecialization += 1;
        }
      })
      this.isLoading = false;
    })
  }

  seeCurriculum(specializationId: number): void{
    this.router.navigate(['specialization', specializationId]);
  }

}


