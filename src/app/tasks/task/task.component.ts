import { Component, EventEmitter, input, Output } from '@angular/core';
import { Task } from './task.model';
import { CardComponent } from "../../shared/card/card.component";

@Component({
  selector: 'app-task',
  imports: [CardComponent],
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
