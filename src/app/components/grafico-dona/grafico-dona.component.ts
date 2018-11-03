import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styleUrls: []
})
export class GraficoDonaComponent implements OnInit {

@Input('ChartLabels') public doughnutChartLabels: string[] = [];
@Input('ChartData') public doughnutChartData: number[] = [];
@Input('ChartType') public doughnutChartType: string = '';


  constructor() { }

  ngOnInit() {
  }

}
