import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {HttpClient} from '@angular/common/http';
import {ShareService} from "../share/share.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  users:any=[];
  constructor(private router: Router,private http : HttpClient,private shared:ShareService) { }
  email:any;
  pwd:any;
  id:number=0;
  ngOnInit(): void {
    this.http.get('http://localhost:3000/Users').subscribe(users=> {
      this.users=users;
    })
  }
  login(){
    for(let i=0;i<this.users.length;i++)
    {
      if(this.users[i].email==this.email && this.users[i].pwd==this.pwd)
      {
        this.id=i;
        this.shared.setid(this.users[this.id]);
        this.router.navigateByUrl("/home");
      }
    }
  }
}
