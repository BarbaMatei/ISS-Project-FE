import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Staff } from 'src/app/models/staff';
import { StaffService } from 'src/app/services/staff.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {
  dataSource: Staff[] = []

  displayedColumns: string[] = ["name","grade"]
  orderTable!: Staff[];
  isLoading: boolean = true;

  ngOnInit(): void {
  }
  
  printPage() {
    window.print();
  }
  
  constructor(private router: Router, private staffService: StaffService) { 
    this.staffService.getGradesOrdered(1).subscribe((value) => {
      this.orderTable = value;
      console.log(this.orderTable);
      this.isLoading = false;

})
}
}
