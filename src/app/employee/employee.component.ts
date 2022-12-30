import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  users:any=[{}];

  constructor(private service:EmployeeService, private router:Router) { }
  
  ngOnInit(): void {
    this.service.getEmployee().subscribe((result)=>{
      this.users=result;
    })
  }

  handleDelete(id:number){
    // console.log(id);
     this.service.deleteEmployeeByID(id).subscribe((r)=>{
console.log(r)  
     })
    }
    //console.log("delete")
  }

  

