import { Component, OnInit } from '@angular/core';
import {Todo} from '../../models/todo';
import { Router } from '@angular/router';
import { TodoService } from '../../services/todo.service';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  public todos: Todo[] = [];
  constructor(private router: Router, private todoService: TodoService) { }

  ngOnInit(): void {

    this.loadAllTodoList();   
  }
  loadAllTodoList() {
    this.todos = this.todoService.getAllTodos();
  }
  onClickEditTodoDetail(id) {
    console.log(id);
    this.router.navigate(['/todo-detail'], {queryParams:{id:id}})
  }
  onClickAddTodo(){
    this.router.navigate(['/todo-detail']);
  }
  onClickTodoDelete(id){
    this.todoService.deleteTodoDetail(id);
    this.loadAllTodoList();
  }

}
