import { Component, EventEmitter, input, Output } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  task = input.required<Task>();
  @Output() complete = new EventEmitter<string>();

  onCompleteTask() {
    this.complete.emit(this.task().id);
  }
}
