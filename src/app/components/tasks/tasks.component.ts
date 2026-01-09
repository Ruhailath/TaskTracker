import { Component,inject,OnInit } from '@angular/core';
import { Task } from '../../Task';
// import { TASKS } from '../../mock.task';
import { CommonModule, NgFor} from '@angular/common';
import { TasksItemComponent } from "../tasks-item/tasks-item.component";
import {TaskService} from "../../services/task.service";
import { Observable } from 'rxjs';
import { AddTaskComponent } from "../add-task/add-task.component";
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, TasksItemComponent, AddTaskComponent,RouterModule],               
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit {
      //  tasks: Task[]=TASKS; without using service
      tasks: Task[]= [];
      private service = inject(TaskService);

        // constructor(private service: HeroService) {} //another method of service injection
    
  
      ngOnInit(): void{
     this.service.getTasks().subscribe((tasks)=>this.tasks=tasks);
       
       }

      deleteTask(task:Task) {
               this.service.deleteTask(task).subscribe(()=>(this.tasks=this.tasks.filter(t=>t.id !== task.id)));
      }
      toggleReminder(task:Task){
           task.reminder=!task.reminder;
          this.service.updateTaskReminder(task).subscribe();
      }
      addTask(task:Task){
          this.service.addTask(task).subscribe((task)=>this.tasks.push(task));
      }

}
