import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss']
})
export class NgForComponent implements OnInit {

  arr = [1, 1, 2, 3, 5, 8, 13]

  objs = [
    {title: 'Post 1', author: 'Alex', comments: [
        {name: 'Betal', text: 'lorem 2'},
        {name: 'Bob', text: 'lorem 5'},
        {name: 'Capa', text: 'lorem 3'}
      ]},
    {title: 'Post 2', author: 'Ted', comments: [
        {name: 'Karl', text: 'lorem 6'},
        {name: 'Van', text: 'lorem 5'},
        {name: 'Jazz', text: 'lorem 1'}
      ]}
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
