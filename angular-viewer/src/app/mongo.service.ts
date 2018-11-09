import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {CollectionResponse, OneCollectionResponse} from "./collectionResponse";
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";

@Injectable()
export class MongoService {

  constructor(private httpClient: HttpClient) { }

  public getCollections(): Observable<CollectionResponse> {
    return this.httpClient.get<CollectionResponse>(environment.baseURL + '/mongoData');
  }

  public getSelectedCollection(collectionName: string, expression: string, skip: number = 0, limit: number = 7): Observable<OneCollectionResponse> {
    return this.httpClient.get<OneCollectionResponse>(environment.baseURL + '/mongoData?collection=' + collectionName + '&inputName=' + encodeURIComponent(expression) + '&skip=' + skip + '&limit=' + limit);
  }

  public deleteSelected(collectionName: string, expression: string): Observable<Object> {
    return this.httpClient.get<Object>(environment.baseURL + '/mongoRemove?collection=' + collectionName + '&inputName=' + encodeURIComponent(expression));
  }

}
