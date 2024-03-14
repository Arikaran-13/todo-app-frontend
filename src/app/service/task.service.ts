import { Injectable } from "@angular/core";

@Injectable()
export class TaskService{
    
    tasks:string[]=[];

    public createTask(task:string){
      this.tasks.push(task);
    }

    public getAllTask():string[]{
        return this.tasks;
    }
    
}