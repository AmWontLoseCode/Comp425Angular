import { Component, OnInit } from '@angular/core';

import { ProductService } from '../product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

<<<<<<< Updated upstream
  constructor() { }

  ngOnInit() {
=======
  // passing a key value pair object to the new FormGroup constructors. 
  // passing an instance of formcontrol
  addcomponentReactiveForm: FormGroup;
  hintColor;

  constructor(private fb: FormBuilder, private productService: ProductService) { this.hintColor = '#FF0000'; }

  ngOnInit() {
    this.addcomponentReactiveForm = this.fb.group({
      productEnglish: '',
      productFrench: ''
    });
    this.addcomponentReactiveForm.valueChanges.subscribe(console.log);

    // Import Validators to cover validation use cases. Synchronysly validate
    this.addcomponentReactiveForm = this.fb.group({
      productId: ['', [
        //Validators.required,
        Validators.maxLength(30),
      ]],
      productDescription: ['', [
        //Validators.required,
        Validators.maxLength(30)
      ]],
    });
  }
  // Getters and setters for the various field on my form.
  get productEnglish() {
    return this.addcomponentReactiveForm.get('productEnglish');
>>>>>>> Stashed changes
  }

  search(){
    let productId = this.addcomponentReactiveForm.value.productId;
    let productDesc = this.addcomponentReactiveForm.value.productDescription;
    console.log(productId);
    console.log(productDesc);
    if (productId === '' && productDesc === ''){
      this.productService.getProducts().subscribe((res: any) => {
        console.log(res);
      }, (err: any) => {
        console.log(err.error.status);
      });
    }else if (productId !== '' && productDesc === ''){
      this.productService.getProduct(productId).subscribe((res: any) => {
        console.log(res);
      }, (err: any) => {
        console.log(err.error.status);
      });
    }else if (productId === '' && productDesc !== ''){
      this.productService.getProductsByDesc(productDesc).subscribe((res: any) => {
        console.log(res);
      }, (err: any) => {
        console.log(err.error.status);
      });
    }else if (productId !== '' && productDesc !== ''){
      this.productService.getProductsByIdDesc(productId, productDesc).subscribe((res: any) => {
        console.log(res);
      }, (err: any) => {
        console.log(err.error.status);
      });
    }
  }

}
