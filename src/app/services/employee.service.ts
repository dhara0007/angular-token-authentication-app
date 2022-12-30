import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService implements HttpInterceptor  {
  
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    var token:any=localStorage.getItem('Angularuser');
     token =JSON.parse(token);
    if (token) {
    request = request.clone({
    setHeaders: {
    Authorization: `Bearer ${token.access_token}`,
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
    });

    }
    return next.handle(request);

  }
  constructor(private http: HttpClient, private router:Router) { }

  getRoles()
  {
    return this.http.get("http://localhost:56456/api/user/GetRoles")
    .pipe(catchError( (error: HttpErrorResponse) => {
      return throwError(error); }
      ))

  }

  submitUser(UserData:any)
  {
   
    //console.log("call from Service",UserData);
     
    this.http.post("http://localhost:56456/api/user/SubmitDetails",
    {
      UserName:UserData.username,
      UserPassword:UserData.password,
      UserEmail:UserData.email,
      UserRoleID:UserData.roleid

    },
    {observe:'response'}
    ).subscribe((result)=>{
      if(result.status==200){
      this.router.navigate(['Login'])
      //console.log(result);
    }
  }
    );
  }

  loginUser(LoginDetails:any)
  {    
     return this.http.post
    ("http://localhost:56456/token", 
    "userName=" + encodeURIComponent(LoginDetails.username) +
    "&password=" + encodeURIComponent(LoginDetails.password) +
    "&grant_type=password", 
    {
        headers: new HttpHeaders({ "Content-Type": "application/x-www-form-urlencoded"})
      })     
    }

    getEmployee(){
      // var token:any=localStorage.getItem('Angularuser');
      // token =JSON.parse(token);
      return this.http.get("http://localhost:56456/api/user/GetDetails",
      
      //   {
      //     headers: new HttpHeaders({        
      //       Authorization: `Bearer ${token.access_token}`,
      //   })
      // }
      )
    .pipe(catchError( (error: HttpErrorResponse) => {
      return throwError(error); }
      ))
    }
    getEmployeeByID(ID:number){
      //var token:any=localStorage.getItem('Angularuser');
      //token =JSON.parse(token);
      return this.http.get("http://localhost:56456/api/user/GetUserById/"+ ID,
      
      //   {
      //     headers: new HttpHeaders({        
      //       Authorization: `Bearer ${token.access_token}`,
      //   })
      // }
      )
    .pipe(catchError( (error: HttpErrorResponse) => {
      return throwError(error); }
      ))
    }
  
  editUser(editUserData:any)
  {
    // var token:any=localStorage.getItem('Angularuser');
    // token =JSON.parse(token);
   console.log("call from Service",editUserData);
     
    return this.http.put("http://localhost:56456/api/user/EditDetail",
    {
      ID:editUserData.ID,
      FirstName:editUserData.FirstName,
      LastName:editUserData.LastName,
      GenderID:editUserData.GenderID
    }
    
  //   {
  //     headers: new HttpHeaders({        
  //       Authorization: `Bearer ${token.access_token}`,
  //   })
  // }
  )
.pipe(catchError( (error: HttpErrorResponse) => {
  return throwError(error); }
  )
    );
}

  deleteEmployeeByID(ID:number){
    // var token:any=localStorage.getItem('Angularuser');
    // token =JSON.parse(token);
    return this.http.delete("http://localhost:56456/api/user/DeleteDetail/"+ ID,
      // {
      //   headers: new HttpHeaders({        
      //   Authorization: `Bearer ${token.access_token}`,
      // }
    //  )
    //}
    )
  .pipe(catchError( (error: HttpErrorResponse) => {
    return throwError(error); }
    ))
  }
}
