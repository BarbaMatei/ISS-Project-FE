import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Curriculum } from 'src/app/models/curriculum';
import { CurriculumService } from 'src/app/services/curriculum.service';

@Component({
  selector: 'app-specialization-info',
  templateUrl: './specialization-info.component.html',
  styleUrls: ['./specialization-info.component.scss']
})
export class SpecializationInfoComponent implements OnInit {

  specializationId!: number;
  isLoading: boolean = true;
  curriculums!: Curriculum[];
  noOfCurriculums: number = 0;

  constructor(private route: ActivatedRoute, private curriculumService: CurriculumService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) =>{ 
      this.specializationId = params['id'];
      this.isLoading = false;
    });

    while(this.isLoading == true){}

    this.isLoading = true;
    this.curriculumService.getCurriculumsForSpecialization(this.specializationId).subscribe((value) => {
      this.curriculums = value;
      this.noOfCurriculums = this.curriculums.length;
      this.isLoading = false;
    })

  }

}
