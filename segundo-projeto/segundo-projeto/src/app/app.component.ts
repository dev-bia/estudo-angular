import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'segundo-projeto';

  cont:number = 0

  contarPositivo():number{
    return this.cont++
  }
  
  contarNegativo():number{
    return this.cont--
  }
}


