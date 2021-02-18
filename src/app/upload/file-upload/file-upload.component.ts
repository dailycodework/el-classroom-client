import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AngularFireStorage} from '@angular/fire/storage';
import {finalize} from 'rxjs/operators';


@Component({
  selector: 'el-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {
 isSubmitted:boolean;
 defaultImage = '/assets/images/elc.pdf';
 imSrc : string = this.defaultImage;
 selectedImage : any;

formTemplate = new FormGroup({
  selectedFile : new FormControl('', Validators.required),
  topic : new FormControl('', Validators.required),
  studentsLevel : new FormControl('', Validators.required),
  category : new FormControl('',Validators.required),
  description : new FormControl('',Validators.required)
});

  constructor(private storage : AngularFireStorage) { }

  ngOnInit(){
    this.resetForm();
  }
  previewFile(event:any){
    if(event.target.files && event.target.files[0]){
      const reader = new FileReader();
      reader.onload = (e:any) => this.imSrc = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage = event.target.files[0];
      console.log(this.selectedImage.name)
    }
    else
      this.imSrc = this.defaultImage;
     this.selectedImage = null;
  }

  onSubmit(formValues) {
    this.isSubmitted = true;
    if(this.formTemplate.valid){

      console.log(formValues.selectedFile)
      console.log(formValues.name)
      let filePath = `${formValues.category}/${this.selectedImage.name}_${new Date().getTime()}`;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.selectedImage)
        .snapshotChanges().pipe(finalize(() =>{
          fileRef.getDownloadURL().subscribe((url) =>{
            formValues['selectedFile'] = url;
            this.resetForm();
          })
      })).subscribe();
    }
  }
  get formControls(){
    return this.formTemplate['controls'];
  }

  resetForm(){
    this.formTemplate.reset();
    this.formTemplate.setValue({
      selectedFile :'',
      topic : '',
      studentsLevel :'',
      category : '',
      description : ''
    })
    this.imSrc = this.defaultImage;
    this.selectedImage = null;
    this.isSubmitted = false;
  }
}
