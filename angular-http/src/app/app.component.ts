import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {delay} from "rxjs";
import {Todo, TodoServiceService} from "./services/todo-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  todos: Todo[] = []
  todoTitle = ''
  loading = false
  error = ''

  constructor(private todoService: TodoServiceService) {
  }

  ngOnInit(): void {
    this.fetchTodos()
  }

  addTodo() {
    if (!this.todoTitle.trim()) {
      return
    }

    this.todoService.addTodo({
      title: this.todoTitle,
      completed: false
    }).subscribe(todo => {
      this.todos.push(todo)
      this.todoTitle = ''
    })
  }

  fetchTodos() {
    this.loading = true
    this.todoService.fetchTodos()
      .pipe(delay(500))
      .subscribe(todos => {
        this.todos = todos
        this.loading = false
      }, error => {
        this.error = error.message
      })
  }

  removeTodo(id: number) {
    this.todoService.removeTodo(id)
      .subscribe(() => {
        this.todos = this.todos.filter(t => t.id !== id)
      })
  }

  completedTodo(id: number) {
    this.todoService.completedTodo(id)
      .subscribe(todo => {
         this.todos.find(t => t.id === todo.id)!.completed = true
      })
  }
}
