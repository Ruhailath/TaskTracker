import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from "./components/footer/footer.component";
import { TasksComponent } from './components/tasks/tasks.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FontAwesomeModule, FooterComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

    constructor(private router: Router) {}
    
    get inAboutPage(): boolean {
    return this.router.url === '/about'; // adjust path as needed
  }
}
