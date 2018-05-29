import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Chart } from 'chart.js';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('lineCanvas') lineCanvas;
  lineChart: any;

  constructor(public navCtrl: NavController) {
  }

  private chartOnClick(event, item) {
    var point = this.lineChart.getElementAtEvent(event)[0];
    if (point) {
      console.log('index', point._index);
      console.log('item', point._datasetIndex);
    }
  }

  private getData() {
    var data = {
      labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July' ],
      datasets: [
        {
          label: 'Democrat Supporters',
          fill: false,
          backgroundColor: 'blue',
          borderColor: 'blue',
          data: [-65, 59, 80, 81, 56, 55, 40]
        },
        {
          label: 'Republican Supporters',
          fill: false,
          backgroundColor: 'red',
          borderColor: 'red',
          data: [46, 39, 50, 31, 76, 35, 60]
        }          
      ]
    };
    return data;
  }

  getOptions() 
  {
    var options : Chart.ChartOptions = 
    {
      legend: {
        display: false
      },
      'onClick' : (event, item) => this.chartOnClick(event, item)
    }
    return options;
  }

  ionViewDidLoad() 
  {
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: 'line',
      data: this.getData(),
      options: this.getOptions() 
    })
  }
}
