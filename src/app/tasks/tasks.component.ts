import { Component, input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  userId = input.required<string>();
  name = input.required<string>();
  isAddingTask = false;

  constructor(private tasksService: TasksService) {
    this.tasksService = tasksService;
  }

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId());
  }

  onCompleteTask(id: string) {}

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }

  onAddTask(taskData: NewTaskData) {
    this.isAddingTask = false;
  }
}
