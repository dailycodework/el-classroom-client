import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AngularFireStorage} from '@angular/fire/storage';
import {finalize} from 'rxjs/operators';
import {FileService} from '../../services/file.service';
import {FormService} from '../../services/form.service';


@Component({
  selector: 'el-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {
 isSubmitted:boolean;
 defaultImage = '/assets/images/elclass.pdf';
 imSrc : string = this.defaultImage;
 selectedImage : any;
 fileName:string = null;
 topics$;
 categories$;
 studentsLevel$

formTemplate = new FormGroup({
  fileUrl : new FormControl('', Validators.required),
  topic : new FormControl('', Validators.required),
  studentsLevel : new FormControl('', Validators.required),
  category : new FormControl('',Validators.required),
  description : new FormControl('',Validators.required)
});


 newTopic = new FormGroup({
   name : new FormControl('', Validators.required)
 })



  constructor(
    private storage : AngularFireStorage,
    private service:FileService,
    private formService : FormService) {
    this.topics$ = formService.getTopics();
    this.categories$ = formService.getCategories();
    this.studentsLevel$ = formService.getStudentsLevel();
  }

  ngOnInit(){
    this.service.getFileDetails();
    this.service.getNewTopic();
    this.resetForm();
  }
  previewFile(event:any){
    if(event.target.files && event.target.files[0]){
      const reader = new FileReader();
      reader.onload = (e:any) => this.imSrc = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage = event.target.files[0];
     // console.log(this.selectedImage.name)
      this.fileName = this.selectedImage.name;
     // console.log(this.fileName);
    }
    else
      this.imSrc = this.defaultImage;
     this.selectedImage = null;
  }

  onSubmit(formValue) {
    this.isSubmitted = true;
    if(this.formTemplate.valid){
      var filePath = `${formValue.category}/${this.fileName.split('.').slice(0,-1).join('.')}_${new Date().getTime()}`;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.selectedImage)
        .snapshotChanges().pipe(finalize(() =>{
          fileRef.getDownloadURL().subscribe((url) =>{
            formValue['fileUrl'] = url;
            this.service.saveFileDetails(formValue);
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
      fileUrl :'',
      topic : '',
      studentsLevel :'',
      category : '',
      description : ''
    })
    this.imSrc = this.defaultImage;
    this.selectedImage = null;
    this.isSubmitted = false;
  }


  addNewTopic(theTopic: any) {
   this.service.addTopic(theTopic);
   this.newTopic.reset();
   this.newTopic.setValue({
     name : ''
   })
  }
}
