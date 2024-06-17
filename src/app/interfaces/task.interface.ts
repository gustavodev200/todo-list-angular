export interface TaskInputDTO {
  task: string;
  task_priority: number;
}

export interface TaskOutputDTO {
  id: string;
  task: string;
  task_priority: number;
  completed: boolean;
  created_at: Date;
  updated_at: Date;
}

export interface UpdateTaskDTO {
  id?: string;
  task?: string;
  task_priority?: number;
  completed?: boolean;
  created_at?: Date;
  updated_at?: Date;
}
