import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../task';

 
@Injectable({
  providedIn: 'root'
})

export class TaskService {
  private apiBaseUrl = 'http://localhost:5000/tasks';

  constructor(private http: HttpClient) {}


  deleteTask(taskId: number): Observable<void> {

    const url = `${this.apiBaseUrl}/${taskId}`;

    return this.http.delete<void>(url);

  }

  getTasks(): Observable<Task[]> {

    return this.http.get<Task[]>(this.apiBaseUrl);

  }

} 