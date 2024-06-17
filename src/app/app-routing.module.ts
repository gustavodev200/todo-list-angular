import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskManagementComponent } from './pages/task-management/task-management.component';
import { UpdateTaskManagementComponent } from './pages/update-task-management/update-task-management.component';

const routes: Routes = [
  {
    path: '',
    component: TaskManagementComponent,
  },
  { path: 'edit/:id', component: UpdateTaskManagementComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
