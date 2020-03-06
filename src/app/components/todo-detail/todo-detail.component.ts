import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {
  public todoId: string;
  public todoDetail = <Todo>{};
  public mode: string;
  private activatedRoute: ActivatedRoute;
  private router: Router;
  private todoService: TodoService

  constructor( inactivatedRoute: ActivatedRoute,  inrouter: Router, intodoService: TodoService ) { 
     
    this.activatedRoute = inactivatedRoute;
    this.router = inrouter;
    this.todoService = intodoService;

  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params:Params)=>{
      this.todoId = params['id'];
      if(this.todoId !== undefined){
        console.log(this.todoId);
        this.getTodoDetailsById(this.todoId);
        this.mode = 'Edit';
      }else{
        console.log(this.todoId);
        this.todoDetail['id']= 0;
        this.mode='Add';
      }
    });
  }
  getTodoDetailsById(id){
    this.todoDetail = this.todoService.getTodoById(parseInt(id));
    console.log(this.todoDetail);

  }

  onTodoSubmitForm(form){
    console.log(form);
    if(form.valid){
      console.log(this.todoDetail)
      this.todoService.updateTodoById(this.todoDetail);
      this.router.navigate(['/todo-list']);
    }

  }
  onClickCancel(){
    this.router.navigate(['/todo-list']);
  }

}
