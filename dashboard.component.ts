import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
    
  }
  nom : String = localStorage.getItem("nom")!;
  addPicture:boolean=false;
  addName:boolean = false;
  newName:String =""
  addN():any
  {
this.addName=!this.addName
  }
  add():any { 
    this.addPicture = !this.addPicture;
  }
  modifyName():any{
    let name = this.newName;
    localStorage.setItem("nom",name.toString());
    this.ngOnInit()
    window.location.reload()
  }
  defaultStyle:String=" color:white";
  defaultBackgroundColor:String = "backgroundColor:#4a63e7"
}
