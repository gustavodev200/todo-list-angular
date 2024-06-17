import { Component, Input } from '@angular/core';
import { TaskOutputDTO } from '../../interfaces/task.interface';

@Component({
  selector: 'app-priority-status',
  templateUrl: './priority-status.component.html',
  styleUrl: './priority-status.component.css',
})
export class PriorityStatusComponent {
  @Input() priority!: TaskOutputDTO['task_priority'];
}
