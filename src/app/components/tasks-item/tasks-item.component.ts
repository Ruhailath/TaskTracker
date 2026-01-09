import { Component,Input ,Output,EventEmitter} from '@angular/core';
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-tasks-item',
  standalone: true,
  imports: [FontAwesomeModule, NgStyle,NgClass],
  templateUrl: './tasks-item.component.html',
  styleUrl: './tasks-item.component.css'
})
export class TasksItemComponent {
  faTimes=faTimes;
  @Input() task !:Task;
  @Output() onDeleteTask: EventEmitter<Task>=new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task>=new EventEmitter();

  onDelete(task: Task) {
   this.onDeleteTask.emit(task);
  //  return task; 
}
onToggle(task: Task){
   this.onToggleReminder.emit(task);
}
}
