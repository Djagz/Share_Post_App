import { Component } from '@angular/core';
import {People} from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-works';      
  x: number = 7;
  y: number = 9;
  myStr: String = "abc";

  user = {
  firstName: "Dipesh",
  lastName: "Jagwani"
  }

  today = Date();

  myBoolean = true;
  myArray = [1,2,3,4,5,6];
  switch: boolean = true;


  onButtonClick(event){
  console.log('The click event is working', event);
  }

myUser = {
  firstName: "",
  lastName: "",
  email: ""
}

people = new People();
peopleArr = [];

submit(){
  this.peopleArr.push(this.people);
  this.people = new People();
}


  onSubmit(){
  console.log("onSubmit() is working");
  console.log(this.myUser);

  this.myUser = {
  firstName: "",
  lastName: "",
  email: ""
}

  }

  tasks = [
  {
    _id: 1,
    title: 'first task',
      completed: false,
    },
    {
      _id: 2,
      title:'second task',
      completed: false
    }
  ]

  dataFromChild(data){
    console.log("Data from the child invoked", data);
  }
}
