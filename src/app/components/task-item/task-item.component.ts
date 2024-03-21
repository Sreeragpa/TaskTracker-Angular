import { Component, OnInit, Input, Output , EventEmitter} from '@angular/core';
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  @Input() task: Task = {} as Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter()
  faTimes = faTimes;

  onDelete(task: Task){
    console.log(task);
    
    this.onDeleteTask.emit(task)
    // console.log("Deleting",task);
    
  }
}
