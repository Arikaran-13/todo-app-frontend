import { Component, ElementRef, ViewChild } from "@angular/core";
import { TaskService } from "../service/task.service";

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
     this.taskService.createTask(this.taskInputText.nativeElement.value);
    }
}