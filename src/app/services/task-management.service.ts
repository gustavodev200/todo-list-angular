import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  TaskInputDTO,
  TaskOutputDTO,
  UpdateTaskDTO,
} from '../interfaces/task.interface';

@Injectable({
  providedIn: 'root',
})
export class TaskManagementService {
  urlTaskManagement = 'http://localhost:4000';

  constructor(private http: HttpClient) {}

  createTask(task: TaskInputDTO): Observable<TaskOutputDTO> {
    return this.http.post<TaskOutputDTO>(
      `${this.urlTaskManagement}/tasks`,
      task
    );
  }

  getTasks(): Observable<TaskOutputDTO[]> {
    return this.http.get<TaskOutputDTO[]>(`${this.urlTaskManagement}/tasks`);
  }

  getTaskById(id: string): Observable<TaskOutputDTO> {
    return this.http.get<TaskOutputDTO>(
      `${this.urlTaskManagement}/tasks/${id}`
    );
  }

  updateTask(task: UpdateTaskDTO, id: string): Observable<TaskOutputDTO> {
    return this.http.patch<TaskOutputDTO>(
      `${this.urlTaskManagement}/tasks/${id}`,
      task
    );
  }

  deleteTask(id: string): Observable<TaskOutputDTO> {
    return this.http.delete<TaskOutputDTO>(
      `${this.urlTaskManagement}/tasks/${id}`
    );
  }
}
