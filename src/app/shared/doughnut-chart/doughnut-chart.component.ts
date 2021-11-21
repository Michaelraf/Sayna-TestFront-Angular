import { Component, Input, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.scss']
})
export class DoughnutChartComponent implements OnInit {


  constructor() {

  }

  @Input() filled: number = 0;
  @Input() empty: number = 0;


  ngOnInit(): void {
    let ctx:any = document.getElementById("chart");
    let chart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        datasets: [
          {
            label: "Credit Limit",
            backgroundColor: ["#303779", "#f0f0f0"],
            data: [this.filled,this.empty]
          }
        ]
      },
      options: {
        title: {
          display: false,
          text: ''
        }
      }
    });
  }
  
}