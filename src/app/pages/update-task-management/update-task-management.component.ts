import { Component } from '@angular/core';
import { TaskManagementService } from '../../services/task-management.service';
import { TaskInputDTO, UpdateTaskDTO } from '../../interfaces/task.interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-task-management',
  templateUrl: './update-task-management.component.html',
  styleUrl: './update-task-management.component.css',
})
export class UpdateTaskManagementComponent {
  form!: FormGroup;
  taskId!: string;
  constructor(
    private taskManagementService: TaskManagementService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.taskId = this.route.snapshot.paramMap.get('id')!;

    this.form = new FormGroup({
      task: new FormControl('', Validators.required),
      task_priority: new FormControl(null, Validators.required),
    });

    this.getTaskById(this.taskId);
  }

  updateTask(task: UpdateTaskDTO, id: string) {
    task.task_priority = Number(task.task_priority);
    this.taskManagementService.updateTask(task, id).subscribe((resp) => {
      this.router.navigate(['/']);
    });
  }

  getTaskById(id: string) {
    this.taskManagementService.getTaskById(id).subscribe((task) => {
      this.form.patchValue({
        task: task.task,
        task_priority: task.task_priority,
      });
    });
  }
}
