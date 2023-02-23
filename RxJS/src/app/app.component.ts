import { Component } from '@angular/core';
import {interval, Subject, Subscription} from 'rxjs'
import { filter, map } from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  sub: Subscription
  sub2!: Subscription
  stream$: Subject<number> = new Subject<number>()
  counter = 0

  constructor() {

    const intervalStream$ = interval(1000)

    this.sub = intervalStream$
      .pipe(
       filter(value => value % 2 === 0),
       map((value) => `Mapped value ${value}`)
      )
      .subscribe((value) => {
      console.log(value)
    })

    this.sub2 = intervalStream$
      .pipe(
        map((value) => `Mapped value ${value}`)
      )
      .subscribe((value) => {
        console.log(value)
      })

    // this.sub = this.stream$.subscribe( value => {
    //   console.log('Subscribe', value)
    // })

  }

  stop() {
    this.sub.unsubscribe()
  }

  next() {
    this.counter++
    this.stream$.next(this.counter)
  }

  stopTwo() {
    this.sub2.unsubscribe()
  }
}
