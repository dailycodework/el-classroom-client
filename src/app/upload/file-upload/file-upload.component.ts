import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'el-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {
 isSubmitted:boolean = false;
 imSrc : string = null;
 selectedImage : any = null;

formTemplate = new FormGroup({
  file : new FormControl('', Validators.required),
  topic : new FormControl('', Validators.required),
  studentsLevel : new FormControl('', Validators.required),
  category : new FormControl('',Validators.required),
  description : new FormControl('',Validators.required)
});

  constructor() { }

  ngOnInit(): void {
  }

  previewFile(event:any){
    if(event.target.files && event.target.files[0]){
      const reader = new FileReader();
      reader.onload = (e:any) => this.imSrc = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage = event.target.files[0];
    }
    else
      this.imSrc ='/assets/images/placeholder.jpg';
     this.selectedImage = null;
  }
  onSubmit(formValues) {
    this.isSubmitted = true;
  }
  get formControls(){
    return this.formTemplate['controls'];
  }
}
