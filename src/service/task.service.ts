import { EventEmitter, Injectable } from "@angular/core";
import { TaskApiService } from "./task-api.service";
import { Task } from "src/models/task";
import { Observable } from "rxjs";

@Injectable()
export class TaskService{
    
    tasks:Task[]=[];

    public taskCreatedEvent = new EventEmitter<string>();

    constructor(private taskApiService:TaskApiService){

    }

    public createTask(task:Task){
      console.log(`Task ${task.taskName}`)
      this.taskApiService.createTask(task).subscribe(
        (data:Task)=>{
           console.log("Task created : ",data);
        },
        (error)=>{
          console.log("unknown err occured",error);
        },
        ()=>{
           console.log("completed");
           this.emitTaskCreatedEvent(task);
        }
      )
    }

    public emitTaskCreatedEvent(task:Task):void{
      this.taskCreatedEvent.emit(`Task created: ${task.taskName}`);
    }



    public getTodoTasks():Observable<Task[]>{
         return this.taskApiService.getAllTask();
    }


    
}