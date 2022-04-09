import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { ApiService } from '../api.service';
import { Exchange } from '../models/exchange';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css'],
})
export class BarChartComponent implements OnInit {
  name = 'Angular';
  data = {} as Exchange;

  constructor(private apiService: ApiService) {}
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
  };
  public barChartLabels: string[] = [];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData: any[] = [];
  chart: Chart | undefined;

  ngOnInit(): void {
    this.chart = new Chart('bar', {
      type: 'bar',
      options: {
        responsive: true,
      },
      data: {
        labels: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
        datasets: [
          {
            type: 'bar',
            label: 'Euro Rate',
            data: [243, 156, 365, 30, 156, 265, 356, 543],
          },
        ],
      },
    });

    this.apiService.getMessage().subscribe((x) => {
      this.data = x.data;
      this.updateChartData(this.chart, this.data, 0);
    });
  }
  updateChartData(chart: any, data: any, dataSetIndex: any) {
    this.chart!.data.datasets[dataSetIndex].data = Object.values(this.data);

    this.chart!.data.labels = Object.keys(this.data);
    this.chart!.update();
  }
}
