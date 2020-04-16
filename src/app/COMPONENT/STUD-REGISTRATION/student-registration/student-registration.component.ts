import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, Validators, FormBuilder } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.css']
})
export class StudentRegistrationComponent implements OnInit {
  arr: FormArray
  formGroup: FormGroup
  submitted = false
  maxDate: Date;
  validation_messages = {
    'fathername': [
      { type: 'required', message: '*Father name is required' },
      { type: 'minlength', message: '*Name must be 3 character' }
    ],
    'mothername': [
      { type: 'required', message: '*Mother name is required' },
      { type: 'minlength', message: '*Name must be 3 character' }
    ],
    'studentname': [
      { type: 'required', message: '*Mother name is required' },
      { type: 'minlength', message: '*Name must be 3 character' }
    ],
    'DateOfBirth': [
      {
        type: 'required', message: '*Please select date'
      }
    ],
    'Address': [
      { type: 'required', message: '*Address is required' },
    ],
    'nationality': [
      { type: 'required', message: '*Father name is required' },
      { type: 'minlength', message: '*Name must be 3 character' }
    ],
    'mothertoung': [
      { type: 'required', message: '*Mother name is required' },
      { type: 'minlength', message: '*Name must be 3 character' }
    ],
    'Adharno': [
      { type: 'required', message: '*Mother name is required' },
      { type: 'minlength', message: '*Name must be 11 character' }
    ],
    'Admissiontype': [
      { type: 'required', message: '*Please select admission type' },
    ],
    'UDISno': [
      { type: 'required', message: '*UDIS number is required' },
      { type: 'minlength', message: '*Name must be 3 character' }
    ],
    'standard': [
      { type: 'required', message: '*Please select standard type' },
    ],
    'Mobilenumber': [
      { type: 'required', message: '*Mobile Number is Required' },
      { type: 'maxlength', message: '*Mobile number maximum length should be only 10 number' },
      { type: 'pattern', message: '*Enter valid mobile number' },
      { type: 'minlength', message: '*Mobile number minumum lenght 10 number' }
    ]
  }
  constructor(public fb: FormBuilder,
    public dpconfig : BsDatepickerConfig) {
    this.dpconfig.dateInputFormat='DD-MM-YYYY';
    this.dpconfig.isAnimated=true;  
    this.maxDate = new Date();
    this.maxDate.setDate(this.maxDate.getDate() + 0);
     }
  ngOnInit(): void {
    this.formGroup = this.fb.group({
      fathername: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])],
      mothername: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])],
      studentname: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])],
      DateOfBirth: ['', Validators.compose([
        Validators.required
      ])],
      Address: ['', Validators.compose([
        Validators.required
      ])],
      nationality: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])],
      mothertoung: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])],
      Adharno: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])],
      Admissiontype: ['', Validators.compose([
        Validators.required
      ])],
      UDISno: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])],
      standard: ['', Validators.compose([
        Validators.required
      ])],
      Mobilenumber: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(10),
        Validators.pattern('^[0-9]{10}$'),
        Validators.minLength(10)
      ])],
    })
  }
  get f() {
    return this.formGroup.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (this.formGroup.invalid) {
      return;
    }
  }
}