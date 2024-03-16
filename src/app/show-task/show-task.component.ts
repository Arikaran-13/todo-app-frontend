import { Component } from "@angular/core";
import { TaskService } from "../../service/task.service";
import { Task } from "src/models/task";

@Component({
    selector: "show-task",
    templateUrl: "./show-task.component.html",
    styleUrls: ["./show-task.component.css"]
})
export class ShowTaskComponent{
     
    public tasks:Task[] =[];

    checkBoxVal:boolean=false;

    constructor(private taskService:TaskService){

    }

    ngOnInit(){
        this.tasks = this.taskService.getTodoTasks();
    }

    handleCheckBoxOnClick(){
        this.checkBoxVal=!this.checkBoxVal;
    }
}