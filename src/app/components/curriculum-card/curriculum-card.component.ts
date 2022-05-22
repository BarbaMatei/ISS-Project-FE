import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Course } from 'src/app/models/course';
import { CurriculumService } from 'src/app/services/curriculum.service';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { MatTableDataSource } from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';

@Component({
  selector: 'app-curriculum-card',
  templateUrl: './curriculum-card.component.html',
  styleUrls: ['./curriculum-card.component.scss']
})
export class CurriculumCardComponent implements OnInit {
  @Input() curriculumId!: number;
  @Input() myCourses: Course[] = [];
  @Input() showOptional: boolean = true;
  @Input() showMandatory: boolean = true;
  @Input() isDragListActive: boolean = false;
  @Input() isLoading: boolean = true;
  @Input() haveCheckBox: boolean = false;

  displayedColumns: string[] = ['select', 'course_name', 'credits', 'maximum_students', 'required', 'teacher_id']
  dataSource = new MatTableDataSource<Course>();
  selection = new SelectionModel<Course>(true, []);

  constructor(private curriculumService: CurriculumService) { }

  ngOnInit(): void {
    if(!this.haveCheckBox){
      this.displayedColumns.forEach((value,index)=>{
        if(value=='select') this.displayedColumns.splice(index,1);
    });
    }
    this.initializeCourses();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.curriculumId = changes['curriculumId'].currentValue;
    this.myCourses = changes['courses'] != null ? changes['courses'].currentValue : [];
    this.initializeCourses();
  }


  initializeCourses(){
    if(this.curriculumId != undefined && this.myCourses.length == 0){
      this.curriculumService.getCoursesForCurriculum(this.curriculumId).subscribe((value) => {
        this.myCourses = value;
        this.filterCourses();
        this.dataSource.data = this.myCourses;
        this.isLoading = false;
      });
    }
    else{
      this.dataSource.data = this.myCourses;
    }
  }

  filterCourses(){
    if(this.showMandatory && !this.showOptional){
      this.myCourses = this.myCourses.filter(function(value) {
        return value.required == 'MANDATORY';
      });
    }
    if(!this.showMandatory && this.showOptional){
      this.myCourses = this.myCourses.filter(function(value) {
        return value.required == 'OPTIONAL';
      });
    }
  }

  drop(event: CdkDragDrop<Course[]>) {
    const previousIndex = this.dataSource.data.findIndex(row => row === event.item.data);
    moveItemInArray(this.dataSource.data,previousIndex, event.currentIndex);
    this.dataSource.data = this.dataSource.data.slice();
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Course): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }

}
