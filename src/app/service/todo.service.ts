import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Todo } from '../components/intereface/todos';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todosUrl='https://jsonplaceholder.typicode.com/todos';
  limit='?_limit=10'
  httpOptions={
    headers:new HttpHeaders({
      'content-Type':'application/json'
    })
  }

  constructor(private http:HttpClient) { }
  // get todos
  getTodos():Observable<Todo[]>{
    return this.http.get<Todo[]>(`${this.todosUrl}${this.limit}`)
  }

  // toggle
  toggleCompleted(todo:Todo):Observable<any>{
    const url=`${this.todosUrl}/${todo.id}`;
    return this.http.put(url,todo,this.httpOptions)
  }

  // delete
  //NB delete does not pass the todo object
  deleteTodo(todo:Todo):Observable<Todo>{
    const url=`${this.todosUrl}/${todo.id}`;
    return this.http.delete<Todo>(url,this.httpOptions)
  }

  // add todo

  addTodo(todo:Todo):Observable<Todo>{
    return this.http.post<Todo>(this.todosUrl,todo,this.httpOptions)
  }
}
