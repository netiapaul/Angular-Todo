import { TodoService } from './../../service/todo.service';
import { Todo } from './../intereface/todos';
import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  constructor(private todoservice:TodoService) { }

  @Input() todo:Todo
  @Output() deletTodo:EventEmitter<any>=new EventEmitter()
  
  ngOnInit() {
  }


  setClasses(){
    let classes={
      todo:true,
      'is-complete':this.todo.completed
    }
    return classes
  }

  onChange(todo){
    // toggle in UI
    todo.completed=!todo.completed
    // Toggle in Server
    this.todoservice.toggleCompleted(todo).subscribe(todos => console.log(todos))
  }

  onDelete(todo){
    this.deletTodo.emit(todo)
  }

}
