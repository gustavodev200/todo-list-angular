import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTaskManagementComponent } from './update-task-management.component';

describe('UpdateTaskManagementComponent', () => {
  let component: UpdateTaskManagementComponent;
  let fixture: ComponentFixture<UpdateTaskManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateTaskManagementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateTaskManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
