import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menuType:String='default';
  constructor(private router:Router) { }

  LogOut(){
    localStorage.removeItem("Angularuser");
    this.router.navigate(['']);
  }
  ngOnInit(): void {

    this.router.events.subscribe((val:any)=>{
      if(val.url){
        if(localStorage.getItem("Angularuser")){
          this.menuType="Employee"
        }
        else{
          this.menuType="Default"
        }
      }
    })
  }

  search(val:string)
  {
    this.router.navigate([`Search/${val}`]);
  }

}
