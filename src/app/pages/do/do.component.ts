import { Component, OnInit } from '@angular/core';
import { ApiService } from '@services/api.service';

@Component({
  selector: 'af-do',
  templateUrl: './do.component.html',
  styleUrls: ['./do.component.scss']
})
export class DoComponent implements OnInit {
  todos: string[] = [];

  constructor(private api: ApiService) { }

  async ngOnInit() {
    this.todos = await this.api.getUsers();
  }

  saveTodo(todo: string) {
    this.todos.push(todo);
  }

}
