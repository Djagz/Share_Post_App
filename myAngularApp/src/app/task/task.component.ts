import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

	@Input() myTasks; 
	@Input() taskArray;
	@Output() myEvent = new EventEmitter();

  constructor() { }

  callParent(){
  	this.myEvent.emit(7);
  }

  ngOnInit() {
  }

}
