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
      return this.http.post<Task>(API_ENDPOINTS.createTask,task);
    }

    public getAllTask():Observable<Task[]>{
        return this.http.get<Task[]>(API_ENDPOINTS.getAllTask);
    }
}