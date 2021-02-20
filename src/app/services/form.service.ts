import {Injectable} from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private db: AngularFireDatabase) {
  }


  getTopics() {
    return this.db.list('/topics');
  }

  getCategories(){
    return this.db.list('/categories')
  }

  getStudentsLevel(){
    return this.db.list('/levels')
  }

  addTopic(theTopic: string) {

  }
}
