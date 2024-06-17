import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TaskManagementService } from '../../services/task-management.service';
import { TaskOutputDTO } from '../../interfaces/task.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-management',
  templateUrl: './task-management.component.html',
  styleUrl: './task-management.component.css',
})
export class TaskManagementComponent implements OnInit {
  form!: FormGroup;
  tasks: TaskOutputDTO[] = [];

  constructor(
    private taskManagementService: TaskManagementService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      task: new FormControl('', Validators.required),
      task_priority: new FormControl(null, Validators.required),
    });

    this.getTasks();
  }

  createTask() {
    if (this.form.valid) {
      this.taskManagementService
        .createTask(this.form.value)
        .subscribe((resp) => {
          this.getTasks();
          this.form.reset();
        });
    }
  }

  getTasks() {
    this.taskManagementService.getTasks().subscribe((resp) => {
      this.tasks = resp;
    });
  }

  getTaskById(id: string) {
    this.taskManagementService.getTaskById(id).subscribe((resp) => {
      console.log(resp);
    });
  }

  updateTaskCompleted(task: TaskOutputDTO) {
    this.taskManagementService
      .updateTask({ completed: !task.completed }, task.id)
      .subscribe((resp) => {
        this.getTasks();
      });
  }

  deleteTask(task: TaskOutputDTO) {
    this.taskManagementService.deleteTask(task.id).subscribe((resp) => {
      this.getTasks();
    });
  }
  navigateToEdit(taskId: string) {
    this.router.navigate(['/edit', taskId]);
  }
}
