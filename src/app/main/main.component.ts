import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShareService } from '../share/share.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  user:any=0;
  msg:string='';
  constructor(private router: Router,private shared:ShareService) { }

  ngOnInit(): void {
    this.user=this.shared.getid();
    console.log(this.user.type);
  }
  view(){
    
    this.router.navigateByUrl("/view");
  }
  add(){
    if(this.user.type==="super" || this.user.type==="admin")
    {
      this.router.navigateByUrl("/create");
    }
    else{
      this.msg="Access Denied";
    }
    
  }
  update(){
    if(this.user.type==="super" )
    {
      this.router.navigateByUrl("/update");
    }
    else{
      this.msg="Access Denied : Super Admin Purpose only";
    }
  }
  logout()
  {
    alert("Logged Out successfully")
    this.router.navigateByUrl("/login");
  }
}
