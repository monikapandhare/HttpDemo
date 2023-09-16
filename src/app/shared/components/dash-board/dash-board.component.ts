import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Ipost } from '../../models/postinterface';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent implements OnInit {
  public postDetails:any=[]
  constructor(private _postsService : PostsService) { }

  ngOnInit(): void {
   this.postDetails = this._postsService.getAllPost();
    console.log(this.postDetails);
    
  }


}
