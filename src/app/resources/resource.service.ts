import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  resources: AngularFireList<any>;
  topic;

  constructor(private fdb: AngularFireDatabase) {
  }

  getResourceDetails() {
    this.resources = this.fdb.list('resourceDetails');
  }

  saveResourceDetails(fileDetails) {
    this.resources.push(fileDetails);
  }

  addNewTopic(theTopic) {
      this.fdb.list('/topics').push(theTopic);
  }

  getTopics() {
    return this.fdb.list('/topics').valueChanges();
  }

  getCategories(){
    return this.fdb.list('/categories').valueChanges();
  }

  getStudentsLevel(){
    return this.fdb.list('/levels').valueChanges()
  }


  getAllResources() {
    return this.resources = this.fdb.list('/resourceDetails')

  }
}


