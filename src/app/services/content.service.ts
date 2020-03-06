import { Injectable } from '@angular/core';
import {comicBookList} from '../contentDB';
//import { Content } from '@angular/compiler/src/render3/r3_ast';
import {Content} from '../content-card/content-helper';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor() { }

  getContent() : Content [] {
    return comicBookList;
  }
  getContentObs() : Observable<Content[]>{
    return of(comicBookList);
  }

}
