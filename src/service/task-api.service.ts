import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { API_ENDPOINTS } from "src/constants/api-endpoints";
import { Task } from "src/models/task";
@Injectable()
export class TaskApiService{
   
    constructor(private http: HttpClient){

    }

    public createTask(task:Task):Observable<Task>{
      console.log(`Task from api service ${task.taskName}`)
      return this.http.post<Task>("http://localhost:8081/todo/create",task);
    }

    public getAllTask():Observable<Task[]>{
      
        return this.http.get<Task[]>("http://localhost:8081/todo/all");
    }
}