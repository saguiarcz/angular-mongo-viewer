import { Component, OnInit } from '@angular/core';
import {MongoService} from "../mongo.service";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/forkJoin';

@Component({
  selector: 'app-collection-viewer',
  templateUrl: './collection-viewer.component.html',
  styleUrls: ['./collection-viewer.component.css']
})
export class CollectionViewerComponent implements OnInit {

  selectedCollection: string;

  public expression: string = '';

  error: string;

  page = 1;

  collectionSize: number;

  collectionsDataArray: ModelClass[];

  constructor(private mongoService: MongoService) { }

  ngOnInit() {
  }

  public setDifferentCollection(collectionname: string) {
    console.log('Set different collection ' + collectionname);
    this.selectedCollection = collectionname;
    this.collectionsDataArray = [];
    this.mongoService.getSelectedCollection(collectionname, this.expression).subscribe(data => {
      this.collectionSize = data.count;
      data.response.map(elem => {
        this.collectionsDataArray.push(new ModelClass(JSON.stringify(elem)));
      });
      this.error = null;
    }, err => {
      const message = 'Error while reading collections';
      console.log(message);
      this.error = message;
    })
  }

  public deleteSelected() {
    const tasks = [];
    this.collectionsDataArray.forEach(coll => {
      if (coll.checked) {
        tasks.push(this.mongoService.deleteSelected(this.selectedCollection, JSON.parse(coll.content)['_id']));
      }
    });
    Observable.forkJoin(...tasks).subscribe(resp => {
      console.log('finished');
      this.setDifferentExpression();
    })
  }

  public deselectAll() {
    this.collectionsDataArray.forEach(coll => {
      coll['checked'] = false;
    })
  }

  public selectAll() {
    this.collectionsDataArray.forEach(coll => {
      coll['checked'] = true;
    })

  }

  public setDifferentExpression() {
    console.log('Set different collection ' + this.selectedCollection + ', expression: ' + this.expression);
    //this.selectedCollection = collectionname;
    this.collectionsDataArray = [];
    this.mongoService.getSelectedCollection(this.selectedCollection, this.expression).subscribe(data => {
      this.collectionSize = data.count;
      data.response.map(elem => {
        this.collectionsDataArray.push(new ModelClass(JSON.stringify(elem)));
      });
      this.error = null;
    }, err => {
      const message = 'Error while reading collections';
      console.log(message);
      this.error = message;
    })
  }

  public pageChange(event) {
    console.log('pagechange ' + event + ', page ' + this.page);
    this.collectionsDataArray = [];
    this.mongoService.getSelectedCollection(this.selectedCollection, this.expression, (event-1) * 7, 7).subscribe(data => {
      this.collectionSize = data.count;
      data.response.map(elem => {
        this.collectionsDataArray.push(new ModelClass(JSON.stringify(elem)));
      });
      this.error = null;
    }, err => {
      const message = 'Error while reading collections';
      console.log(message);
      this.error = message;
    })
  }
}

class ModelClass {


  constructor(content: string) {
    this.content = content;
  }

  content: string;
  checked: boolean = false;
}
