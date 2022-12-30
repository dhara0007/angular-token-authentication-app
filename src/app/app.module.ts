import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JsonPipe } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { EmployeeModule } from './employee/employee.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SearchComponent } from './search/search.component';
import { EmployeeService } from './services/employee.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    EmployeeModule,
    HttpClientModule

  ],
  providers: [JsonPipe,
    {provide:HTTP_INTERCEPTORS,useClass:EmployeeService,multi:true},
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
