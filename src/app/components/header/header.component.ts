import { Component, inject } from '@angular/core';
import { ButtonComponent } from "../button/button.component";
import { TasksComponent } from "../tasks/tasks.component";
import {UIService} from "../../services/ui.service";
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { CommonModule} from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent, TasksComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
      title = 'Task Tracker';
      showAddTask!:boolean;
      subscription!:Subscription;
      private uiservice=inject(UIService);
      constructor(private router:Router){
        this.subscription=this.uiservice.
                               onToggle().
                               subscribe(value=> this.showAddTask=value);
      }
    
      
      toggleAddTask(){ 
          this.uiservice.toggleAddTask();
      }

      hasRoute(route:String){
          return this.router.url===route;
      }
}
