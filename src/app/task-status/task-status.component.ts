import { Component } from "@angular/core";
import { filter } from "rxjs";
import { Task } from "src/models/task";
import { TaskService } from "src/service/task.service";

@Component({
    selector: "task-status",
    templateUrl: "./task-status.component.html",
    styleUrls: ["./task-status.component.css"]
})
export class TaskStatusComponent{
    
    constructor(private taskService: TaskService){

    }
    completedTodo:number;
    notCompltedTodo:number;

    ngDoCheck(){
        this.updateTodoTaskStatus();
    }

    public updateTodoTaskStatus(){
            this.taskService.getTodoTasks()
            .subscribe((data:Task[])=>{
               this.notCompltedTodo= data.filter((task)=>task.status=== "Not completed").length
            })
    }
}