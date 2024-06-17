import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskItemComponent } from './task-item/task-item.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PriorityStatusComponent } from './priority-status/priority-status.component';

@NgModule({
  declarations: [TaskItemComponent, PriorityStatusComponent],
  imports: [CommonModule, AngularMaterialModule],
  exports: [TaskItemComponent, PriorityStatusComponent],
})
export class ComponentsModule {}
