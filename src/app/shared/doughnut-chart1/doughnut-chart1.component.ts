import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-doughnut-chart1',
  templateUrl: './doughnut-chart1.component.html',
  styleUrls: ['./doughnut-chart1.component.scss']
})
export class DoughnutChart1Component implements OnInit {

  constructor() { }

  @Input() filled: number = 0;
  @Input() empty: number = 0;


  ngOnInit(): void {
    let ctx:any = document.getElementById("chart1");
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

