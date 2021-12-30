import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  result: any;
  graphNumber: any;
  graphDate: any;
  chart: any = []
  search: string ="";
  ini: string = "";
  fin: string = "";
  usu: string = "";
  comp: string = "";
  inter: string = "";


  constructor(private service: AuthService) {
    Chart.register(...registerables);
  }


  ngOnInit() {
    let asd = JSON.stringify({inicio:"2017-2-23", fin: "2017-3-24", usuarios: "-1", compania: "2", intervalo: 60});
    this.service.graphData(asd).then((res) => {
      this.result = res;
      this.graphDate = Object.keys(this.result);
      this.graphNumber = Object.values(this.result);
      //console.log(this.graphDate);

      //Grafico

      this.chart = new Chart('canvas', {
        type: 'line',
        data: {
          labels: this.graphDate,
          datasets: [
            {
              label: 'Sesiones Activas',
              data: this.graphNumber,
              borderWidth:3,
              fill: false,
              backgroundColor: 'rgba(93,175,89,0.1)',
              borderColor: '#3e95cd'
            },
          ],
        },
      });
    });
  }

  modChart(ini: string, fin: string, usu: string, comp: string, inter: string) {
    let asd = JSON.stringify({inicio:ini, fin: fin, usuarios: usu, compania: comp, intervalo: parseInt(inter)});
    this.chart.destroy();
    this.service.graphData(asd).then((res) => {
      this.result = res;
      this.graphDate = Object.keys(this.result);
      this.graphNumber = Object.values(this.result);
      //console.log(this.graphDate);

      //Grafico

      this.chart = new Chart('canvas', {
        type: 'line',
        data: {
          labels: this.graphDate,
          datasets: [
            {
              label: 'Sesiones Activas',
              data: this.graphNumber,
              borderWidth:3,
              fill: false,
              backgroundColor: 'rgba(93,175,89,0.1)',
              borderColor: '#3e95cd'
            },
          ],
        },
      });
    });
  }
}
