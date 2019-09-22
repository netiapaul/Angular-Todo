import { TodoService } from './../../service/todo.service';
import { Todo } from './../intereface/todos';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  constructor(private todoservice:TodoService) { }

  todos:Todo[];

  ngOnInit() {

    this.todoservice.getTodos().subscribe(todos => this.todos=todos);

  }

  deleteTodos(todo:Todo){
    this.todos=this.todos.filter(t => t.id !== todo.id);
    this.todoservice.deleteTodo(todo).subscribe();
  }

  addTodo(todo:Todo){
    this.todoservice.addTodo(todo).subscribe(todo => this.todos.push(todo))
  }
}
