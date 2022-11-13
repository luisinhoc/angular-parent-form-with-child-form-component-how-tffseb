import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'hello',
  template: `
  <label [formGroup]="parentForm">
  
  <input type="text" [formControlName]="'name'">
  </label>
  `,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() parentForm: FormGroup;

  constructor(private fg: FormGroupDirective){
    this.fg.ngSubmit.subscribe(()=>{
      console.log('listen submit in child');
    })
  }

}
