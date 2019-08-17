import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';     //inserted for piechart response
import { HttpErrorResponse } from '@angular/common/http'; // inserted for piechart error response
import { ProductService } from '../product.service';
import { ProductAvailability} from '../product.availability.model';
import { SingleDataSet } from 'ng2-charts';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productAvailability: ProductAvailability;

  pieChartOptions = { responsive: true }

  pieChartLabels = [ 'availableProducts', 'unusedProducts']; //add piechart labels
  
  pieChartColor = [                                       // this add color to the 5 sections of the piechart
      {                                                   // add more colors for each pie chart slice 'rgba(225, 161, 181, 0.9 )'
      backgroundColor: ['rgba(30, 169, 224, 0.8)',
    'rgba(225, 165, 0, 0.9)']
      }
  ]
  
  pieChartData: any = [ { data: [] } ];                                       // dynamically update piechart dat                                       // dynamically update piechart data
  
  constructor(private productService: ProductService) { }

  ngOnInit() {
    
    this.productService.getAvailableProducts().subscribe((res: any) => {
      console.log(res); 
      this.productAvailability = res;
      console.log(this.productAvailability.availableProducts);
      console.log(this.productAvailability.unusedProducts);
      this.pieChartData = [ { data: [this.productAvailability.availableProducts,this.productAvailability.unusedProducts] } ];
    }, (err: any) => {
      console.log(err.error.status);
    });
    
    
  }
  onChartClick(event) { console.log(event); }

}
