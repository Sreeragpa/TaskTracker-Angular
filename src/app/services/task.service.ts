import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import {Task} from '../Task';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = "http://localhost:5000/tasks" 

  constructor(private http:HttpClient) { 

  }

  getTasks(): Observable<Task[]>{
    return this.http.get<Task[]>(this.apiUrl)
  }

  deleteTask(task: Task): Observable<Task>{
    console.log(task.id);
    
    const url = `${this.apiUrl}/${task.id}`;
    console.log(url);
    
    return this.http.delete<Task>(url)
  }
}