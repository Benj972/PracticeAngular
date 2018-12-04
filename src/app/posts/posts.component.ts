import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;
  @Input() postCreatedAt: number;

  constructor() { }

  ngOnInit() {
  }

  onLoveIt(){
    this.postLoveIts = this.postLoveIts + 1;
  }

  onDontLoveIt(){
    this.postLoveIts = this.postLoveIts - 1;
  }
}
