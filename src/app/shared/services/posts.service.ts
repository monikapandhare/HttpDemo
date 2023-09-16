import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ipost } from '../models/postinterface';



@Injectable({
  providedIn: 'root'
})
export class PostsService {
  postUrl:string=`${environment.baseUrl}/posts`
  constructor(private _http:HttpClient) { }

  getAllPost(): Observable <Array<Ipost>>{
    return this._http.get<Array<Ipost>>(this.postUrl)
  }
  getSinglePost(id:number) :Observable<Ipost> {
    let singlePost = `${this.postUrl}/${id}`;
    return this._http.get<Ipost>(singlePost)
  }
}
