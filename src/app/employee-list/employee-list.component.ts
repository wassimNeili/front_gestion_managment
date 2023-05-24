import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/employee';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  employee: Employee[] = [];

  constructor(private employeeService: EmployeeService) {}


  ngOnInit(): void {
    this.getEmployeeList();
  }

  private getEmployeeList() {
    this.employeeService.getEmployeeList().subscribe(
      (data: Employee[]) => {
        console.log(data);
        this.employee = data;
      }
    );
  }
}
