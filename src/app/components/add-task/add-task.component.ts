import { UIService } from './../../services/ui.service';
import { Component,Output,EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../Task';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
     text: string = '';
     day: string = '';
     reminder: boolean = false;
     showAddTask: boolean = false;
     subscription: Subscription;

     @Output() onAddTask:EventEmitter<Task>=new EventEmitter;
   


      constructor(private uiService:UIService) {

         this.subscription=this.uiService.onToggle().subscribe((value) => (this.showAddTask = value));
      }

      onSubmit(){
        if(!this.text)
        {
          alert("please add task");
          return;
        }
         if(!this.day)
        {
          alert("please add day");
          return;
        }
         if(!this.reminder)
        {
          alert("please add reminder");
          return;
        }

        const newtask={
          text:this.text,
          day:this.day,
          reminder:this.reminder

        }

        this.onAddTask.emit(newtask);

        this.text='';
        this.day='';
        this.reminder=false;
      }
}
