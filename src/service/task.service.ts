import { Injectable } from "@angular/core";
import { TaskApiService } from "./task-api.service";
import { Task } from "src/models/task";

@Injectable()
export class TaskService{
    
    tasks:Task[]=[];

    constructor(private taskApiService:TaskApiService){

    }

    public createTask(task:Task){
      this.taskApiService.createTask(task).subscribe(
        (data:Task)=>{
           console.log("Task created : ",data);
        },
        (error)=>{
          console.log("unknown err occured",error);
        },
        ()=>{
           console.log("completed");
        }
      )
    }

    public getAllTask():void{
         this.taskApiService.getAllTask().subscribe(
          (data:Task[])=>{
            this.tasks = data;
            console.log(data)
          },
          (err)=>{
            console.log("error occured",err);
          },
          ()=>{
            console.log("completed");
          }
        );
    }

    public getTodoTasks():Task[]{
      return this.tasks;
    }
    
}