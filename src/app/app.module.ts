import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskManagementComponent } from './pages/task-management/task-management.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { provideHttpClient } from '@angular/common/http';
import { ComponentsModule } from './components/components.module';
import { UpdateTaskManagementComponent } from './pages/update-task-management/update-task-management.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskManagementComponent,
    UpdateTaskManagementComponent,
  ],
  providers: [provideAnimationsAsync(), provideHttpClient()],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    ComponentsModule,
  ],
})
export class AppModule {}
