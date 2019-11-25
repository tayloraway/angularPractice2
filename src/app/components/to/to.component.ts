import { Component, OnInit } from '@angular/core';
import {ToService} from '../../services/to.service'

import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-to',
  templateUrl: './to.component.html',
  styleUrls: ['./to.component.css']
})
export class ToComponent implements OnInit {

  todos:Todo[];  

  constructor(private toService:ToService) { }

  ngOnInit() {
    this.toService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  deleteTodo(todo:Todo) {
    // Remove From UI
    this.todos = this.todos.filter(t => t.id !== todo.id);
    // Remove From server
    this.toService.deleteTodo(todo).subscribe();
  }

  addTodo(todo:Todo) {
    this.toService.addTodo(todo).subscribe(todo => {
      this.todos.push(todo);
    });
  }

}
