import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { ShowTaskComponent } from './show-task/show-task.component';
import { TaskService } from '../service/task.service';
import { FormsModule } from '@angular/forms';
import { TaskApiService } from '../service/task-api.service';
import { HttpClientModule } from '@angular/common/http';
import { TaskStatusComponent } from './task-status/task-status.component';
import { CheckboxComponent } from './show-task/checkbox/checkbox.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateTaskComponent,
    ShowTaskComponent,
    TaskStatusComponent,
    CheckboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [TaskService,TaskApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
