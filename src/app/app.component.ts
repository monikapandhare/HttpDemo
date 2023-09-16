import { Component, OnInit } from '@angular/core';
import { PostsService } from './shared/services/posts.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'HttpDemo';
  constructor(private _postService : PostsService){
  }
  ngOnInit(): void {
    this._postService.getAllPost()
      .subscribe(
        (res) => {
          console.log(res);
        },
        (err) => {
          console.log(err);
          
        }
        )
        this._postService.getSinglePost(4)
        .subscribe(res => {
          console.log(res);
          
        })
  }
}
