import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsLoaderServiceService {

  constructor(private _http:HttpClient) { }

  getPosts(){
    return this._http.get('https://jsonplaceholder.typicode.com/posts');
  }
}
