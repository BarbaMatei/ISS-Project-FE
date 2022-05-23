import { Component, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Grade } from '../models/grade';
import { Specialization } from '../models/specialization';
import { EnrollService } from '../services/enroll.service';
import { GradeService } from '../services/grade.service';


@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.scss']
})
export class GradesComponent implements OnInit {

  paperForm = this.formbuilder.group({
    result: new FormControl(''),
    feedback: new FormControl(''),
  });


  years: number[] = [];
  specializations: Specialization[] = [];
  specialization: Specialization = {
    id: 10,
    name: "asdad",
    years_of_study: 4
  };

  selectedSpecialization: Specialization= {
    id: 10,
    name: "asdad",
    years_of_study: 4
  };
  
  isLoading: boolean = true;
  
  dataSource: Grade[] = [
  ]

  displayedColumns: string[] = ["grade","date", "course"]

  
  constructor(private formbuilder: FormBuilder, private enrollService: EnrollService, private gradeService: GradeService) { }

  ngOnInit(): void {
    this.enrollService.getSpecializations(1).subscribe((value) => {
      value.forEach((spec) => {
        if(spec.next_year != 0)
          this.specializations.push(spec.specialization);
      })
      this.specializations.push(this.specialization);
      this.isLoading = false;
    });
  }

  changedSpecialization(spec: Specialization): void{
    this.selectedSpecialization = spec;
    for (let i = 1; i <= spec.years_of_study; i++){
      this.years.push(i);
    }
  }

  changedYear(year: number): void{
    this.gradeService.getGrade(1, this.selectedSpecialization.id, year);
  }

}
