import { Component, Input, Output, EventEmitter } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Task } from '../../Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent {
  @Input() taskItem!: Task;
  @Output() btnClick = new EventEmitter();
  faTimes = faTimes;

  onClick() {
    this.btnClick.emit();
  }
}
