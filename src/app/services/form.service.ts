import {Injectable} from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {query} from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  newTopic;
  constructor(private db: AngularFireDatabase) {
  }


  getTopics() {
    return this.db.list('/topics').valueChanges();
  }

  getCategories(){
    return this.db.list('/categories').valueChanges();
  }

  getStudentsLevel(){
    return this.db.list('/levels').valueChanges()
  }

}
