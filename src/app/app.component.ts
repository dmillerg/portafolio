import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portafolio-daniel';

  click() {
    if(document.getElementById('da')?.classList.contains('dark')){
      document.getElementById('da')?.classList.remove('dark');
    }else{
      document.getElementById('da')?.classList.add('dark');
    }
    
  }
}


