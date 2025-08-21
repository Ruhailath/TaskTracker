import { CommonModule } from '@angular/common';
import { Component,Input } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
     @Input() inAboutPage: boolean = false;
}
