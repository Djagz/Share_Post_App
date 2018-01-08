import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';  //import FormsModule
import {HttpModule} from '@angular/http';    //import HttpModule  


import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';


@NgModule({
  declarations: [
    AppComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,  //Include FormsModule in our AppModules
    HttpModule    //Include HttpModule in our AppModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
