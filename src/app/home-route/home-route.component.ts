import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import Post from '../models/post';
import { PostService } from '../services/posts.service';

@Component({
  selector: 'app-home-route',
  templateUrl: './home-route.component.html',
  styleUrls: ['./home-route.component.scss'],
})
export class HomeRouteComponent implements OnInit {
  posts: Post[] = [];

  constructor(public postService: PostService) {}

  ngOnInit(): void {
    this.gettingPosts();
  }

  async gettingPosts() {
    await this.postService.getPosts().subscribe(
      (response) => {
        this.posts = response;
        console.log(this.posts);
      },
      (error) => {
        console.log('Request failed with error: ' + error);
      }
    );
    console.log(this.posts);
  }
}
