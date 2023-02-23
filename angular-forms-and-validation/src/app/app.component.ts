import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {MyValidator} from "./my.validator";

interface CityMapInterface {
  ua: string;
  usa: string;
  po: string;
  [key: string]: any;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent implements OnInit{

  form!: FormGroup

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        MyValidator.restrictedEmails
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ]),
      address: new FormGroup({
        country: new FormControl('ua'),
        city: new FormControl('',
          Validators.required)
      }),
      // skill: new FormArray([])
    })
  }

  submit() {
    if(this.form.valid) {
      console.log(this.form)
      const formData = {...this.form.value}
      console.log(formData)
    }

  }

  setCapital() {
    const cityMap: CityMapInterface = {
      ua: 'Київ',
      usa: 'Washington',
      po: 'Warsaw'
    }
    const cityKey = this.form.get('address')?.get('country')?.value
    const choiceCapital = cityMap[cityKey]

    this.form.patchValue({
      address: {city: choiceCapital}
    })
  }

  addSkill() {
    const control = new FormControl('', Validators.required);
    // (<FormArray>this.form.get('skills')).push(control)
    (this.form.get('skill') as FormArray).push(control)
  }
}
