import { Component, OnInit } from '@angular/core';
import { PostModel } from '../shared/post-model';
import { PostService } from '../shared/post.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-view-post-by-subreddit',
  templateUrl: './view-post-by-subreddit.component.html',
  styleUrls: ['./view-post-by-subreddit.component.css']
})
export class ViewPostBySubredditComponent implements OnInit {
  posts: Array<PostModel> = [];
  subredditId:number;

  constructor(private postService: PostService,private activateRoute: ActivatedRoute, private router: Router) {
    this.subredditId = this.activateRoute.snapshot.params.id;
    this.postService.getPostsbySubreddit(this.subredditId).subscribe(post => {
      this.posts = post;
    });
  }

  ngOnInit(): void {
  }

}
