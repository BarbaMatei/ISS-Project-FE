import { Component, Input, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course';
import { Curriculum } from 'src/app/models/curriculum';
import { CurriculumService } from 'src/app/services/curriculum.service';

@Component({
  selector: 'app-curriculum-card',
  templateUrl: './curriculum-card.component.html',
  styleUrls: ['./curriculum-card.component.scss']
})
export class CurriculumCardComponent implements OnInit {
  @Input() curriculum!: Curriculum;

  displayedColumns: string[] = [
    'course_name', 'credits', 'maximum_students', 'required', 'teacher_id'
  ]
  // curriculums: Curriculum[] = [
  //   {id: 1, year: 1, language: 'english', specialization_id: 1},
  //   {id: 2, year: 2, language: 'english', specialization_id: 1},
  //   {id: 3, year: 3, language: 'english', specialization_id: 1},
  // ]

  // courses: Course[] = [
  //   {id: 1, course_name: 'Logic and Set Theory', credits: 6, maximum_students: 200, required: true, teacher_id: 1, curriculum_id: 1},
  //   {id: 2, course_name: 'Calculus', credits: 6, maximum_students: 200, required: true, teacher_id: 1, curriculum_id: 1},
  //   {id: 3, course_name: 'Geometry', credits: 6, maximum_students: 200, required: true, teacher_id: 1, curriculum_id: 1},
  //   {id: 4, course_name: 'Algebra', credits: 6, maximum_students: 200, required: true, teacher_id: 1, curriculum_id: 1},
  //   {id: 5, course_name: 'Algorithms and Programming', credits: 6, maximum_students: 200, required: true, teacher_id: 1, curriculum_id: 1},
  //   {id: 6, course_name: 'Personal development', credits: 3, maximum_students: 200, required: false, teacher_id: 1, curriculum_id: 1},
  //   {id: 7, course_name: 'Specialized English', credits: 3, maximum_students: 200, required: false, teacher_id: 1, curriculum_id: 1},
  // ]
  
  myCourses!: Course[];
  isLoadiong: boolean = true;

  constructor(private curriculumService: CurriculumService) { }

  ngOnInit(): void {
    this.curriculumService.getCoursesForCurriculum(this.curriculum.id).subscribe((value) => {
      this.myCourses = value;
      console.log(this.myCourses);
      this.isLoadiong = false;
    })
  }

}
