import { Component, ElementRef, EventEmitter, ViewChild } from "@angular/core";
import { TaskService } from "../../service/task.service";
import { Task } from "src/models/task";

@Component({
    selector: "create-task",
    templateUrl: "./create-task.component.html",
    styleUrls: ["./create-task.component.css"]
})
export class CreateTaskComponent{

    @ViewChild("taskIpt")
    taskInputText:ElementRef;

    

    constructor(private taskService:TaskService){
      
    }

    handleCreateBtnClick(){
        var task = new Task(this.taskInputText.nativeElement.value,"Not completed");
       this.taskService.createTask(task);
       
    }
}