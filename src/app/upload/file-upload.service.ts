import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
 resourceDetailList : AngularFireList<any>
  constructor(private fdb : AngularFireDatabase) { }

  getResourceDetailList(){
   this.resourceDetailList = this.fdb.list('resourceDetails')
  }

  saveResourceDetails(resourceDetails){
   this.resourceDetailList.push(resourceDetails);
  }

  getWorksheets(){
   this.resourceDetailList.snapshotChanges().subscribe( list =>{
     list.map(item => {return item.payload.val();
     })
   })

  }
}


