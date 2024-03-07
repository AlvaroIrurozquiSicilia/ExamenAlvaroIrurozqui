import { Component } from '@angular/core';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent {
  seconds:number=0;
  minutes:number=0;
  hours:number=0;
  sumar(){
    this.seconds++;
    if (this.seconds >=60){
      this.seconds = 0;
      this.minutes++;
    } 
    if(this.minutes >= 60){
      this.minutes = 0;
      this.hours++;
    }
    setTimeout(() => this.sumar(), 1000);
  }
}