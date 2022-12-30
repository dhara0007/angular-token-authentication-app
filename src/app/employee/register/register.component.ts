import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/services/employee.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  registerForm = new FormGroup({
    username:new FormControl(),
    password:new FormControl(),
    email: new FormControl(),
   roleid: new FormControl('')
  })
 
 

  onSubmit()
  {
   this.service.submitUser(this.registerForm.value)
   
   

  }


  onReset()
  {
    this.registerForm.reset();
  }

   Roles: any;
  constructor(private service:EmployeeService) { }

  ngOnInit(): void {
    //this.Roles= this.service.getRoles()
    this.service.getRoles().subscribe((data)=>{
      this.Roles=data;
     },(error)=>{
      console.log(error);
     }
    );
  }
}

type Person = {
  ID:number,
  role: string;
  
};


