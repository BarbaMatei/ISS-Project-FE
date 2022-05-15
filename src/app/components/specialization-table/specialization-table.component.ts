import { Component, OnInit } from '@angular/core';
import { Specialization } from 'src/app/models/specialization';

@Component({
  selector: 'app-specialization-table',
  templateUrl: './specialization-table.component.html',
  styleUrls: ['./specialization-table.component.scss']
})
export class SpecializationTableComponent implements OnInit {

  dataSource: Specialization[] = [
    {id: 1, name: "Matematica", yearsOfStudy: 3, nextYearOfStudy: 1},
    {id: 2, name: "Informatica", yearsOfStudy: 3, nextYearOfStudy: 0},
    {id: 3, name: "Calculatoare", yearsOfStudy: 4, nextYearOfStudy: 0},
    {id: 4, name: "Inginerie", yearsOfStudy: 4, nextYearOfStudy: 0}
  ]

  displayedColumns: string[] = ["name", "yearsOfStudy", "nextYearOfStudy", "Actions"]

  noOfEnrolledSpecialization: number = 0;

  constructor() {
    let count = 0;
    this.dataSource.forEach(function(value) {
      if(value.nextYearOfStudy != 0)
        count += 1;
    })
    this.noOfEnrolledSpecialization = count;
  }

  ngOnInit(): void {
  }

}
