import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PostService {
  baseUrl: string = 'http://localhost:8080/posts';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
}
