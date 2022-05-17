import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Task } from 'src/app/Task';
import { TASKS } from 'src/app/mock-tasks';

// Le enviamos un JSON a nuestro servidor
const httpOptions = {
  headers: new HttpHeaders ({
    'Content-Type':'application/json'
})
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiURI = 'http://localhost:5000/tasks';
  constructor(
    private http:HttpClient
  ) { }

  getTask(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiURI);
  }

  deleteTask(task: Task): Observable<Task> {
    const url = `${this.apiURI}/${task.id}`;
    return this.http.delete<Task>(url);
  }

  updateTaskReminder(task: Task): Observable<Task> {
    const url = `${this.apiURI}/${task.id}`;
    // Con la variable httpOptions le estamos diciendo al backend que le enviamos un JSON
    return this.http.put<Task>(url, task, httpOptions);
  }
}
