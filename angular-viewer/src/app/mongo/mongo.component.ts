import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MongoService } from '../mongo.service';

@Component({
  selector: 'app-mongo',
  templateUrl: './mongo.component.html',
  styleUrls: ['./mongo.component.css']
})
export class MongoComponent implements OnInit {

  @Output()
  private collectionChanged = new EventEmitter();

  public collections: string[];
  public selectedCollection: string;
  public error: string;

  constructor(private mongoService: MongoService) { }

  ngOnInit() {
    this.mongoService.getCollections().subscribe(data => {
      this.collections = data.collections;
      this.error = null;
    }, err => {
      const message = 'Error while reading collections';
      console.log(message);
      this.error = message;
    });
  }

  public selectCollection(selectedCollection) {
    this.selectedCollection = selectedCollection;
    this.collectionChanged.emit(selectedCollection);
  }

}
