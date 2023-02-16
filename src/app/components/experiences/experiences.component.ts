import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {

  data: any;
  chartOptions: any;

  ngOnInit(): void {
    this.data = {
      labels: ['Especialista A', 'Backend', 'Analista', 'Diseñador', 'Full stack', 'Git', 'Met. ágiles'],
      datasets: [
        {
          label: 'Experiencia',
          backgroundColor: 'rgba(30, 64, 175, 0.4)',
          borderColor: 'rgba(30, 64, 175, 1)',
          pointBackgroundColor: 'rgba(30, 64, 175, 1)',
          pointBorderColor: 'rgba(30, 64, 175, 1)',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(30, 64, 175, 1)',
          data: [3, 4, 2, 1, 5, 5, 3]
        },]
    };
    this.chartOptions = this.getDarkTheme();
  }

  getDarkTheme() {
    return {
      plugins: {
        legend: {
          labels: {
            color: '#ebedef'
          }
        }
      },
      scales: {
        r: {
          pointLabels: {
            color: '#ebedef',
          },
          grid: {
            color: 'rgba(255,255,255,0.2)',
          },
          angleLines: {
            color: 'rgba(255,255,255,0.2)'
          }
        }
      }
    }
  }

}
