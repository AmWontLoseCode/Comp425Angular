import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';     //inserted for piechart response
import { HttpErrorResponse } from '@angular/common/http'; // inserted for piechart error response



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  pieChartOptions = { responsive: true }

  pieChartLabels = [ 'ex1', 'ex2', 'ex3', 'ex4', 'ex5']; //add piechart labels
  
  pieChartColor = [                                       // this add color to the 5 sections of the piechart
      {                                                   // add more colors for each pie chart slice 'rgba(225, 161, 181, 0.9 )'
      backgroundColor: ['rgba(30, 169, 224, 0.8)',
    'rgba(225, 165, 0, 0.9)', 'rgba(139, 136, 136, 0.9 )',
    'rgba(225, 161, 181, 0.9 )', 'rgba( 225, 102, 0, 0.9)']
      }
  ]
  
  
  
  pieChartData: any = [ { data: [] } ];                    // dynamically update piechart data
  


  constructor(private httpService: HttpClient) { }

  ngOnInit() {
    this.httpService.get('./assets/data.json', {responseType: 'json'}).subscribe(
      data => { this.pieChartData = data as any []; },       //allow piechart to be populated with data from array
      (err: HttpErrorResponse) => { console.log (err.message);}
    );
  }
  onChartClick(event) { console.log(event); }

}
