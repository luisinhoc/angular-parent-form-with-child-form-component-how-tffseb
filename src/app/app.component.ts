import { Component, VERSION } from '@angular/core';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  form = this.fb.group({
    name:''
  })
  constructor(private fb:FormBuilder){
    this.form.get('name').valueChanges.subscribe(value=>{
      if(value){
        this.form.get('name').setValue(value,{emitEvent:false});
      }
    })
  }

  onSubmit(){
    console.log('submitted');
  }
}
