import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.scss']
})
export class TwoWayBindingComponent implements OnInit {

  title = 'text'

  onInput(event: any) {
    this.title = event.target.value
  }

  ngOnInit(): void {
  }
}
