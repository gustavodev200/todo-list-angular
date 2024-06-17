import { Component, Input } from '@angular/core';
import { TaskManagementService } from '../../services/task-management.service';
import { TaskOutputDTO } from '../../interfaces/task.interface';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css',
})
export class TaskItemComponent {
  @Input() tasks: TaskOutputDTO[] = [];

  constructor() {}
}
