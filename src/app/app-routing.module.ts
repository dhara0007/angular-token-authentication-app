import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './AuthGurds/auth.guard';
import { EditComponent } from './employee/edit/edit.component';
import { EmployeeComponent } from './employee/employee.component';
import { RegisterComponent } from './employee/register/register.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';


const routes: Routes = [
  {path:"Employee",component:EmployeeComponent, canActivate:[AuthGuard]},
  {path:"EditEmployee/:code", component:EditComponent, canActivate:[AuthGuard]},
  {path:"RegisterEmployee",component:RegisterComponent},
  {path:"Login",component:LoginComponent},
  {path:"Search/:query", component:SearchComponent},
  {path:"", component:HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
