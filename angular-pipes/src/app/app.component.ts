import {Component} from '@angular/core';
import {Observable} from "rxjs";

export interface Post {
  title: string,
  text: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public e: number = Math.E
  public str = 'hello world'
  public date: Date = new Date()
  public float = 0.42
  public obj = {
    a:1,
    b: {
      c:'art',
      d: {
        e: 3,
      }
    }
  }

  public search = '';
  public searchField = 'title'
  public posts: Post []= [
    {title: 'Beer', text: 'not like'},
    {title: 'Bread', text: ' i like'},
    {title: 'Apple', text: 'not so much like'}
  ]

  addPost() {
    this.posts.unshift({
      title: 'angular 14',
      text: 'core'
    })
  }

  p: Promise<string> = new Promise<string>(resolve => {
    setTimeout(() => {
      resolve('Promise Resolved')
    }, 4000)
  })

  date$: Observable<Date> = new Observable<Date>(obs => {
    setInterval(() => {
      obs.next(new Date())
    },1000)
  })
}
