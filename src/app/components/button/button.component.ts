import { Component,input,Input,Output,EventEmitter } from '@angular/core';
import {  NgStyle } from "@angular/common";

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  //  text=input<string>();  //then should access be like {{ text() }}
  //  color=input<string>();
  @Input() text?:string;
  @Input() color?:string;
  @Output() btnClick=new EventEmitter();

  onClick()
  {
    this.btnClick.emit();
  }

}
