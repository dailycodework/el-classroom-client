import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class FileService {
 fileDetailList : AngularFireList<any>
  newTopic;

  constructor(private fdb : AngularFireDatabase) { }

  getFileDetails(){
   this.fileDetailList = this.fdb.list('resourceDetails')
  }

  saveFileDetails(fileDetails){
   this.fileDetailList.push(fileDetails);
  }

  getNewTopic(){
    this.newTopic = this.fdb.list('topics')
  }

  addTopic(theTopic) {
      this.newTopic.push(theTopic);
    }
}


