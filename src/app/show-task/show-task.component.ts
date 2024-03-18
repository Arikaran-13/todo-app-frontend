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
        this.loadTask();
    }
    
    ngDoCheck(){
        this.taskService.taskCreatedEvent.subscribe(()=>{
            console.log("task created");
            this.loadTask();
        })
        
    }
    public loadTask():void{
        this.taskService.getTodoTasks().subscribe(
            (data:Task[])=>{
              this.tasks = data;
            },
            (err)=>{console.log(err)},
            ()=>{}
        )
    }
    

    handleCheckBoxOnClick(){
        this.checkBoxVal=!this.checkBoxVal;
    }
}