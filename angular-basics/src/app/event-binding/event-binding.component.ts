import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent implements OnInit {

  inputValue = ''

  public onInput(event: Event) {
    // const customEvent = event as unknown as CustomEvent<KeyboardEvent>;
    console.log('Event', event)
    this.inputValue = (<HTMLInputElement>event.target).value
  }
  onBlur(str: string) {
    this.inputValue = str
  }
  onClick() {
    console.log('click')
  }

  constructor() { }

  ngOnInit(): void {
  }

}
