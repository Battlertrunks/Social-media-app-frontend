import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HomeRouteComponent } from '../home-route/home-route.component';
import Post from '../models/post';
import { PostService } from '../services/posts.service';

@Component({
  selector: 'app-post-form-route',
  templateUrl: './post-form-route.component.html',
  styleUrls: ['./post-form-route.component.scss'],
})
export class PostFormRouteComponent implements OnInit {
  post: Post = {
    title: '',
    body: '',
    likes: 0,
  };

  @Output() gettingPostsEvent = new EventEmitter();

  constructor(
    private postService: PostService,
    private homeRoute: HomeRouteComponent
  ) {}

  ngOnInit(): void {}

  async submitHandler() {
    await this.postService.createPost(this.post);
    setTimeout(() => this.gettingPostsEvent.emit(), 1000);
  }
}
