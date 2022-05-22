import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Grades } from 'src/app/models/grades';


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


  years = [1,2,3];
  specialization = ["Informatica-Engleza","Informatica-Romana","Informatica-Germana",
                    "Matematica-Informatica-Engleza","Matematica-Informatica-Romana","Matematica-Informatica-Germana",
                    "Matematica-Romana","Matematica-Engleza","Matematica-Germana"];

  
  dataSource: Grades[] = [
  ]

  displayedColumns: string[] = ["grade","date", "course"]

  
  constructor(private formbuilder: FormBuilder) { }

  ngOnInit(): void {
  }

}
