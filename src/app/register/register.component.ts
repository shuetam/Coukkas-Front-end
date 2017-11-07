import { Component, OnInit } from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http'; 
import { NgModel } from '@angular/forms';
import { UserRegister } from './models/UserRegister';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

model: UserRegister;

  constructor(private _registerService: RegisterService) 
  { 
    this.model = new UserRegister();
  }


  register() 
  {
 
   this._registerService.register(this.model).subscribe(()=> window.location.reload());
  }

  ngOnInit() 
  {

  }

}
