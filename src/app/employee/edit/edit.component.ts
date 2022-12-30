import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  user:any={};

  constructor(private activeroute:ActivatedRoute, private service:EmployeeService, private router:Router) { }
  ngOnInit(): void {
   let code = this.activeroute.snapshot.params['code'];
   this.service.getEmployeeByID(code).subscribe((result)=>{
    this.user=result

   })
  }
  OnEditSubmit(data:NgForm){
    //console.log(data.value);
    //console.log(this.user);
    this.service.editUser(this.user)
    .subscribe((response)=>{   
        console.log(response);
this.router.navigate(['Employee'])  
    });
      }

      OnEditReset(data:NgForm)
      {
        data.resetForm({
        });
      }
  
}
