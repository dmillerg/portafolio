import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { ChartType } from 'chart.js';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data = {
    labels: ["años de experiencia", "aun por aprender"],
    datasets: [
      {
        data: [3, 10],
        backgroundColor: ["#312e81",
          "#818cf8",],
      },
    ],
  };
  chartOptions = {
    plugins: {
      legend: {
        labels: {
          color: "#495057",
        },
      },
    },
  };

  constructor(public storage: LocalStorageService){

  }

  ngOnInit(): void {
    if(!this.storage.retrieve('theme')){
      this.storage.store('theme','dark')
    }
    this.storage.observe('theme').subscribe(result=>{
      if(result == 'dark'){
        document.documentElement.classList.add('dark')
        
      }else {
        document.documentElement.classList.remove('dark')
      }
    });
    
  }

  theme(){
    if(this.storage.retrieve('theme') && this.storage.retrieve('theme') == 'dark'){
      this.storage.store('theme','light');
      
    }else {
      this.storage.store('theme','dark');
    }
  }

}
