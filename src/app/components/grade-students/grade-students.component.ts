import { Component, OnInit } from '@angular/core';
import { GradeList } from 'src/app/models/grade-list';

@Component({
  selector: 'app-grade-students',
  templateUrl: './grade-students.component.html',
  styleUrls: ['./grade-students.component.scss']
})

export class GradeStudentsComponent implements OnInit {
  dataSource: GradeList[] = []
  displayedColumns: string[] = ["course","student","grade","date"]

  constructor() { }

  ngOnInit(): void {
  }

}
