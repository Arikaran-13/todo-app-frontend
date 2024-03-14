import { Component } from "@angular/core";
import { TaskService } from "../service/task.service";

@Component({
    selector: "show-task",
    templateUrl: "./show-task.component.html",
    styleUrls: ["./show-task.component.css"]
})
export class ShowTaskComponent{
     
    public tasks:string[] =[];

    checkBoxVal:boolean=false;

    constructor(private taskService:TaskService){

    }

    ngOnInit(){
        this.tasks = this.taskService.getAllTask();
    }

    handleCheckBoxOnClick(){
        this.checkBoxVal=!this.checkBoxVal;
    }
}