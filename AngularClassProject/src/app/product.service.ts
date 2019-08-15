import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment'

//appRoot = environment.appRoot;




@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiURL: string = environment.baseUrl;

  constructor(private httpClient: HttpClient) { }

  public getadd(): any {
    //return this.HttpClientModule.get (`${this.apiURL}`)
    
    }

    public getProducts (){
      return this.httpClient.get(this.apiURL + 'products');
    }

    public getProduct (productId: number){
      return this.httpClient.get(this.apiURL + 'product/' + productId);
    }

    public getProductsByDesc (productDesc: string){
      return this.httpClient.get(this.apiURL + 'product/productDescriptionEnglish/' + productDesc);
    }
  
    public getProductsByIdDesc (productId: number, productDesc: string){
      return this.httpClient.get(this.apiURL + 'product/' + productId + '/productIdAndProductDescriptionEnglish/' + productDesc);
    }


}
