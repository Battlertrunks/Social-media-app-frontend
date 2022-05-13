import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import Post from '../models/post';
import { HomeRouteComponent } from '../home-route/home-route.component';

@Injectable()
export class PostService {
  baseUrl: string = 'http://localhost:8080/posts';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  async createPost(post: Post) {
    console.log(post);
    return await this.http.post(this.baseUrl, post).subscribe((response) => {
      return response;
    });
  }
}
