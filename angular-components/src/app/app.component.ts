import {Component, OnInit} from '@angular/core';

export interface Post {
  title: string
  text: string
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
    posts: Post[] = [
      {title: 'first', text: 'text', id: 1},
      {title: 'second', text: 'text', id: 2},
      {title: 'third', text: 'text', id: 3}
    ]

  public ngOnInit(): void {
      setTimeout(() => {
        this.posts[0].title = 'changed'
      }, 4000)
  }

  updatePost(post: Post) {
    this.posts.push(post)
  }

  removePost(id: number) {
    this.posts = this.posts.filter(p => p.id !== id)
    console.log(this.posts)
  }
}
