import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, FormBuilder, FormArray, Validators } from '@angular/forms';
import { formGroupNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import { formControlBinding } from '@angular/forms/src/directives/ng_model';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

export class AddComponent implements OnInit {
  // passing a key value pair object to the new FormGroup constructors. 
  // passing an instance of formcontrol
  addcomponentReactiveForm: FormGroup;
  hintColor;

  products = [
    { value: 'pasta', viewValue: 'Pasta' },
    { value: 'fruit', viewValue: 'Fruit' },
    { value: 'detergent', viewValue: 'Detergent' }
  ];

  statuses = [
    { value: 'instore', viewValue: 'In Store' },
    { value: 'online', viewValue: 'Online' }
  ];

  markets = [
    { value: 'child', viewValue: 'Child market' },
    { value: 'adult', viewValue: 'Adult market' }
  ];

  // add formBuilder service to the constructor of this component
  constructor(private fb: FormBuilder) { this.hintColor = '#FF0000'; }
  // create a data model for this form during ngOninitialization
  // schema for the data and validation rules.
  ngOnInit() {
    this.addcomponentReactiveForm = this.fb.group({
      productEnglish: '',
      productFrench: '',
      brandNameEnglish: '',
      brandNameFrench: '',
      productType: '',
      productIdentification: '',
      targetMarket: '',
      productImageUrl: '',
      status: ''
    });
    this.addcomponentReactiveForm.valueChanges.subscribe(console.log);

    // validate user input into the form.[Validators] Angular Material
    // Import Validators to cover validation use cases. Synchronysly validate
    this.addcomponentReactiveForm = this.fb.group({
      productEnglish: ['', [
        Validators.required,
        Validators.maxLength(30),
      ]],
      productFrench: ['', [
        Validators.required,
        Validators.maxLength(30)
      ]],
      brandNameEnglish: ['', [
        Validators.required,
        Validators.maxLength(30)
      ]],
      brandNameFrench: ['', [
        Validators.required,
        Validators.maxLength(30)
      ]],
      productType: ['', [
        Validators.required,
        Validators.maxLength(30)
      ]],
      productIdentification: ['', [
        Validators.required,
        Validators.maxLength(30)
      ]],
      targetMarket: ['', [
        Validators.required,
        Validators.maxLength(30)
      ]],
      productImageUrl: ['', [
        Validators.required,
        Validators.maxLength(30)
      ]],
      status: ['', [
        Validators.required,
        Validators.maxLength(30)
      ]]
    });
  }
  // Getters and setters for the various field on my form.
  get productEnglish() {
    return this.addcomponentReactiveForm.get('productEnglish');
  }

  // tslint:disable-next-line: align

}


