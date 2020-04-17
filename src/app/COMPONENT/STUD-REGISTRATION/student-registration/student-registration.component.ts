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
      { type: 'required', message: '*Student name is required' },
      { type: 'minlength', message: '*Student name must be 3 character' }
    ],
    'DateOfBirth': [
      {
        type: 'required', message: '*Please select  birth date'
      }
    ],
    'Address': [
      { type: 'required', message: '*Address is required' },
    ],
    'nationality': [
      { type: 'required', message: '*Select Nationality' }
      ],
    'mothertoung': [
      { type: 'required', message: '*Select mothertoung language' }
      // { type: 'minlength', message: '*Name must be 3 character' }
    ],
    'Adharno': [
      { type: 'minlength', message: '*Name must be 11 character' }
    ],
    'Admissiontype': [
      { type: 'required', message: '*Please select admission type' },
    ],
    'UDISno': [
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
  classList: { name: string; }[];
  standardList: { name: string; }[];
  mothertounglanguage: { name: string; }[];
  nationality: { name: string; }[];
  constructor(public fb: FormBuilder,
    public dpconfig : BsDatepickerConfig) {
    this.dpconfig.dateInputFormat='DD-MM-YYYY';
    this.dpconfig.isAnimated=true;  
    this.maxDate = new Date();
    this.maxDate.setDate(this.maxDate.getDate() + 0);
    this.classList = [
      { name: "नवीन प्रवेश" },
      { name: "दुसऱ्या शाळेतून या शाळेत प्रवेश" }
    ];
    this.standardList = [
      { name: "पहिली" },
      { name: "दुसरी" },
      { name: "तिसरी" },
      { name: "चौथी" },
      { name: "पाचवी" },
      { name: "सहावी" },
      { name: "सातवी" },
      { name: "इतर" }
    ];
    this.nationality = [
      { name: "भारतीय" },
      { name: "इतर" }
    ];
    this.mothertounglanguage = [
      { name: "मराठी" },
      { name: "कश्मीरी" },
      { name: "बंगाली" },
      { name: "हिंदी" },
      { name: "गुजराती" },
      { name: "तेलुगु" },
      { name: "कन्नड़" },
      { name: "तमिळ" },
      { name: "मल्याळम" },
      { name: "इतर" }
    ];     
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
        Validators.required
      ])],
      mothertoung: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])],
      Adharno: ['', Validators.compose([
        Validators.minLength(11)
      ])],
      Admissiontype: ['', Validators.compose([
        Validators.required
      ])],
      UDISno: ['', Validators.compose([
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