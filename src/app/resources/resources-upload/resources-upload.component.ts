import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AngularFireStorage} from '@angular/fire/storage';
import {finalize} from 'rxjs/operators';
import {ResourceService} from '../resource.service';



@Component({
  selector: 'el-file-upload',
  templateUrl: './resources-upload.component.html',
  styleUrls: ['./resources-upload.component.scss']
})
export class ResourcesUploadComponent implements OnInit {
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
    private resourceService:ResourceService, ) {
    this.topics$ = resourceService.getTopics();
    this.categories$ = resourceService.getCategories();
    this.studentsLevel$ = resourceService.getStudentsLevel();
  }

  ngOnInit(){
    this.resourceService.getResourceDetails();
    this.resetForm();
  }

  // preview document before saving to firebase
  previewFile(event:any){
    if(event.target.files && event.target.files[0]){
      const reader = new FileReader();
      reader.onload = (e:any) => this.imSrc = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage = event.target.files[0];
      this.fileName = this.selectedImage.name;
    }
    else
      this.imSrc = this.defaultImage;
     this.selectedImage = null;
  }

  // save the document and related information to firebase
  onSubmit(formValue) {
    this.isSubmitted = true;
    if(this.formTemplate.valid){
      const filePath = `${formValue.category}/${this.fileName.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.selectedImage)
        .snapshotChanges().pipe(finalize(() =>{
          fileRef.getDownloadURL().subscribe((url) =>{
            formValue['fileUrl'] = url;
            this.resourceService.saveResourceDetails(formValue);
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

  addNewTopic(theTopic: string) {
   this.resourceService.addNewTopic(theTopic);
   this.newTopic.reset();
   this.newTopic.setValue({
     name : ''
   })
  }
}
