import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  getadmin(): any {
    throw new Error('Method not implemented.');
  }

  admin= {"username":"Supriya","password":"Supriya@123"}
  login(uname:string,password:string)
  {
      if(uname===this.admin.username && password===this.admin.password)
      {
        return true;
      }
      else
      return false;
  }

  constructor() { }
}
