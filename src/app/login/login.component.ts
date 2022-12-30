import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  OnLoginSubmit(data:NgForm){
    this.service.loginUser(data.value)
    .subscribe((response)=>{
      if(response)
      {
        console.log("token",response);
localStorage.setItem('Angularuser',JSON.stringify(response))
this.router.navigate(['Employee'])
      }
    });
      }

      OnLoginReset(data:NgForm)
      {
        data.resetForm({
        });
      }
    

      user:any={};
  constructor(private service:EmployeeService, private router:Router) { }

  ngOnInit(): void {
  }

}
