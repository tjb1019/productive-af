import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'af-do',
  templateUrl: './do.component.html',
  styleUrls: ['./do.component.scss']
})
export class DoComponent implements OnInit {
  todos: string[] = [];

  constructor() { }

  ngOnInit() {
    this.todos = [
      'go to work',
      'learn something new',
      'workout',
      'walk the dogs',
      'massage molly',
    ];
  }

  saveTodo(todo: string) {
    this.todos.push(todo);
  }

}
